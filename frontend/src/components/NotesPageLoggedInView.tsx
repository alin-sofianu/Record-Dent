import { SetStateAction, useEffect, useState } from 'react';
import { Button, Col, Row, Spinner } from "react-bootstrap";
import { Note as NoteModel } from '../models/note';
import * as NotesApi from "../network/notes_api";
import styles from "../styles/NotesPage.module.css";
import styleUtils from "../styles/utils.module.css";
import AddEditNoteDialogTEST from "./AddEditNoteDialogTEST";
import Note from './Note';

const NotesPageLoggedInView = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const [notes, setNotes] = useState<NoteModel[]>([]);
    const [notesLoading, setNotesLoading] = useState(true);
    const [showNotesLoadingError, setShowNotesLoadingError] = useState(false);

    const [showAddNoteDialog, setShowAddNoteDialog] = useState(false);
    const [noteToEdit, setNoteToEdit] = useState<NoteModel | null>(null);

    const handleSearchTermChange = (event: { target: { value: SetStateAction<string>; }; }) => {
        setSearchTerm(event.target.value);
    };

    useEffect(() => {
        async function loadNotes() {
            try {
                setShowNotesLoadingError(false);
                setNotesLoading(true);
                const notes = await NotesApi.fetchNotes();
                setNotes(notes);
            } catch (error) {
                console.error(error);
                setShowNotesLoadingError(true);
            } finally {
                setNotesLoading(false);
            }
        }
        loadNotes();
    }, []);

    async function deleteNote(note: NoteModel) {
        try {
            await NotesApi.deleteNote(note._id);
            setNotes(notes.filter(existingNote => existingNote._id !== note._id));
        } catch (error) {
            console.error(error);
            alert(error);
        }
    }

    const notesGrid = (
        <Row xs={1} md={2} xl={3} className={`g-4 ${styles.notesGrid}`}>
            {notes
                .filter((note) =>
                    note.firstname.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    note.lastname.toLowerCase().includes(searchTerm.toLowerCase())
                )
                .map((note) => (
                    <Col key={note._id}>
                        <Note
                            note={note}
                            className={styles.note}
                            onNoteClicked={setNoteToEdit}
                            onDeleteNoteClicked={deleteNote}
                        />
                    </Col>
                ))}
        </Row>
    );
    return (
        <>
            <div
                style={{ paddingBottom: '12px', borderBottom: '1px solid #8D949E' }}
                className={`mb-5 border-bottom-primary ${styleUtils.blockCenter} ${styleUtils.flexCenter}`}
            >
                <input
                    className={`${styles.input} border border-success`}
                    type="text"
                    placeholder=" Caută pacient..."
                    value={searchTerm}
                    onChange={handleSearchTermChange}
                />
                <Button
                    className={`${styleUtils.blockCenter} ${styleUtils.flexCenter} ${styleUtils.blueBg} border-0`}
                    onClick={() => setShowAddNoteDialog(true)}>
                    &#10010; Adaugă pacient
                </Button>

            </div>
            <div>
                {notesLoading && <Spinner animation='border' variant='primary' />}
                {showNotesLoadingError && <p>Something went wrong. Please refresh the page.</p>}
                {!notesLoading && !showNotesLoadingError &&
                    <>
                        {notes.length > 0
                            ? notesGrid
                            : <p>You don't have any notes yet</p>
                        }
                    </>
                }
                {showAddNoteDialog &&
                    <AddEditNoteDialogTEST
                        onDismiss={() => setShowAddNoteDialog(false)}
                        onNoteSaved={(newNote) => {
                            setNotes([...notes, newNote]);
                            setShowAddNoteDialog(false);
                        }}
                    />
                }
                {noteToEdit &&
                    <AddEditNoteDialogTEST
                        noteToEdit={noteToEdit}
                        onDismiss={() => setNoteToEdit(null)}
                        onNoteSaved={(updatedNote) => {
                            setNotes(notes.map(existingNote => existingNote._id === updatedNote._id ? updatedNote : existingNote));
                            setNoteToEdit(null);
                        }}
                    />
                }
            </div>
        </>
    );
}

export default NotesPageLoggedInView;