import NoteModel from "../models/note"

import { RequestHandler } from "express";

export const getNotes: RequestHandler = async (req, res, next) => {
    try {
        // .exec() is used just because we don't get a promise returned, so we turn it into a real promise
        // on post request it does not ahve to be added, youtuber dunno why
        const notes = await NoteModel.find().exec();
        res.status(200).json(notes);
    } catch (error) {
        next(error)
    }
}

export const getSingleNote: RequestHandler = async (req, res, next) => {
    const noteId = req.params.noteId
    try {
        const singleNote = await NoteModel.findById(noteId).exec();
        res.status(200).json(singleNote)
    } catch (error) {
        next(error)
    }
}

export const postNotes: RequestHandler = async (req, res, next) => {
    const title = req.body.title
    const text = req.body.title

    try {
        const newNote = await NoteModel.create({
            title: title,
            text: text
        })
        res.status(201).json(newNote);
    } catch (error) {
        // every time, this line just calls the Express Error Handler(middleware) from app.ts
        next(error)
    }
}
