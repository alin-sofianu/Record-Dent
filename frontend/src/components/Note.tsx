import styles from "../styles/Note.module.css"
import styleUtils from "../styles/utils.module.css"
import { Card } from "react-bootstrap"
import { Note as NoteModel } from "../models/note"
import { formatDate } from "../utils/formatDates";
import { MdDeleteForever } from "react-icons/md"

interface NoteProps {
    note: NoteModel,
    onNoteClicked: (note: NoteModel) => void,
    onDeleteNoteClicked: (note: NoteModel) => void,
    className?: string,
}

const Note = ({ note, onNoteClicked, onDeleteNoteClicked, className }: NoteProps) => {
    const { title, text, createdAt, updatedAt } = note;

    let createdUpdatedText: string;
    if (updatedAt > createdAt) {
        createdUpdatedText = "Actualizat la: " + formatDate(updatedAt)
    } else {
        createdUpdatedText = "Creat la: " + formatDate(createdAt)
    }

    return (
        <Card
            className={`${styles.noteCard} ${className}`}
            onClick={() => { onNoteClicked(note) }}
        >
            <Card.Body className={styles.cardBody}>
                <Card.Title className={`${styleUtils.flexCenter}`}>
                    {title}
                    <MdDeleteForever
                        className="ms-auto"
                        color="maroon"
                        onClick={(e) => {
                            onDeleteNoteClicked(note);
                            // this line makes click to not go through the delete btn, and also open the note
                            e.stopPropagation();
                        }}
                    />
                </Card.Title>
                <Card.Text className={styles.cardText}>{text}</Card.Text>
            </Card.Body>
            <Card.Footer>{createdUpdatedText}</Card.Footer>
        </Card>
    )
}

export default Note;