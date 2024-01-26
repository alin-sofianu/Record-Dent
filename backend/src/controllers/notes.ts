import createHttpError from "http-errors";
import NoteModel from "../models/note"

import { RequestHandler } from "express";
import mongoose from "mongoose";

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
        if (!mongoose.isValidObjectId(noteId)) { throw createHttpError(400, "Note _id param is invalid(shape not correct)") }

        const singleNote = await NoteModel.findById(noteId).exec();
        // this error is for when the _id param in the browser url, is the correct shape for an id
        if (!singleNote) { throw createHttpError(404, "Note not found!(but _id param was of correct shape)") }

        res.status(200).json(singleNote)
    } catch (error) {
        next(error)
    }
}

interface CreateNoteBody {
    title?: string,
    text?: string
}

export const createNote: RequestHandler<unknown, unknown, CreateNoteBody, unknown> = async (req, res, next) => {
    const title = req.body.title
    const text = req.body.text

    try {
        // a throw leaves the block and goes str8 to the catch block
        if (!title) { throw createHttpError(400, "Note must have a title") }

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

interface updateNoteParams {
    noteId: string
}

interface updateNoteBody {
    title?: string
    text?: string
}

export const updateNote: RequestHandler<updateNoteParams, unknown, updateNoteBody, unknown> = async (req, res, next) => {
    const noteId = req.params.noteId
    const newTitle = req.body.title
    const newText = req.body.text
    try {
        if (!mongoose.isValidObjectId(noteId)) { throw createHttpError(400, "Note _id param is invalid(shape not correct)") }
        if (!newTitle) { throw createHttpError(400, "Note must have a title") }

        const note = await NoteModel.findById(noteId).exec()
        if (!note) { throw createHttpError(404, "Note not found!(but _id param was of correct shape)") }

        // update the note
        note.title = newTitle;
        note.text = newText;
        const updatedNote = await note.save()

        res.status(200).json(updatedNote)
    } catch (error) {
        next(error)
    }
}
