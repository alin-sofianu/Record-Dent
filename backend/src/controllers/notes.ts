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
    sdmi?: string,
    sdmii?: string,
    sdmiii?: string,
    sdpi?: string,
    sdpii?: string,
    sdc?: string,
    sdinci?: string,
    sdincii?: string,
    ssmi?: string,
    ssmii?: string,
    ssmiii?: string,
    sspi?: string,
    sspii?: string,
    ssc?: string,
    ssinci?: string,
    ssincii?: string,
    jdmi?: string,
    jdmii?: string,
    jdmiii?: string,
    jdpi?: string,
    jdpii?: string,
    jdc?: string,
    jdinci?: string,
    jdincii?: string,
    jsmi?: string,
    jsmii?: string,
    jsmiii?: string,
    jspi?: string,
    jspii?: string,
    jsc?: string,
    jsinci?: string,
    jsincii?: string,
}

export const createNote: RequestHandler<unknown, unknown, CreateNoteBody, unknown> = async (req, res, next) => {
    const authenticatedUserId = req.session.userId;

    const firstname = req.body.firstname
    const lastname = req.body.lastname
    const phoneno = req.body.phoneno
    const importantdetails = req.body.importantdetails
    const sdmi = req.body.sdmi
    const sdmii = req.body.sdmii
    const sdmiii = req.body.sdmiii
    const sdpi = req.body.sdpi
    const sdpii = req.body.sdpii
    const sdc = req.body.sdc
    const sdinci = req.body.sdinci
    const sdincii = req.body.sdincii
    const ssmi = req.body.ssmi
    const ssmii = req.body.ssmii
    const ssmiii = req.body.ssmiii
    const sspi = req.body.sspi
    const sspii = req.body.sspii
    const ssc = req.body.ssc
    const ssinci = req.body.ssinci
    const ssincii = req.body.ssincii
    const jsmi = req.body.jsmi
    const jsmii = req.body.jsmii
    const jsmiii = req.body.jsmiii
    const jspi = req.body.jspi
    const jspii = req.body.jspii
    const jsc = req.body.jsc
    const jsinci = req.body.jsinci
    const jsincii = req.body.jsincii
    const jdmi = req.body.jdmi
    const jdmii = req.body.jdmii
    const jdmiii = req.body.jdmiii
    const jdpi = req.body.jdpi
    const jdpii = req.body.jdpii
    const jdc = req.body.jdc
    const jdinci = req.body.jdinci
    const jdincii = req.body.jdincii


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
            sdmi: sdmi,
            sdmii: sdmii,
            sdmiii: sdmiii,
            sdpi: sdpi,
            sdpii: sdpii,
            sdc: sdc,
            sdinci: sdinci,
            sdincii: sdincii,
            ssmi: ssmi,
            ssmii: ssmii,
            ssmiii: ssmiii,
            sspi: sspi,
            sspii: sspii,
            ssc: ssc,
            ssinci: ssinci,
            ssincii: ssincii,
            jsmi: jsmi,
            jsmii: jsmii,
            jsmiii: jsmiii,
            jspi: jspi,
            jspii: jspii,
            jsc: jsc,
            jsinci: jsinci,
            jsincii: jsincii,
            jdmi: jdmi,
            jdmii: jdmii,
            jdmiii: jdmiii,
            jdpi: jdpi,
            jdpii: jdpii,
            jdc: jdc,
            jdinci: jdinci,
            jdincii: jdincii,
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
    sdmi?: string,
    sdmii?: string,
    sdmiii?: string,
    sdpi?: string,
    sdpii?: string,
    sdc?: string,
    sdinci?: string,
    sdincii?: string,
    ssmi?: string,
    ssmii?: string,
    ssmiii?: string,
    sspi?: string,
    sspii?: string,
    ssc?: string,
    ssinci?: string,
    ssincii?: string,
    jdmi?: string,
    jdmii?: string,
    jdmiii?: string,
    jdpi?: string,
    jdpii?: string,
    jdc?: string,
    jdinci?: string,
    jdincii?: string,
    jsmi?: string,
    jsmii?: string,
    jsmiii?: string,
    jspi?: string,
    jspii?: string,
    jsc?: string,
    jsinci?: string,
    jsincii?: string,
}

export const updateNote: RequestHandler<updateNoteParams, unknown, updateNoteBody, unknown> = async (req, res, next) => {
    const authenticatedUserId = req.session.userId;

    const noteId = req.params.noteId
    const newFirstname = req.body.firstname
    const newLastname = req.body.lastname
    const newPhoneno = req.body.phoneno
    const newImportantdetails = req.body.importantdetails
    const newSdmi = req.body.sdmi
    const newSdmii = req.body.sdmii
    const newSdmiii = req.body.sdmiii
    const newSdpi = req.body.sdpi
    const newSdpii = req.body.sdpii
    const newSdc = req.body.sdc
    const newSdinci = req.body.sdinci
    const newSdincii = req.body.sdincii
    const newSsmi = req.body.ssmi
    const newSsmii = req.body.ssmii
    const newSsmiii = req.body.ssmiii
    const newSspi = req.body.sspi
    const newSspii = req.body.sspii
    const newSsc = req.body.ssc
    const newSsinci = req.body.ssinci
    const newSsincii = req.body.ssincii
    const newJsmi = req.body.jsmi
    const newJsmii = req.body.jsmii
    const newJsmiii = req.body.jsmiii
    const newJspi = req.body.jspi
    const newJspii = req.body.jspii
    const newJsc = req.body.jsc
    const newJsinci = req.body.jsinci
    const newJsincii = req.body.jsincii
    const newJdmi = req.body.jdmi
    const newJdmii = req.body.jdmii
    const newJdmiii = req.body.jdmiii
    const newJdpi = req.body.jdpi
    const newJdpii = req.body.jdpii
    const newJdc = req.body.jdc
    const newJdinci = req.body.jdinci
    const newJdincii = req.body.jdincii
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
        note.sdmi = newSdmi;
        note.sdmii = newSdmii;
        note.sdmiii = newSdmiii;
        note.sdpi = newSdpi;
        note.sdpii = newSdpii;
        note.sdc = newSdc;
        note.sdinci = newSdinci;
        note.sdincii = newSdincii;
        note.ssmi = newSsmi;
        note.ssmii = newSsmii;
        note.ssmiii = newSsmiii;
        note.sspi = newSspi;
        note.sspii = newSspii;
        note.ssc = newSsc;
        note.ssinci = newSsinci;
        note.ssincii = newSsincii;
        note.jsmi = newJsmi;
        note.jsmii = newJsmii;
        note.jsmiii = newJsmiii
        note.jspi = newJspi;
        note.jspii = newJspii;
        note.jsc = newJsc;
        note.jsinci = newJsinci;
        note.jsincii = newJsincii;
        note.jdmi = newJdmi;
        note.jdmii = newJdmii;
        note.jdmiii = newJdmiii;
        note.jdpi = newJdpi;
        note.jdpii = newJdpii;
        note.jdc = newJdc;
        note.jdinci = newJdinci;
        note.jdincii = newJdincii;

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