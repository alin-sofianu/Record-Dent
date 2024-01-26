import "dotenv/config" //place this line very first
import express, { NextFunction, Request, Response } from "express";
import notesRoutes from "./routes/notes";
import morgan from "morgan"
import createHttpError, { isHttpError } from "http-errors";

const app = express();
// this sets up the express server to accept json
app.use(express.json())
// this middleware prints a concise log of all endpoints I access
app.use(morgan("dev"))

app.use('/api/notes', notesRoutes)

app.use((req, res, next) => {
    next(createHttpError(404, "Endpoint not found!"))
})

// this is an Express err handler, it takes theese 4 args or it will not be recognised as Express err handler.
// we have to pass types on the args, because TS can't infer them like with res and req objects, because here it could be anything.
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