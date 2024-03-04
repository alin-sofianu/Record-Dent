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
    age?: string,
    cnp?: string,
    reason?: string,
    a1?: string,
    a2?: string,
    a3?: string,
    a4?: string,
    a5?: string,
    a6?: string,
    a7?: string,
    a8?: string,
    a9?: string,
    a10?: string,
    a11?: string,
    a12?: string,
    a13?: string,
    b1?: string,
    b2?: string,
    b3?: string,
    b4?: string,
    b5?: string,
    b6?: string,
    b7?: string,
    b8?: string,
    b9?: string,
    b10?: string,
    b11?: string,
    b12?: string,
    b13?: string,
    c1?: string,
    c2?: string,
    c3?: string,
    c4?: string,
    c5?: string,
    c6?: string,
    c7?: string,
    c8?: string,
    c9?: string,
    c10?: string,
    c11?: string,
    c12?: string,
    c13?: string,
    d1?: string,
    d2?: string,
    d3?: string,
    d4?: string,
    d5?: string,
    d6?: string,
    d7?: string,
    d9?: string,
    d8?: string,
    d11?: string,
    d10?: string,
    d13?: string,
    d12?: string,
    currentColor?: string,
    currentColorIndex?: string,
    control?: string,
    name?: string,
    select?: string,
}

export const createNote: RequestHandler<unknown, unknown, CreateNoteBody, unknown> = async (req, res, next) => {
    const authenticatedUserId = req.session.userId;

    const firstname = req.body.firstname
    const lastname = req.body.lastname
    const phoneno = req.body.phoneno
    const importantdetails = req.body.importantdetails
    const age = req.body.age
    const cnp = req.body.cnp
    const reason = req.body.reason
    const a1 = req.body.a1
    const a2 = req.body.a2
    const a3 = req.body.a3
    const a4 = req.body.a4
    const a5 = req.body.a5
    const a6 = req.body.a6
    const a7 = req.body.a7
    const a8 = req.body.a8
    const a9 = req.body.a9
    const a10 = req.body.a10
    const a11 = req.body.a11
    const a12 = req.body.a12
    const a13 = req.body.a13

    const b1 = req.body.b1
    const b2 = req.body.b2
    const b3 = req.body.b3
    const b4 = req.body.b4
    const b5 = req.body.b5
    const b6 = req.body.b6
    const b7 = req.body.b7
    const b8 = req.body.b8
    const b9 = req.body.b9
    const b10 = req.body.b10
    const b11 = req.body.b11
    const b12 = req.body.b12
    const b13 = req.body.b13

    const c1 = req.body.c1
    const c2 = req.body.c2
    const c3 = req.body.c3
    const c4 = req.body.c4
    const c5 = req.body.c5
    const c6 = req.body.c6
    const c7 = req.body.c7
    const c8 = req.body.c8
    const c9 = req.body.c9
    const c10 = req.body.c10
    const c11 = req.body.c11
    const c12 = req.body.c12
    const c13 = req.body.c13

    const d1 = req.body.d1
    const d2 = req.body.d2
    const d3 = req.body.d3
    const d4 = req.body.d4
    const d5 = req.body.d5
    const d6 = req.body.d6
    const d7 = req.body.d7
    const d8 = req.body.d8
    const d9 = req.body.d9
    const d10 = req.body.d10
    const d11 = req.body.d11
    const d12 = req.body.d12
    const d13 = req.body.d13


    const currentColor = req.body.currentColor
    const currentColorIndex = req.body.currentColorIndex
    const control = req.body.control
    const name = req.body.name
    const select = req.body.select


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
            age: age,
            cnp: cnp,
            reason: reason,
            a1: a1,
            a2: a2,
            a3: a3,
            a4: a4,
            a5: a5,
            a6: a6,
            a7: a7,
            a8: a8,
            a9: a9,
            a10: a10,
            a11: a11,
            a12: a12,
            a13: a13,

            b1: b1,
            b2: b2,
            b3: b3,
            b4: b4,
            b5: b5,
            b6: b6,
            b7: b7,
            b8: b8,
            b9: b9,
            b10: b10,
            b11: b11,
            b12: b12,
            b13: b13,

            c1: c1,
            c2: c2,
            c3: c3,
            c4: c4,
            c5: c5,
            c6: c6,
            c7: c7,
            c8: c8,
            c9: c9,
            c10: c10,
            c11: c11,
            c12: c12,
            c13: c13,

            d1: d1,
            d2: d2,
            d3: d3,
            d4: d4,
            d5: d5,
            d6: d6,
            d7: d7,
            d8: d8,
            d9: d9,
            d10: d10,
            d11: d11,
            d12: d12,
            d13: d13,

            currentColor: currentColor,
            currentColorIndex: currentColorIndex,
            control: control,
            name: name,
            select: select,
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
    age?: string,
    cnp?: string,
    reason?: string,
    a1?: string,
    a2?: string,
    a3?: string,
    a4?: string,
    a5?: string,
    a6?: string,
    a7?: string,
    a8?: string,
    a9?: string,
    a10?: string,
    a11?: string,
    a12?: string,
    a13?: string,
    b1?: string,
    b2?: string,
    b3?: string,
    b4?: string,
    b5?: string,
    b6?: string,
    b7?: string,
    b8?: string,
    b9?: string,
    b10?: string,
    b11?: string,
    b12?: string,
    b13?: string,
    c1?: string,
    c2?: string,
    c3?: string,
    c4?: string,
    c5?: string,
    c6?: string,
    c7?: string,
    c8?: string,
    c9?: string,
    c10?: string,
    c11?: string,
    c12?: string,
    c13?: string,
    d1?: string,
    d2?: string,
    d3?: string,
    d4?: string,
    d5?: string,
    d6?: string,
    d7?: string,
    d9?: string,
    d8?: string,
    d11?: string,
    d10?: string,
    d13?: string,
    d12?: string,
    currentColor?: string,
    currentColorIndex?: string,
    control?: string,
    name?: string,
    select?: string,
}

export const updateNote: RequestHandler<updateNoteParams, unknown, updateNoteBody, unknown> = async (req, res, next) => {
    const authenticatedUserId = req.session.userId;

    const noteId = req.params.noteId
    const newFirstname = req.body.firstname
    const newLastname = req.body.lastname
    const newPhoneno = req.body.phoneno
    const newImportantdetails = req.body.importantdetails
    const newAge = req.body.age
    const newCnp = req.body.cnp
    const newReason = req.body.reason

    const newA1 = req.body.a1
    const newA2 = req.body.a2
    const newA3 = req.body.a3
    const newA4 = req.body.a4
    const newA5 = req.body.a5
    const newA6 = req.body.a6
    const newA7 = req.body.a7
    const newA8 = req.body.a8
    const newA9 = req.body.a9
    const newA10 = req.body.a10
    const newA11 = req.body.a11
    const newA12 = req.body.a12
    const newA13 = req.body.a13

    const newB1 = req.body.b1
    const newB2 = req.body.b2
    const newB3 = req.body.b3
    const newB4 = req.body.b4
    const newB5 = req.body.b5
    const newB6 = req.body.b6
    const newB7 = req.body.b7
    const newB8 = req.body.b8
    const newB9 = req.body.b9
    const newB10 = req.body.b10
    const newB11 = req.body.b11
    const newB12 = req.body.b12
    const newB13 = req.body.b13

    const newC1 = req.body.c1
    const newC2 = req.body.c2
    const newC3 = req.body.c3
    const newC4 = req.body.c4
    const newC5 = req.body.c5
    const newC6 = req.body.c6
    const newC7 = req.body.c7
    const newC8 = req.body.c8
    const newC9 = req.body.c9
    const newC10 = req.body.c10
    const newC11 = req.body.c11
    const newC12 = req.body.c12
    const newC13 = req.body.c13

    const newD1 = req.body.d1
    const newD2 = req.body.d2
    const newD3 = req.body.d3
    const newD4 = req.body.d4
    const newD5 = req.body.d5
    const newD6 = req.body.d6
    const newD7 = req.body.d7
    const newD8 = req.body.d8
    const newD9 = req.body.d9
    const newD10 = req.body.d10
    const newD11 = req.body.d11
    const newD12 = req.body.d12
    const newD13 = req.body.d13

    const newCurrentColor = req.body.currentColor
    const newCurrentColorIndex = req.body.currentColorIndex
    const newName = req.body.name

    const newControl = req.body.control
    const newSelect = req.body.select
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
        note.age = newAge;
        note.cnp = newCnp;
        note.reason = newReason;
        note.a1 = newA1;
        note.a2 = newA2;
        note.a3 = newA3;
        note.a4 = newA4;
        note.a5 = newA5;
        note.a6 = newA6;
        note.a7 = newA7;
        note.a8 = newA8;
        note.a9 = newA9;
        note.a10 = newA10;
        note.a11 = newA11;
        note.a12 = newA12;
        note.a13 = newA13;

        note.b1 = newB1;
        note.b2 = newB2;
        note.b3 = newB3;
        note.b4 = newB4;
        note.b5 = newB5;
        note.b6 = newB6;
        note.b7 = newB7;
        note.b8 = newB8;
        note.b9 = newB9;
        note.b10 = newB10;
        note.b11 = newB11;
        note.b12 = newB12;
        note.b13 = newB13;

        note.c1 = newC1;
        note.c2 = newC2;
        note.c3 = newC3;
        note.c4 = newC4;
        note.c5 = newC5;
        note.c6 = newC6;
        note.c7 = newC7;
        note.c8 = newC8;
        note.c9 = newC9;
        note.c10 = newC10;
        note.c11 = newC11;
        note.c12 = newC12;
        note.c13 = newC13;

        note.d1 = newD1;
        note.d2 = newD2;
        note.d3 = newD3;
        note.d4 = newD4;
        note.d5 = newD5;
        note.d6 = newD6;
        note.d7 = newD7;
        note.d8 = newD8;
        note.d9 = newD9;
        note.d10 = newD10;
        note.d11 = newD11;
        note.d12 = newD12;
        note.d13 = newD13;


        note.currentColor = newCurrentColor;
        note.currentColorIndex = newCurrentColorIndex;

        note.control = newControl;
        note.name = newName;
        note.select = newSelect;

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