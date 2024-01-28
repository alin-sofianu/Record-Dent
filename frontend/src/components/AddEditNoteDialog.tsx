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
            title: noteToEdit?.title || "",
            text: noteToEdit?.text || "",
            sdmi: noteToEdit?.sdmi || "",
            sdmii: noteToEdit?.sdmii || "",
            sdmiii: noteToEdit?.sdmiii || "",
            sdpi: noteToEdit?.sdpi || "",
            sdpii: noteToEdit?.sdpii || "",
            sdc: noteToEdit?.sdc || "",
            sdinci: noteToEdit?.sdinci || "",
            sdincii: noteToEdit?.sdincii || "",
            ssmi: noteToEdit?.ssmi || "",
            ssmii: noteToEdit?.ssmii || "",
            ssmiii: noteToEdit?.ssmiii || "",
            sspi: noteToEdit?.sspi || "",
            sspii: noteToEdit?.sspii || "",
            ssc: noteToEdit?.ssc || "",
            ssinci: noteToEdit?.ssinci || "",
            ssincii: noteToEdit?.ssincii || "",
            jdmi: noteToEdit?.jdmi || "",
            jdmii: noteToEdit?.jdmii || "",
            jdmiii: noteToEdit?.jdmiii || "",
            jdpi: noteToEdit?.jdpi || "",
            jdpii: noteToEdit?.jdpii || "",
            jdc: noteToEdit?.jdc || "",
            jdinci: noteToEdit?.jdinci || "",
            jdincii: noteToEdit?.jdincii || "",
            jsmi: noteToEdit?.jsmi || "",
            jsmii: noteToEdit?.jsmii || "",
            jsmiii: noteToEdit?.jsmiii || "",
            jspi: noteToEdit?.jspi || "",
            jspii: noteToEdit?.jspii || "",
            jsc: noteToEdit?.jsc || "",
            jsinci: noteToEdit?.jsinci || "",
            jsincii: noteToEdit?.jsincii || "",

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
            size="xl"
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
                        <Form.Label><h6 className="fw-bold">Date personale</h6></Form.Label>
                        <Form.Control
                            as='textarea'
                            rows={3}
                            placeholder="Adauga date personale pacient..."
                            isInvalid={!!errors.title}
                            {...register("title", { required: "Date obligatorii." })}
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.title?.message}
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-4">
                        <Form.Label><h6 className="fw-bold">Detalii importante</h6></Form.Label>
                        <Form.Control
                            as='textarea'
                            rows={3}
                            placeholder="Adauga detalii importante pacient..."
                            {...register("text")}
                        />
                    </Form.Group>

                    <Container fluid="md" style={{ padding: "0px" }}>
                        <h5 className="fw-bold mt-5">Maxilar - dreapta</h5>
                        <ListGroup>
                            <ListGroup.Item variant="primary" className="mb-3 mt-2">
                                <Row>
                                    <Col>
                                        <Form.Group>
                                            <InputGroup className="mb-4 mt-2">
                                                <InputGroup.Text id="basic-addon1">
                                                    <img src={molar} alt="molar" width={26} height={26} />
                                                </InputGroup.Text>
                                                <FloatingLabel
                                                    controlId="floatingInput"
                                                    label="Molar I"
                                                >
                                                    <Form.Control
                                                        as='textarea'
                                                        rows={1}
                                                        placeholder="Molar I"
                                                        {...register("sdmi")}
                                                    />
                                                </FloatingLabel>
                                            </InputGroup>
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group>
                                            <InputGroup className="mb-3 mt-2">
                                                <InputGroup.Text id="basic-addon1">
                                                    <img src={molar} alt="molar" width={26} height={26} />
                                                </InputGroup.Text>
                                                <FloatingLabel
                                                    controlId="floatingInput"
                                                    label="Molar II"
                                                >
                                                    <Form.Control
                                                        as='textarea'
                                                        rows={1}
                                                        placeholder="Molar II"
                                                        {...register("sdmii")}
                                                    />
                                                </FloatingLabel>
                                            </InputGroup>
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group>
                                            <InputGroup className="mb-3 mt-2">
                                                <InputGroup.Text id="basic-addon1">
                                                    <img src={molar} alt="molar" width={26} height={26} />
                                                </InputGroup.Text>
                                                <FloatingLabel
                                                    controlId="floatingInput"
                                                    label="Molar III"
                                                >
                                                    <Form.Control
                                                        as='textarea'
                                                        rows={1}
                                                        placeholder="Molar III"
                                                        {...register("sdmiii")}
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
                                                </InputGroup.Text>
                                                <FloatingLabel
                                                    controlId="floatingInput"
                                                    label="Premolar I"
                                                >
                                                    <Form.Control
                                                        as='textarea'
                                                        rows={1}
                                                        placeholder="Premolar I"
                                                        {...register("sdpi")}
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
                                                </InputGroup.Text>
                                                <FloatingLabel
                                                    controlId="floatingInput"
                                                    label="Premolar II"
                                                >
                                                    <Form.Control
                                                        as='textarea'
                                                        rows={1}
                                                        placeholder="Premolar II"
                                                        {...register("sdpii")}
                                                    />
                                                </FloatingLabel>
                                            </InputGroup>
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group>
                                            <InputGroup className="mb-0">
                                                <InputGroup.Text id="basic-addon1">
                                                    <img src={canine} alt="canine" width={26} height={26} />
                                                </InputGroup.Text>
                                                <FloatingLabel
                                                    controlId="floatingInput"
                                                    label="Canin"
                                                >
                                                    <Form.Control
                                                        as='textarea'
                                                        rows={1}
                                                        placeholder="Canin"
                                                        {...register("sdc")}
                                                    />
                                                </FloatingLabel>
                                            </InputGroup>
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group>
                                            <InputGroup className="mb-0">
                                                <InputGroup.Text id="basic-addon1">
                                                    <img src={incisor} alt="incisor" width={26} height={26} />
                                                </InputGroup.Text>
                                                <FloatingLabel
                                                    controlId="floatingInput"
                                                    label="Incisiv I"
                                                >
                                                    <Form.Control
                                                        as='textarea'
                                                        rows={1}
                                                        placeholder="Incisiv I"
                                                        {...register("sdinci")}
                                                    />
                                                </FloatingLabel>
                                            </InputGroup>
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group>
                                            <InputGroup className="mb-0">
                                                <InputGroup.Text id="basic-addon1">
                                                    <img src={incisor} alt="incisor" width={26} height={26} />
                                                </InputGroup.Text>
                                                <FloatingLabel
                                                    controlId="floatingInput"
                                                    label="Incisiv II"
                                                >
                                                    <Form.Control
                                                        as='textarea'
                                                        rows={1}
                                                        placeholder="Incisiv II"
                                                        {...register("sdincii")}
                                                    />
                                                </FloatingLabel>
                                            </InputGroup>
                                        </Form.Group>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                        </ListGroup>
                        <h5 className="fw-bold mt-3">Maxilar - stanga</h5>
                        <ListGroup>
                            <ListGroup.Item variant="primary" className="mb-3 mt-2">
                                <Row>
                                    <Col>
                                        <Form.Group>
                                            <InputGroup className="mb-3 mt-2">
                                                <InputGroup.Text id="basic-addon1">
                                                    <img src={molar} alt="molar" width={26} height={26} />
                                                </InputGroup.Text>
                                                <FloatingLabel
                                                    controlId="floatingInput"
                                                    label="Molar I"
                                                >
                                                    <Form.Control
                                                        as='textarea'
                                                        rows={1}
                                                        placeholder="Molar I"
                                                        {...register("ssmi")}
                                                    />
                                                </FloatingLabel>
                                            </InputGroup>
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group>
                                            <InputGroup className="mb-3 mt-2">
                                                <InputGroup.Text id="basic-addon1">
                                                    <img src={molar} alt="molar" width={26} height={26} />
                                                </InputGroup.Text>
                                                <FloatingLabel
                                                    controlId="floatingInput"
                                                    label="Molar II"
                                                >
                                                    <Form.Control
                                                        as='textarea'
                                                        rows={1}
                                                        placeholder="Molar II"
                                                        {...register("ssmii")}
                                                    />
                                                </FloatingLabel>
                                            </InputGroup>
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group>
                                            <InputGroup className="mb-3 mt-2">
                                                <InputGroup.Text id="basic-addon1">
                                                    <img src={molar} alt="molar" width={26} height={26} />
                                                </InputGroup.Text>
                                                <FloatingLabel
                                                    controlId="floatingInput"
                                                    label="Molar III"
                                                >
                                                    <Form.Control
                                                        as='textarea'
                                                        rows={1}
                                                        placeholder="Molar III"
                                                        {...register("ssmiii")}
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
                                                </InputGroup.Text>
                                                <FloatingLabel
                                                    controlId="floatingInput"
                                                    label="Premolar I"
                                                >
                                                    <Form.Control
                                                        as='textarea'
                                                        rows={1}
                                                        placeholder="Premolar I"
                                                        {...register("sspi")}
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
                                                </InputGroup.Text>
                                                <FloatingLabel
                                                    controlId="floatingInput"
                                                    label="Premolar II"
                                                >
                                                    <Form.Control
                                                        as='textarea'
                                                        rows={1}
                                                        placeholder="Premolar II"
                                                        {...register("sspii")}
                                                    />
                                                </FloatingLabel>
                                            </InputGroup>
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group>
                                            <InputGroup className="mb-0">
                                                <InputGroup.Text id="basic-addon1">
                                                    <img src={canine} alt="canine" width={26} height={26} />
                                                </InputGroup.Text>
                                                <FloatingLabel
                                                    controlId="floatingInput"
                                                    label="Canin"
                                                >
                                                    <Form.Control
                                                        as='textarea'
                                                        rows={1}
                                                        placeholder="Canine"
                                                        {...register("ssc")}
                                                    />
                                                </FloatingLabel>
                                            </InputGroup>
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group>
                                            <InputGroup className="mb-0">
                                                <InputGroup.Text id="basic-addon1">
                                                    <img src={incisor} alt="incisor" width={26} height={26} />
                                                </InputGroup.Text>
                                                <FloatingLabel
                                                    controlId="floatingInput"
                                                    label="Incisiv I"
                                                >
                                                    <Form.Control
                                                        as='textarea'
                                                        rows={1}
                                                        placeholder="Incisiv I"
                                                        {...register("ssinci")}
                                                    />
                                                </FloatingLabel>
                                            </InputGroup>
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group>
                                            <InputGroup className="mb-0">
                                                <InputGroup.Text id="basic-addon1">
                                                    <img src={incisor} alt="incisor" width={26} height={26} />
                                                </InputGroup.Text>
                                                <FloatingLabel
                                                    controlId="floatingInput"
                                                    label="Incisiv II"
                                                >
                                                    <Form.Control
                                                        as='textarea'
                                                        rows={1}
                                                        placeholder="Incisiv II"
                                                        {...register("ssincii")}
                                                    />
                                                </FloatingLabel>
                                            </InputGroup>
                                        </Form.Group>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                        </ListGroup>
                        <h5 className="fw-bold mt-3">Mandibula - dreapta</h5>
                        <ListGroup>
                            <ListGroup.Item variant="primary" className="mb-3 mt-2">
                                <Row>
                                    <Col>
                                        <Form.Group>
                                            <InputGroup className="mb-3 mt-2">
                                                <InputGroup.Text id="basic-addon1">
                                                    <img src={molar} alt="molar" width={26} height={26} />
                                                </InputGroup.Text>
                                                <FloatingLabel
                                                    controlId="floatingInput"
                                                    label="Molar I"
                                                >
                                                    <Form.Control
                                                        as='textarea'
                                                        rows={1}
                                                        placeholder="Molar I"
                                                        {...register("jdmi")}
                                                    />
                                                </FloatingLabel>
                                            </InputGroup>
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group>
                                            <InputGroup className="mb-3 mt-2">
                                                <InputGroup.Text id="basic-addon1">
                                                    <img src={molar} alt="molar" width={26} height={26} />
                                                </InputGroup.Text>
                                                <FloatingLabel
                                                    controlId="floatingInput"
                                                    label="Molar II"
                                                >
                                                    <Form.Control
                                                        as='textarea'
                                                        rows={1}
                                                        placeholder="Molar II"
                                                        {...register("jdmii")}
                                                    />
                                                </FloatingLabel>
                                            </InputGroup>
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group>
                                            <InputGroup className="mb-3 mt-2">
                                                <InputGroup.Text id="basic-addon1">
                                                    <img src={molar} alt="molar" width={26} height={26} />
                                                </InputGroup.Text>
                                                <FloatingLabel
                                                    controlId="floatingInput"
                                                    label="Molar III"
                                                >
                                                    <Form.Control
                                                        as='textarea'
                                                        rows={1}
                                                        placeholder="Molar III"
                                                        {...register("jdmiii")}
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
                                                </InputGroup.Text>
                                                <FloatingLabel
                                                    controlId="floatingInput"
                                                    label="Premolar I"
                                                >
                                                    <Form.Control
                                                        as='textarea'
                                                        rows={1}
                                                        placeholder="Premolar I"
                                                        {...register("jdpi")}
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
                                                </InputGroup.Text>
                                                <FloatingLabel
                                                    controlId="floatingInput"
                                                    label="Premolar II"
                                                >
                                                    <Form.Control
                                                        as='textarea'
                                                        rows={1}
                                                        placeholder="Premolar II"
                                                        {...register("jdpii")}
                                                    />
                                                </FloatingLabel>
                                            </InputGroup>
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group>
                                            <InputGroup className="mb-0">
                                                <InputGroup.Text id="basic-addon1">
                                                    <img src={canine} alt="canine" width={26} height={26} />
                                                </InputGroup.Text>
                                                <FloatingLabel
                                                    controlId="floatingInput"
                                                    label="Canin"
                                                >
                                                    <Form.Control
                                                        as='textarea'
                                                        rows={1}
                                                        placeholder="Canin"
                                                        {...register("jdc")}
                                                    />
                                                </FloatingLabel>
                                            </InputGroup>
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group>
                                            <InputGroup className="mb-0">
                                                <InputGroup.Text id="basic-addon1">
                                                    <img src={incisor} alt="incisor" width={26} height={26} />
                                                </InputGroup.Text>
                                                <FloatingLabel
                                                    controlId="floatingInput"
                                                    label="Incisiv I"
                                                >
                                                    <Form.Control
                                                        as='textarea'
                                                        rows={1}
                                                        placeholder="Incisiv I"
                                                        {...register("jdinci")}
                                                    />
                                                </FloatingLabel>
                                            </InputGroup>
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group>
                                            <InputGroup className="mb-0">
                                                <InputGroup.Text id="basic-addon1">
                                                    <img src={incisor} alt="incisor" width={26} height={26} />
                                                </InputGroup.Text>
                                                <FloatingLabel
                                                    controlId="floatingInput"
                                                    label="Incisiv II"
                                                >
                                                    <Form.Control
                                                        as='textarea'
                                                        rows={1}
                                                        placeholder="Incisiv II"
                                                        {...register("jdincii")}
                                                    />
                                                </FloatingLabel>
                                            </InputGroup>
                                        </Form.Group>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                        </ListGroup>
                        <h5 className="fw-bold mt-3">Mandibula - stanga</h5>
                        <ListGroup>
                            <ListGroup.Item variant="primary" className="mb-3 mt-2">
                                <Row>
                                    <Col>
                                        <Form.Group>
                                            <InputGroup className="mb-3 mt-2">
                                                <InputGroup.Text id="basic-addon1">
                                                    <img src={molar} alt="molar" width={26} height={26} />
                                                </InputGroup.Text>
                                                <FloatingLabel
                                                    controlId="floatingInput"
                                                    label="Molar I"
                                                >
                                                    <Form.Control
                                                        as='textarea'
                                                        rows={1}
                                                        placeholder="Molar I"
                                                        {...register("jsmi")}
                                                    />
                                                </FloatingLabel>
                                            </InputGroup>
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group>
                                            <InputGroup className="mb-3 mt-2">
                                                <InputGroup.Text id="basic-addon1">
                                                    <img src={molar} alt="molar" width={26} height={26} />
                                                </InputGroup.Text>
                                                <FloatingLabel
                                                    controlId="floatingInput"
                                                    label="Molar II"
                                                >
                                                    <Form.Control
                                                        as='textarea'
                                                        rows={1}
                                                        placeholder="Molar II"
                                                        {...register("jsmii")}
                                                    />
                                                </FloatingLabel>
                                            </InputGroup>
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group>
                                            <InputGroup className="mb-3 mt-2">
                                                <InputGroup.Text id="basic-addon1">
                                                    <img src={molar} alt="molar" width={26} height={26} />
                                                </InputGroup.Text>
                                                <FloatingLabel
                                                    controlId="floatingInput"
                                                    label="Molar III"
                                                >
                                                    <Form.Control
                                                        as='textarea'
                                                        rows={1}
                                                        placeholder="Molar III"
                                                        {...register("jsmiii")}
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
                                                </InputGroup.Text>
                                                <FloatingLabel
                                                    controlId="floatingInput"
                                                    label="Premolar I"
                                                >
                                                    <Form.Control
                                                        as='textarea'
                                                        rows={1}
                                                        placeholder="Premolar I"
                                                        {...register("jspi")}
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
                                                </InputGroup.Text>
                                                <FloatingLabel
                                                    controlId="floatingInput"
                                                    label="Premolar II"
                                                >
                                                    <Form.Control
                                                        as='textarea'
                                                        rows={1}
                                                        placeholder="Premolar II"
                                                        {...register("jspii")}
                                                    />
                                                </FloatingLabel>
                                            </InputGroup>
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group>
                                            <InputGroup className="mb-0">
                                                <InputGroup.Text id="basic-addon1">
                                                    <img src={canine} alt="canine" width={26} height={26} />
                                                </InputGroup.Text>
                                                <FloatingLabel
                                                    controlId="floatingInput"
                                                    label="Canin"
                                                >
                                                    <Form.Control
                                                        as='textarea'
                                                        rows={1}
                                                        placeholder="Canin"
                                                        {...register("jsc")}
                                                    />
                                                </FloatingLabel>
                                            </InputGroup>
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group>
                                            <InputGroup className="mb-0">
                                                <InputGroup.Text id="basic-addon1">
                                                    <img src={incisor} alt="incisor" width={26} height={26} />
                                                </InputGroup.Text>
                                                <FloatingLabel
                                                    controlId="floatingInput"
                                                    label="Incisiv I"
                                                >
                                                    <Form.Control
                                                        as='textarea'
                                                        rows={1}
                                                        placeholder="Incisiv I"
                                                        {...register("jsinci")}
                                                    />
                                                </FloatingLabel>
                                            </InputGroup>
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group>
                                            <InputGroup className="mb-0">
                                                <InputGroup.Text id="basic-addon1">
                                                    <img src={incisor} alt="incisor" width={26} height={26} />
                                                </InputGroup.Text>
                                                <FloatingLabel
                                                    controlId="floatingInput"
                                                    label="Incisiv II"
                                                >
                                                    <Form.Control
                                                        as='textarea'
                                                        rows={1}
                                                        placeholder="Incisiv II"
                                                        {...register("jsincii")}
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