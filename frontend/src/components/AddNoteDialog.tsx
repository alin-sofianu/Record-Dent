import { Form, Modal, Button } from "react-bootstrap";
import { Note } from "../models/note";
import { useForm } from "react-hook-form";
import { NoteInput } from "../network/notes_api";
import * as NotesApi from "../network/notes_api"

interface AddNoteDialogProps {
    onDismiss: () => void,
    onNoteSaved: (note: Note) => void,
}

const AddNoteDialog = ({ onDismiss, onNoteSaved }: AddNoteDialogProps) => {

    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<NoteInput>();

    async function onSubmit(input: NoteInput) {
        try {
            const noteResponse = await NotesApi.createNote(input)
            onNoteSaved(noteResponse)
        } catch (error) {
            console.error(error)
            alert(error)
        }
    }

    return (
        // here onHide={onDismiss} is a shorthand for onHide={() => onDismiss}
        // we can do this because it takes no arguments
        <Modal show onHide={onDismiss}>
            <Modal.Header closeButton>
                <Modal.Title>Adauga pacient</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form id="addNoteForm" onSubmit={handleSubmit(onSubmit)}>
                    <Form.Group className="mb-3">
                        <Form.Label>Adauga date personale</Form.Label>
                        <Form.Control
                            as='textarea'
                            rows={3}
                            placeholder="Date personale pacient..."
                            isInvalid={!!errors.title}
                            {...register("title", { required: "Date obligatorii." })}
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.title?.message}
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Adauga detalii importante</Form.Label>
                        <Form.Control
                            as='textarea'
                            rows={5}
                            placeholder="Detalii importante pacient..."
                            {...register("text")}
                        />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button
                    type="submit"
                    // this form="addNoteForm" attribute is to connect the <Button> to the <Form> above, because it lives outside.
                    // this is how you do it if you want to have the <Button> of type submit outside the <Form>.
                    form="addNoteForm"
                    disabled={isSubmitting}
                >
                    Adauga
                </Button>
            </Modal.Footer>
        </Modal>);
}

export default AddNoteDialog;