import NoteModel from "../models/note"

import { RequestHandler } from "express";

export const getNotes: RequestHandler = async (req, res, next) => {
    try {
        // .exec() is used just because we don't get a promise returned, because we used async await
        const notes = await NoteModel.find().exec();
        res.status(200).json(notes);
    } catch (error) {
        next(error)
    }
}
