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
    // const response = await fetchData("https://record-dent-backend.onrender.com/api/users", { method: "GET", credentials: "include" });
    const response = await fetchData("/api/users", { method: "GET", credentials: "include" });
    return response.json();
}

export interface SignUpCredentials {
    username: string,
    email: string,
    password: string,
}

export async function signUp(credentials: SignUpCredentials): Promise<User> {
    // const response = await fetchData("https://record-dent-backend.onrender.com/api/users/signup",
    const response = await fetchData("/api/users/signup",
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
    // const response = await fetchData("https://record-dent-backend.onrender.com/api/users/login",
    const response = await fetchData("/api/users/login",
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
    // await fetchData("https://record-dent-backend.onrender.com/api/users/logout", { method: "POST", credentials: "include" });
    await fetchData("/api/users/logout", { method: "POST", credentials: "include" });
}
///////////////////////////
// end of user stuff
///////////////////////////
export async function fetchNotes(): Promise<Note[]> {
    // const response = await fetchData("https://record-dent-backend.onrender.com/api/notes", { method: "GET", credentials: "include" })
    const response = await fetchData("/api/notes", { method: "GET", credentials: "include" })

    // this means return the json body of the response
    return response.json()
}

export interface NoteInput {
    firstname: string,
    lastname: string,
    phoneno: string,
    importantdetails?: string,
    datefirstvisit?: string,
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

export async function createNote(note: NoteInput): Promise<Note> {

    // const response = await fetchData("https://record-dent-backend.onrender.com/api/notes",
    const response = await fetchData("/api/notes",
        {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(note),
            credentials: "include",
        })
    return response.json()
}

export async function updateNote(noteId: String, note: NoteInput): Promise<Note> {
    // const response = await fetchData("https://record-dent-backend.onrender.com/api/notes/" + noteId,
    const response = await fetchData("/api/notes/" + noteId,
        {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(note),
            credentials: "include",
        })
    return response.json()
}

export async function deleteNote(noteId: string) {
    // await fetchData("https://record-dent-backend.onrender.com/api/notes/" + noteId, {
    await fetchData("/api/notes/" + noteId, {
        method: "DELETE",
        credentials: "include"
    })
}