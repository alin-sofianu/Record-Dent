import { Form, Modal, Button, Col, Container, Row, InputGroup } from "react-bootstrap";
import ListGroup from 'react-bootstrap/ListGroup';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { Note } from "../models/note";
import { useForm } from "react-hook-form";
import { NoteInput } from "../network/notes_api";
import * as NotesApi from "../network/notes_api"
import canine from "../images/canine.png"
import molar from "../images/molar.png"
import premolar from "../images/premolar.png"
import incisor from "../images/incisor.png"
import { MdAddTask } from "react-icons/md"
// import GroupTeethInput from "./form/GroupTeethInput";
interface AddEditNoteDialogProps {
    noteToEdit?: Note,
    onDismiss: () => void,
    // the name onNoteSaved is kept generic so it can be used for both 
    // creating and updating a note(AddEdit is now the name of this interface)
    onNoteSaved: (note: Note) => void,
}

const AddNoteDialog = ({ noteToEdit, onDismiss, onNoteSaved }: AddEditNoteDialogProps) => {

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
                <Modal.Title>{noteToEdit ? "Actualizează pacient" : "Adaugă pacient"}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form id="addEditNoteForm" onSubmit={handleSubmit(onSubmit)}>
                    <Form.Group className="mb-3">
                        <Form.Label><h6 className="fw-bold">Date personale:</h6></Form.Label>
                        <Row>
                            <Col>
                                <Form.Control
                                    as='textarea'
                                    rows={1}
                                    placeholder="Nume"
                                    isInvalid={!!errors.firstname}
                                    {...register("firstname", { required: "Date obligatorii." })}
                                />
                            </Col>
                            <Col>
                                <Form.Control
                                    as='textarea'
                                    rows={1}
                                    placeholder="Prenume"
                                    isInvalid={!!errors.firstname}
                                    {...register("lastname")}
                                />
                            </Col>
                            <Col>
                                <Form.Control
                                    as='textarea'
                                    rows={1}
                                    placeholder="Număr de telefon"
                                    isInvalid={!!errors.firstname}
                                    {...register("phoneno")}
                                />
                            </Col>
                            <Col>
                                <Form.Control
                                    as='textarea'
                                    rows={1}
                                    placeholder="CNP"
                                    isInvalid={!!errors.firstname}
                                    {...register("cnp")}
                                />
                            </Col>
                            <Col>
                                <Form.Control
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

                    <Form.Group className="mb-4">
                        <Form.Label><h6 className="fw-bold">Motivele prezentării:</h6></Form.Label>
                        <Form.Control
                            as='textarea'
                            rows={3}
                            placeholder="Adaugă motivele prezentării..."
                            {...register("reason")}
                        />
                    </Form.Group>

                    <Form.Group className="mb-4">
                        <Form.Label><h6 className="fw-bold">Detalii importante:</h6></Form.Label>
                        <Form.Control
                            as='textarea'
                            rows={3}
                            placeholder="Adaugă detalii importante pacient..."
                            {...register("importantdetails")}
                        />
                    </Form.Group>

                    <Container fluid="md" style={{ padding: "0px", maxWidth: '100%' }}>
                        <h5 className="fw-bold mt-5">Cadran I</h5>

                        <ListGroup>
                            <ListGroup.Item variant="primary" className="mb-3 mt-2">
                                <Row>
                                    <Col>
                                        <Form.Group>
                                            <InputGroup className="mb-4 mt-2">
                                                <InputGroup.Text id="basic-addon1">
                                                    <img src={incisor} alt="incisor" width={26} height={26} />
                                                    {(noteToEdit && noteToEdit.c1a?.length! > 0)
                                                        ?
                                                        <MdAddTask
                                                            className="ms-auto"
                                                            color="green"
                                                            style={{ width: '1.8em', height: '1.8em' }}
                                                        />
                                                        :
                                                        <></>
                                                    }
                                                </InputGroup.Text>
                                                <FloatingLabel
                                                    controlId="floatingInput"
                                                    label="Incisiv I"
                                                >
                                                    <Form.Control
                                                        as='textarea'
                                                        rows={1}
                                                        placeholder="Incisiv I"
                                                        {...register("c1a")}
                                                    />
                                                </FloatingLabel>
                                            </InputGroup>
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group>
                                            <InputGroup className="mb-3 mt-2">
                                                <InputGroup.Text id="basic-addon1">
                                                    <img src={incisor} alt="incisor" width={26} height={26} />
                                                    {(noteToEdit && noteToEdit.c1b?.length! > 0)
                                                        ?
                                                        <MdAddTask
                                                            className="ms-auto"
                                                            color="green"
                                                            style={{ width: '1.8em', height: '1.8em' }}
                                                        />
                                                        :
                                                        <></>
                                                    }
                                                </InputGroup.Text>
                                                <FloatingLabel
                                                    controlId="floatingInput"
                                                    label="Incisiv II"
                                                >
                                                    <Form.Control
                                                        as='textarea'
                                                        rows={1}
                                                        placeholder="Incisiv II"
                                                        {...register("c1b")}
                                                    />
                                                </FloatingLabel>
                                            </InputGroup>
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group>
                                            <InputGroup className="mb-3 mt-2">
                                                <InputGroup.Text id="basic-addon1">
                                                    <img src={canine} alt="canine" width={26} height={26} />
                                                    {(noteToEdit && noteToEdit.c1c?.length! > 0)
                                                        ?
                                                        <MdAddTask
                                                            className="ms-auto"
                                                            color="green"
                                                            style={{ width: '1.8em', height: '1.8em' }}
                                                        />
                                                        :
                                                        <></>
                                                    }
                                                </InputGroup.Text>
                                                <FloatingLabel
                                                    controlId="floatingInput"
                                                    label="Canin"
                                                >
                                                    <Form.Control
                                                        as='textarea'
                                                        rows={1}
                                                        placeholder="Canin"
                                                        {...register("c1c")}
                                                    />
                                                </FloatingLabel>
                                            </InputGroup>
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group>
                                            <InputGroup className="mb-3 mt-2">
                                                <InputGroup.Text id="basic-addon1">
                                                    <img src={premolar} alt="premolar" width={26} height={26} />
                                                    {(noteToEdit && noteToEdit.c1d?.length! > 0)
                                                        ?
                                                        <MdAddTask
                                                            className="ms-auto"
                                                            color="green"
                                                            style={{ width: '1.8em', height: '1.8em' }}
                                                        />
                                                        :
                                                        <></>
                                                    }
                                                </InputGroup.Text>
                                                <FloatingLabel
                                                    controlId="floatingInput"
                                                    label="Premolar I"
                                                >
                                                    <Form.Control
                                                        as='textarea'
                                                        rows={1}
                                                        placeholder="Premolar I"
                                                        {...register("c1d")}
                                                    />
                                                </FloatingLabel>
                                            </InputGroup>
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Form.Group>
                                            <InputGroup className="mb-2">
                                                <InputGroup.Text id="basic-addon1">
                                                    <img src={premolar} alt="premolar" width={26} height={26} />
                                                    {(noteToEdit && noteToEdit.c1e?.length! > 0)
                                                        ?
                                                        <MdAddTask
                                                            className="ms-auto"
                                                            color="green"
                                                            style={{ width: '1.8em', height: '1.8em' }}
                                                        />
                                                        :
                                                        <></>
                                                    }
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
                                    <Col>
                                        <Form.Group>
                                            <InputGroup className="mb-0">
                                                <InputGroup.Text id="basic-addon1">
                                                    <img src={molar} alt="molar" width={26} height={26} />
                                                    {(noteToEdit && noteToEdit.c1f?.length! > 0)
                                                        ?
                                                        <MdAddTask
                                                            className="ms-auto"
                                                            color="green"
                                                            style={{ width: '1.8em', height: '1.8em' }}
                                                        />
                                                        :
                                                        <></>
                                                    }
                                                </InputGroup.Text>
                                                <FloatingLabel
                                                    controlId="floatingInput"
                                                    label="Molar I"
                                                >
                                                    <Form.Control
                                                        as='textarea'
                                                        rows={1}
                                                        placeholder="Molar I"
                                                        {...register("c1f")}
                                                    />
                                                </FloatingLabel>
                                            </InputGroup>
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group>
                                            <InputGroup className="mb-0">
                                                <InputGroup.Text id="basic-addon1">
                                                    <img src={molar} alt="molar" width={26} height={26} />
                                                    {(noteToEdit && noteToEdit.c1g?.length! > 0)
                                                        ?
                                                        <MdAddTask
                                                            className="ms-auto"
                                                            color="green"
                                                            style={{ width: '1.8em', height: '1.8em' }}
                                                        />
                                                        :
                                                        <></>
                                                    }
                                                </InputGroup.Text>
                                                <FloatingLabel
                                                    controlId="floatingInput"
                                                    label="Molar II"
                                                >
                                                    <Form.Control
                                                        as='textarea'
                                                        rows={1}
                                                        placeholder="Molar II"
                                                        {...register("c1g")}
                                                    />
                                                </FloatingLabel>
                                            </InputGroup>
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group>
                                            <InputGroup className="mb-0">
                                                <InputGroup.Text id="basic-addon1">
                                                    <img src={molar} alt="molar" width={26} height={26} />
                                                    {(noteToEdit && noteToEdit.c1h?.length! > 0)
                                                        ?
                                                        <MdAddTask
                                                            className="ms-auto"
                                                            color="green"
                                                            style={{ width: '1.8em', height: '1.8em' }}
                                                        />
                                                        :
                                                        <></>
                                                    }
                                                </InputGroup.Text>
                                                <FloatingLabel
                                                    controlId="floatingInput"
                                                    label="Molar III"
                                                >
                                                    <Form.Control
                                                        as='textarea'
                                                        rows={1}
                                                        placeholder="Molar III"
                                                        {...register("c1h")}
                                                    />
                                                </FloatingLabel>
                                            </InputGroup>
                                        </Form.Group>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                        </ListGroup>
                        <h5 className="fw-bold mt-3">Cadran II</h5>
                        <ListGroup>
                            <ListGroup.Item variant="primary" className="mb-3 mt-2">
                                <Row>
                                    <Col>
                                        <Form.Group>
                                            <InputGroup className="mb-4 mt-2">
                                                <InputGroup.Text id="basic-addon1">
                                                    <img src={incisor} alt="incisor" width={26} height={26} />
                                                    {(noteToEdit && noteToEdit.c2a?.length! > 0)
                                                        ?
                                                        <MdAddTask
                                                            className="ms-auto"
                                                            color="green"
                                                            style={{ width: '1.8em', height: '1.8em' }}
                                                        />
                                                        :
                                                        <></>
                                                    }
                                                </InputGroup.Text>
                                                <FloatingLabel
                                                    controlId="floatingInput"
                                                    label="Incisiv I"
                                                >
                                                    <Form.Control
                                                        as='textarea'
                                                        rows={1}
                                                        placeholder="Incisiv I"
                                                        {...register("c2a")}
                                                    />
                                                </FloatingLabel>
                                            </InputGroup>
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group>
                                            <InputGroup className="mb-3 mt-2">
                                                <InputGroup.Text id="basic-addon1">
                                                    <img src={incisor} alt="incisor" width={26} height={26} />
                                                    {(noteToEdit && noteToEdit.c2b?.length! > 0)
                                                        ?
                                                        <MdAddTask
                                                            className="ms-auto"
                                                            color="green"
                                                            style={{ width: '1.8em', height: '1.8em' }}
                                                        />
                                                        :
                                                        <></>
                                                    }
                                                </InputGroup.Text>
                                                <FloatingLabel
                                                    controlId="floatingInput"
                                                    label="Incisiv II"
                                                >
                                                    <Form.Control
                                                        as='textarea'
                                                        rows={1}
                                                        placeholder="Incisiv II"
                                                        {...register("c2b")}
                                                    />
                                                </FloatingLabel>
                                            </InputGroup>
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group>
                                            <InputGroup className="mb-3 mt-2">
                                                <InputGroup.Text id="basic-addon1">
                                                    <img src={canine} alt="canine" width={26} height={26} />
                                                    {(noteToEdit && noteToEdit.c2c?.length! > 0)
                                                        ?
                                                        <MdAddTask
                                                            className="ms-auto"
                                                            color="green"
                                                            style={{ width: '1.8em', height: '1.8em' }}
                                                        />
                                                        :
                                                        <></>
                                                    }
                                                </InputGroup.Text>
                                                <FloatingLabel
                                                    controlId="floatingInput"
                                                    label="Canin"
                                                >
                                                    <Form.Control
                                                        as='textarea'
                                                        rows={1}
                                                        placeholder="Canin"
                                                        {...register("c2c")}
                                                    />
                                                </FloatingLabel>
                                            </InputGroup>
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group>
                                            <InputGroup className="mb-3 mt-2">
                                                <InputGroup.Text id="basic-addon1">
                                                    <img src={premolar} alt="premolar" width={26} height={26} />
                                                    {(noteToEdit && noteToEdit.c2d?.length! > 0)
                                                        ?
                                                        <MdAddTask
                                                            className="ms-auto"
                                                            color="green"
                                                            style={{ width: '1.8em', height: '1.8em' }}
                                                        />
                                                        :
                                                        <></>
                                                    }
                                                </InputGroup.Text>
                                                <FloatingLabel
                                                    controlId="floatingInput"
                                                    label="Premolar I"
                                                >
                                                    <Form.Control
                                                        as='textarea'
                                                        rows={1}
                                                        placeholder="Premolar I"
                                                        {...register("c2d")}
                                                    />
                                                </FloatingLabel>
                                            </InputGroup>
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Form.Group>
                                            <InputGroup className="mb-2">
                                                <InputGroup.Text id="basic-addon1">
                                                    <img src={premolar} alt="premolar" width={26} height={26} />
                                                    {(noteToEdit && noteToEdit.c2e?.length! > 0)
                                                        ?
                                                        <MdAddTask
                                                            className="ms-auto"
                                                            color="green"
                                                            style={{ width: '1.8em', height: '1.8em' }}
                                                        />
                                                        :
                                                        <></>
                                                    }
                                                </InputGroup.Text>
                                                <FloatingLabel
                                                    controlId="floatingInput"
                                                    label="Premolar II"
                                                >
                                                    <Form.Control
                                                        as='textarea'
                                                        rows={1}
                                                        placeholder="Premolar II"
                                                        {...register("c2e")}
                                                    />
                                                </FloatingLabel>
                                            </InputGroup>
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group>
                                            <InputGroup className="mb-0">
                                                <InputGroup.Text id="basic-addon1">
                                                    <img src={molar} alt="molar" width={26} height={26} />
                                                    {(noteToEdit && noteToEdit.c2f?.length! > 0)
                                                        ?
                                                        <MdAddTask
                                                            className="ms-auto"
                                                            color="green"
                                                            style={{ width: '1.8em', height: '1.8em' }}
                                                        />
                                                        :
                                                        <></>
                                                    }
                                                </InputGroup.Text>
                                                <FloatingLabel
                                                    controlId="floatingInput"
                                                    label="Molar I"
                                                >
                                                    <Form.Control
                                                        as='textarea'
                                                        rows={1}
                                                        placeholder="Molar I"
                                                        {...register("c2f")}
                                                    />
                                                </FloatingLabel>
                                            </InputGroup>
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group>
                                            <InputGroup className="mb-0">
                                                <InputGroup.Text id="basic-addon1">
                                                    <img src={molar} alt="molar" width={26} height={26} />
                                                    {(noteToEdit && noteToEdit.c2g?.length! > 0)
                                                        ?
                                                        <MdAddTask
                                                            className="ms-auto"
                                                            color="green"
                                                            style={{ width: '1.8em', height: '1.8em' }}
                                                        />
                                                        :
                                                        <></>
                                                    }
                                                </InputGroup.Text>
                                                <FloatingLabel
                                                    controlId="floatingInput"
                                                    label="Molar II"
                                                >
                                                    <Form.Control
                                                        as='textarea'
                                                        rows={1}
                                                        placeholder="Molar II"
                                                        {...register("c2g")}
                                                    />
                                                </FloatingLabel>
                                            </InputGroup>
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group>
                                            <InputGroup className="mb-0">
                                                <InputGroup.Text id="basic-addon1">
                                                    <img src={molar} alt="molar" width={26} height={26} />
                                                    {(noteToEdit && noteToEdit.c2h?.length! > 0)
                                                        ?
                                                        <MdAddTask
                                                            className="ms-auto"
                                                            color="green"
                                                            style={{ width: '1.8em', height: '1.8em' }}
                                                        />
                                                        :
                                                        <></>
                                                    }
                                                </InputGroup.Text>
                                                <FloatingLabel
                                                    controlId="floatingInput"
                                                    label="Molar III"
                                                >
                                                    <Form.Control
                                                        as='textarea'
                                                        rows={1}
                                                        placeholder="Molar III"
                                                        {...register("c2h")}
                                                    />
                                                </FloatingLabel>
                                            </InputGroup>
                                        </Form.Group>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                        </ListGroup>
                        <h5 className="fw-bold mt-3">Cadran IV</h5>
                        <ListGroup>
                            <ListGroup.Item variant="primary" className="mb-3 mt-2">
                                <Row>
                                    <Col>
                                        <Form.Group>
                                            <InputGroup className="mb-4 mt-2">
                                                <InputGroup.Text id="basic-addon1">
                                                    <img src={incisor} alt="incisor" width={26} height={26} />
                                                    {(noteToEdit && noteToEdit.c3a?.length! > 0)
                                                        ?
                                                        <MdAddTask
                                                            className="ms-auto"
                                                            color="green"
                                                            style={{ width: '1.8em', height: '1.8em' }}
                                                        />
                                                        :
                                                        <></>
                                                    }
                                                </InputGroup.Text>
                                                <FloatingLabel
                                                    controlId="floatingInput"
                                                    label="Incisiv I"
                                                >
                                                    <Form.Control
                                                        as='textarea'
                                                        rows={1}
                                                        placeholder="Incisiv I"
                                                        {...register("c3a")}
                                                    />
                                                </FloatingLabel>
                                            </InputGroup>
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group>
                                            <InputGroup className="mb-3 mt-2">
                                                <InputGroup.Text id="basic-addon1">
                                                    <img src={incisor} alt="incisor" width={26} height={26} />
                                                    {(noteToEdit && noteToEdit.c3b?.length! > 0)
                                                        ?
                                                        <MdAddTask
                                                            className="ms-auto"
                                                            color="green"
                                                            style={{ width: '1.8em', height: '1.8em' }}
                                                        />
                                                        :
                                                        <></>
                                                    }
                                                </InputGroup.Text>
                                                <FloatingLabel
                                                    controlId="floatingInput"
                                                    label="Incisiv II"
                                                >
                                                    <Form.Control
                                                        as='textarea'
                                                        rows={1}
                                                        placeholder="Incisiv II"
                                                        {...register("c3b")}
                                                    />
                                                </FloatingLabel>
                                            </InputGroup>
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group>
                                            <InputGroup className="mb-3 mt-2">
                                                <InputGroup.Text id="basic-addon1">
                                                    <img src={canine} alt="canine" width={26} height={26} />
                                                    {(noteToEdit && noteToEdit.c3c?.length! > 0)
                                                        ?
                                                        <MdAddTask
                                                            className="ms-auto"
                                                            color="green"
                                                            style={{ width: '1.8em', height: '1.8em' }}
                                                        />
                                                        :
                                                        <></>
                                                    }
                                                </InputGroup.Text>
                                                <FloatingLabel
                                                    controlId="floatingInput"
                                                    label="Canin"
                                                >
                                                    <Form.Control
                                                        as='textarea'
                                                        rows={1}
                                                        placeholder="Canin"
                                                        {...register("c3c")}
                                                    />
                                                </FloatingLabel>
                                            </InputGroup>
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group>
                                            <InputGroup className="mb-3 mt-2">
                                                <InputGroup.Text id="basic-addon1">
                                                    <img src={premolar} alt="premolar" width={26} height={26} />
                                                    {(noteToEdit && noteToEdit.c3d?.length! > 0)
                                                        ?
                                                        <MdAddTask
                                                            className="ms-auto"
                                                            color="green"
                                                            style={{ width: '1.8em', height: '1.8em' }}
                                                        />
                                                        :
                                                        <></>
                                                    }
                                                </InputGroup.Text>
                                                <FloatingLabel
                                                    controlId="floatingInput"
                                                    label="Premolar I"
                                                >
                                                    <Form.Control
                                                        as='textarea'
                                                        rows={1}
                                                        placeholder="Premolar I"
                                                        {...register("c3d")}
                                                    />
                                                </FloatingLabel>
                                            </InputGroup>
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Form.Group>
                                            <InputGroup className="mb-2">
                                                <InputGroup.Text id="basic-addon1">
                                                    <img src={premolar} alt="premolar" width={26} height={26} />
                                                    {(noteToEdit && noteToEdit.c3e?.length! > 0)
                                                        ?
                                                        <MdAddTask
                                                            className="ms-auto"
                                                            color="green"
                                                            style={{ width: '1.8em', height: '1.8em' }}
                                                        />
                                                        :
                                                        <></>
                                                    }
                                                </InputGroup.Text>
                                                <FloatingLabel
                                                    controlId="floatingInput"
                                                    label="Premolar II"
                                                >
                                                    <Form.Control
                                                        as='textarea'
                                                        rows={1}
                                                        placeholder="Premolar II"
                                                        {...register("c3e")}
                                                    />
                                                </FloatingLabel>
                                            </InputGroup>
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group>
                                            <InputGroup className="mb-0">
                                                <InputGroup.Text id="basic-addon1">
                                                    <img src={molar} alt="molar" width={26} height={26} />
                                                    {(noteToEdit && noteToEdit.c3f?.length! > 0)
                                                        ?
                                                        <MdAddTask
                                                            className="ms-auto"
                                                            color="green"
                                                            style={{ width: '1.8em', height: '1.8em' }}
                                                        />
                                                        :
                                                        <></>
                                                    }
                                                </InputGroup.Text>
                                                <FloatingLabel
                                                    controlId="floatingInput"
                                                    label="Molar I"
                                                >
                                                    <Form.Control
                                                        as='textarea'
                                                        rows={1}
                                                        placeholder="Molar I"
                                                        {...register("c3f")}
                                                    />
                                                </FloatingLabel>
                                            </InputGroup>
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group>
                                            <InputGroup className="mb-0">
                                                <InputGroup.Text id="basic-addon1">
                                                    <img src={molar} alt="molar" width={26} height={26} />
                                                    {(noteToEdit && noteToEdit.c3g?.length! > 0)
                                                        ?
                                                        <MdAddTask
                                                            className="ms-auto"
                                                            color="green"
                                                            style={{ width: '1.8em', height: '1.8em' }}
                                                        />
                                                        :
                                                        <></>
                                                    }
                                                </InputGroup.Text>
                                                <FloatingLabel
                                                    controlId="floatingInput"
                                                    label="Molar II"
                                                >
                                                    <Form.Control
                                                        as='textarea'
                                                        rows={1}
                                                        placeholder="Molar II"
                                                        {...register("c3g")}
                                                    />
                                                </FloatingLabel>
                                            </InputGroup>
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group>
                                            <InputGroup className="mb-0">
                                                <InputGroup.Text id="basic-addon1">
                                                    <img src={molar} alt="molar" width={26} height={26} />
                                                    {(noteToEdit && noteToEdit.c3h?.length! > 0)
                                                        ?
                                                        <MdAddTask
                                                            className="ms-auto"
                                                            color="green"
                                                            style={{ width: '1.8em', height: '1.8em' }}
                                                        />
                                                        :
                                                        <></>
                                                    }
                                                </InputGroup.Text>
                                                <FloatingLabel
                                                    controlId="floatingInput"
                                                    label="Molar III"
                                                >
                                                    <Form.Control
                                                        as='textarea'
                                                        rows={1}
                                                        placeholder="Molar III"
                                                        {...register("c3h")}
                                                    />
                                                </FloatingLabel>
                                            </InputGroup>
                                        </Form.Group>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                        </ListGroup>
                        <h5 className="fw-bold mt-3">Cadran III</h5>
                        <ListGroup>
                            <ListGroup.Item variant="primary" className="mb-3 mt-2">
                                <Row>
                                    <Col>
                                        <Form.Group>
                                            <InputGroup className="mb-4 mt-2">
                                                <InputGroup.Text id="basic-addon1">
                                                    <img src={incisor} alt="incisor" width={26} height={26} />
                                                    {(noteToEdit && noteToEdit.c4a?.length! > 0)
                                                        ?
                                                        <MdAddTask
                                                            className="ms-auto"
                                                            color="green"
                                                            style={{ width: '1.8em', height: '1.8em' }}
                                                        />
                                                        :
                                                        <></>
                                                    }
                                                </InputGroup.Text>
                                                <FloatingLabel
                                                    controlId="floatingInput"
                                                    label="Incisiv I"
                                                >
                                                    <Form.Control
                                                        as='textarea'
                                                        rows={1}
                                                        placeholder="Incisiv I"
                                                        {...register("c4a")}
                                                    />
                                                </FloatingLabel>
                                            </InputGroup>
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group>
                                            <InputGroup className="mb-3 mt-2">
                                                <InputGroup.Text id="basic-addon1">
                                                    <img src={incisor} alt="incisor" width={26} height={26} />
                                                    {(noteToEdit && noteToEdit.c4b?.length! > 0)
                                                        ?
                                                        <MdAddTask
                                                            className="ms-auto"
                                                            color="green"
                                                            style={{ width: '1.8em', height: '1.8em' }}
                                                        />
                                                        :
                                                        <></>
                                                    }
                                                </InputGroup.Text>
                                                <FloatingLabel
                                                    controlId="floatingInput"
                                                    label="Incisiv II"
                                                >
                                                    <Form.Control
                                                        as='textarea'
                                                        rows={1}
                                                        placeholder="Incisiv II"
                                                        {...register("c4b")}
                                                    />
                                                </FloatingLabel>
                                            </InputGroup>
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group>
                                            <InputGroup className="mb-3 mt-2">
                                                <InputGroup.Text id="basic-addon1">
                                                    <img src={canine} alt="canine" width={26} height={26} />
                                                    {(noteToEdit && noteToEdit.c4c?.length! > 0)
                                                        ?
                                                        <MdAddTask
                                                            className="ms-auto"
                                                            color="green"
                                                            style={{ width: '1.8em', height: '1.8em' }}
                                                        />
                                                        :
                                                        <></>
                                                    }
                                                </InputGroup.Text>
                                                <FloatingLabel
                                                    controlId="floatingInput"
                                                    label="Canin"
                                                >
                                                    <Form.Control
                                                        as='textarea'
                                                        rows={1}
                                                        placeholder="Canin"
                                                        {...register("c4c")}
                                                    />
                                                </FloatingLabel>
                                            </InputGroup>
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group>
                                            <InputGroup className="mb-3 mt-2">
                                                <InputGroup.Text id="basic-addon1">
                                                    <img src={premolar} alt="premolar" width={26} height={26} />
                                                    {(noteToEdit && noteToEdit.c4d?.length! > 0)
                                                        ?
                                                        <MdAddTask
                                                            className="ms-auto"
                                                            color="green"
                                                            style={{ width: '1.8em', height: '1.8em' }}
                                                        />
                                                        :
                                                        <></>
                                                    }
                                                </InputGroup.Text>
                                                <FloatingLabel
                                                    controlId="floatingInput"
                                                    label="Premolar I"
                                                >
                                                    <Form.Control
                                                        as='textarea'
                                                        rows={1}
                                                        placeholder="Premolar I"
                                                        {...register("c4d")}
                                                    />
                                                </FloatingLabel>
                                            </InputGroup>
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Form.Group>
                                            <InputGroup className="mb-2">
                                                <InputGroup.Text id="basic-addon1">
                                                    <img src={premolar} alt="premolar" width={26} height={26} />
                                                    {(noteToEdit && noteToEdit.c4e?.length! > 0)
                                                        ?
                                                        <MdAddTask
                                                            className="ms-auto"
                                                            color="green"
                                                            style={{ width: '1.8em', height: '1.8em' }}
                                                        />
                                                        :
                                                        <></>
                                                    }
                                                </InputGroup.Text>
                                                <FloatingLabel
                                                    controlId="floatingInput"
                                                    label="Premolar II"
                                                >
                                                    <Form.Control
                                                        as='textarea'
                                                        rows={1}
                                                        placeholder="Premolar II"
                                                        {...register("c4e")}
                                                    />
                                                </FloatingLabel>
                                            </InputGroup>
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group>
                                            <InputGroup className="mb-0">
                                                <InputGroup.Text id="basic-addon1">
                                                    <img src={molar} alt="molar" width={26} height={26} />
                                                    {(noteToEdit && noteToEdit.c4f?.length! > 0)
                                                        ?
                                                        <MdAddTask
                                                            className="ms-auto"
                                                            color="green"
                                                            style={{ width: '1.8em', height: '1.8em' }}
                                                        />
                                                        :
                                                        <></>
                                                    }
                                                </InputGroup.Text>
                                                <FloatingLabel
                                                    controlId="floatingInput"
                                                    label="Molar I"
                                                >
                                                    <Form.Control
                                                        as='textarea'
                                                        rows={1}
                                                        placeholder="Molar I"
                                                        {...register("c4f")}
                                                    />
                                                </FloatingLabel>
                                            </InputGroup>
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group>
                                            <InputGroup className="mb-0">
                                                <InputGroup.Text id="basic-addon1">
                                                    <img src={molar} alt="molar" width={26} height={26} />
                                                    {(noteToEdit && noteToEdit.c4g?.length! > 0)
                                                        ?
                                                        <MdAddTask
                                                            className="ms-auto"
                                                            color="green"
                                                            style={{ width: '1.8em', height: '1.8em' }}
                                                        />
                                                        :
                                                        <></>
                                                    }
                                                </InputGroup.Text>
                                                <FloatingLabel
                                                    controlId="floatingInput"
                                                    label="Molar II"
                                                >
                                                    <Form.Control
                                                        as='textarea'
                                                        rows={1}
                                                        placeholder="Molar II"
                                                        {...register("c4g")}
                                                    />
                                                </FloatingLabel>
                                            </InputGroup>
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group>
                                            <InputGroup className="mb-0">
                                                <InputGroup.Text id="basic-addon1">
                                                    <img src={molar} alt="molar" width={26} height={26} />
                                                    {(noteToEdit && noteToEdit.c4h?.length! > 0)
                                                        ?
                                                        <MdAddTask
                                                            className="ms-auto"
                                                            color="green"
                                                            style={{ width: '1.8em', height: '1.8em' }}
                                                        />
                                                        :
                                                        <></>
                                                    }
                                                </InputGroup.Text>
                                                <FloatingLabel
                                                    controlId="floatingInput"
                                                    label="Molar III"
                                                >
                                                    <Form.Control
                                                        as='textarea'
                                                        rows={1}
                                                        placeholder="Molar III"
                                                        {...register("c4h")}
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
                    {noteToEdit ? "Actualizează" : "Adaugă"}
                </Button>
            </Modal.Footer>
        </Modal >);
}

export default AddNoteDialog;