import { Form, Modal, Button, Col, Container, Row, InputGroup } from "react-bootstrap";
import ListGroup from 'react-bootstrap/ListGroup';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { Note } from "../models/note";
import { useForm } from "react-hook-form";
import { NoteInput } from "../network/notes_api";
import * as NotesApi from "../network/notes_api"
import molar from "../images/molar.png"
import incisor from "../images/incisor.png"
import { VscWorkspaceTrusted, VscWorkspaceUntrusted } from "react-icons/vsc";
import { useState } from 'react';

interface AddEditNoteDialogProps {
    noteToEdit?: Note,
    onDismiss: () => void,
    // the name onNoteSaved is kept generic so it can be used for both 
    // creating and updating a note(AddEdit is now the name of this interface)
    onNoteSaved: (note: Note) => void,
}

const AddNoteDialog = ({ noteToEdit, onDismiss, onNoteSaved }: AddEditNoteDialogProps) => {
    const [currentColorIndex, setCurrentColorIndex] = useState(0);
    const colors = ['white', 'green', 'red'];

    const handleButtonClick = () => {
        const nextColorIndex = (currentColorIndex + 1) % colors.length;
        setCurrentColorIndex(nextColorIndex);
    };

    const currentColor = colors[currentColorIndex];

    // this construct is from react-hook-form library.
    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<NoteInput>({
        defaultValues: {
            // noteToEdit?.title returns the title, or undefined if noteToEdit is undefined; instead of error.
            // title: noteToEdit?.title || "",
            firstname: noteToEdit?.firstname || "",
            lastname: noteToEdit?.lastname || "",
            phoneno: noteToEdit?.phoneno || "",
            importantdetails: noteToEdit?.importantdetails || "",
            datefirstvisit: noteToEdit?.datefirstvisit || "",
            cnp: noteToEdit?.cnp || "",
            reason: noteToEdit?.reason || "",
            c1a: noteToEdit?.c1a || "",
            c1b: noteToEdit?.c1b || "",
            c1c: noteToEdit?.c1c || "",
            c1d: noteToEdit?.c1d || "",
            c1e: noteToEdit?.c1e || "",
            c1f: noteToEdit?.c1f || "",
            c1g: noteToEdit?.c1g || "",
            c1h: noteToEdit?.c1h || "",
            c2a: noteToEdit?.c2a || "",
            c2b: noteToEdit?.c2b || "",
            c2c: noteToEdit?.c2c || "",
            c2d: noteToEdit?.c2d || "",
            c2e: noteToEdit?.c2e || "",
            c2f: noteToEdit?.c2f || "",
            c2g: noteToEdit?.c2g || "",
            c2h: noteToEdit?.c2h || "",
            c3a: noteToEdit?.c3a || "",
            c3b: noteToEdit?.c3b || "",
            c3c: noteToEdit?.c3c || "",
            c3d: noteToEdit?.c3d || "",
            c3e: noteToEdit?.c3e || "",
            c3f: noteToEdit?.c3f || "",
            c3g: noteToEdit?.c3g || "",
            c3h: noteToEdit?.c3h || "",
            c4a: noteToEdit?.c4a || "",
            c4b: noteToEdit?.c4b || "",
            c4c: noteToEdit?.c4c || "",
            c4d: noteToEdit?.c4d || "",
            c4e: noteToEdit?.c4e || "",
            c4f: noteToEdit?.c4f || "",
            c4g: noteToEdit?.c4g || "",
            c4h: noteToEdit?.c4h || "",

        }
    });

    async function onSubmit(input: NoteInput) {
        try {
            let noteResponse: Note;

            if (noteToEdit) {
                noteResponse = await NotesApi.updateNote(noteToEdit._id, input)
            } else {
                noteResponse = await NotesApi.createNote(input)
            }

            onNoteSaved(noteResponse)
        } catch (error) {
            console.error(error)
            alert(error)
        }
    }

    return (
        // here onHide={onDismiss} is a shorthand for onHide={() => onDismiss}
        // we can do this because it takes no arguments
        <Modal
            show
            fullscreen
            onHide={onDismiss}
            aria-labelledby="example-custom-modal-styling-title"
            centered
        >
            <Modal.Header closeButton closeVariant="white" style={{ color: '#fff', backgroundColor: 'rgb(13, 110, 253)' }}>
                <Modal.Title>{noteToEdit ? "Actualizeaza pacient" : "Adauga pacient"}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form id="addEditNoteForm" onSubmit={handleSubmit(onSubmit)}>
                    <Form.Group className="mb-3">
                        <Form.Label><h6 className="fw-bold">Date personale:</h6></Form.Label>
                        <Row>
                            <Col>
                                <Form.Control
                                    className="border border-primary"
                                    as='textarea'
                                    rows={1}
                                    placeholder="Nume"
                                    isInvalid={!!errors.firstname}
                                    {...register("firstname", { required: "Date obligatorii." })}
                                />
                            </Col>
                            <Col>
                                <Form.Control
                                    className="border border-primary"
                                    as='textarea'
                                    rows={1}
                                    placeholder="Prenume"
                                    isInvalid={!!errors.firstname}
                                    {...register("lastname")}
                                />
                            </Col>
                            <Col>
                                <Form.Control
                                    className="border border-primary"
                                    as='textarea'
                                    rows={1}
                                    placeholder="Număr de telefon"
                                    isInvalid={!!errors.firstname}
                                    {...register("phoneno")}
                                />
                            </Col>
                            <Col>
                                <Form.Control
                                    className="border border-primary"
                                    as='textarea'
                                    rows={1}
                                    placeholder="CNP"
                                    isInvalid={!!errors.firstname}
                                    {...register("cnp")}
                                />
                            </Col>
                            <Col>
                                <Form.Control
                                    className="border border-primary"
                                    as='textarea'
                                    rows={1}
                                    placeholder="Dată prima vizită"
                                    isInvalid={!!errors.firstname}
                                    {...register("datefirstvisit")}
                                />
                            </Col>
                            <Form.Control.Feedback type="invalid">
                                {errors.firstname?.message}
                            </Form.Control.Feedback>
                        </Row>
                    </Form.Group>

                    <Container fluid="md" style={{ padding: "0px", maxWidth: '100%' }}>
                        <h5 className="fw-bold mt-5">Cadran I</h5>
                        <ListGroup>
                            <ListGroup.Item variant="primary" className="mb-3 mt-2">
                                <Row>
                                    <Col>

                                        <div style={{ backgroundColor: currentColor, padding: '20px', textAlign: 'center' }}>
                                            <h1>Color Cycling Component</h1>
                                            <button onClick={handleButtonClick}>Change Color</button>
                                        </div>

                                    </Col>


                                    <Col>
                                        <Form.Group>
                                            <InputGroup className="mb-2">
                                                <InputGroup.Text id="basic-addon1">
                                                    {(noteToEdit && noteToEdit?.c1e === '1')
                                                        ?
                                                        <Button
                                                            size='sm'
                                                            variant="danger"
                                                            onClick={(e) => e.preventDefault()}
                                                            style={{ marginRight: '7px' }}
                                                            className="active"
                                                        >
                                                            În lucru.
                                                        </Button>
                                                        :
                                                        <></>
                                                    }
                                                    {noteToEdit?.c1e === "2" ?
                                                        <Button
                                                            size='sm'
                                                            variant="success"
                                                            onClick={(e) => e.preventDefault()}
                                                            style={{ marginRight: '7px' }}
                                                            className="active"
                                                        >
                                                            Terminat.
                                                        </Button>
                                                        :
                                                        <></>
                                                    }
                                                    {(() => {
                                                        switch (noteToEdit?.c1e) {
                                                            case '1':
                                                                return <VscWorkspaceUntrusted
                                                                    className="ms-auto"
                                                                    color="red"
                                                                    style={{ width: '1.8em', height: '1.8em' }} />
                                                            case '2':
                                                                return <VscWorkspaceTrusted
                                                                    className="ms-auto"
                                                                    color="green"
                                                                    style={{ width: '1.8em', height: '1.8em' }} />
                                                            default:
                                                                return <img src={incisor} alt="incisor" width={26} height={26} />
                                                        }
                                                    })()}
                                                </InputGroup.Text>
                                                <FloatingLabel
                                                    controlId="floatingInput"
                                                    label="Premolar II"
                                                >
                                                    <Form.Control
                                                        as='textarea'
                                                        rows={1}
                                                        placeholder="Premolar II"
                                                        {...register("c1e")}
                                                    />
                                                </FloatingLabel>
                                            </InputGroup>
                                        </Form.Group>
                                    </Col>

                                </Row>
                            </ListGroup.Item>
                        </ListGroup>
                    </Container>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button
                    variant="primary"
                    type="submit"
                    // this form="addNoteForm" attribute is to connect the <Button> to the <Form> above, because it lives outside.
                    // this is how you do it if you want to have the <Button> of type submit outside the <Form>.
                    form="addEditNoteForm"
                    disabled={isSubmitting}
                >
                    {noteToEdit ? "Actualizeaza" : "Adauga"}
                </Button>
            </Modal.Footer>
        </Modal >);
}

export default AddNoteDialog;
