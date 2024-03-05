import { Form, Modal, Button, Col, Container, Row } from "react-bootstrap";
import ListGroup from 'react-bootstrap/ListGroup';
import { Note } from "../models/note";
import { Controller, useForm, } from "react-hook-form";
import { NoteInput } from "../network/notes_api";
import * as NotesApi from "../network/notes_api"
import { useEffect, useState } from 'react';
import Badge from 'react-bootstrap/Badge';
import Stack from 'react-bootstrap/Stack';
import styles from "../styles/AddEditNoteDialog.module.css";
import styleUtils from "../styles/utils.module.css";
import PrintableTableDiagnostic from './PrintableTableDiagnostic';
import PrintableTableTreatment from './PrintableTableTreatment';

interface AddEditNoteDialogProps {
    noteToEdit?: Note,
    onDismiss: () => void,
    // the name onNoteSaved is kept generic so it can be used for both 
    // creating and updating a note(AddEdit is now the name of this interface)
    onNoteSaved: (note: Note) => void,
}

const AddNoteDialog = ({ noteToEdit, onDismiss, onNoteSaved }: AddEditNoteDialogProps) => {
    const [selectedOptiona1, setSelectedOptiona1] = useState('');
    const [selectedOptiona2, setSelectedOptiona2] = useState('');
    const [selectedOptiona3, setSelectedOptiona3] = useState('');
    const [selectedOptiona4, setSelectedOptiona4] = useState('');
    const [selectedOptiona5, setSelectedOptiona5] = useState('');
    const [selectedOptiona6, setSelectedOptiona6] = useState('');
    const [selectedOptiona7, setSelectedOptiona7] = useState('');
    const [selectedOptiona8, setSelectedOptiona8] = useState('');
    const [selectedOptiona9, setSelectedOptiona9] = useState('');
    const [selectedOptiona10, setSelectedOptiona10] = useState('');
    const [selectedOptiona11, setSelectedOptiona11] = useState('');
    const [selectedOptiona12, setSelectedOptiona12] = useState('');
    const [selectedOptiona13, setSelectedOptiona13] = useState('');
    const [selectedOptionb1, setSelectedOptionb1] = useState('');
    const [selectedOptionb2, setSelectedOptionb2] = useState('');
    const [selectedOptionb3, setSelectedOptionb3] = useState('');
    const [selectedOptionb4, setSelectedOptionb4] = useState('');
    const [selectedOptionb5, setSelectedOptionb5] = useState('');
    const [selectedOptionb6, setSelectedOptionb6] = useState('');
    const [selectedOptionb7, setSelectedOptionb7] = useState('');
    const [selectedOptionb8, setSelectedOptionb8] = useState('');
    const [selectedOptionb9, setSelectedOptionb9] = useState('');
    const [selectedOptionb10, setSelectedOptionb10] = useState('');
    const [selectedOptionb11, setSelectedOptionb11] = useState('');
    const [selectedOptionb12, setSelectedOptionb12] = useState('');
    const [selectedOptionb13, setSelectedOptionb13] = useState('');
    const [selectedOptionc1, setSelectedOptionc1] = useState('');
    const [selectedOptionc2, setSelectedOptionc2] = useState('');
    const [selectedOptionc3, setSelectedOptionc3] = useState('');
    const [selectedOptionc4, setSelectedOptionc4] = useState('');
    const [selectedOptionc5, setSelectedOptionc5] = useState('');
    const [selectedOptionc6, setSelectedOptionc6] = useState('');
    const [selectedOptionc7, setSelectedOptionc7] = useState('');
    const [selectedOptionc8, setSelectedOptionc8] = useState('');
    const [selectedOptionc9, setSelectedOptionc9] = useState('');
    const [selectedOptionc10, setSelectedOptionc10] = useState('');
    const [selectedOptionc11, setSelectedOptionc11] = useState('');
    const [selectedOptionc12, setSelectedOptionc12] = useState('');
    const [selectedOptionc13, setSelectedOptionc13] = useState('');

    const [selectedOptiond1, setSelectedOptiond1] = useState('');
    const [selectedOptiond2, setSelectedOptiond2] = useState('');
    const [selectedOptiond3, setSelectedOptiond3] = useState('');
    const [selectedOptiond4, setSelectedOptiond4] = useState('');
    const [selectedOptiond5, setSelectedOptiond5] = useState('');
    const [selectedOptiond6, setSelectedOptiond6] = useState('');
    const [selectedOptiond7, setSelectedOptiond7] = useState('');
    const [selectedOptiond8, setSelectedOptiond8] = useState('');
    const [selectedOptiond9, setSelectedOptiond9] = useState('');
    const [selectedOptiond10, setSelectedOptiond10] = useState('');
    const [selectedOptiond11, setSelectedOptiond11] = useState('');
    const [selectedOptiond12, setSelectedOptiond12] = useState('');
    const [selectedOptiond13, setSelectedOptiond13] = useState('');

    // this construct is from react-hook-form library.
    const { register, control, getValues, handleSubmit, formState: { errors, isSubmitting } } = useForm<NoteInput>({
        defaultValues: {
            // noteToEdit?.title returns the title, or undefined if noteToEdit is undefined; instead of error.
            // title: noteToEdit?.title || "",
            firstname: noteToEdit?.firstname || "",
            lastname: noteToEdit?.lastname || "",
            phoneno: noteToEdit?.phoneno || "",
            importantdetails: noteToEdit?.importantdetails || "",
            age: noteToEdit?.age || "",
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

    // Set initial value when the component mounts
    useEffect(() => {
        if (control) {
            setSelectedOptiona1(getValues("a1") || '');
            setSelectedOptiona2(getValues("a2") || '');
            setSelectedOptiona3(getValues("a3") || '');
            setSelectedOptiona4(getValues("a4") || '');
            setSelectedOptiona5(getValues("a5") || '');
            setSelectedOptiona6(getValues("a6") || '');
            setSelectedOptiona7(getValues("a7") || '');
            setSelectedOptiona8(getValues("a8") || '');
            setSelectedOptiona9(getValues("a9") || '');
            setSelectedOptiona10(getValues("a10") || '');
            setSelectedOptiona11(getValues("a11") || '');
            setSelectedOptiona12(getValues("a12") || '');
            setSelectedOptiona13(getValues("a13") || '');

            setSelectedOptionb1(getValues("b1") || '');
            setSelectedOptionb2(getValues("b2") || '');
            setSelectedOptionb3(getValues("b3") || '');
            setSelectedOptionb4(getValues("b4") || '');
            setSelectedOptionb5(getValues("b5") || '');
            setSelectedOptionb6(getValues("b6") || '');
            setSelectedOptionb7(getValues("b7") || '');
            setSelectedOptionb8(getValues("b8") || '');
            setSelectedOptionb9(getValues("b9") || '');
            setSelectedOptionb10(getValues("b10") || '');
            setSelectedOptionb11(getValues("b11") || '');
            setSelectedOptionb12(getValues("b12") || '');
            setSelectedOptionb13(getValues("b13") || '');

            setSelectedOptionc1(getValues("c1") || '');
            setSelectedOptionc2(getValues("c2") || '');
            setSelectedOptionc3(getValues("c3") || '');
            setSelectedOptionc4(getValues("c4") || '');
            setSelectedOptionc5(getValues("c5") || '');
            setSelectedOptionc6(getValues("c6") || '');
            setSelectedOptionc7(getValues("c7") || '');
            setSelectedOptionc8(getValues("c8") || '');
            setSelectedOptionc9(getValues("c9") || '');
            setSelectedOptionc10(getValues("c10") || '');
            setSelectedOptionc11(getValues("c11") || '');
            setSelectedOptionc12(getValues("c12") || '');
            setSelectedOptionc13(getValues("c13") || '');

            setSelectedOptiond1(getValues("d1") || '');
            setSelectedOptiond2(getValues("d2") || '');
            setSelectedOptiond3(getValues("d3") || '');
            setSelectedOptiond4(getValues("d4") || '');
            setSelectedOptiond5(getValues("d5") || '');
            setSelectedOptiond6(getValues("d6") || '');
            setSelectedOptiond7(getValues("d7") || '');
            setSelectedOptiond8(getValues("d8") || '');
            setSelectedOptiond9(getValues("d9") || '');
            setSelectedOptiond10(getValues("d10") || '');
            setSelectedOptiond11(getValues("d11") || '');
            setSelectedOptiond12(getValues("d12") || '');
            setSelectedOptiond13(getValues("d13") || '');
        }
    }, [control, getValues]);

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
            <Modal.Header closeButton closeVariant="white" style={{ color: '#fff', backgroundColor: '#0d3efd', marginBottom: "2em", fontSize: '1em' }}>
                <Modal.Title>{noteToEdit ? "Actualizează pacient" : "Adaugă pacient"}</Modal.Title>
            </Modal.Header>
            <Modal.Body style={{ marginBottom: "2em" }}>
                <Form id="addEditNoteForm" onSubmit={handleSubmit(onSubmit)}>
                    <Form.Group className="mb-3">
                        <Form.Label><h6 className="fw-bold">Date personale:</h6></Form.Label>
                        <Row>
                            <Col>
                                <Form.Control
                                    className="border border-dark"
                                    style={{ backgroundColor: '#eef9fd' }}
                                    as='textarea'
                                    rows={1}
                                    placeholder="Nume"
                                    isInvalid={!!errors.firstname}
                                    {...register("firstname", { required: "Date obligatorii." })}
                                />
                            </Col>
                            <Col>
                                <Form.Control
                                    className="border border-dark"
                                    style={{ backgroundColor: '#eef9fd' }}
                                    as='textarea'
                                    rows={1}
                                    placeholder="Prenume"
                                    isInvalid={!!errors.firstname}
                                    {...register("lastname")}
                                />
                            </Col>
                            <Col>
                                <Form.Control
                                    className="border border-dark"
                                    style={{ backgroundColor: '#eef9fd' }}
                                    as='textarea'
                                    rows={1}
                                    placeholder="Număr de telefon"
                                    isInvalid={!!errors.firstname}
                                    {...register("phoneno")}
                                />
                            </Col>
                            <Col>
                                <Form.Control
                                    className="border border-dark"
                                    style={{ backgroundColor: '#eef9fd' }}
                                    as='textarea'
                                    rows={1}
                                    placeholder="Vârstă"
                                    isInvalid={!!errors.firstname}
                                    {...register("age")}
                                />
                            </Col>
                            <Col>
                                <Form.Control
                                    className="border border-dark"
                                    style={{ backgroundColor: '#eef9fd' }}
                                    as='textarea'
                                    rows={1}
                                    placeholder="CNP"
                                    isInvalid={!!errors.firstname}
                                    {...register("cnp")}
                                />
                            </Col>
                            <Form.Control.Feedback type="invalid">
                                {errors.firstname?.message}
                            </Form.Control.Feedback>
                        </Row>
                    </Form.Group>

                    <Form.Group className="mb-4">
                        <Form.Label><h6 className="fw-bold">Detalii importante:</h6></Form.Label>
                        <Form.Control
                            className="border border-dark"
                            style={{ backgroundColor: '#eef9fd' }}
                            as='textarea'
                            rows={6}
                            placeholder="Adaugă detalii importante pacient..."
                            {...register("importantdetails")}
                        />
                    </Form.Group>

                    <div style={{ margin: '6em 0' }}>
                        <Container
                            style={{ display: 'flex', justifyContent: 'center', padding: "0px", maxWidth: '50%' }}>
                            <ListGroup>
                                <ListGroup.Item style={{ borderTop: 'none', borderLeft: 'none', borderRight: 'none', borderBottom: 'none', borderRadius: '0px' }}>
                                    <Stack direction="horizontal" gap={2} style={{ justifyContent: 'end' }}>
                                        <section className={styles.section1}>
                                            <Controller
                                                render={({ field }) => (
                                                    <select {...field} onChange={(e) => { field.onChange(e); setSelectedOptiona1(e.target.value); }}>

                                                        <option value={0} selected>Sanatos</option>
                                                        <option value={10}>In lucru</option>
                                                        <option value={20}>Terminat</option>
                                                        <option value={30}>Extras</option>
                                                    </select>
                                                )}
                                                name="a1"
                                                control={control}
                                            />
                                            <h1>
                                                {(() => {
                                                    switch (selectedOptiona1) {
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
                                            </h1>
                                        </section>
                                        <section className={styles.section1}>
                                            <Controller
                                                render={({ field }) => (
                                                    <select {...field} onChange={(e) => { field.onChange(e); setSelectedOptiona2(e.target.value); }}>
                                                        <option value={0} selected>Sanatos</option>
                                                        <option value={10}>In lucru</option>
                                                        <option value={20}>Terminat</option>
                                                        <option value={30}>Extras</option>
                                                    </select>
                                                )}
                                                name="a2"
                                                control={control}
                                            />
                                            <h1>
                                                {(() => {
                                                    switch (selectedOptiona2) {
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
                                                        default:
                                                            return <Badge pill bg="info">
                                                                5.4
                                                            </Badge>
                                                    }
                                                })()}
                                            </h1>
                                        </section>
                                        <section className={styles.section1}>
                                            <Controller
                                                render={({ field }) => (
                                                    <select {...field} onChange={(e) => { field.onChange(e); setSelectedOptiona3(e.target.value); }}>
                                                        <option value={0} selected>Sanatos</option>
                                                        <option value={10}>In lucru</option>
                                                        <option value={20}>Terminat</option>
                                                        <option value={30}>Extras</option>
                                                    </select>
                                                )}
                                                name="a3"
                                                control={control}
                                            />
                                            <h1>
                                                {(() => {
                                                    switch (selectedOptiona3) {
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
                                                        default:
                                                            return <Badge pill bg="info">
                                                                5.3
                                                            </Badge>
                                                    }
                                                })()}
                                            </h1>
                                        </section>
                                        <section className={styles.section1}>
                                            <Controller
                                                render={({ field }) => (
                                                    <select {...field} onChange={(e) => { field.onChange(e); setSelectedOptiona4(e.target.value); }}>
                                                        <option value={0} selected>Sanatos</option>
                                                        <option value={10}>In lucru</option>
                                                        <option value={20}>Terminat</option>
                                                        <option value={30}>Extras</option>
                                                    </select>
                                                )}
                                                name="a4"
                                                control={control}
                                            />
                                            <h1>
                                                {(() => {
                                                    switch (selectedOptiona4) {
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
                                                        default:
                                                            return <Badge pill bg="info">
                                                                5.2
                                                            </Badge>
                                                    }
                                                })()}
                                            </h1>
                                        </section>
                                        <section className={styles.section1}>
                                            <Controller
                                                render={({ field }) => (
                                                    <select {...field} onChange={(e) => { field.onChange(e); setSelectedOptiona5(e.target.value); }}>
                                                        <option value={0} selected>Sanatos</option>
                                                        <option value={10}>In lucru</option>
                                                        <option value={20}>Terminat</option>
                                                        <option value={30}>Extras</option>
                                                    </select>
                                                )}
                                                name="a5"
                                                control={control}
                                            />
                                            <h1>
                                                {(() => {
                                                    switch (selectedOptiona5) {
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
                                                        default:
                                                            return <Badge pill bg="info">
                                                                5.1
                                                            </Badge>
                                                    }
                                                })()}
                                            </h1>
                                        </section>
                                    </Stack>
                                    <Stack direction="horizontal" gap={2} >
                                        <section className={styles.section2}>
                                            <Controller
                                                render={({ field }) => (
                                                    <select {...field} onChange={(e) => { field.onChange(e); setSelectedOptiona6(e.target.value); }}>
                                                        <option value={0} selected>Sanatos</option>
                                                        <option value={10}>In lucru</option>
                                                        <option value={20}>Terminat</option>
                                                        <option value={30}>Extras</option>
                                                    </select>
                                                )}
                                                name="a6"
                                                control={control}
                                            />
                                            <h1>
                                                {(() => {

                                                    switch (selectedOptiona6) {
                                                        case '0':
                                                            return <Badge pill bg="info">
                                                                1.8
                                                            </Badge>
                                                        case '10':
                                                            return <Badge pill bg="danger">
                                                                1.8
                                                            </Badge>
                                                        case '20':
                                                            return <Badge pill bg="success">
                                                                1.8
                                                            </Badge>
                                                        case '30':
                                                            return <Badge pill bg="dark">
                                                                1.8
                                                            </Badge>
                                                        default:
                                                            return <Badge pill bg="info">
                                                                1.8
                                                            </Badge>
                                                    }
                                                })()}
                                            </h1>
                                        </section>
                                        <section className={styles.section2}>
                                            <Controller
                                                render={({ field }) => (
                                                    <select {...field} onChange={(e) => { field.onChange(e); setSelectedOptiona7(e.target.value); }}>
                                                        <option value={0} selected>Sanatos</option>
                                                        <option value={10}>In lucru</option>
                                                        <option value={20}>Terminat</option>
                                                        <option value={30}>Extras</option>
                                                    </select>
                                                )}
                                                name="a7"
                                                control={control}
                                            />
                                            <h1>
                                                {(() => {
                                                    switch (selectedOptiona7) {
                                                        case '0':
                                                            return <Badge pill bg="info">
                                                                1.7
                                                            </Badge>
                                                        case '10':
                                                            return <Badge pill bg="danger">
                                                                1.7
                                                            </Badge>
                                                        case '20':
                                                            return <Badge pill bg="success">
                                                                1.7
                                                            </Badge>
                                                        case '30':
                                                            return <Badge pill bg="dark">
                                                                1.7
                                                            </Badge>
                                                        default:
                                                            return <Badge pill bg="info">
                                                                1.7
                                                            </Badge>
                                                    }
                                                })()}
                                            </h1>
                                        </section>

                                        <section className={styles.section2}>
                                            <Controller
                                                render={({ field }) => (
                                                    <select {...field} onChange={(e) => { field.onChange(e); setSelectedOptiona8(e.target.value); }}>
                                                        <option value={0} selected>Sanatos</option>
                                                        <option value={10}>In lucru</option>
                                                        <option value={20}>Terminat</option>
                                                        <option value={30}>Extras</option>
                                                    </select>
                                                )}
                                                name="a8"
                                                control={control}
                                            />
                                            <h1>
                                                {(() => {
                                                    switch (selectedOptiona8) {
                                                        case '0':
                                                            return <Badge pill bg="info">
                                                                1.6
                                                            </Badge>
                                                        case '10':
                                                            return <Badge pill bg="danger">
                                                                1.6
                                                            </Badge>
                                                        case '20':
                                                            return <Badge pill bg="success">
                                                                1.6
                                                            </Badge>
                                                        case '30':
                                                            return <Badge pill bg="dark">
                                                                1.6
                                                            </Badge>
                                                        default:
                                                            return <Badge pill bg="info">
                                                                1.6
                                                            </Badge>
                                                    }
                                                })()}
                                            </h1>
                                        </section>
                                        <section className={styles.section2}>
                                            <Controller
                                                render={({ field }) => (
                                                    <select {...field} onChange={(e) => { field.onChange(e); setSelectedOptiona9(e.target.value); }}>
                                                        <option value={0} selected>Sanatos</option>
                                                        <option value={10}>In lucru</option>
                                                        <option value={20}>Terminat</option>
                                                        <option value={30}>Extras</option>
                                                    </select>
                                                )}
                                                name="a9"
                                                control={control}
                                            />
                                            <h1>
                                                {(() => {
                                                    switch (selectedOptiona9) {
                                                        case '0':
                                                            return <Badge pill bg="info">
                                                                1.5
                                                            </Badge>
                                                        case '10':
                                                            return <Badge pill bg="danger">
                                                                1.5
                                                            </Badge>
                                                        case '20':
                                                            return <Badge pill bg="success">
                                                                1.5
                                                            </Badge>
                                                        case '30':
                                                            return <Badge pill bg="dark">
                                                                1.5
                                                            </Badge>
                                                        default:
                                                            return <Badge pill bg="info">
                                                                1.5
                                                            </Badge>
                                                    }
                                                })()}
                                            </h1>
                                        </section>
                                        <section className={styles.section2}>
                                            <Controller
                                                render={({ field }) => (
                                                    <select {...field} onChange={(e) => { field.onChange(e); setSelectedOptiona10(e.target.value); }}>
                                                        <option value={0} selected>Sanatos</option>
                                                        <option value={10}>In lucru</option>
                                                        <option value={20}>Terminat</option>
                                                        <option value={30}>Extras</option>
                                                    </select>
                                                )}
                                                name="a10"
                                                control={control}
                                            />
                                            <h1>
                                                {(() => {
                                                    switch (selectedOptiona10) {
                                                        case '0':
                                                            return <Badge pill bg="info">
                                                                1.4
                                                            </Badge>
                                                        case '10':
                                                            return <Badge pill bg="danger">
                                                                1.4
                                                            </Badge>
                                                        case '20':
                                                            return <Badge pill bg="success">
                                                                1.4
                                                            </Badge>
                                                        case '30':
                                                            return <Badge pill bg="dark">
                                                                1.4
                                                            </Badge>
                                                        default:
                                                            return <Badge pill bg="info">
                                                                1.4
                                                            </Badge>
                                                    }
                                                })()}
                                            </h1>
                                        </section>
                                        <section className={styles.section2}>
                                            <Controller
                                                render={({ field }) => (
                                                    <select {...field} onChange={(e) => { field.onChange(e); setSelectedOptiona11(e.target.value); }}>
                                                        <option value={0} selected>Sanatos</option>
                                                        <option value={10}>In lucru</option>
                                                        <option value={20}>Terminat</option>
                                                        <option value={30}>Extras</option>
                                                    </select>
                                                )}
                                                name="a11"
                                                control={control}
                                            />
                                            <h1>
                                                {(() => {
                                                    switch (selectedOptiona11) {
                                                        case '0':
                                                            return <Badge pill bg="info">
                                                                1.3
                                                            </Badge>
                                                        case '10':
                                                            return <Badge pill bg="danger">
                                                                1.3
                                                            </Badge>
                                                        case '20':
                                                            return <Badge pill bg="success">
                                                                1.3
                                                            </Badge>
                                                        case '30':
                                                            return <Badge pill bg="dark">
                                                                1.3
                                                            </Badge>
                                                        default:
                                                            return <Badge pill bg="info">
                                                                1.3
                                                            </Badge>
                                                    }
                                                })()}
                                            </h1>
                                        </section>
                                        <section className={styles.section2}>
                                            <Controller
                                                render={({ field }) => (
                                                    <select {...field} onChange={(e) => { field.onChange(e); setSelectedOptiona12(e.target.value); }}>
                                                        <option value={0} selected>Sanatos</option>
                                                        <option value={10}>In lucru</option>
                                                        <option value={20}>Terminat</option>
                                                        <option value={30}>Extras</option>
                                                    </select>
                                                )}
                                                name="a12"
                                                control={control}
                                            />
                                            <h1>
                                                {(() => {
                                                    switch (selectedOptiona12) {
                                                        case '0':
                                                            return <Badge pill bg="info">
                                                                1.2
                                                            </Badge>
                                                        case '10':
                                                            return <Badge pill bg="danger">
                                                                1.2
                                                            </Badge>
                                                        case '20':
                                                            return <Badge pill bg="success">
                                                                1.2
                                                            </Badge>
                                                        case '30':
                                                            return <Badge pill bg="dark">
                                                                1.2
                                                            </Badge>
                                                        default:
                                                            return <Badge pill bg="info">
                                                                1.2
                                                            </Badge>
                                                    }
                                                })()}
                                            </h1>
                                        </section>
                                        <section className={styles.section2}>
                                            <Controller
                                                render={({ field }) => (
                                                    <select {...field} onChange={(e) => { field.onChange(e); setSelectedOptiona13(e.target.value); }}>
                                                        <option value={0} selected>Sanatos</option>
                                                        <option value={10}>In lucru</option>
                                                        <option value={20}>Terminat</option>
                                                        <option value={30}>Extras</option>
                                                    </select>
                                                )}
                                                name="a13"
                                                control={control}
                                            />
                                            <h1>
                                                {(() => {
                                                    switch (selectedOptiona13) {
                                                        case '0':
                                                            return <Badge pill bg="info">
                                                                1.1
                                                            </Badge>
                                                        case '10':
                                                            return <Badge pill bg="danger">
                                                                1.1
                                                            </Badge>
                                                        case '20':
                                                            return <Badge pill bg="success">
                                                                1.1
                                                            </Badge>
                                                        case '30':
                                                            return <Badge pill bg="dark">
                                                                1.1
                                                            </Badge>
                                                        default:
                                                            return <Badge pill bg="info">
                                                                1.1
                                                            </Badge>
                                                    }
                                                })()}
                                            </h1>
                                        </section>
                                    </Stack>
                                </ListGroup.Item>
                            </ListGroup>
                            <ListGroup>
                                <ListGroup.Item style={{ borderTop: 'none', borderLeft: '2px solid rgb(33, 37, 41)', borderRight: 'none', borderBottom: 'none', borderRadius: '0px' }}>
                                    <Stack direction="horizontal" gap={2}>
                                        <section className={styles.section1}>
                                            <Controller
                                                render={({ field }) => (
                                                    <select {...field} onChange={(e) => { field.onChange(e); setSelectedOptionb1(e.target.value); }}>
                                                        <option value={0} selected>Sanatos</option>
                                                        <option value={10}>In lucru</option>
                                                        <option value={20}>Terminat</option>
                                                        <option value={30}>Extras</option>
                                                    </select>
                                                )}
                                                name="b1"
                                                control={control}
                                            />
                                            <h1>
                                                {(() => {
                                                    switch (selectedOptionb1) {
                                                        case '0':
                                                            return <Badge pill bg="info">
                                                                6.1
                                                            </Badge>
                                                        case '10':
                                                            return <Badge pill bg="danger">
                                                                6.1
                                                            </Badge>
                                                        case '20':
                                                            return <Badge pill bg="success">
                                                                6.1
                                                            </Badge>
                                                        case '30':
                                                            return <Badge pill bg="dark">
                                                                6.1
                                                            </Badge>
                                                        default:
                                                            return <Badge pill bg="info">
                                                                6.1
                                                            </Badge>
                                                    }
                                                })()}
                                            </h1>
                                        </section>
                                        <section className={styles.section1}>
                                            <Controller
                                                render={({ field }) => (
                                                    <select {...field} onChange={(e) => { field.onChange(e); setSelectedOptionb2(e.target.value); }}>
                                                        <option value={0} selected>Sanatos</option>
                                                        <option value={10}>In lucru</option>
                                                        <option value={20}>Terminat</option>
                                                        <option value={30}>Extras</option>
                                                    </select>
                                                )}
                                                name="b2"
                                                control={control}
                                            />
                                            <h1>
                                                {(() => {
                                                    switch (selectedOptionb2) {
                                                        case '0':
                                                            return <Badge pill bg="info">
                                                                6.2
                                                            </Badge>
                                                        case '10':
                                                            return <Badge pill bg="danger">
                                                                6.2
                                                            </Badge>
                                                        case '20':
                                                            return <Badge pill bg="success">
                                                                6.2
                                                            </Badge>
                                                        case '30':
                                                            return <Badge pill bg="dark">
                                                                6.2
                                                            </Badge>
                                                        default:
                                                            return <Badge pill bg="info">
                                                                6.2
                                                            </Badge>
                                                    }
                                                })()}
                                            </h1>
                                        </section>
                                        <section className={styles.section1}>
                                            <Controller
                                                render={({ field }) => (
                                                    <select {...field} onChange={(e) => { field.onChange(e); setSelectedOptionb3(e.target.value); }}>
                                                        <option value={0} selected>Sanatos</option>
                                                        <option value={10}>In lucru</option>
                                                        <option value={20}>Terminat</option>
                                                        <option value={30}>Extras</option>
                                                    </select>
                                                )}
                                                name="b3"
                                                control={control}
                                            />
                                            <h1>
                                                {(() => {
                                                    switch (selectedOptionb3) {
                                                        case '0':
                                                            return <Badge pill bg="info">
                                                                6.3
                                                            </Badge>
                                                        case '10':
                                                            return <Badge pill bg="danger">
                                                                6.3
                                                            </Badge>
                                                        case '20':
                                                            return <Badge pill bg="success">
                                                                6.3
                                                            </Badge>
                                                        case '30':
                                                            return <Badge pill bg="dark">
                                                                6.3
                                                            </Badge>
                                                        default:
                                                            return <Badge pill bg="info">
                                                                6.3
                                                            </Badge>
                                                    }
                                                })()}
                                            </h1>
                                        </section>
                                        <section className={styles.section1}>
                                            <Controller
                                                render={({ field }) => (
                                                    <select {...field} onChange={(e) => { field.onChange(e); setSelectedOptionb4(e.target.value); }}>
                                                        <option value={0} selected>Sanatos</option>
                                                        <option value={10}>In lucru</option>
                                                        <option value={20}>Terminat</option>
                                                        <option value={30}>Extras</option>
                                                    </select>
                                                )}
                                                name="b4"
                                                control={control}
                                            />
                                            <h1>
                                                {(() => {
                                                    switch (selectedOptionb4) {
                                                        case '0':
                                                            return <Badge pill bg="info">
                                                                6.4
                                                            </Badge>
                                                        case '10':
                                                            return <Badge pill bg="danger">
                                                                6.4
                                                            </Badge>
                                                        case '20':
                                                            return <Badge pill bg="success">
                                                                6.4
                                                            </Badge>
                                                        case '30':
                                                            return <Badge pill bg="dark">
                                                                6.4
                                                            </Badge>
                                                        default:
                                                            return <Badge pill bg="info">
                                                                6.4
                                                            </Badge>
                                                    }
                                                })()}
                                            </h1>
                                        </section>
                                        <section className={styles.section1}>
                                            <Controller
                                                render={({ field }) => (
                                                    <select {...field} onChange={(e) => { field.onChange(e); setSelectedOptionb5(e.target.value); }}>
                                                        <option value={0} selected>Sanatos</option>
                                                        <option value={10}>In lucru</option>
                                                        <option value={20}>Terminat</option>
                                                        <option value={30}>Extras</option>
                                                    </select>
                                                )}
                                                name="b5"
                                                control={control}
                                            />
                                            <h1>
                                                {(() => {
                                                    switch (selectedOptionb5) {
                                                        case '0':
                                                            return <Badge pill bg="info">
                                                                6.5
                                                            </Badge>
                                                        case '10':
                                                            return <Badge pill bg="danger">
                                                                6.5
                                                            </Badge>
                                                        case '20':
                                                            return <Badge pill bg="success">
                                                                6.5
                                                            </Badge>
                                                        case '30':
                                                            return <Badge pill bg="dark">
                                                                6.5
                                                            </Badge>
                                                        default:
                                                            return <Badge pill bg="info">
                                                                6.5
                                                            </Badge>
                                                    }
                                                })()}
                                            </h1>
                                        </section>
                                    </Stack>
                                    <Stack direction="horizontal" gap={2}>
                                        <section className={styles.section2}>
                                            <Controller
                                                render={({ field }) => (
                                                    <select {...field} onChange={(e) => { field.onChange(e); setSelectedOptionb6(e.target.value); }}>
                                                        <option value={0} selected>Sanatos</option>
                                                        <option value={10}>In lucru</option>
                                                        <option value={20}>Terminat</option>
                                                        <option value={30}>Extras</option>
                                                    </select>
                                                )}
                                                name="b6"
                                                control={control}
                                            />
                                            <h1>
                                                {(() => {

                                                    switch (selectedOptionb6) {
                                                        case '0':
                                                            return <Badge pill bg="info">
                                                                2.1
                                                            </Badge>
                                                        case '10':
                                                            return <Badge pill bg="danger">
                                                                2.1
                                                            </Badge>
                                                        case '20':
                                                            return <Badge pill bg="success">
                                                                2.1
                                                            </Badge>
                                                        case '30':
                                                            return <Badge pill bg="dark">
                                                                2.1
                                                            </Badge>
                                                        default:
                                                            return <Badge pill bg="info">
                                                                2.1
                                                            </Badge>
                                                    }
                                                })()}
                                            </h1>
                                        </section>
                                        <section className={styles.section2}>
                                            <Controller
                                                render={({ field }) => (
                                                    <select {...field} onChange={(e) => { field.onChange(e); setSelectedOptionb7(e.target.value); }}>
                                                        <option value={0} selected>Sanatos</option>
                                                        <option value={10}>In lucru</option>
                                                        <option value={20}>Terminat</option>
                                                        <option value={30}>Extras</option>
                                                    </select>
                                                )}
                                                name="b7"
                                                control={control}
                                            />
                                            <h1>
                                                {(() => {
                                                    switch (selectedOptionb7) {
                                                        case '0':
                                                            return <Badge pill bg="info">
                                                                2.2
                                                            </Badge>
                                                        case '10':
                                                            return <Badge pill bg="danger">
                                                                2.2
                                                            </Badge>
                                                        case '20':
                                                            return <Badge pill bg="success">
                                                                2.2
                                                            </Badge>
                                                        case '30':
                                                            return <Badge pill bg="dark">
                                                                2.2
                                                            </Badge>
                                                        default:
                                                            return <Badge pill bg="info">
                                                                2.2
                                                            </Badge>
                                                    }
                                                })()}
                                            </h1>
                                        </section>

                                        <section className={styles.section2}>
                                            <Controller
                                                render={({ field }) => (
                                                    <select {...field} onChange={(e) => { field.onChange(e); setSelectedOptionb8(e.target.value); }}>
                                                        <option value={0} selected>Sanatos</option>
                                                        <option value={10}>In lucru</option>
                                                        <option value={20}>Terminat</option>
                                                        <option value={30}>Extras</option>
                                                    </select>
                                                )}
                                                name="b8"
                                                control={control}
                                            />
                                            <h1>
                                                {(() => {
                                                    switch (selectedOptionb8) {
                                                        case '0':
                                                            return <Badge pill bg="info">
                                                                2.3
                                                            </Badge>
                                                        case '10':
                                                            return <Badge pill bg="danger">
                                                                2.3
                                                            </Badge>
                                                        case '20':
                                                            return <Badge pill bg="success">
                                                                2.3
                                                            </Badge>
                                                        case '30':
                                                            return <Badge pill bg="dark">
                                                                2.3
                                                            </Badge>
                                                        default:
                                                            return <Badge pill bg="info">
                                                                2.3
                                                            </Badge>
                                                    }
                                                })()}
                                            </h1>
                                        </section>
                                        <section className={styles.section2}>
                                            <Controller
                                                render={({ field }) => (
                                                    <select {...field} onChange={(e) => { field.onChange(e); setSelectedOptionb9(e.target.value); }}>
                                                        <option value={0} selected>Sanatos</option>
                                                        <option value={10}>In lucru</option>
                                                        <option value={20}>Terminat</option>
                                                        <option value={30}>Extras</option>
                                                    </select>
                                                )}
                                                name="b9"
                                                control={control}
                                            />
                                            <h1>
                                                {(() => {
                                                    switch (selectedOptionb9) {
                                                        case '0':
                                                            return <Badge pill bg="info">
                                                                2.4
                                                            </Badge>
                                                        case '10':
                                                            return <Badge pill bg="danger">
                                                                2.4
                                                            </Badge>
                                                        case '20':
                                                            return <Badge pill bg="success">
                                                                2.4
                                                            </Badge>
                                                        case '30':
                                                            return <Badge pill bg="dark">
                                                                2.4
                                                            </Badge>
                                                        default:
                                                            return <Badge pill bg="info">
                                                                2.4
                                                            </Badge>
                                                    }
                                                })()}
                                            </h1>
                                        </section>
                                        <section className={styles.section2}>
                                            <Controller
                                                render={({ field }) => (
                                                    <select {...field} onChange={(e) => { field.onChange(e); setSelectedOptionb10(e.target.value); }}>
                                                        <option value={0} selected>Sanatos</option>
                                                        <option value={10}>In lucru</option>
                                                        <option value={20}>Terminat</option>
                                                        <option value={30}>Extras</option>
                                                    </select>
                                                )}
                                                name="b10"
                                                control={control}
                                            />
                                            <h1>
                                                {(() => {
                                                    switch (selectedOptionb10) {
                                                        case '0':
                                                            return <Badge pill bg="info">
                                                                2.5
                                                            </Badge>
                                                        case '10':
                                                            return <Badge pill bg="danger">
                                                                2.5
                                                            </Badge>
                                                        case '20':
                                                            return <Badge pill bg="success">
                                                                2.5
                                                            </Badge>
                                                        case '30':
                                                            return <Badge pill bg="dark">
                                                                2.5
                                                            </Badge>
                                                        default:
                                                            return <Badge pill bg="info">
                                                                2.5
                                                            </Badge>
                                                    }
                                                })()}
                                            </h1>
                                        </section>
                                        <section className={styles.section2}>
                                            <Controller
                                                render={({ field }) => (
                                                    <select {...field} onChange={(e) => { field.onChange(e); setSelectedOptionb11(e.target.value); }}>
                                                        <option value={0} selected>Sanatos</option>
                                                        <option value={10}>In lucru</option>
                                                        <option value={20}>Terminat</option>
                                                        <option value={30}>Extras</option>
                                                    </select>
                                                )}
                                                name="b11"
                                                control={control}
                                            />
                                            <h1>
                                                {(() => {
                                                    switch (selectedOptionb11) {
                                                        case '0':
                                                            return <Badge pill bg="info">
                                                                2.6
                                                            </Badge>
                                                        case '10':
                                                            return <Badge pill bg="danger">
                                                                2.6
                                                            </Badge>
                                                        case '20':
                                                            return <Badge pill bg="success">
                                                                2.6
                                                            </Badge>
                                                        case '30':
                                                            return <Badge pill bg="dark">
                                                                2.6
                                                            </Badge>
                                                        default:
                                                            return <Badge pill bg="info">
                                                                2.6
                                                            </Badge>
                                                    }
                                                })()}
                                            </h1>
                                        </section>
                                        <section className={styles.section2}>
                                            <Controller
                                                render={({ field }) => (
                                                    <select {...field} onChange={(e) => { field.onChange(e); setSelectedOptionb12(e.target.value); }}>
                                                        <option value={0} selected>Sanatos</option>
                                                        <option value={10}>In lucru</option>
                                                        <option value={20}>Terminat</option>
                                                        <option value={30}>Extras</option>
                                                    </select>
                                                )}
                                                name="b12"
                                                control={control}
                                            />
                                            <h1>
                                                {(() => {
                                                    switch (selectedOptionb12) {
                                                        case '0':
                                                            return <Badge pill bg="info">
                                                                2.7
                                                            </Badge>
                                                        case '10':
                                                            return <Badge pill bg="danger">
                                                                2.7
                                                            </Badge>
                                                        case '20':
                                                            return <Badge pill bg="success">
                                                                2.7
                                                            </Badge>
                                                        case '30':
                                                            return <Badge pill bg="dark">
                                                                2.7
                                                            </Badge>
                                                        default:
                                                            return <Badge pill bg="info">
                                                                2.7
                                                            </Badge>
                                                    }
                                                })()}
                                            </h1>
                                        </section>
                                        <section className={styles.section2}>
                                            <Controller
                                                render={({ field }) => (
                                                    <select {...field} onChange={(e) => { field.onChange(e); setSelectedOptionb13(e.target.value); }}>
                                                        <option value={0} selected>Sanatos</option>
                                                        <option value={10}>In lucru</option>
                                                        <option value={20}>Terminat</option>
                                                        <option value={30}>Extras</option>
                                                    </select>
                                                )}
                                                name="b13"
                                                control={control}
                                            />
                                            <h1>
                                                {(() => {
                                                    switch (selectedOptionb13) {
                                                        case '0':
                                                            return <Badge pill bg="info">
                                                                2.8
                                                            </Badge>
                                                        case '10':
                                                            return <Badge pill bg="danger">
                                                                2.8
                                                            </Badge>
                                                        case '20':
                                                            return <Badge pill bg="success">
                                                                2.8
                                                            </Badge>
                                                        case '30':
                                                            return <Badge pill bg="dark">
                                                                2.8
                                                            </Badge>
                                                        default:
                                                            return <Badge pill bg="info">
                                                                2.8
                                                            </Badge>
                                                    }
                                                })()}
                                            </h1>
                                        </section>
                                    </Stack>
                                </ListGroup.Item>
                            </ListGroup>
                        </Container >
                        <Container style={{ display: 'flex', justifyContent: 'center', padding: "0px", maxWidth: '50%' }}>
                            <ListGroup>
                                <ListGroup.Item style={{ borderTop: '2px solid rgb(33, 37, 41)', borderLeft: 'none', borderRight: 'none', borderBottom: 'none', borderRadius: '0px' }}>
                                    <Stack direction="horizontal" gap={2}>
                                        <section className={styles.section1}>
                                            <Controller
                                                render={({ field }) => (
                                                    <select {...field} onChange={(e) => { field.onChange(e); setSelectedOptionc1(e.target.value); }}>
                                                        <option value={0} selected>Sanatos</option>
                                                        <option value={10}>In lucru</option>
                                                        <option value={20}>Terminat</option>
                                                        <option value={30}>Extras</option>
                                                    </select>
                                                )}
                                                name="c1"
                                                control={control}
                                            />
                                            <h1>
                                                {(() => {
                                                    switch (selectedOptionc1) {
                                                        case '0':
                                                            return <Badge pill bg="info">
                                                                4.8
                                                            </Badge>
                                                        case '10':
                                                            return <Badge pill bg="danger">
                                                                4.8
                                                            </Badge>
                                                        case '20':
                                                            return <Badge pill bg="success">
                                                                4.8
                                                            </Badge>
                                                        case '30':
                                                            return <Badge pill bg="dark">
                                                                4.8
                                                            </Badge>
                                                        default:
                                                            return <Badge pill bg="info">
                                                                4.8
                                                            </Badge>
                                                    }
                                                })()}
                                            </h1>
                                        </section>
                                        <section className={styles.section1}>
                                            <Controller
                                                render={({ field }) => (
                                                    <select {...field} onChange={(e) => { field.onChange(e); setSelectedOptionc2(e.target.value); }}>
                                                        <option value={0} selected>Sanatos</option>
                                                        <option value={10}>In lucru</option>
                                                        <option value={20}>Terminat</option>
                                                        <option value={30}>Extras</option>
                                                    </select>
                                                )}
                                                name="c2"
                                                control={control}
                                            />
                                            <h1>
                                                {(() => {
                                                    switch (selectedOptionc2) {
                                                        case '0':
                                                            return <Badge pill bg="info">
                                                                4.7
                                                            </Badge>
                                                        case '10':
                                                            return <Badge pill bg="danger">
                                                                4.7
                                                            </Badge>
                                                        case '20':
                                                            return <Badge pill bg="success">
                                                                4.7
                                                            </Badge>
                                                        case '30':
                                                            return <Badge pill bg="dark">
                                                                4.7
                                                            </Badge>
                                                        default:
                                                            return <Badge pill bg="info">
                                                                4.7
                                                            </Badge>
                                                    }
                                                })()}
                                            </h1>
                                        </section>
                                        <section className={styles.section1}>
                                            <Controller
                                                render={({ field }) => (
                                                    <select {...field} onChange={(e) => { field.onChange(e); setSelectedOptionc3(e.target.value); }}>
                                                        <option value={0} selected>Sanatos</option>
                                                        <option value={10}>In lucru</option>
                                                        <option value={20}>Terminat</option>
                                                        <option value={30}>Extras</option>
                                                    </select>
                                                )}
                                                name="c3"
                                                control={control}
                                            />
                                            <h1>
                                                {(() => {
                                                    switch (selectedOptionc3) {
                                                        case '0':
                                                            return <Badge pill bg="info">
                                                                4.6
                                                            </Badge>
                                                        case '10':
                                                            return <Badge pill bg="danger">
                                                                4.6
                                                            </Badge>
                                                        case '20':
                                                            return <Badge pill bg="success">
                                                                4.6
                                                            </Badge>
                                                        case '30':
                                                            return <Badge pill bg="dark">
                                                                4.6
                                                            </Badge>
                                                        default:
                                                            return <Badge pill bg="info">
                                                                4.6
                                                            </Badge>
                                                    }
                                                })()}
                                            </h1>
                                        </section>
                                        <section className={styles.section1}>
                                            <Controller
                                                render={({ field }) => (
                                                    <select {...field} onChange={(e) => { field.onChange(e); setSelectedOptionc4(e.target.value); }}>
                                                        <option value={0} selected>Sanatos</option>
                                                        <option value={10}>In lucru</option>
                                                        <option value={20}>Terminat</option>
                                                        <option value={30}>Extras</option>
                                                    </select>
                                                )}
                                                name="c4"
                                                control={control}
                                            />
                                            <h1>
                                                {(() => {
                                                    switch (selectedOptionc4) {
                                                        case '0':
                                                            return <Badge pill bg="info">
                                                                4.5
                                                            </Badge>
                                                        case '10':
                                                            return <Badge pill bg="danger">
                                                                4.5
                                                            </Badge>
                                                        case '20':
                                                            return <Badge pill bg="success">
                                                                4.5
                                                            </Badge>
                                                        case '30':
                                                            return <Badge pill bg="dark">
                                                                4.5
                                                            </Badge>
                                                        default:
                                                            return <Badge pill bg="info">
                                                                4.5
                                                            </Badge>
                                                    }
                                                })()}
                                            </h1>
                                        </section>
                                        <section className={styles.section1}>
                                            <Controller
                                                render={({ field }) => (
                                                    <select {...field} onChange={(e) => { field.onChange(e); setSelectedOptionc5(e.target.value); }}>
                                                        <option value={0} selected>Sanatos</option>
                                                        <option value={10}>In lucru</option>
                                                        <option value={20}>Terminat</option>
                                                        <option value={30}>Extras</option>
                                                    </select>
                                                )}
                                                name="c5"
                                                control={control}
                                            />
                                            <h1>
                                                {(() => {
                                                    switch (selectedOptionc5) {
                                                        case '0':
                                                            return <Badge pill bg="info">
                                                                4.4
                                                            </Badge>
                                                        case '10':
                                                            return <Badge pill bg="danger">
                                                                4.4
                                                            </Badge>
                                                        case '20':
                                                            return <Badge pill bg="success">
                                                                4.4
                                                            </Badge>
                                                        case '30':
                                                            return <Badge pill bg="dark">
                                                                4.4
                                                            </Badge>
                                                        default:
                                                            return <Badge pill bg="info">
                                                                4.4
                                                            </Badge>
                                                    }
                                                })()}
                                            </h1>
                                        </section>
                                        <section className={styles.section1}>
                                            <Controller
                                                render={({ field }) => (
                                                    <select {...field} onChange={(e) => { field.onChange(e); setSelectedOptionc6(e.target.value); }}>
                                                        <option value={0} selected>Sanatos</option>
                                                        <option value={10}>In lucru</option>
                                                        <option value={20}>Terminat</option>
                                                        <option value={30}>Extras</option>
                                                    </select>
                                                )}
                                                name="c6"
                                                control={control}
                                            />
                                            <h1>
                                                {(() => {
                                                    switch (selectedOptionc6) {
                                                        case '0':
                                                            return <Badge pill bg="info">
                                                                4.3
                                                            </Badge>
                                                        case '10':
                                                            return <Badge pill bg="danger">
                                                                4.3
                                                            </Badge>
                                                        case '20':
                                                            return <Badge pill bg="success">
                                                                4.3
                                                            </Badge>
                                                        case '30':
                                                            return <Badge pill bg="dark">
                                                                4.3
                                                            </Badge>
                                                        default:
                                                            return <Badge pill bg="info">
                                                                4.3
                                                            </Badge>
                                                    }
                                                })()}
                                            </h1>
                                        </section>
                                        <section className={styles.section1}>
                                            <Controller
                                                render={({ field }) => (
                                                    <select {...field} onChange={(e) => { field.onChange(e); setSelectedOptionc7(e.target.value); }}>
                                                        <option value={0} selected>Sanatos</option>
                                                        <option value={10}>In lucru</option>
                                                        <option value={20}>Terminat</option>
                                                        <option value={30}>Extras</option>
                                                    </select>
                                                )}
                                                name="c7"
                                                control={control}
                                            />
                                            <h1>
                                                {(() => {
                                                    switch (selectedOptionc7) {
                                                        case '0':
                                                            return <Badge pill bg="info">
                                                                4.2
                                                            </Badge>
                                                        case '10':
                                                            return <Badge pill bg="danger">
                                                                4.2
                                                            </Badge>
                                                        case '20':
                                                            return <Badge pill bg="success">
                                                                4.2
                                                            </Badge>
                                                        case '30':
                                                            return <Badge pill bg="dark">
                                                                4.2
                                                            </Badge>
                                                        default:
                                                            return <Badge pill bg="info">
                                                                4.2
                                                            </Badge>
                                                    }
                                                })()}
                                            </h1>
                                        </section>
                                        <section className={styles.section1}>
                                            <Controller
                                                render={({ field }) => (
                                                    <select {...field} onChange={(e) => { field.onChange(e); setSelectedOptionc8(e.target.value); }}>
                                                        <option value={0} selected>Sanatos</option>
                                                        <option value={10}>In lucru</option>
                                                        <option value={20}>Terminat</option>
                                                        <option value={30}>Extras</option>
                                                    </select>
                                                )}
                                                name="c8"
                                                control={control}
                                            />
                                            <h1>
                                                {(() => {
                                                    switch (selectedOptionc8) {
                                                        case '0':
                                                            return <Badge pill bg="info">
                                                                4.1
                                                            </Badge>
                                                        case '10':
                                                            return <Badge pill bg="danger">
                                                                4.1
                                                            </Badge>
                                                        case '20':
                                                            return <Badge pill bg="success">
                                                                4.1
                                                            </Badge>
                                                        case '30':
                                                            return <Badge pill bg="dark">
                                                                4.1
                                                            </Badge>
                                                        default:
                                                            return <Badge pill bg="info">
                                                                4.1
                                                            </Badge>
                                                    }
                                                })()}
                                            </h1>
                                        </section>
                                    </Stack>
                                    <Stack direction="horizontal" gap={2} style={{ justifyContent: 'end' }}>
                                        <section className={styles.section2}>
                                            <Controller
                                                render={({ field }) => (
                                                    <select {...field} onChange={(e) => { field.onChange(e); setSelectedOptionc9(e.target.value); }}>
                                                        <option value={0} selected>Sanatos</option>
                                                        <option value={10}>In lucru</option>
                                                        <option value={20}>Terminat</option>
                                                        <option value={30}>Extras</option>
                                                    </select>
                                                )}
                                                name="c9"
                                                control={control}
                                            />
                                            <h1>
                                                {(() => {

                                                    switch (selectedOptionc9) {
                                                        case '0':
                                                            return <Badge pill bg="info">
                                                                8.5
                                                            </Badge>
                                                        case '10':
                                                            return <Badge pill bg="danger">
                                                                8.5
                                                            </Badge>
                                                        case '20':
                                                            return <Badge pill bg="success">
                                                                8.5
                                                            </Badge>
                                                        case '30':
                                                            return <Badge pill bg="dark">
                                                                8.5
                                                            </Badge>
                                                        default:
                                                            return <Badge pill bg="info">
                                                                8.5
                                                            </Badge>
                                                    }
                                                })()}
                                            </h1>
                                        </section>
                                        <section className={styles.section2}>
                                            <Controller
                                                render={({ field }) => (
                                                    <select {...field} onChange={(e) => { field.onChange(e); setSelectedOptionc10(e.target.value); }}>
                                                        <option value={0} selected>Sanatos</option>
                                                        <option value={10}>In lucru</option>
                                                        <option value={20}>Terminat</option>
                                                        <option value={30}>Extras</option>
                                                    </select>
                                                )}
                                                name="c10"
                                                control={control}
                                            />
                                            <h1>
                                                {(() => {
                                                    switch (selectedOptionc10) {
                                                        case '0':
                                                            return <Badge pill bg="info">
                                                                8.4
                                                            </Badge>
                                                        case '10':
                                                            return <Badge pill bg="danger">
                                                                8.4
                                                            </Badge>
                                                        case '20':
                                                            return <Badge pill bg="success">
                                                                8.4
                                                            </Badge>
                                                        case '30':
                                                            return <Badge pill bg="dark">
                                                                8.4
                                                            </Badge>
                                                        default:
                                                            return <Badge pill bg="info">
                                                                8.4
                                                            </Badge>
                                                    }
                                                })()}
                                            </h1>
                                        </section>
                                        <section className={styles.section2}>
                                            <Controller
                                                render={({ field }) => (
                                                    <select {...field} onChange={(e) => { field.onChange(e); setSelectedOptionc11(e.target.value); }}>
                                                        <option value={0} selected>Sanatos</option>
                                                        <option value={10}>In lucru</option>
                                                        <option value={20}>Terminat</option>
                                                        <option value={30}>Extras</option>
                                                    </select>
                                                )}
                                                name="c11"
                                                control={control}
                                            />
                                            <h1>
                                                {(() => {
                                                    switch (selectedOptionc11) {
                                                        case '0':
                                                            return <Badge pill bg="info">
                                                                8.3
                                                            </Badge>
                                                        case '10':
                                                            return <Badge pill bg="danger">
                                                                8.3
                                                            </Badge>
                                                        case '20':
                                                            return <Badge pill bg="success">
                                                                8.3
                                                            </Badge>
                                                        case '30':
                                                            return <Badge pill bg="dark">
                                                                8.3
                                                            </Badge>
                                                        default:
                                                            return <Badge pill bg="info">
                                                                8.3
                                                            </Badge>
                                                    }
                                                })()}
                                            </h1>
                                        </section>
                                        <section className={styles.section2}>
                                            <Controller
                                                render={({ field }) => (
                                                    <select {...field} onChange={(e) => { field.onChange(e); setSelectedOptionc12(e.target.value); }}>
                                                        <option value={0} selected>Sanatos</option>
                                                        <option value={10}>In lucru</option>
                                                        <option value={20}>Terminat</option>
                                                        <option value={30}>Extras</option>
                                                    </select>
                                                )}
                                                name="c12"
                                                control={control}
                                            />
                                            <h1>
                                                {(() => {
                                                    switch (selectedOptionc12) {
                                                        case '0':
                                                            return <Badge pill bg="info">
                                                                8.2
                                                            </Badge>
                                                        case '10':
                                                            return <Badge pill bg="danger">
                                                                8.2
                                                            </Badge>
                                                        case '20':
                                                            return <Badge pill bg="success">
                                                                8.2
                                                            </Badge>
                                                        case '30':
                                                            return <Badge pill bg="dark">
                                                                8.2
                                                            </Badge>
                                                        default:
                                                            return <Badge pill bg="info">
                                                                8.2
                                                            </Badge>
                                                    }
                                                })()}
                                            </h1>
                                        </section>
                                        <section className={styles.section2}>
                                            <Controller
                                                render={({ field }) => (
                                                    <select {...field} onChange={(e) => { field.onChange(e); setSelectedOptionc13(e.target.value); }}>
                                                        <option value={0} selected>Sanatos</option>
                                                        <option value={10}>In lucru</option>
                                                        <option value={20}>Terminat</option>
                                                        <option value={30}>Extras</option>
                                                    </select>
                                                )}
                                                name="c13"
                                                control={control}
                                            />
                                            <h1>
                                                {(() => {
                                                    switch (selectedOptionc13) {
                                                        case '0':
                                                            return <Badge pill bg="info">
                                                                8.1
                                                            </Badge>
                                                        case '10':
                                                            return <Badge pill bg="danger">
                                                                8.1
                                                            </Badge>
                                                        case '20':
                                                            return <Badge pill bg="success">
                                                                8.1
                                                            </Badge>
                                                        case '30':
                                                            return <Badge pill bg="dark">
                                                                8.1
                                                            </Badge>
                                                        default:
                                                            return <Badge pill bg="info">
                                                                8.1
                                                            </Badge>
                                                    }
                                                })()}
                                            </h1>
                                        </section>
                                    </Stack>
                                </ListGroup.Item>
                            </ListGroup>
                            <ListGroup>
                                <ListGroup.Item
                                    style={{ borderTop: '2px solid rgb(33, 37, 41)', borderLeft: '2px solid rgb(33, 37, 41)', borderRight: 'none', borderBottom: 'none', borderRadius: '0px' }}>
                                    <Stack direction="horizontal" gap={2}>
                                        <section className={styles.section1}>
                                            <Controller
                                                render={({ field }) => (
                                                    <select {...field} onChange={(e) => { field.onChange(e); setSelectedOptiond1(e.target.value); }}>
                                                        <option value={0} selected>Sanatos</option>
                                                        <option value={10}>In lucru</option>
                                                        <option value={20}>Terminat</option>
                                                        <option value={30}>Extras</option>
                                                    </select>
                                                )}
                                                name="d1"
                                                control={control}
                                            />
                                            <h1>
                                                {(() => {

                                                    switch (selectedOptiond1) {
                                                        case '0':
                                                            return <Badge pill bg="info">
                                                                3.1
                                                            </Badge>
                                                        case '10':
                                                            return <Badge pill bg="danger">
                                                                3.1
                                                            </Badge>
                                                        case '20':
                                                            return <Badge pill bg="success">
                                                                3.1
                                                            </Badge>
                                                        case '30':
                                                            return <Badge pill bg="dark">
                                                                3.1
                                                            </Badge>
                                                        default:
                                                            return <Badge pill bg="info">
                                                                3.1
                                                            </Badge>
                                                    }
                                                })()}
                                            </h1>
                                        </section>
                                        <section className={styles.section1}>
                                            <Controller
                                                render={({ field }) => (
                                                    <select {...field} onChange={(e) => { field.onChange(e); setSelectedOptiond2(e.target.value); }}>
                                                        <option value={0} selected>Sanatos</option>
                                                        <option value={10}>In lucru</option>
                                                        <option value={20}>Terminat</option>
                                                        <option value={30}>Extras</option>
                                                    </select>
                                                )}
                                                name="d2"
                                                control={control}
                                            />
                                            <h1>
                                                {(() => {
                                                    switch (selectedOptiond2) {
                                                        case '0':
                                                            return <Badge pill bg="info">
                                                                3.2
                                                            </Badge>
                                                        case '10':
                                                            return <Badge pill bg="danger">
                                                                3.2
                                                            </Badge>
                                                        case '20':
                                                            return <Badge pill bg="success">
                                                                3.2
                                                            </Badge>
                                                        case '30':
                                                            return <Badge pill bg="dark">
                                                                3.2
                                                            </Badge>
                                                        default:
                                                            return <Badge pill bg="info">
                                                                3.2
                                                            </Badge>
                                                    }
                                                })()}
                                            </h1>
                                        </section>

                                        <section className={styles.section1}>
                                            <Controller
                                                render={({ field }) => (
                                                    <select {...field} onChange={(e) => { field.onChange(e); setSelectedOptiond3(e.target.value); }}>
                                                        <option value={0} selected>Sanatos</option>
                                                        <option value={10}>In lucru</option>
                                                        <option value={20}>Terminat</option>
                                                        <option value={30}>Extras</option>
                                                    </select>
                                                )}
                                                name="d3"
                                                control={control}
                                            />
                                            <h1>
                                                {(() => {
                                                    switch (selectedOptiond3) {
                                                        case '0':
                                                            return <Badge pill bg="info">
                                                                3.3
                                                            </Badge>
                                                        case '10':
                                                            return <Badge pill bg="danger">
                                                                3.3
                                                            </Badge>
                                                        case '20':
                                                            return <Badge pill bg="success">
                                                                3.3
                                                            </Badge>
                                                        case '30':
                                                            return <Badge pill bg="dark">
                                                                3.3
                                                            </Badge>
                                                        default:
                                                            return <Badge pill bg="info">
                                                                3.3
                                                            </Badge>
                                                    }
                                                })()}
                                            </h1>
                                        </section>
                                        <section className={styles.section1}>
                                            <Controller
                                                render={({ field }) => (
                                                    <select {...field} onChange={(e) => { field.onChange(e); setSelectedOptiond4(e.target.value); }}>
                                                        <option value={0} selected>Sanatos</option>
                                                        <option value={10}>In lucru</option>
                                                        <option value={20}>Terminat</option>
                                                        <option value={30}>Extras</option>
                                                    </select>
                                                )}
                                                name="d4"
                                                control={control}
                                            />
                                            <h1>
                                                {(() => {
                                                    switch (selectedOptiond4) {
                                                        case '0':
                                                            return <Badge pill bg="info">
                                                                3.4
                                                            </Badge>
                                                        case '10':
                                                            return <Badge pill bg="danger">
                                                                3.4
                                                            </Badge>
                                                        case '20':
                                                            return <Badge pill bg="success">
                                                                3.4
                                                            </Badge>
                                                        case '30':
                                                            return <Badge pill bg="dark">
                                                                3.4
                                                            </Badge>
                                                        default:
                                                            return <Badge pill bg="info">
                                                                3.4
                                                            </Badge>
                                                    }
                                                })()}
                                            </h1>
                                        </section>
                                        <section className={styles.section1}>
                                            <Controller
                                                render={({ field }) => (
                                                    <select {...field} onChange={(e) => { field.onChange(e); setSelectedOptiond5(e.target.value); }}>
                                                        <option value={0} selected>Sanatos</option>
                                                        <option value={10}>In lucru</option>
                                                        <option value={20}>Terminat</option>
                                                        <option value={30}>Extras</option>
                                                    </select>
                                                )}
                                                name="d5"
                                                control={control}
                                            />
                                            <h1>
                                                {(() => {
                                                    switch (selectedOptiond5) {
                                                        case '0':
                                                            return <Badge pill bg="info">
                                                                3.5
                                                            </Badge>
                                                        case '10':
                                                            return <Badge pill bg="danger">
                                                                3.5
                                                            </Badge>
                                                        case '20':
                                                            return <Badge pill bg="success">
                                                                3.5
                                                            </Badge>
                                                        case '30':
                                                            return <Badge pill bg="dark">
                                                                3.5
                                                            </Badge>
                                                        default:
                                                            return <Badge pill bg="info">
                                                                3.5
                                                            </Badge>
                                                    }
                                                })()}
                                            </h1>
                                        </section>
                                        <section className={styles.section1}>
                                            <Controller
                                                render={({ field }) => (
                                                    <select {...field} onChange={(e) => { field.onChange(e); setSelectedOptiond6(e.target.value); }}>
                                                        <option value={0} selected>Sanatos</option>
                                                        <option value={10}>In lucru</option>
                                                        <option value={20}>Terminat</option>
                                                        <option value={30}>Extras</option>
                                                    </select>
                                                )}
                                                name="d6"
                                                control={control}
                                            />
                                            <h1>
                                                {(() => {
                                                    switch (selectedOptiond6) {
                                                        case '0':
                                                            return <Badge pill bg="info">
                                                                3.6
                                                            </Badge>
                                                        case '10':
                                                            return <Badge pill bg="danger">
                                                                3.6
                                                            </Badge>
                                                        case '20':
                                                            return <Badge pill bg="success">
                                                                3.6
                                                            </Badge>
                                                        case '30':
                                                            return <Badge pill bg="dark">
                                                                3.6
                                                            </Badge>
                                                        default:
                                                            return <Badge pill bg="info">
                                                                3.6
                                                            </Badge>
                                                    }
                                                })()}
                                            </h1>
                                        </section>
                                        <section className={styles.section1}>
                                            <Controller
                                                render={({ field }) => (
                                                    <select {...field} onChange={(e) => { field.onChange(e); setSelectedOptiond7(e.target.value); }}>
                                                        <option value={0} selected>Sanatos</option>
                                                        <option value={10}>In lucru</option>
                                                        <option value={20}>Terminat</option>
                                                        <option value={30}>Extras</option>
                                                    </select>
                                                )}
                                                name="d7"
                                                control={control}
                                            />
                                            <h1>
                                                {(() => {
                                                    switch (selectedOptiond7) {
                                                        case '0':
                                                            return <Badge pill bg="info">
                                                                3.7
                                                            </Badge>
                                                        case '10':
                                                            return <Badge pill bg="danger">
                                                                3.7
                                                            </Badge>
                                                        case '20':
                                                            return <Badge pill bg="success">
                                                                3.7
                                                            </Badge>
                                                        case '30':
                                                            return <Badge pill bg="dark">
                                                                3.7
                                                            </Badge>
                                                        default:
                                                            return <Badge pill bg="info">
                                                                3.7
                                                            </Badge>
                                                    }
                                                })()}
                                            </h1>
                                        </section>
                                        <section className={styles.section1}>
                                            <Controller
                                                render={({ field }) => (
                                                    <select {...field} onChange={(e) => { field.onChange(e); setSelectedOptiond8(e.target.value); }}>
                                                        <option value={0} selected>Sanatos</option>
                                                        <option value={10}>In lucru</option>
                                                        <option value={20}>Terminat</option>
                                                        <option value={30}>Extras</option>
                                                    </select>
                                                )}
                                                name="d8"
                                                control={control}
                                            />
                                            <h1>
                                                {(() => {
                                                    switch (selectedOptiond8) {
                                                        case '0':
                                                            return <Badge pill bg="info">
                                                                3.8
                                                            </Badge>
                                                        case '10':
                                                            return <Badge pill bg="danger">
                                                                3.8
                                                            </Badge>
                                                        case '20':
                                                            return <Badge pill bg="success">
                                                                3.8
                                                            </Badge>
                                                        case '30':
                                                            return <Badge pill bg="dark">
                                                                3.8
                                                            </Badge>
                                                        default:
                                                            return <Badge pill bg="info">
                                                                3.8
                                                            </Badge>
                                                    }
                                                })()}
                                            </h1>
                                        </section>
                                    </Stack>
                                    <Stack direction="horizontal" gap={2}>
                                        <section className={styles.section2}>
                                            <Controller
                                                render={({ field }) => (
                                                    <select {...field} onChange={(e) => { field.onChange(e); setSelectedOptiond9(e.target.value); }}>
                                                        <option value={0} selected>Sanatos</option>
                                                        <option value={10}>In lucru</option>
                                                        <option value={20}>Terminat</option>
                                                        <option value={30}>Extras</option>
                                                    </select>
                                                )}
                                                name="d9"
                                                control={control}
                                            />
                                            <h1>
                                                {(() => {

                                                    switch (selectedOptiond9) {
                                                        case '0':
                                                            return <Badge pill bg="info">
                                                                7.1
                                                            </Badge>
                                                        case '10':
                                                            return <Badge pill bg="danger">
                                                                7.1
                                                            </Badge>
                                                        case '20':
                                                            return <Badge pill bg="success">
                                                                7.1
                                                            </Badge>
                                                        case '30':
                                                            return <Badge pill bg="dark">
                                                                7.1
                                                            </Badge>
                                                        default:
                                                            return <Badge pill bg="info">
                                                                7.1
                                                            </Badge>
                                                    }
                                                })()}
                                            </h1>
                                        </section>
                                        <section className={styles.section2}>
                                            <Controller
                                                render={({ field }) => (
                                                    <select {...field} onChange={(e) => { field.onChange(e); setSelectedOptiond10(e.target.value); }}>
                                                        <option value={0} selected>Sanatos</option>
                                                        <option value={10}>In lucru</option>
                                                        <option value={20}>Terminat</option>
                                                        <option value={30}>Extras</option>
                                                    </select>
                                                )}
                                                name="d10"
                                                control={control}
                                            />
                                            <h1>
                                                {(() => {
                                                    switch (selectedOptiond10) {
                                                        case '0':
                                                            return <Badge pill bg="info">
                                                                7.2
                                                            </Badge>
                                                        case '10':
                                                            return <Badge pill bg="danger">
                                                                7.2
                                                            </Badge>
                                                        case '20':
                                                            return <Badge pill bg="success">
                                                                7.2
                                                            </Badge>
                                                        case '30':
                                                            return <Badge pill bg="dark">
                                                                7.2
                                                            </Badge>
                                                        default:
                                                            return <Badge pill bg="info">
                                                                7.2
                                                            </Badge>
                                                    }
                                                })()}
                                            </h1>
                                        </section>
                                        <section className={styles.section2}>
                                            <Controller
                                                render={({ field }) => (
                                                    <select {...field} onChange={(e) => { field.onChange(e); setSelectedOptiond11(e.target.value); }}>
                                                        <option value={0} selected>Sanatos</option>
                                                        <option value={10}>In lucru</option>
                                                        <option value={20}>Terminat</option>
                                                        <option value={30}>Extras</option>
                                                    </select>
                                                )}
                                                name="d11"
                                                control={control}
                                            />
                                            <h1>
                                                {(() => {
                                                    switch (selectedOptiond11) {
                                                        case '0':
                                                            return <Badge pill bg="info">
                                                                7.3
                                                            </Badge>
                                                        case '10':
                                                            return <Badge pill bg="danger">
                                                                7.3
                                                            </Badge>
                                                        case '20':
                                                            return <Badge pill bg="success">
                                                                7.3
                                                            </Badge>
                                                        case '30':
                                                            return <Badge pill bg="dark">
                                                                7.3
                                                            </Badge>
                                                        default:
                                                            return <Badge pill bg="info">
                                                                7.3
                                                            </Badge>
                                                    }
                                                })()}
                                            </h1>
                                        </section>
                                        <section className={styles.section2}>
                                            <Controller
                                                render={({ field }) => (
                                                    <select {...field} onChange={(e) => { field.onChange(e); setSelectedOptiond12(e.target.value); }}>
                                                        <option value={0} selected>Sanatos</option>
                                                        <option value={10}>In lucru</option>
                                                        <option value={20}>Terminat</option>
                                                        <option value={30}>Extras</option>
                                                    </select>
                                                )}
                                                name="d12"
                                                control={control}
                                            />
                                            <h1>
                                                {(() => {
                                                    switch (selectedOptiond12) {
                                                        case '0':
                                                            return <Badge pill bg="info">
                                                                7.4
                                                            </Badge>
                                                        case '10':
                                                            return <Badge pill bg="danger">
                                                                7.4
                                                            </Badge>
                                                        case '20':
                                                            return <Badge pill bg="success">
                                                                7.4
                                                            </Badge>
                                                        case '30':
                                                            return <Badge pill bg="dark">
                                                                7.4
                                                            </Badge>
                                                        default:
                                                            return <Badge pill bg="info">
                                                                7.4
                                                            </Badge>
                                                    }
                                                })()}
                                            </h1>
                                        </section>
                                        <section className={styles.section2}>
                                            <Controller
                                                render={({ field }) => (
                                                    <select {...field} onChange={(e) => { field.onChange(e); setSelectedOptiond13(e.target.value); }}>
                                                        <option value={0} selected>Sanatos</option>
                                                        <option value={10}>In lucru</option>
                                                        <option value={20}>Terminat</option>
                                                        <option value={30}>Extras</option>
                                                    </select>
                                                )}
                                                name="d13"
                                                control={control}
                                            />
                                            <h1>
                                                {(() => {
                                                    switch (selectedOptiond13) {
                                                        case '0':
                                                            return <Badge pill bg="info">
                                                                7.5
                                                            </Badge>
                                                        case '10':
                                                            return <Badge pill bg="danger">
                                                                7.5
                                                            </Badge>
                                                        case '20':
                                                            return <Badge pill bg="success">
                                                                7.5
                                                            </Badge>
                                                        case '30':
                                                            return <Badge pill bg="dark">
                                                                7.5
                                                            </Badge>
                                                        default:
                                                            return <Badge pill bg="info">
                                                                7.5
                                                            </Badge>
                                                    }
                                                })()}
                                            </h1>
                                        </section>
                                    </Stack>
                                </ListGroup.Item>
                            </ListGroup>
                        </Container>
                    </div>

                    <PrintableTableDiagnostic />
                    <PrintableTableTreatment />
                </Form >
            </Modal.Body >
            <Modal.Footer>
                <Button
                    className={`${styleUtils.blueBg} border-0`}
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
