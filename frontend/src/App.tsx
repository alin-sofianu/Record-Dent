import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Row, Spinner } from 'react-bootstrap';
import { Note as NoteModel } from "./models/note";
import Note from './components/Note';
import styles from "./styles/NotesPage.module.css"
import styleUtils from "./styles/utils.module.css"
import * as NotesApi from "./network/notes_api"
import AddNoteDialog from './components/AddEditNoteDialog';
import { ImAddressBook } from "react-icons/im";


function App() {
	const [notes, setNotes] = useState<NoteModel[]>([])
	const [notesLoading, setNotesLoading] = useState(true)
	const [showNotesLoadingError, setShowNotesLoadingError] = useState(false)

	const [showAddNoteDialog, setShowAddNoteDialog] = useState(false)
	const [noteToEdit, setNoteToEdit] = useState<NoteModel | null>(null)

	useEffect(() => {
		async function loadNotes() {
			try {
				setShowNotesLoadingError(false);
				setNotesLoading(true);

				const notes = await NotesApi.fetchNotes();
				setNotes(notes)
			} catch (error) {
				console.error(error)
				setShowNotesLoadingError(true)
			} finally {
				setNotesLoading(false);
			}
		}
		loadNotes()
	}, [])

	async function deleteNote(note: NoteModel) {
		try {
			await NotesApi.deleteNote(note._id)
			setNotes(notes.filter(existingNote => existingNote._id !== note._id))
		} catch (error) {
			console.log(error);
			alert(error)
		}
	}

	const notesGrid = <Row xs={1} md={2} lg={3} className={`g-4 ${styles.notesGrid}`}>
		{notes.map((note) =>
			<Col key={note._id}>
				<Note
					note={note}
					className={styles.note}
					onNoteClicked={(note) => { setNoteToEdit(note) }}
					onDeleteNoteClicked={deleteNote}
				/>
			</Col>
		)}
	</Row>

	return (
		<Container className={styles.notesPage}>
			<Button
				onClick={() => setShowAddNoteDialog(true)}
				className={`mb-4 ${styleUtils.blockCenter} ${styleUtils.flexCenter}`}
			>
				<ImAddressBook style={{ marginRight: "4px" }} />
				Adauga pacient
			</Button>
			{notesLoading && <Spinner animation='border' variant='primary' />}
			{showNotesLoadingError && <p>Something went wrong, please refresh the page.</p>}
			{/* aici sunt folosite <></> pt a putea crea {} in alte {} */}
			{!notesLoading && !showNotesLoadingError &&
				<>
					{notes.length > 0 ?
						notesGrid :
						<h3 style={{ color: '#343A40', fontFamily: 'Helvetica Neue', fontSize: '50px', fontWeight: 'bold', letterSpacing: "-1px", textAlign: "center", marginTop: "20%" }}>Nu exista pacienti.</h3>
					}
				</>
			}


			{
				showAddNoteDialog &&
				<AddNoteDialog
					onDismiss={() => setShowAddNoteDialog(false)}
					// this is for what happens after save button is clicked on the add note modal
					onNoteSaved={(newNote) => {
						setNotes([...notes, newNote])
						setShowAddNoteDialog(false)
					}}
				/>
			}
			{
				noteToEdit &&
				<AddNoteDialog
					noteToEdit={noteToEdit}
					onDismiss={() => setNoteToEdit(null)}

					onNoteSaved={(updatedNote) => {
						setNotes(notes.map(existingNote => existingNote._id === updatedNote._id ? updatedNote : existingNote))
						setNoteToEdit(null)
					}}
				/>
			}
		</Container >
	);
}

export default App;
