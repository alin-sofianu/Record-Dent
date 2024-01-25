import "dotenv/config" //place this line very first
import express from "express";
// this is a default export so it can be named anything here
import NoteModel from "./models/note"

const app = express();

app.get('/', async (req, res) => {
    // .exec() is used just because we don't get a promise returned, because we used async await
    const notes = await NoteModel.find().exec();
    res.status(200).json(notes);
})

export default app