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
    c1aProgress?: string,
    c1bProgress?: string,
    c1cProgress?: string,
    c1dProgress?: string,
    c1eProgress?: string,
    c1fProgress?: string,
    c1gProgress?: string,
    c1hProgress?: string,
    c2aProgress?: string,
    c2bProgress?: string,
    c2cProgress?: string,
    c2dProgress?: string,
    c2eProgress?: string,
    c2fProgress?: string,
    c2gProgress?: string,
    c2hProgress?: string,
    c3aProgress?: string,
    c3bProgress?: string,
    c3cProgress?: string,
    c3dProgress?: string,
    c3eProgress?: string,
    c3fProgress?: string,
    c3gProgress?: string,
    c3hProgress?: string,
    c4aProgress?: string,
    c4bProgress?: string,
    c4cProgress?: string,
    c4dProgress?: string,
    c4eProgress?: string,
    c4fProgress?: string,
    c4gProgress?: string,
    c4hProgress?: string,
    currentColor?: string,
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