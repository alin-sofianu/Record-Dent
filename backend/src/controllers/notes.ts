import createHttpError from "http-errors";
import NoteModel from "../models/note"

import { RequestHandler } from "express";
import mongoose from "mongoose";
import { assertIsDefined } from "../util/assertIsdefined";

export const getNotes: RequestHandler = async (req, res, next) => {
    const authenticatedUserId = req.session.userId;

    try {
        assertIsDefined(authenticatedUserId);

        // .exec() is used just because we don't get a promise returned, so we turn it into a real promise
        // on post request it does not ahve to be added, youtuber dunno why
        const notes = await NoteModel.find({ userId: authenticatedUserId }).exec();
        res.status(200).json(notes);
    } catch (error) {
        next(error)
    }
}

export const getSingleNote: RequestHandler = async (req, res, next) => {
    const noteId = req.params.noteId
    const authenticatedUserId = req.session.userId;

    try {
        assertIsDefined(authenticatedUserId);

        if (!mongoose.isValidObjectId(noteId)) { throw createHttpError(400, "Note _id param is invalid(shape not correct)") }

        const singleNote = await NoteModel.findById(noteId).exec();
        // this error is for when the _id param in the browser url, is the correct shape for an id
        if (!singleNote) { throw createHttpError(404, "Note not found!(but _id param was of correct shape)") }
        if (!singleNote.userId.equals(authenticatedUserId)) {
            throw createHttpError(401, "You cannot access this note");
        }

        res.status(200).json(singleNote)
    } catch (error) {
        next(error)
    }
}

interface CreateNoteBody {
    firstname?: string,
    lastname?: string,
    phoneno?: string,
    importantdetails?: string,
    datefirstvisit?: string,
    cnp?: string,
    reason?: string,
    c1a?: string,
    c1b?: string,
    c1c?: string,
    c1d?: string,
    c1e?: string,
    c1f?: string,
    c1g?: string,
    c1h?: string,
    c2a?: string,
    c2b?: string,
    c2c?: string,
    c2d?: string,
    c2e?: string,
    c2f?: string,
    c2g?: string,
    c2h?: string,
    c3a?: string,
    c3b?: string,
    c3c?: string,
    c3d?: string,
    c3e?: string,
    c3f?: string,
    c3g?: string,
    c3h?: string,
    c4a?: string,
    c4b?: string,
    c4c?: string,
    c4d?: string,
    c4e?: string,
    c4f?: string,
    c4g?: string,
    c4h?: string,
}

export const createNote: RequestHandler<unknown, unknown, CreateNoteBody, unknown> = async (req, res, next) => {
    const authenticatedUserId = req.session.userId;

    const firstname = req.body.firstname
    const lastname = req.body.lastname
    const phoneno = req.body.phoneno
    const importantdetails = req.body.importantdetails
    const datefirstvisit = req.body.datefirstvisit
    const cnp = req.body.cnp
    const reason = req.body.reason
    const c1a = req.body.c1a
    const c1b = req.body.c1b
    const c1c = req.body.c1c
    const c1d = req.body.c1d
    const c1e = req.body.c1e
    const c1f = req.body.c1f
    const c1g = req.body.c1g
    const c1h = req.body.c1h
    const c2a = req.body.c2a
    const c2b = req.body.c2b
    const c2c = req.body.c2c
    const c2d = req.body.c2d
    const c2e = req.body.c2e
    const c2f = req.body.c2f
    const c2g = req.body.c2g
    const c2h = req.body.c2h
    const c3a = req.body.c3a
    const c3b = req.body.c3b
    const c3c = req.body.c3c
    const c3d = req.body.c3d
    const c3e = req.body.c3e
    const c3f = req.body.c3f
    const c3g = req.body.c3g
    const c3h = req.body.c3h
    const c4a = req.body.c4a
    const c4b = req.body.c4b
    const c4c = req.body.c4c
    const c4d = req.body.c4d
    const c4e = req.body.c4e
    const c4f = req.body.c4f
    const c4g = req.body.c4g
    const c4h = req.body.c4h


    try {
        assertIsDefined(authenticatedUserId);

        // a throw leaves the block and goes str8 to the catch block
        if (!firstname) { throw createHttpError(400, "Note must have a first name") }

        const newNote = await NoteModel.create({
            userId: authenticatedUserId,
            firstname: firstname,
            lastname: lastname,
            phoneno: phoneno,
            importantdetails: importantdetails,
            datefirstvisit: datefirstvisit,
            cnp: cnp,
            reason: reason,
            c1a: c1a,
            c1b: c1b,
            c1c: c1c,
            c1d: c1d,
            c1e: c1e,
            c1f: c1f,
            c1g: c1g,
            c1h: c1h,
            c2a: c2a,
            c2b: c2b,
            c2c: c2c,
            c2d: c2d,
            c2e: c2e,
            c2f: c2f,
            c2g: c2g,
            c2h: c2h,
            c3a: c3a,
            c3b: c3b,
            c3c: c3c,
            c3d: c3d,
            c3e: c3e,
            c3f: c3f,
            c3g: c3g,
            c3h: c3h,
            c4a: c4a,
            c4b: c4b,
            c4c: c4c,
            c4d: c4d,
            c4e: c4e,
            c4f: c4f,
            c4g: c4g,
            c4h: c4h,
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
    firstname?: string,
    lastname?: string,
    phoneno?: string,
    importantdetails?: string,
    datefirstvisit?: string,
    cnp?: string,
    reason?: string,
    c1a?: string,
    c1b?: string,
    c1c?: string,
    c1d?: string,
    c1e?: string,
    c1f?: string,
    c1g?: string,
    c1h?: string,
    c2a?: string,
    c2b?: string,
    c2c?: string,
    c2d?: string,
    c2e?: string,
    c2f?: string,
    c2g?: string,
    c2h?: string,
    c3a?: string,
    c3b?: string,
    c3c?: string,
    c3d?: string,
    c3e?: string,
    c3f?: string,
    c3g?: string,
    c3h?: string,
    c4a?: string,
    c4b?: string,
    c4c?: string,
    c4d?: string,
    c4e?: string,
    c4f?: string,
    c4g?: string,
    c4h?: string,
}

export const updateNote: RequestHandler<updateNoteParams, unknown, updateNoteBody, unknown> = async (req, res, next) => {
    const authenticatedUserId = req.session.userId;

    const noteId = req.params.noteId
    const newFirstname = req.body.firstname
    const newLastname = req.body.lastname
    const newPhoneno = req.body.phoneno
    const newImportantdetails = req.body.importantdetails
    const newDatefirstvisit = req.body.datefirstvisit
    const newCnp = req.body.cnp
    const newReason = req.body.reason
    const newC1a = req.body.c1a
    const newC1b = req.body.c1b
    const newC1c = req.body.c1c
    const newC1d = req.body.c1d
    const newC1e = req.body.c1e
    const newC1f = req.body.c1f
    const newC1g = req.body.c1g
    const newC1h = req.body.c1h
    const newC2a = req.body.c2a
    const newC2b = req.body.c2b
    const newC2c = req.body.c2c
    const newC2d = req.body.c2d
    const newC2e = req.body.c2e
    const newC2f = req.body.c2f
    const newC2g = req.body.c2g
    const newC2h = req.body.c2h
    const newC3a = req.body.c3a
    const newC3b = req.body.c3b
    const newC3c = req.body.c3c
    const newC3d = req.body.c3d
    const newC3e = req.body.c3e
    const newC3f = req.body.c3f
    const newC3g = req.body.c3g
    const newC3h = req.body.c3h
    const newC4a = req.body.c4a
    const newC4b = req.body.c4b
    const newC4c = req.body.c4c
    const newC4d = req.body.c4d
    const newC4e = req.body.c4e
    const newC4f = req.body.c4f
    const newC4g = req.body.c4g
    const newC4h = req.body.c4h
    try {
        assertIsDefined(authenticatedUserId);

        if (!mongoose.isValidObjectId(noteId)) { throw createHttpError(400, "Note _id param is invalid(shape not correct)") }
        if (!newFirstname) { throw createHttpError(400, "Note must have a title aka first name") }

        const note = await NoteModel.findById(noteId).exec()
        if (!note) { throw createHttpError(404, "Note not found!(but _id param was of correct shape)") }
        if (!note.userId.equals(authenticatedUserId)) {
            throw createHttpError(401, "You cannot access this note");
        }
        // update the note
        note.firstname = newFirstname;
        note.lastname = newLastname;
        note.phoneno = newPhoneno;
        note.importantdetails = newImportantdetails;
        note.datefirstvisit = newDatefirstvisit;
        note.cnp = newCnp;
        note.reason = newReason;
        note.c1a = newC1a;
        note.c1b = newC1b;
        note.c1c = newC1c;
        note.c1d = newC1d;
        note.c1e = newC1e;
        note.c1f = newC1f;
        note.c1g = newC1g;
        note.c1h = newC1h;
        note.c2a = newC2a;
        note.c2b = newC2b;
        note.c2c = newC2c;
        note.c2d = newC2d;
        note.c2e = newC2e;
        note.c2f = newC2f;
        note.c2g = newC2g;
        note.c2h = newC2h;
        note.c3a = newC3a;
        note.c3b = newC3b;
        note.c3c = newC3c
        note.c3d = newC3d;
        note.c3e = newC3e;
        note.c3f = newC3f;
        note.c3g = newC3g;
        note.c3h = newC3h;
        note.c4a = newC4a;
        note.c4b = newC4b;
        note.c4c = newC4c;
        note.c4d = newC4d;
        note.c4e = newC4e;
        note.c4f = newC4f;
        note.c4g = newC4g;
        note.c4h = newC4h;

        const updatedNote = await note.save();

        res.status(200).json(updatedNote)
    } catch (error) {
        next(error)
    }
}

export const deleteNote: RequestHandler = async (req, res, next) => {
    const noteId = req.params.noteId;
    const authenticatedUserId = req.session.userId;

    try {
        assertIsDefined(authenticatedUserId);

        if (!mongoose.isValidObjectId(noteId)) {
            throw createHttpError(400, "Invalid note id");
        }

        const note = await NoteModel.findById(noteId).exec();

        if (!note) {
            throw createHttpError(404, "Note not found");
        }

        if (!note.userId.equals(authenticatedUserId)) {
            throw createHttpError(401, "You cannot access this note");
        }

        // await note.remove();

        res.sendStatus(204);
    } catch (error) {
        next(error);
    }
};