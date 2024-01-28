import { Note } from "../models/note"

async function fetchData(input: RequestInfo, init?: RequestInit) {
    const response = await fetch(input, init)

    // this if/else makes sure that 400 and 500 codes are treated as errors
    if (response.ok) {
        return response
    } else {
        const errorBody = await response.json()
        const errorMessage = errorBody.error
        throw Error(errorMessage)
    }
}

export async function fetchNotes(): Promise<Note[]> {
    const response = await fetchData("/api/notes", { method: "GET" })
    return response.json()
}

export interface NoteInput {
    title: string,
    text?: string,
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

export async function createNote(note: NoteInput): Promise<Note> {

    const response = await fetchData("/api/notes",
        {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(note)
        })
    return response.json()
}

export async function updateNote(noteId: String, note: NoteInput): Promise<Note> {
    const response = await fetchData("/api/notes/" + noteId,
        {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(note)
        })
    return response.json()
}

export async function deleteNote(noteId: string) {
    await fetchData("/api/notes/" + noteId, { method: "DELETE" })
}