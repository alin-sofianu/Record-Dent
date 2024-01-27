import styles from "../styles/Note.module.css"
import { Card } from "react-bootstrap"
import { Note as NoteModel } from "../models/note"
import { formatDate } from "../utils/formatDates";

interface NoteProps {
    note: NoteModel,
    className?: string,
}

const Note = ({ note, className }: NoteProps) => {
    const { title, text, createdAt, updatedAt } = note;

    let createdUpdatedText: string;
    if (updatedAt > createdAt) {
        createdUpdatedText = "Reactualizat la: " + formatDate(updatedAt)
    } else {
        createdUpdatedText = "Creat la: " + formatDate(createdAt)
    }

    return (
        <Card className={`${styles.noteCard} ${className}`}>
            <Card.Body className={styles.cardBody}>
                <Card.Title>{title}</Card.Title>
                <Card.Text className={styles.cardText}>{text}</Card.Text>
            </Card.Body>
            <Card.Footer>{createdUpdatedText}</Card.Footer>
        </Card>
    )
}

export default Note