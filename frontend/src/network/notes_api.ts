import { ConflictError, UnauthorizedError } from "../errors/http_errors";
import { Note } from "../models/note"
import { User } from "../models/user"

async function fetchData(input: RequestInfo, init?: RequestInit) {
    const response = await fetch(input, init);
    if (response.ok) {
        return response;
    } else {
        const errorBody = await response.json();
        const errorMessage = errorBody.error;
        if (response.status === 401) {
            throw new UnauthorizedError(errorMessage);
        } else if (response.status === 409) {
            throw new ConflictError(errorMessage);
        } else {
            throw Error("Request failed with status: " + response.status + " message: " + errorMessage);
        }
    }
}
///////////////////////////
// start of users stuff
///////////////////////////
export async function getLoggedInUser(): Promise<User> {
    const response = await fetchData("https://record-dent-backend.onrender.com/api/users", { method: "GET", credentials: "include" });
    return response.json();
}

export interface SignUpCredentials {
    username: string,
    email: string,
    password: string,
}

export async function signUp(credentials: SignUpCredentials): Promise<User> {
    const response = await fetchData("https://record-dent-backend.onrender.com/api/users/signup",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(credentials),
        });
    return response.json();
}

export interface LoginCredentials {
    username: string,
    password: string,
}

export async function login(credentials: LoginCredentials): Promise<User> {
    const response = await fetchData("https://record-dent-backend.onrender.com/api/users/login",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(credentials),
            credentials: "include",
        });
    return response.json();
}

export async function logout() {
    await fetchData("https://record-dent-backend.onrender.com/api/users/logout", { method: "POST", credentials: "include" });
}
///////////////////////////
// end of user stuff
///////////////////////////
export async function fetchNotes(): Promise<Note[]> {
    const response = await fetchData("https://record-dent-backend.onrender.com/api/notes", { method: "GET", credentials: "include" })

    // this means return the json body of the response
    return response.json()
}

export interface NoteInput {
    firstname: string,
    lastname: string,
    phoneno: string,
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

export async function createNote(note: NoteInput): Promise<Note> {

    const response = await fetchData("https://record-dent-backend.onrender.com/api/notes",
        {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(note),
            credentials: "include",
        })
    return response.json()
}

export async function updateNote(noteId: String, note: NoteInput): Promise<Note> {
    const response = await fetchData("https://record-dent-backend.onrender.com/api/notes/" + noteId,
        {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(note),
            credentials: "include",
        })
    return response.json()
}

export async function deleteNote(noteId: string) {
    await fetchData("https://record-dent-backend.onrender.com/api/notes/" + noteId, {
        method: "DELETE",
        credentials: "include"
    })
}