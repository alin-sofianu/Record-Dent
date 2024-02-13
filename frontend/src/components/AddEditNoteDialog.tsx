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
                        <Form.Label><h6 className="fw-bold">Date personale</h6></Form.Label>
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
                                    placeholder="Numar de telefon"
                                    isInvalid={!!errors.firstname}
                                    {...register("phoneno")}
                                />
                            </Col>
                            <Form.Control.Feedback type="invalid">
                                {errors.firstname?.message}
                            </Form.Control.Feedback>
                        </Row>
                    </Form.Group>

                    <Form.Group className="mb-4">
                        <Form.Label><h6 className="fw-bold">Detalii importante</h6></Form.Label>
                        <Form.Control
                            as='textarea'
                            rows={3}
                            placeholder="Adauga detalii importante pacient..."
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
                                                    <img src={molar} alt="molar" width={26} height={26} />
                                                    {(noteToEdit && noteToEdit.sdmi?.length! > 0)
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
                                                    {(noteToEdit && noteToEdit.sdmii?.length! > 0)
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
                                                    {(noteToEdit && noteToEdit.sdmiii?.length! > 0)
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
                                                    {(noteToEdit && noteToEdit.sdpi?.length! > 0)
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
                                                    {(noteToEdit && noteToEdit.sdpii?.length! > 0)
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
                                                    {(noteToEdit && noteToEdit.sdc?.length! > 0)
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
                                                    {(noteToEdit && noteToEdit.sdinci?.length! > 0)
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
                                                    {(noteToEdit && noteToEdit.sdincii?.length! > 0)
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
                                                        {...register("sdincii")}
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
                                            <InputGroup className="mb-3 mt-2">
                                                <InputGroup.Text id="basic-addon1">
                                                    <img src={molar} alt="molar" width={26} height={26} />
                                                    {(noteToEdit && noteToEdit.ssmi?.length! > 0)
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
                                                    {(noteToEdit && noteToEdit.ssmii?.length! > 0)
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
                                                    {(noteToEdit && noteToEdit.ssmiii?.length! > 0)
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
                                                    {(noteToEdit && noteToEdit.sspi?.length! > 0)
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
                                                    {(noteToEdit && noteToEdit.sspii?.length! > 0)
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
                                                    {(noteToEdit && noteToEdit.ssc?.length! > 0)
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
                                                    {(noteToEdit && noteToEdit.ssinci?.length! > 0)
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
                                                    {(noteToEdit && noteToEdit.ssincii?.length! > 0)
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
                                                        {...register("ssincii")}
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
                                            <InputGroup className="mb-3 mt-2">
                                                <InputGroup.Text id="basic-addon1">
                                                    <img src={molar} alt="molar" width={26} height={26} />
                                                    {(noteToEdit && noteToEdit.jdmi?.length! > 0)
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
                                                    {(noteToEdit && noteToEdit.jdmii?.length! > 0)
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
                                                    {(noteToEdit && noteToEdit.jdmiii?.length! > 0)
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
                                                    {(noteToEdit && noteToEdit.jdpi?.length! > 0)
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
                                                    {(noteToEdit && noteToEdit.jdpii?.length! > 0)
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
                                                    {(noteToEdit && noteToEdit.jdc?.length! > 0)
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
                                                    {(noteToEdit && noteToEdit.jdinci?.length! > 0)
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
                                                    {(noteToEdit && noteToEdit.jdincii?.length! > 0)
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
                                                        {...register("jdincii")}
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
                                            <InputGroup className="mb-3 mt-2">
                                                <InputGroup.Text id="basic-addon1">
                                                    <img src={molar} alt="molar" width={26} height={26} />
                                                    {(noteToEdit && noteToEdit.jsmi?.length! > 0)
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
                                                    {(noteToEdit && noteToEdit.jsmii?.length! > 0)
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
                                                    {(noteToEdit && noteToEdit.jsmiii?.length! > 0)
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
                                                    {(noteToEdit && noteToEdit.jspi?.length! > 0)
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
                                                    {(noteToEdit && noteToEdit.jspii?.length! > 0)
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
                                                    {(noteToEdit && noteToEdit.jsc?.length! > 0)
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
                                                    {(noteToEdit && noteToEdit.jsinci?.length! > 0)
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
                                                    {(noteToEdit && noteToEdit.jsincii?.length! > 0)
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