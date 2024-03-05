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
    tooth1a?: string,
    tooth1b?: string,
    tooth1c?: string,
    tooth2a?: string,
    tooth2b?: string,
    tooth2c?: string,
    tooth3a?: string,
    tooth3b?: string,
    tooth3c?: string,
    tooth4a?: string,
    tooth4b?: string,
    tooth4c?: string,
    tooth5a?: string,
    tooth5b?: string,
    tooth5c?: string,
    tooth6a?: string,
    tooth6b?: string,
    tooth6c?: string,
    tooth7a?: string,
    tooth7b?: string,
    tooth7c?: string,
    tooth8a?: string,
    tooth8b?: string,
    tooth8c?: string,
    tooth9a?: string,
    tooth9b?: string,
    tooth9c?: string,
    tooth10a?: string,
    tooth10b?: string,
    tooth10c?: string,

    tooth11a?: string,
    tooth11b?: string,
    tooth11c?: string,
    tooth12a?: string,
    tooth12b?: string,
    tooth12c?: string,
    tooth13a?: string,
    tooth13b?: string,
    tooth13c?: string,
    tooth14a?: string,
    tooth14b?: string,
    tooth14c?: string,
    tooth15a?: string,
    tooth15b?: string,
    tooth15c?: string,
    tooth16a?: string,
    tooth16b?: string,
    tooth16c?: string,
    tooth17a?: string,
    tooth17b?: string,
    tooth17c?: string,
    tooth18a?: string,
    tooth18b?: string,
    tooth18c?: string,
    tooth19a?: string,
    tooth19b?: string,
    tooth19c?: string,
    tooth20a?: string,
    tooth20b?: string,
    tooth20c?: string,

    tooth21a?: string,
    tooth21b?: string,
    tooth21c?: string,
    tooth22a?: string,
    tooth22b?: string,
    tooth22c?: string,
    tooth23a?: string,
    tooth23b?: string,
    tooth23c?: string,
    tooth24a?: string,
    tooth24b?: string,
    tooth24c?: string,
    tooth25a?: string,
    tooth25b?: string,
    tooth25c?: string,
    tooth26a?: string,
    tooth26b?: string,
    tooth26c?: string,
    tooth27a?: string,
    tooth27b?: string,
    tooth27c?: string,
    tooth28a?: string,
    tooth28b?: string,
    tooth28c?: string,
    tooth29a?: string,
    tooth29b?: string,
    tooth29c?: string,
    tooth30a?: string,
    tooth30b?: string,
    tooth30c?: string,

    tooth31a?: string,
    tooth31b?: string,
    tooth31c?: string,
    tooth32a?: string,
    tooth32b?: string,
    tooth32c?: string,
    tooth33a?: string,
    tooth33b?: string,
    tooth33c?: string,

    treat1a?: string,
    treat1b?: string,
    treat1c?: string,
    treat1d?: string,
    treat2a?: string,
    treat2b?: string,
    treat2c?: string,
    treat2d?: string,
    treat3a?: string,
    treat3b?: string,
    treat3c?: string,
    treat3d?: string,
    treat4a?: string,
    treat4b?: string,
    treat4c?: string,
    treat4d?: string,
    treat5a?: string,
    treat5b?: string,
    treat5c?: string,
    treat5d?: string,

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

    const tooth1a = req.body.tooth1a
    const tooth1b = req.body.tooth1b
    const tooth1c = req.body.tooth1c
    const tooth2b = req.body.tooth2b
    const tooth2c = req.body.tooth2c
    const tooth2a = req.body.tooth2a
    const tooth3b = req.body.tooth3b
    const tooth3c = req.body.tooth3c
    const tooth3a = req.body.tooth3a
    const tooth4b = req.body.tooth4b
    const tooth4c = req.body.tooth4c
    const tooth4a = req.body.tooth4a
    const tooth5b = req.body.tooth5b
    const tooth5c = req.body.tooth5c
    const tooth5a = req.body.tooth5a
    const tooth6b = req.body.tooth6b
    const tooth6c = req.body.tooth6c
    const tooth6a = req.body.tooth6a
    const tooth7b = req.body.tooth7b
    const tooth7c = req.body.tooth7c
    const tooth7a = req.body.tooth7a
    const tooth8b = req.body.tooth8b
    const tooth8c = req.body.tooth8c
    const tooth8a = req.body.tooth8a
    const tooth9b = req.body.tooth9b
    const tooth9c = req.body.tooth9c
    const tooth9a = req.body.tooth9a
    const tooth10a = req.body.tooth10a
    const tooth10b = req.body.tooth10b
    const tooth10c = req.body.tooth10c

    const tooth11a = req.body.tooth11a
    const tooth11b = req.body.tooth11b
    const tooth11c = req.body.tooth11c
    const tooth12b = req.body.tooth12b
    const tooth12c = req.body.tooth12c
    const tooth12a = req.body.tooth12a
    const tooth13b = req.body.tooth13b
    const tooth13c = req.body.tooth13c
    const tooth13a = req.body.tooth13a
    const tooth14b = req.body.tooth14b
    const tooth14c = req.body.tooth14c
    const tooth14a = req.body.tooth14a
    const tooth15b = req.body.tooth15b
    const tooth15c = req.body.tooth15c
    const tooth15a = req.body.tooth15a
    const tooth16b = req.body.tooth16b
    const tooth16c = req.body.tooth16c
    const tooth16a = req.body.tooth16a
    const tooth17b = req.body.tooth17b
    const tooth17c = req.body.tooth17c
    const tooth17a = req.body.tooth17a
    const tooth18b = req.body.tooth18b
    const tooth18c = req.body.tooth18c
    const tooth18a = req.body.tooth18a
    const tooth19b = req.body.tooth19b
    const tooth19c = req.body.tooth19c
    const tooth19a = req.body.tooth19a
    const tooth20a = req.body.tooth20a
    const tooth20b = req.body.tooth20b
    const tooth20c = req.body.tooth20c

    const tooth21a = req.body.tooth21a
    const tooth21b = req.body.tooth21b
    const tooth21c = req.body.tooth21c
    const tooth22b = req.body.tooth22b
    const tooth22c = req.body.tooth22c
    const tooth22a = req.body.tooth22a
    const tooth23b = req.body.tooth23b
    const tooth23c = req.body.tooth23c
    const tooth23a = req.body.tooth23a
    const tooth24b = req.body.tooth24b
    const tooth24c = req.body.tooth24c
    const tooth24a = req.body.tooth24a
    const tooth25b = req.body.tooth25b
    const tooth25c = req.body.tooth25c
    const tooth25a = req.body.tooth25a
    const tooth26b = req.body.tooth26b
    const tooth26c = req.body.tooth26c
    const tooth26a = req.body.tooth26a
    const tooth27b = req.body.tooth27b
    const tooth27c = req.body.tooth27c
    const tooth27a = req.body.tooth27a
    const tooth28b = req.body.tooth28b
    const tooth28c = req.body.tooth28c
    const tooth28a = req.body.tooth28a
    const tooth29b = req.body.tooth29b
    const tooth29c = req.body.tooth29c
    const tooth29a = req.body.tooth29a
    const tooth30a = req.body.tooth30a
    const tooth30b = req.body.tooth30b
    const tooth30c = req.body.tooth30c

    const tooth31a = req.body.tooth31a
    const tooth31b = req.body.tooth31b
    const tooth31c = req.body.tooth31c
    const tooth32a = req.body.tooth32a
    const tooth32b = req.body.tooth32b
    const tooth32c = req.body.tooth32c
    const tooth33a = req.body.tooth33a
    const tooth33b = req.body.tooth33b
    const tooth33c = req.body.tooth33c

    const treat1a = req.body.treat1a
    const treat1b = req.body.treat1b
    const treat1c = req.body.treat1c
    const treat1d = req.body.treat1d
    const treat2a = req.body.treat2a
    const treat2b = req.body.treat2b
    const treat2c = req.body.treat2c
    const treat2d = req.body.treat2d
    const treat3a = req.body.treat3a
    const treat3b = req.body.treat3b
    const treat3c = req.body.treat3c
    const treat3d = req.body.treat3d
    const treat4a = req.body.treat4a
    const treat4b = req.body.treat4b
    const treat4c = req.body.treat4c
    const treat4d = req.body.treat4d
    const treat5a = req.body.treat5a
    const treat5b = req.body.treat5b
    const treat5c = req.body.treat5c
    const treat5d = req.body.treat5d

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

            tooth1a: tooth1a,
            tooth1b: tooth1b,
            tooth1c: tooth1c,
            tooth2b: tooth2b,
            tooth2c: tooth2c,
            tooth2a: tooth2a,
            tooth3b: tooth3b,
            tooth3c: tooth3c,
            tooth3a: tooth3a,
            tooth4b: tooth4b,
            tooth4c: tooth4c,
            tooth4a: tooth4a,
            tooth5b: tooth5b,
            tooth5c: tooth5c,
            tooth5a: tooth5a,
            tooth6b: tooth6b,
            tooth6c: tooth6c,
            tooth6a: tooth6a,
            tooth7b: tooth7b,
            tooth7c: tooth7c,
            tooth7a: tooth7a,
            tooth8b: tooth8b,
            tooth8c: tooth8c,
            tooth8a: tooth8a,
            tooth9b: tooth9b,
            tooth9c: tooth9c,
            tooth9a: tooth9a,
            tooth10a: tooth10a,
            tooth10b: tooth10b,
            tooth10c: tooth10c,
            tooth11a: tooth11a,
            tooth11b: tooth11b,
            tooth11c: tooth11c,
            tooth12b: tooth12b,
            tooth12c: tooth12c,
            tooth12a: tooth12a,
            tooth13b: tooth13b,
            tooth13c: tooth13c,
            tooth13a: tooth13a,
            tooth14b: tooth14b,
            tooth14c: tooth14c,
            tooth14a: tooth14a,
            tooth15b: tooth15b,
            tooth15c: tooth15c,
            tooth15a: tooth15a,
            tooth16b: tooth16b,
            tooth16c: tooth16c,
            tooth16a: tooth16a,
            tooth17b: tooth17b,
            tooth17c: tooth17c,
            tooth17a: tooth17a,
            tooth18b: tooth18b,
            tooth18c: tooth18c,
            tooth18a: tooth18a,
            tooth19b: tooth19b,
            tooth19c: tooth19c,
            tooth19a: tooth19a,
            tooth20a: tooth20a,
            tooth20b: tooth20b,
            tooth20c: tooth20c,
            tooth21a: tooth21a,
            tooth21b: tooth21b,
            tooth21c: tooth21c,
            tooth22b: tooth22b,
            tooth22c: tooth22c,
            tooth22a: tooth22a,
            tooth23b: tooth23b,
            tooth23c: tooth23c,
            tooth23a: tooth23a,
            tooth24b: tooth24b,
            tooth24c: tooth24c,
            tooth24a: tooth24a,
            tooth25b: tooth25b,
            tooth25c: tooth25c,
            tooth25a: tooth25a,
            tooth26b: tooth26b,
            tooth26c: tooth26c,
            tooth26a: tooth26a,
            tooth27b: tooth27b,
            tooth27c: tooth27c,
            tooth27a: tooth27a,
            tooth28b: tooth28b,
            tooth28c: tooth28c,
            tooth28a: tooth28a,
            tooth29b: tooth29b,
            tooth29c: tooth29c,
            tooth29a: tooth29a,
            tooth30a: tooth30a,
            tooth30b: tooth30b,
            tooth30c: tooth30c,
            tooth31a: tooth31a,
            tooth31b: tooth31b,
            tooth31c: tooth31c,
            tooth32a: tooth32a,
            tooth32b: tooth32b,
            tooth32c: tooth32c,
            tooth33a: tooth33a,
            tooth33b: tooth33b,
            tooth33c: tooth33c,

            treat1a: treat1a,
            treat1b: treat1b,
            treat1c: treat1c,
            treat1d: treat1d,
            treat2a: treat2a,
            treat2b: treat2b,
            treat2c: treat2c,
            treat2d: treat2d,
            treat3a: treat3a,
            treat3b: treat3b,
            treat3c: treat3c,
            treat3d: treat3d,
            treat4a: treat4a,
            treat4b: treat4b,
            treat4c: treat4c,
            treat4d: treat4d,
            treat5a: treat5a,
            treat5b: treat5b,
            treat5c: treat5c,
            treat5d: treat5d,

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

    tooth1a?: string,
    tooth1b?: string,
    tooth1c?: string,
    tooth2b?: string,
    tooth2c?: string,
    tooth2a?: string,
    tooth3b?: string,
    tooth3c?: string,
    tooth3a?: string,
    tooth4b?: string,
    tooth4c?: string,
    tooth4a?: string,
    tooth5b?: string,
    tooth5c?: string,
    tooth5a?: string,
    tooth6b?: string,
    tooth6c?: string,
    tooth6a?: string,
    tooth7b?: string,
    tooth7c?: string,
    tooth7a?: string,
    tooth8b?: string,
    tooth8c?: string,
    tooth8a?: string,
    tooth9b?: string,
    tooth9c?: string,
    tooth9a?: string,
    tooth10a?: string,
    tooth10b?: string,
    tooth10c?: string,
    tooth11a?: string,
    tooth11b?: string,
    tooth11c?: string,
    tooth12b?: string,
    tooth12c?: string,
    tooth12a?: string,
    tooth13b?: string,
    tooth13c?: string,
    tooth13a?: string,
    tooth14b?: string,
    tooth14c?: string,
    tooth14a?: string,
    tooth15b?: string,
    tooth15c?: string,
    tooth15a?: string,
    tooth16b?: string,
    tooth16c?: string,
    tooth16a?: string,
    tooth17b?: string,
    tooth17c?: string,
    tooth17a?: string,
    tooth18b?: string,
    tooth18c?: string,
    tooth18a?: string,
    tooth19b?: string,
    tooth19c?: string,
    tooth19a?: string,
    tooth20a?: string,
    tooth20b?: string,
    tooth20c?: string,
    tooth21a?: string,
    tooth21b?: string,
    tooth21c?: string,
    tooth22b?: string,
    tooth22c?: string,
    tooth22a?: string,
    tooth23b?: string,
    tooth23c?: string,
    tooth23a?: string,
    tooth24b?: string,
    tooth24c?: string,
    tooth24a?: string,
    tooth25b?: string,
    tooth25c?: string,
    tooth25a?: string,
    tooth26b?: string,
    tooth26c?: string,
    tooth26a?: string,
    tooth27b?: string,
    tooth27c?: string,
    tooth27a?: string,
    tooth28b?: string,
    tooth28c?: string,
    tooth28a?: string,
    tooth29b?: string,
    tooth29c?: string,
    tooth29a?: string,
    tooth30a?: string,
    tooth30b?: string,
    tooth30c?: string,
    tooth31a?: string,
    tooth31b?: string,
    tooth31c?: string,
    tooth32a?: string,
    tooth32b?: string,
    tooth32c?: string,
    tooth33a?: string,
    tooth33b?: string,
    tooth33c?: string,

    treat1a?: string,
    treat1b?: string,
    treat1c?: string,
    treat1d?: string,
    treat2a?: string,
    treat2b?: string,
    treat2c?: string,
    treat2d?: string,
    treat3a?: string,
    treat3b?: string,
    treat3c?: string,
    treat3d?: string,
    treat4a?: string,
    treat4b?: string,
    treat4c?: string,
    treat4d?: string,
    treat5a?: string,
    treat5b?: string,
    treat5c?: string,
    treat5d?: string,

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

    const newTooth1a = req.body.tooth1a
    const newTooth1b = req.body.tooth1b
    const newTooth1c = req.body.tooth1c
    const newTooth2b = req.body.tooth2b
    const newTooth2c = req.body.tooth2c
    const newTooth2a = req.body.tooth2a
    const newTooth3b = req.body.tooth3b
    const newTooth3c = req.body.tooth3c
    const newTooth3a = req.body.tooth3a
    const newTooth4b = req.body.tooth4b
    const newTooth4c = req.body.tooth4c
    const newTooth4a = req.body.tooth4a
    const newTooth5b = req.body.tooth5b
    const newTooth5c = req.body.tooth5c
    const newTooth5a = req.body.tooth5a
    const newTooth6b = req.body.tooth6b
    const newTooth6c = req.body.tooth6c
    const newTooth6a = req.body.tooth6a
    const newTooth7b = req.body.tooth7b
    const newTooth7c = req.body.tooth7c
    const newTooth7a = req.body.tooth7a
    const newTooth8b = req.body.tooth8b
    const newTooth8c = req.body.tooth8c
    const newTooth8a = req.body.tooth8a
    const newTooth9b = req.body.tooth9b
    const newTooth9c = req.body.tooth9c
    const newTooth9a = req.body.tooth9a
    const newTooth10a = req.body.tooth10a
    const newTooth10b = req.body.tooth10b
    const newTooth10c = req.body.tooth10c
    const newTooth11a = req.body.tooth11a
    const newTooth11b = req.body.tooth11b
    const newTooth11c = req.body.tooth11c
    const newTooth12b = req.body.tooth12b
    const newTooth12c = req.body.tooth12c
    const newTooth12a = req.body.tooth12a
    const newTooth13b = req.body.tooth13b
    const newTooth13c = req.body.tooth13c
    const newTooth13a = req.body.tooth13a
    const newTooth14b = req.body.tooth14b
    const newTooth14c = req.body.tooth14c
    const newTooth14a = req.body.tooth14a
    const newTooth15b = req.body.tooth15b
    const newTooth15c = req.body.tooth15c
    const newTooth15a = req.body.tooth15a
    const newTooth16b = req.body.tooth16b
    const newTooth16c = req.body.tooth16c
    const newTooth16a = req.body.tooth16a
    const newTooth17b = req.body.tooth17b
    const newTooth17c = req.body.tooth17c
    const newTooth17a = req.body.tooth17a
    const newTooth18b = req.body.tooth18b
    const newTooth18c = req.body.tooth18c
    const newTooth18a = req.body.tooth18a
    const newTooth19b = req.body.tooth19b
    const newTooth19c = req.body.tooth19c
    const newTooth19a = req.body.tooth19a
    const newTooth20a = req.body.tooth20a
    const newTooth20b = req.body.tooth20b
    const newTooth20c = req.body.tooth20c
    const newTooth21a = req.body.tooth21a
    const newTooth21b = req.body.tooth21b
    const newTooth21c = req.body.tooth21c
    const newTooth22b = req.body.tooth22b
    const newTooth22c = req.body.tooth22c
    const newTooth22a = req.body.tooth22a
    const newTooth23b = req.body.tooth23b
    const newTooth23c = req.body.tooth23c
    const newTooth23a = req.body.tooth23a
    const newTooth24b = req.body.tooth24b
    const newTooth24c = req.body.tooth24c
    const newTooth24a = req.body.tooth24a
    const newTooth25b = req.body.tooth25b
    const newTooth25c = req.body.tooth25c
    const newTooth25a = req.body.tooth25a
    const newTooth26b = req.body.tooth26b
    const newTooth26c = req.body.tooth26c
    const newTooth26a = req.body.tooth26a
    const newTooth27b = req.body.tooth27b
    const newTooth27c = req.body.tooth27c
    const newTooth27a = req.body.tooth27a
    const newTooth28b = req.body.tooth28b
    const newTooth28c = req.body.tooth28c
    const newTooth28a = req.body.tooth28a
    const newTooth29b = req.body.tooth29b
    const newTooth29c = req.body.tooth29c
    const newTooth29a = req.body.tooth29a
    const newTooth30a = req.body.tooth30a
    const newTooth30b = req.body.tooth30b
    const newTooth30c = req.body.tooth30c
    const newTooth31a = req.body.tooth31a
    const newTooth31b = req.body.tooth31b
    const newTooth31c = req.body.tooth31c
    const newTooth32a = req.body.tooth32a
    const newTooth32b = req.body.tooth32b
    const newTooth32c = req.body.tooth32c
    const newTooth33a = req.body.tooth33a
    const newTooth33b = req.body.tooth33b
    const newTooth33c = req.body.tooth33c

    const newTreat1a = req.body.treat1a
    const newTreat1b = req.body.treat1b
    const newTreat1c = req.body.treat1c
    const newTreat1d = req.body.treat1d
    const newTreat2a = req.body.treat2a
    const newTreat2b = req.body.treat2b
    const newTreat2c = req.body.treat2c
    const newTreat2d = req.body.treat2d
    const newTreat3a = req.body.treat3a
    const newTreat3b = req.body.treat3b
    const newTreat3c = req.body.treat3c
    const newTreat3d = req.body.treat3d
    const newTreat4a = req.body.treat4a
    const newTreat4b = req.body.treat4b
    const newTreat4c = req.body.treat4c
    const newTreat4d = req.body.treat4d
    const newTreat5a = req.body.treat5a
    const newTreat5b = req.body.treat5b
    const newTreat5c = req.body.treat5c
    const newTreat5d = req.body.treat5d

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

        note.tooth1a = newTooth1a;
        note.tooth1b = newTooth1b;
        note.tooth1c = newTooth1c;
        note.tooth2b = newTooth2b;
        note.tooth2c = newTooth2c;
        note.tooth2a = newTooth2a;
        note.tooth3b = newTooth3b;
        note.tooth3c = newTooth3c;
        note.tooth3a = newTooth3a;
        note.tooth4b = newTooth4b;
        note.tooth4c = newTooth4c;
        note.tooth4a = newTooth4a;
        note.tooth5b = newTooth5b;
        note.tooth5c = newTooth5c;
        note.tooth5a = newTooth5a;
        note.tooth6b = newTooth6b;
        note.tooth6c = newTooth6c;
        note.tooth6a = newTooth6a;
        note.tooth7b = newTooth7b;
        note.tooth7c = newTooth7c;
        note.tooth7a = newTooth7a;
        note.tooth8b = newTooth8b;
        note.tooth8c = newTooth8c;
        note.tooth8a = newTooth8a;
        note.tooth9b = newTooth9b;
        note.tooth9c = newTooth9c;
        note.tooth9a = newTooth9a;
        note.tooth10a = newTooth10a;
        note.tooth10b = newTooth10b;
        note.tooth10c = newTooth10c;
        note.tooth11a = newTooth11a;
        note.tooth11b = newTooth11b;
        note.tooth11c = newTooth11c;
        note.tooth12b = newTooth12b;
        note.tooth12c = newTooth12c;
        note.tooth12a = newTooth12a;
        note.tooth13b = newTooth13b;
        note.tooth13c = newTooth13c;
        note.tooth13a = newTooth13a;
        note.tooth14b = newTooth14b;
        note.tooth14c = newTooth14c;
        note.tooth14a = newTooth14a;
        note.tooth15b = newTooth15b;
        note.tooth15c = newTooth15c;
        note.tooth15a = newTooth15a;
        note.tooth16b = newTooth16b;
        note.tooth16c = newTooth16c;
        note.tooth16a = newTooth16a;
        note.tooth17b = newTooth17b;
        note.tooth17c = newTooth17c;
        note.tooth17a = newTooth17a;
        note.tooth18b = newTooth18b;
        note.tooth18c = newTooth18c;
        note.tooth18a = newTooth18a;
        note.tooth19b = newTooth19b;
        note.tooth19c = newTooth19c;
        note.tooth19a = newTooth19a;
        note.tooth20a = newTooth20a;
        note.tooth20b = newTooth20b;
        note.tooth20c = newTooth20c;
        note.tooth21a = newTooth21a;
        note.tooth21b = newTooth21b;
        note.tooth21c = newTooth21c;
        note.tooth22b = newTooth22b;
        note.tooth22c = newTooth22c;
        note.tooth22a = newTooth22a;
        note.tooth23b = newTooth23b;
        note.tooth23c = newTooth23c;
        note.tooth23a = newTooth23a;
        note.tooth24b = newTooth24b;
        note.tooth24c = newTooth24c;
        note.tooth24a = newTooth24a;
        note.tooth25b = newTooth25b;
        note.tooth25c = newTooth25c;
        note.tooth25a = newTooth25a;
        note.tooth26b = newTooth26b;
        note.tooth26c = newTooth26c;
        note.tooth26a = newTooth26a;
        note.tooth27b = newTooth27b;
        note.tooth27c = newTooth27c;
        note.tooth27a = newTooth27a;
        note.tooth28b = newTooth28b;
        note.tooth28c = newTooth28c;
        note.tooth28a = newTooth28a;
        note.tooth29b = newTooth29b;
        note.tooth29c = newTooth29c;
        note.tooth29a = newTooth29a;
        note.tooth30a = newTooth30a;
        note.tooth30b = newTooth30b;
        note.tooth30c = newTooth30c;
        note.tooth31a = newTooth31a;
        note.tooth31b = newTooth31b;
        note.tooth31c = newTooth31c;
        note.tooth32a = newTooth32a;
        note.tooth32b = newTooth32b;
        note.tooth32c = newTooth32c;
        note.tooth33a = newTooth33a;
        note.tooth33b = newTooth33b;
        note.tooth33c = newTooth33c;

        note.treat1a = newTreat1a;
        note.treat1b = newTreat1b;
        note.treat1c = newTreat1c;
        note.treat1d = newTreat1d;
        note.treat2a = newTreat2a;
        note.treat2b = newTreat2b;
        note.treat2c = newTreat2c;
        note.treat2d = newTreat2d;
        note.treat3a = newTreat3a;
        note.treat3b = newTreat3b;
        note.treat3c = newTreat3c;
        note.treat3d = newTreat3d;
        note.treat4a = newTreat4a;
        note.treat4b = newTreat4b;
        note.treat4c = newTreat4c;
        note.treat4d = newTreat4d;
        note.treat5a = newTreat5a;
        note.treat5b = newTreat5b;
        note.treat5c = newTreat5c;
        note.treat5d = newTreat5d;

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