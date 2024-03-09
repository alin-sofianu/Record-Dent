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
//////////////////////////
// start of users stuff //
//////////////////////////
export async function getLoggedInUser(): Promise<User> {
    const response = await fetchData("https://record-dent-backend.onrender.com/api/users", { method: "GET", credentials: "include" });
    // const response = await fetchData("/api/users", { method: "GET", credentials: "include" });
    return response.json();
}

export interface SignUpCredentials {
    username: string,
    email: string,
    password: string,
}

export async function signUp(credentials: SignUpCredentials): Promise<User> {
    const response = await fetchData("https://record-dent-backend.onrender.com/api/users/signup",
        // const response = await fetchData("/api/users/signup",
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
        // const response = await fetchData("/api/users/login",
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
    // await fetchData("/api/users/logout", { method: "POST", credentials: "include" });
}
///////////////////////
// end of user stuff //
///////////////////////
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

    treat6a?: string,
    treat6b?: string,
    treat6c?: string,
    treat6d?: string,
    treat7a?: string,
    treat7b?: string,
    treat7c?: string,
    treat7d?: string,
    treat8a?: string,
    treat8b?: string,
    treat8c?: string,
    treat8d?: string,
    treat9a?: string,
    treat9b?: string,
    treat9c?: string,
    treat9d?: string,
    treat10a?: string,
    treat10b?: string,
    treat10c?: string,
    treat10d?: string,
    treat11a?: string,
    treat11b?: string,
    treat11c?: string,
    treat11d?: string,
    treat12a?: string,
    treat12b?: string,
    treat12c?: string,
    treat12d?: string,
    treat13a?: string,
    treat13b?: string,
    treat13c?: string,
    treat13d?: string,
    treat14a?: string,
    treat14b?: string,
    treat14c?: string,
    treat14d?: string,
    treat15a?: string,
    treat15b?: string,
    treat15c?: string,
    treat15d?: string,
    treat16a?: string,
    treat16b?: string,
    treat16c?: string,
    treat16d?: string,
    treat17a?: string,
    treat17b?: string,
    treat17c?: string,
    treat17d?: string,
    treat18a?: string,
    treat18b?: string,
    treat18c?: string,
    treat18d?: string,
    treat19a?: string,
    treat19b?: string,
    treat19c?: string,
    treat19d?: string,
    treat20a?: string,
    treat20b?: string,
    treat20c?: string,
    treat20d?: string,

    currentColor?: string,
    currentColorIndex?: string,
    control?: string,
    name?: string,
    select?: string,
}

export async function createNote(note: NoteInput): Promise<Note> {

    const response = await fetchData("https://record-dent-backend.onrender.com/api/notes",
        // const response = await fetchData("/api/notes",
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
        // const response = await fetchData("/api/notes/" + noteId,
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
        // await fetchData("/api/notes/" + noteId, {
        method: "DELETE",
        credentials: "include"
    })
}