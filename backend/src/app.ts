import "dotenv/config" //place this line very first
import express, { NextFunction, Request, Response } from "express";
import notesRoutes from "./routes/notes";

const app = express();

app.use('/api/notes', notesRoutes)

app.use((req, res, next) => {
    next(Error("Endpoint not found!"))
})

// this is an Express err handler, it takes theese 4 args or it will not be recognised as Express err handler.
// we have to pass types on the args, because TS can't infer them like with res and req objects, because here it could be anything.
// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((error: unknown, req: Request, res: Response, next: NextFunction) => {
    console.error(error)
    let errorMessage = "Uknown error occured!"
    if (error instanceof Error) errorMessage = error.message;
    res.status(500).json({ error: errorMessage })
})

export default app