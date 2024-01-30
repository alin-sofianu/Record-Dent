import "dotenv/config" //place this line very first
import express, { NextFunction, Request, Response } from "express";
// can I rename on the fly, in import, a default export? here the export is router in the ./routes/notes
import notesRoutes from "./routes/notes";
import usersRoutes from "./routes/users";
import morgan from "morgan"
import createHttpError, { isHttpError } from "http-errors";
import session from "express-session"
import env from "./util/validateEnv"
import MongoStore from "connect-mongo";
import { requiresAuth } from "./middleware/auth";
import cors from "cors"
// import corsOptions from "./config/corsOptions.js"
// // eslint-disable-next-line @typescript-eslint/no-var-requires
// import corsOptions from './config/corsOptions';


const app = express();

// Enable CORS. for all routes
// const corsOptions = {
//     origin: 'https://record-dent.onrender.com/',
//     optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
// };
const corsOptions = {
    origin: 'https://record-dent.onrender.com/',
    methods: ["POST", "GET", "PATCH", "DELETE"],
    optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

// this sets up the express server to accept json
app.use(express.json())
// this middleware prints a concise log of all endpoints I access
app.use(morgan("dev"))

// place is important
app.use(session({
    secret: env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 60 * 60 * 1000 },
    // rolling: true, means that for as long as the suer is using the website, cookie will be refresh automatically.
    rolling: true,
    // in store is where the session data will be stored; if you pass nothing here it will be stored in memory
    // so it will work until you restart the server
    store: MongoStore.create({
        mongoUrl: env.MONGO_CONNECTION_STRING
    }),
}))


app.use('/api/users', usersRoutes)
app.use('/api/notes', requiresAuth, notesRoutes)

app.use((req, res, next) => {
    next(createHttpError(404, "Endpoint not found!!!!"))
})

// this is an Express err handler, it takes theese 4 args or it will not be recognised as Express err handler.
// we have to pass types on the args, because TS can't infer them like with res and req objects, because here it could be anything.
// this is like catch all for errors, if controller does not go into it's own errors, it comes here for the 500 error.
// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((error: unknown, req: Request, res: Response, next: NextFunction) => {
    console.error(error)
    let errorMessage = "Uknown error occured!";
    let statusCode = 500;
    if (isHttpError(error)) {
        statusCode = error.status
        errorMessage = error.message
    }
    res.status(statusCode).json({ error: errorMessage })
})

export default app