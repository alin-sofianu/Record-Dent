import { Form, Modal, Button, Col, Container, Row, InputGroup, Dropdown } from "react-bootstrap";
import ListGroup from 'react-bootstrap/ListGroup';
import { Note } from "../models/note";
import { Controller, useForm, useWatch } from "react-hook-form";
import { NoteInput } from "../network/notes_api";
import * as NotesApi from "../network/notes_api"
// import molar from "../images/molar.png"
import { useState } from 'react';
import Badge from 'react-bootstrap/Badge';
import Stack from 'react-bootstrap/Stack';

interface AddEditNoteDialogProps {
    noteToEdit?: Note,
    onDismiss: () => void,
    // the name onNoteSaved is kept generic so it can be used for both 
    // creating and updating a note(AddEdit is now the name of this interface)
    onNoteSaved: (note: Note) => void,
}

const AddNoteDialog = ({ noteToEdit, onDismiss, onNoteSaved }: AddEditNoteDialogProps) => {
    // const [currentColorIndex, setCurrentColorIndex] = useState('red');


    // const handleButtonClick = (e: { preventDefault: () => void; }) => {
    //     e.preventDefault()

    //     // Define an array of colors to cycle through
    //     // Find the index of the current background color
    //     const currentIndex = colors.indexOf(currentColorIndex);

    //     // Calculate the next index and update the background color
    //     const nextIndex = (currentIndex + 1) % colors.length;
    //     const nextColor = colors[nextIndex];

    //     //setCurrentColorIndex(nextColor);
    //     // register("a1")
    //     // sregister("a1")
    //     console.log(noteToEdit?.a1);
    //     console.log(currentColorIndex);
    //     setValue('currentColorIndex', nextColor);
    // };



    // this construct is from react-hook-form library.
    const { register, control, handleSubmit, formState: { errors, isSubmitting } } = useForm<NoteInput>({
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
            a1: noteToEdit?.a1 || "",
            a2: noteToEdit?.a2 || "",
            a3: noteToEdit?.a3 || "",
            a4: noteToEdit?.a4 || "",
            a5: noteToEdit?.a5 || "",
            a6: noteToEdit?.a6 || "",
            a7: noteToEdit?.a7 || "",
            a8: noteToEdit?.a8 || "",
            a9: noteToEdit?.a9 || "",
            a10: noteToEdit?.a10 || "",
            a11: noteToEdit?.a11 || "",
            a12: noteToEdit?.a12 || "",
            a13: noteToEdit?.a13 || "",
            b1: noteToEdit?.b1 || "",
            b2: noteToEdit?.b2 || "",
            b3: noteToEdit?.b3 || "",
            b4: noteToEdit?.b4 || "",
            b5: noteToEdit?.b5 || "",
            b6: noteToEdit?.b6 || "",
            b7: noteToEdit?.b7 || "",
            b8: noteToEdit?.b8 || "",
            b9: noteToEdit?.b9 || "",
            b10: noteToEdit?.b10 || "",
            b11: noteToEdit?.b11 || "",
            b12: noteToEdit?.b12 || "",
            b13: noteToEdit?.b13 || "",
            c1: noteToEdit?.c1 || "",
            c2: noteToEdit?.c2 || "",
            c3: noteToEdit?.c3 || "",
            c4: noteToEdit?.c4 || "",
            c5: noteToEdit?.c5 || "",
            c6: noteToEdit?.c6 || "",
            c7: noteToEdit?.c7 || "",
            c8: noteToEdit?.c8 || "",
            c9: noteToEdit?.c9 || "",
            c10: noteToEdit?.c10 || "",
            c11: noteToEdit?.c11 || "",
            c12: noteToEdit?.c12 || "",
            c13: noteToEdit?.c13 || "",
            d1: noteToEdit?.d1 || "",
            d2: noteToEdit?.d2 || "",
            d3: noteToEdit?.d3 || "",
            d4: noteToEdit?.d4 || "",
            d5: noteToEdit?.d5 || "",
            d6: noteToEdit?.d6 || "",
            d7: noteToEdit?.d7 || "",
            d8: noteToEdit?.d8 || "",
            d9: noteToEdit?.d9 || "",
            d10: noteToEdit?.d10 || "",
            d11: noteToEdit?.d11 || "",
            d12: noteToEdit?.d12 || "",
            d13: noteToEdit?.d13 || "",
            currentColor: noteToEdit?.currentColor || "",
            currentColorIndex: noteToEdit?.currentColorIndex || "",
            control: noteToEdit?.control || "",
            name: noteToEdit?.name || "",
            select: noteToEdit?.select || "",

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
                        <ListGroup>
                            <ListGroup.Item variant="primary" className="mb-3 mt-2">


                                <Stack direction="horizontal" gap={2}>
                                    <section style={{ display: 'flex', flexDirection: 'column-reverse' }}>
                                        <Controller
                                            render={({ field }) => (
                                                <select {...field}>
                                                    <option value={0} selected>Sanatos</option>
                                                    <option value={10}>In lucru</option>
                                                    <option value={20}>Terminat</option>
                                                    <option value={30}>Extras</option>
                                                </select>
                                            )}
                                            name="a1"
                                            control={control}
                                        />

                                        {(() => {

                                            switch (noteToEdit?.a1) {
                                                case '0':
                                                    return <Badge pill bg="info">
                                                        5.5
                                                    </Badge>
                                                case '10':
                                                    return <Badge pill bg="danger">
                                                        5.5
                                                    </Badge>
                                                case '20':
                                                    return <Badge pill bg="success">
                                                        5.5
                                                    </Badge>
                                                case '30':
                                                    return <Badge pill bg="dark">
                                                        5.5
                                                    </Badge>
                                                default:
                                                    return <Badge pill bg="info">
                                                        5.5
                                                    </Badge>
                                            }
                                        })()}
                                    </section>

                                    <section style={{ display: 'flex', flexDirection: 'column-reverse' }}>
                                        <Controller
                                            render={({ field }) => (
                                                <select {...field}>
                                                    <option value={0} selected>Sanatos</option>
                                                    <option value={10}>In lucru</option>
                                                    <option value={20}>Terminat</option>
                                                    <option value={30}>Extras</option>
                                                </select>
                                            )}
                                            name="a2"
                                            control={control}
                                        />
                                        {(() => {
                                            switch (noteToEdit?.a2) {
                                                case '0':
                                                    return <Badge pill bg="info">
                                                        5.4
                                                    </Badge>
                                                case '10':
                                                    return <Badge pill bg="danger">
                                                        5.4
                                                    </Badge>
                                                case '20':
                                                    return <Badge pill bg="success">
                                                        5.4
                                                    </Badge>
                                                case '30':
                                                    return <Badge pill bg="dark">
                                                        5.4
                                                    </Badge>
                                            }
                                        })()}
                                    </section>

                                    <section style={{ display: 'flex', flexDirection: 'column-reverse' }}>
                                        <Controller
                                            render={({ field }) => (
                                                <select {...field}>
                                                    <option value={0} selected>Sanatos</option>
                                                    <option value={10}>In lucru</option>
                                                    <option value={20}>Terminat</option>
                                                    <option value={30}>Extras</option>
                                                </select>
                                            )}
                                            name="a3"
                                            control={control}
                                        />
                                        {(() => {
                                            switch (noteToEdit?.a3) {
                                                case '0':
                                                    return <Badge pill bg="info">
                                                        5.3
                                                    </Badge>
                                                case '10':
                                                    return <Badge pill bg="danger">
                                                        5.3
                                                    </Badge>
                                                case '20':
                                                    return <Badge pill bg="success">
                                                        5.3
                                                    </Badge>
                                                case '30':
                                                    return <Badge pill bg="dark">
                                                        5.3
                                                    </Badge>
                                            }
                                        })()}
                                    </section>


                                    <section style={{ display: 'flex', flexDirection: 'column-reverse' }}>
                                        <Controller
                                            render={({ field }) => (
                                                <select {...field}>
                                                    <option value={0} selected>Sanatos</option>
                                                    <option value={10}>In lucru</option>
                                                    <option value={20}>Terminat</option>
                                                    <option value={30}>Extras</option>
                                                </select>
                                            )}
                                            name="a4"
                                            control={control}
                                        />
                                        {(() => {
                                            switch (noteToEdit && noteToEdit?.a4) {
                                                case '0':
                                                    return <Badge pill bg="info">
                                                        5.2
                                                    </Badge>
                                                case '10':
                                                    return <Badge pill bg="danger">
                                                        5.2
                                                    </Badge>
                                                case '20':
                                                    return <Badge pill bg="success">
                                                        5.2
                                                    </Badge>
                                                case '30':
                                                    return <Badge pill bg="dark">
                                                        5.2
                                                    </Badge>
                                            }
                                        })()}
                                    </section>

                                    <section style={{ display: 'flex', flexDirection: 'column-reverse' }}>
                                        <Controller
                                            render={({ field }) => (
                                                <select {...field}>
                                                    <option value={0} selected>Sanatos</option>
                                                    <option value={10}>In lucru</option>
                                                    <option value={20}>Terminat</option>
                                                    <option value={30}>Extras</option>
                                                </select>
                                            )}
                                            name="a5"
                                            control={control}
                                        />
                                        <h3>
                                            {(() => {
                                                switch (noteToEdit && noteToEdit?.a5) {
                                                    case '0':
                                                        return <Badge pill bg="info">
                                                            5.1
                                                        </Badge>
                                                    case '10':
                                                        return <Badge pill bg="danger">
                                                            5.1
                                                        </Badge>
                                                    case '20':
                                                        return <Badge pill bg="success">
                                                            5.1
                                                        </Badge>
                                                    case '30':
                                                        return <Badge pill bg="dark">
                                                            5.1
                                                        </Badge>
                                                }
                                            })()}
                                        </h3>
                                    </section>
                                </Stack>
                            </ListGroup.Item>
                        </ListGroup>
                    </Container >
                </Form >
            </Modal.Body >
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
