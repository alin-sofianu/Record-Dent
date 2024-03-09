/* eslint-disable array-callback-return */
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
import { useReactToPrint } from 'react-to-print';
import React from "react";

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

            tooth1a: noteToEdit?.tooth1a || "",
            tooth1b: noteToEdit?.tooth1b || "",
            tooth1c: noteToEdit?.tooth1c || "",
            tooth2b: noteToEdit?.tooth2b || "",
            tooth2c: noteToEdit?.tooth2c || "",
            tooth2a: noteToEdit?.tooth2a || "",
            tooth3b: noteToEdit?.tooth3b || "",
            tooth3c: noteToEdit?.tooth3c || "",
            tooth3a: noteToEdit?.tooth3a || "",
            tooth4b: noteToEdit?.tooth4b || "",
            tooth4c: noteToEdit?.tooth4c || "",
            tooth4a: noteToEdit?.tooth4a || "",
            tooth5b: noteToEdit?.tooth5b || "",
            tooth5c: noteToEdit?.tooth5c || "",
            tooth5a: noteToEdit?.tooth5a || "",
            tooth6b: noteToEdit?.tooth6b || "",
            tooth6c: noteToEdit?.tooth6c || "",
            tooth6a: noteToEdit?.tooth6a || "",
            tooth7b: noteToEdit?.tooth7b || "",
            tooth7c: noteToEdit?.tooth7c || "",
            tooth7a: noteToEdit?.tooth7a || "",
            tooth8b: noteToEdit?.tooth8b || "",
            tooth8c: noteToEdit?.tooth8c || "",
            tooth8a: noteToEdit?.tooth8a || "",
            tooth9b: noteToEdit?.tooth9b || "",
            tooth9c: noteToEdit?.tooth9c || "",
            tooth9a: noteToEdit?.tooth9a || "",
            tooth10a: noteToEdit?.tooth10a || "",
            tooth10b: noteToEdit?.tooth10b || "",
            tooth10c: noteToEdit?.tooth10c || "",
            tooth11a: noteToEdit?.tooth11a || "",
            tooth11b: noteToEdit?.tooth11b || "",
            tooth11c: noteToEdit?.tooth11c || "",
            tooth12b: noteToEdit?.tooth12b || "",
            tooth12c: noteToEdit?.tooth12c || "",
            tooth12a: noteToEdit?.tooth12a || "",
            tooth13b: noteToEdit?.tooth13b || "",
            tooth13c: noteToEdit?.tooth13c || "",
            tooth13a: noteToEdit?.tooth13a || "",
            tooth14b: noteToEdit?.tooth14b || "",
            tooth14c: noteToEdit?.tooth14c || "",
            tooth14a: noteToEdit?.tooth14a || "",
            tooth15b: noteToEdit?.tooth15b || "",
            tooth15c: noteToEdit?.tooth15c || "",
            tooth15a: noteToEdit?.tooth15a || "",
            tooth16b: noteToEdit?.tooth16b || "",
            tooth16c: noteToEdit?.tooth16c || "",
            tooth16a: noteToEdit?.tooth16a || "",
            tooth17b: noteToEdit?.tooth17b || "",
            tooth17c: noteToEdit?.tooth17c || "",
            tooth17a: noteToEdit?.tooth17a || "",
            tooth18b: noteToEdit?.tooth18b || "",
            tooth18c: noteToEdit?.tooth18c || "",
            tooth18a: noteToEdit?.tooth18a || "",
            tooth19b: noteToEdit?.tooth19b || "",
            tooth19c: noteToEdit?.tooth19c || "",
            tooth19a: noteToEdit?.tooth19a || "",
            tooth20a: noteToEdit?.tooth20a || "",
            tooth20b: noteToEdit?.tooth20b || "",
            tooth20c: noteToEdit?.tooth20c || "",
            tooth21a: noteToEdit?.tooth21a || "",
            tooth21b: noteToEdit?.tooth21b || "",
            tooth21c: noteToEdit?.tooth21c || "",
            tooth22b: noteToEdit?.tooth22b || "",
            tooth22c: noteToEdit?.tooth22c || "",
            tooth22a: noteToEdit?.tooth22a || "",
            tooth23b: noteToEdit?.tooth23b || "",
            tooth23c: noteToEdit?.tooth23c || "",
            tooth23a: noteToEdit?.tooth23a || "",
            tooth24b: noteToEdit?.tooth24b || "",
            tooth24c: noteToEdit?.tooth24c || "",
            tooth24a: noteToEdit?.tooth24a || "",
            tooth25b: noteToEdit?.tooth25b || "",
            tooth25c: noteToEdit?.tooth25c || "",
            tooth25a: noteToEdit?.tooth25a || "",
            tooth26b: noteToEdit?.tooth26b || "",
            tooth26c: noteToEdit?.tooth26c || "",
            tooth26a: noteToEdit?.tooth26a || "",
            tooth27b: noteToEdit?.tooth27b || "",
            tooth27c: noteToEdit?.tooth27c || "",
            tooth27a: noteToEdit?.tooth27a || "",
            tooth28b: noteToEdit?.tooth28b || "",
            tooth28c: noteToEdit?.tooth28c || "",
            tooth28a: noteToEdit?.tooth28a || "",
            tooth29b: noteToEdit?.tooth29b || "",
            tooth29c: noteToEdit?.tooth29c || "",
            tooth29a: noteToEdit?.tooth29a || "",
            tooth30a: noteToEdit?.tooth30a || "",
            tooth30b: noteToEdit?.tooth30b || "",
            tooth30c: noteToEdit?.tooth30c || "",
            tooth31a: noteToEdit?.tooth31a || "",
            tooth31b: noteToEdit?.tooth31b || "",
            tooth31c: noteToEdit?.tooth31c || "",
            tooth32a: noteToEdit?.tooth32a || "",
            tooth32b: noteToEdit?.tooth32b || "",
            tooth32c: noteToEdit?.tooth32c || "",
            tooth33a: noteToEdit?.tooth33a || "",
            tooth33b: noteToEdit?.tooth33b || "",
            tooth33c: noteToEdit?.tooth33c || "",

            treat1a: noteToEdit?.treat1a || "",
            treat1b: noteToEdit?.treat1b || "",
            treat1c: noteToEdit?.treat1c || "",
            treat1d: noteToEdit?.treat1d || "",
            treat2a: noteToEdit?.treat2a || "",
            treat2b: noteToEdit?.treat2b || "",
            treat2c: noteToEdit?.treat2c || "",
            treat2d: noteToEdit?.treat2d || "",
            treat3a: noteToEdit?.treat3a || "",
            treat3b: noteToEdit?.treat3b || "",
            treat3c: noteToEdit?.treat3c || "",
            treat3d: noteToEdit?.treat3d || "",
            treat4a: noteToEdit?.treat4a || "",
            treat4b: noteToEdit?.treat4b || "",
            treat4c: noteToEdit?.treat4c || "",
            treat4d: noteToEdit?.treat4d || "",
            treat5a: noteToEdit?.treat5a || "",
            treat5b: noteToEdit?.treat5b || "",
            treat5c: noteToEdit?.treat5c || "",
            treat5d: noteToEdit?.treat5d || "",

            treat6a: noteToEdit?.treat6a || "",
            treat6b: noteToEdit?.treat6b || "",
            treat6c: noteToEdit?.treat6c || "",
            treat6d: noteToEdit?.treat6d || "",
            treat7a: noteToEdit?.treat7a || "",
            treat7b: noteToEdit?.treat7b || "",
            treat7c: noteToEdit?.treat7c || "",
            treat7d: noteToEdit?.treat7d || "",
            treat8a: noteToEdit?.treat8a || "",
            treat8b: noteToEdit?.treat8b || "",
            treat8c: noteToEdit?.treat8c || "",
            treat8d: noteToEdit?.treat8d || "",
            treat9a: noteToEdit?.treat9a || "",
            treat9b: noteToEdit?.treat9b || "",
            treat9c: noteToEdit?.treat9c || "",
            treat9d: noteToEdit?.treat9d || "",
            treat10a: noteToEdit?.treat10a || "",
            treat10b: noteToEdit?.treat10b || "",
            treat10c: noteToEdit?.treat10c || "",
            treat10d: noteToEdit?.treat10d || "",
            treat11a: noteToEdit?.treat11a || "",
            treat11b: noteToEdit?.treat11b || "",
            treat11c: noteToEdit?.treat11c || "",
            treat11d: noteToEdit?.treat11d || "",
            treat12a: noteToEdit?.treat12a || "",
            treat12b: noteToEdit?.treat12b || "",
            treat12c: noteToEdit?.treat12c || "",
            treat12d: noteToEdit?.treat12d || "",
            treat13a: noteToEdit?.treat13a || "",
            treat13b: noteToEdit?.treat13b || "",
            treat13c: noteToEdit?.treat13c || "",
            treat13d: noteToEdit?.treat13d || "",
            treat14a: noteToEdit?.treat14a || "",
            treat14b: noteToEdit?.treat14b || "",
            treat14c: noteToEdit?.treat14c || "",
            treat14d: noteToEdit?.treat14d || "",
            treat15a: noteToEdit?.treat15a || "",
            treat15b: noteToEdit?.treat15b || "",
            treat15c: noteToEdit?.treat15c || "",
            treat15d: noteToEdit?.treat15d || "",
            treat16a: noteToEdit?.treat16a || "",
            treat16b: noteToEdit?.treat16b || "",
            treat16c: noteToEdit?.treat16c || "",
            treat16d: noteToEdit?.treat16d || "",
            treat17a: noteToEdit?.treat17a || "",
            treat17b: noteToEdit?.treat17b || "",
            treat17c: noteToEdit?.treat17c || "",
            treat17d: noteToEdit?.treat17d || "",
            treat18a: noteToEdit?.treat18a || "",
            treat18b: noteToEdit?.treat18b || "",
            treat18c: noteToEdit?.treat18c || "",
            treat18d: noteToEdit?.treat18d || "",
            treat19a: noteToEdit?.treat19a || "",
            treat19b: noteToEdit?.treat19b || "",
            treat19c: noteToEdit?.treat19c || "",
            treat19d: noteToEdit?.treat19d || "",
            treat20a: noteToEdit?.treat20a || "",
            treat20b: noteToEdit?.treat20b || "",
            treat20c: noteToEdit?.treat20c || "",
            treat20d: noteToEdit?.treat20d || "",

            currentColor: noteToEdit?.currentColor || "",
            currentColorIndex: noteToEdit?.currentColorIndex || "",
            control: noteToEdit?.control || "",
            name: noteToEdit?.name || "",
            select: noteToEdit?.select || "",

        }
    });

    const printRef = React.createRef<HTMLTableElement>();
    const printRef2 = React.createRef<HTMLTableElement>();

    const handlePrint = useReactToPrint({
        content: () => printRef.current,
    });

    const handlePrint2 = useReactToPrint({
        content: () => printRef2.current,
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
            <Modal.Header closeButton closeVariant="white" style={{ color: '#fff', backgroundColor: '#0d3efd' }}>
                <Modal.Title>{noteToEdit ? "Actualizează pacient" : "Adaugă pacient"}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
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
                                            <h2>
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
                                            </h2>
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
                                            <h2>
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
                                            </h2>
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
                                            <h2>
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
                                            </h2>
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
                                            <h2>
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
                                            </h2>
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
                                            <h2>
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
                                            </h2>
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
                                            <h2>
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
                                            </h2>
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
                                            <h2>
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
                                            </h2>
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
                                            <h2>
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
                                            </h2>
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
                                            <h2>
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
                                            </h2>
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
                                            <h2>
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
                                            </h2>
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
                                            <h2>
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
                                            </h2>
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
                                            <h2>
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
                                            </h2>
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
                                            <h2>
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
                                            </h2>
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
                                            <h2>
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
                                            </h2>
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
                                            <h2>
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
                                            </h2>
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
                                            <h2>
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
                                            </h2>
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
                                            <h2>
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
                                            </h2>
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
                                            <h2>
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
                                            </h2>
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
                                            <h2>
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
                                            </h2>
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
                                            <h2>
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
                                            </h2>
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
                                            <h2>
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
                                            </h2>
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
                                            <h2>
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
                                            </h2>
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
                                            <h2>
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
                                            </h2>
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
                                            <h2>
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
                                            </h2>
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
                                            <h2>
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
                                            </h2>
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
                                            <h2>
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
                                            </h2>
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
                                            <h2>
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
                                            </h2>
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
                                            <h2>
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
                                            </h2>
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
                                            <h2>
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
                                            </h2>
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
                                            <h2>
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
                                            </h2>
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
                                            <h2>
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
                                            </h2>
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
                                            <h2>
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
                                            </h2>
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
                                            <h2>
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
                                            </h2>
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
                                            <h2>
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
                                            </h2>
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
                                            <h2>
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
                                            </h2>
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
                                            <h2>
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
                                            </h2>
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
                                            <h2>
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
                                            </h2>
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
                                            <h2>
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
                                            </h2>
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
                                            <h2>
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
                                            </h2>
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
                                            <h2>
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
                                            </h2>
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
                                            <h2>
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
                                            </h2>
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
                                            <h2>
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
                                            </h2>
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
                                            <h2>
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
                                            </h2>
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
                                            <h2>
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
                                            </h2>
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
                                            <h2>
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
                                            </h2>
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
                                            <h2>
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
                                            </h2>
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
                                            <h2>
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
                                            </h2>
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
                                            <h2>
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
                                            </h2>
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
                                            <h2>
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
                                            </h2>
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
                                            <h2>
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
                                            </h2>
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
                                            <h2>
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
                                            </h2>
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
                                            <h2>
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
                                            </h2>
                                        </section>
                                    </Stack>
                                </ListGroup.Item>
                            </ListGroup>
                        </Container>
                    </div>
                    <div>
                        <div style={{ margin: "4em auto", width: 'max-content' }}>
                            <table ref={printRef}>
                                <caption>Stare Odontală</caption>
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>Dinte</th>
                                        <th>Diagnostic</th>
                                        <th>Tratat/Netratat</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td></td>
                                        <td>
                                            <input
                                                type="text"
                                                {...register("tooth1a")}
                                            />
                                        </td>
                                        <td>
                                            <input
                                                type="text"
                                                {...register("tooth1b")}
                                            />
                                        </td>
                                        <td>
                                            <input
                                                type="text"
                                                {...register("tooth1c")}
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td>
                                            <input
                                                type="text"
                                                {...register("tooth2a")}
                                            />
                                        </td>
                                        <td>
                                            <input
                                                type="text"
                                                {...register("tooth2b")}
                                            />
                                        </td>
                                        <td>
                                            <input
                                                type="text"
                                                {...register("tooth2c")}
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td>
                                            <input
                                                type="text"
                                                {...register("tooth3a")}
                                            />
                                        </td>
                                        <td>
                                            <input
                                                type="text"
                                                {...register("tooth3b")}
                                            />
                                        </td>
                                        <td>
                                            <input
                                                type="text"
                                                {...register("tooth3c")}
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td>
                                            <input
                                                type="text"
                                                {...register("tooth4a")}
                                            />
                                        </td>
                                        <td>
                                            <input
                                                type="text"
                                                {...register("tooth4b")}
                                            />
                                        </td>
                                        <td>
                                            <input
                                                type="text"
                                                {...register("tooth4c")}
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td>
                                            <input
                                                type="text"
                                                {...register("tooth5a")}
                                            />
                                        </td>
                                        <td>
                                            <input
                                                type="text"
                                                {...register("tooth5b")}
                                            />
                                        </td>
                                        <td>
                                            <input
                                                type="text"
                                                {...register("tooth5c")}
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td>
                                            <input
                                                type="text"
                                                {...register("tooth6a")}
                                            />
                                        </td>
                                        <td>
                                            <input
                                                type="text"
                                                {...register("tooth6b")}
                                            />
                                        </td>
                                        <td>
                                            <input
                                                type="text"
                                                {...register("tooth6c")}
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td>
                                            <input
                                                type="text"
                                                {...register("tooth7a")}
                                            />
                                        </td>
                                        <td>
                                            <input
                                                type="text"
                                                {...register("tooth7b")}
                                            />
                                        </td>
                                        <td>
                                            <input
                                                type="text"
                                                {...register("tooth7c")}
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td>
                                            <input
                                                type="text"
                                                {...register("tooth8a")}
                                            />
                                        </td>
                                        <td>
                                            <input
                                                type="text"
                                                {...register("tooth8b")}
                                            />
                                        </td>
                                        <td>
                                            <input
                                                type="text"
                                                {...register("tooth8c")}
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td>
                                            <input
                                                type="text"
                                                {...register("tooth9a")}
                                            />
                                        </td>
                                        <td>
                                            <input
                                                type="text"
                                                {...register("tooth9b")}
                                            />
                                        </td>
                                        <td>
                                            <input
                                                type="text"
                                                {...register("tooth9c")}
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td>
                                            <input
                                                type="text"
                                                {...register("tooth10a")}
                                            />
                                        </td>
                                        <td>
                                            <input
                                                type="text"
                                                {...register("tooth10b")}
                                            />
                                        </td>
                                        <td>
                                            <input
                                                type="text"
                                                {...register("tooth10c")}
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td>
                                            <input
                                                type="text"
                                                {...register("tooth11a")}
                                            />
                                        </td>
                                        <td>
                                            <input
                                                type="text"
                                                {...register("tooth11b")}
                                            />
                                        </td>
                                        <td>
                                            <input
                                                type="text"
                                                {...register("tooth11c")}
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td>
                                            <input
                                                type="text"
                                                {...register("tooth12a")}
                                            />
                                        </td>
                                        <td>
                                            <input
                                                type="text"
                                                {...register("tooth12b")}
                                            />
                                        </td>
                                        <td>
                                            <input
                                                type="text"
                                                {...register("tooth12c")}
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td>
                                            <input
                                                type="text"
                                                {...register("tooth13a")}
                                            />
                                        </td>
                                        <td>
                                            <input
                                                type="text"
                                                {...register("tooth13b")}
                                            />
                                        </td>
                                        <td>
                                            <input
                                                type="text"
                                                {...register("tooth13c")}
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td>
                                            <input
                                                type="text"
                                                {...register("tooth14a")}
                                            />
                                        </td>
                                        <td>
                                            <input
                                                type="text"
                                                {...register("tooth14b")}
                                            />
                                        </td>
                                        <td>
                                            <input
                                                type="text"
                                                {...register("tooth14c")}
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td>
                                            <input
                                                type="text"
                                                {...register("tooth15a")}
                                            />
                                        </td>
                                        <td>
                                            <input
                                                type="text"
                                                {...register("tooth15b")}
                                            />
                                        </td>
                                        <td>
                                            <input
                                                type="text"
                                                {...register("tooth15c")}
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td>
                                            <input
                                                type="text"
                                                {...register("tooth16a")}
                                            />
                                        </td>
                                        <td>
                                            <input
                                                type="text"
                                                {...register("tooth16b")}
                                            />
                                        </td>
                                        <td>
                                            <input
                                                type="text"
                                                {...register("tooth16c")}
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td>
                                            <input
                                                type="text"
                                                {...register("tooth17a")}
                                            />
                                        </td>
                                        <td>
                                            <input
                                                type="text"
                                                {...register("tooth17b")}
                                            />
                                        </td>
                                        <td>
                                            <input
                                                type="text"
                                                {...register("tooth17c")}
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td>
                                            <input
                                                type="text"
                                                {...register("tooth18a")}
                                            />
                                        </td>
                                        <td>
                                            <input
                                                type="text"
                                                {...register("tooth18b")}
                                            />
                                        </td>
                                        <td>
                                            <input
                                                type="text"
                                                {...register("tooth18c")}
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td>
                                            <input
                                                type="text"
                                                {...register("tooth19a")}
                                            />
                                        </td>
                                        <td>
                                            <input
                                                type="text"
                                                {...register("tooth19b")}
                                            />
                                        </td>
                                        <td>
                                            <input
                                                type="text"
                                                {...register("tooth19c")}
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td>
                                            <input
                                                type="text"
                                                {...register("tooth20a")}
                                            />
                                        </td>
                                        <td>
                                            <input
                                                type="text"
                                                {...register("tooth20b")}
                                            />
                                        </td>
                                        <td>
                                            <input
                                                type="text"
                                                {...register("tooth20c")}
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td>
                                            <input
                                                type="text"
                                                {...register("tooth21a")}
                                            />
                                        </td>
                                        <td>
                                            <input
                                                type="text"
                                                {...register("tooth21b")}
                                            />
                                        </td>
                                        <td>
                                            <input
                                                type="text"
                                                {...register("tooth21c")}
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td>
                                            <input
                                                type="text"
                                                {...register("tooth22a")}
                                            />
                                        </td>
                                        <td>
                                            <input
                                                type="text"
                                                {...register("tooth22b")}
                                            />
                                        </td>
                                        <td>
                                            <input
                                                type="text"
                                                {...register("tooth22c")}
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td>
                                            <input
                                                type="text"
                                                {...register("tooth23a")}
                                            />
                                        </td>
                                        <td>
                                            <input
                                                type="text"
                                                {...register("tooth23b")}
                                            />
                                        </td>
                                        <td>
                                            <input
                                                type="text"
                                                {...register("tooth23c")}
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td>
                                            <input
                                                type="text"
                                                {...register("tooth24a")}
                                            />
                                        </td>
                                        <td>
                                            <input
                                                type="text"
                                                {...register("tooth24b")}
                                            />
                                        </td>
                                        <td>
                                            <input
                                                type="text"
                                                {...register("tooth24c")}
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td>
                                            <input
                                                type="text"
                                                {...register("tooth25a")}
                                            />
                                        </td>
                                        <td>
                                            <input
                                                type="text"
                                                {...register("tooth25b")}
                                            />
                                        </td>
                                        <td>
                                            <input
                                                type="text"
                                                {...register("tooth25c")}
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td>
                                            <input
                                                type="text"
                                                {...register("tooth26a")}
                                            />
                                        </td>
                                        <td>
                                            <input
                                                type="text"
                                                {...register("tooth26b")}
                                            />
                                        </td>
                                        <td>
                                            <input
                                                type="text"
                                                {...register("tooth26c")}
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td>
                                            <input
                                                type="text"
                                                {...register("tooth27a")}
                                            />
                                        </td>
                                        <td>
                                            <input
                                                type="text"
                                                {...register("tooth27b")}
                                            />
                                        </td>
                                        <td>
                                            <input
                                                type="text"
                                                {...register("tooth27c")}
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td>
                                            <input
                                                type="text"
                                                {...register("tooth28a")}
                                            />
                                        </td>
                                        <td>
                                            <input
                                                type="text"
                                                {...register("tooth28b")}
                                            />
                                        </td>
                                        <td>
                                            <input
                                                type="text"
                                                {...register("tooth28c")}
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td>
                                            <input
                                                type="text"
                                                {...register("tooth29a")}
                                            />
                                        </td>
                                        <td>
                                            <input
                                                type="text"
                                                {...register("tooth29b")}
                                            />
                                        </td>
                                        <td>
                                            <input
                                                type="text"
                                                {...register("tooth29c")}
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td>
                                            <input
                                                type="text"
                                                {...register("tooth30a")}
                                            />
                                        </td>
                                        <td>
                                            <input
                                                type="text"
                                                {...register("tooth30b")}
                                            />
                                        </td>
                                        <td>
                                            <input
                                                type="text"
                                                {...register("tooth30c")}
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td>
                                            <input
                                                type="text"
                                                {...register("tooth31a")}
                                            />
                                        </td>
                                        <td>
                                            <input
                                                type="text"
                                                {...register("tooth31b")}
                                            />
                                        </td>
                                        <td>
                                            <input
                                                type="text"
                                                {...register("tooth31c")}
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td>
                                            <input
                                                type="text"
                                                {...register("tooth32a")}
                                            />
                                        </td>
                                        <td>
                                            <input
                                                type="text"
                                                {...register("tooth32b")}
                                            />
                                        </td>
                                        <td>
                                            <input
                                                type="text"
                                                {...register("tooth32c")}
                                            />
                                        </td>
                                    </tr>
                                </tbody>
                            </table>

                            <Button onClick={handlePrint} className='mt-3'>Printează</Button>
                        </div>
                        <div style={{ margin: "4em auto", width: 'max-content' }}>
                            <table ref={printRef2}>
                                <caption>Tratament</caption>
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>Dată</th>
                                        <th>Dinte</th>
                                        <th>Tratatament</th>
                                        <th>Observații</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1.</td>
                                        <td>
                                            <input
                                                type="text"
                                                {...register("treat1a")}
                                            />
                                        </td>
                                        <td>
                                            <input
                                                type="text"
                                                {...register("treat1b")}
                                            />
                                        </td>
                                        <td>
                                            <input
                                                type="text"
                                                {...register("treat1c")}
                                            />
                                        </td>
                                        <td>
                                            <input
                                                type="text"
                                                {...register("treat1d")}
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>2.</td>
                                        <td>
                                            <input
                                                type="text"
                                                {...register("treat2a")}
                                            />
                                        </td>
                                        <td>
                                            <input
                                                type="text"
                                                {...register("treat2b")}
                                            />
                                        </td>
                                        <td>
                                            <input
                                                type="text"
                                                {...register("treat2c")}
                                            />
                                        </td>
                                        <td>
                                            <input
                                                type="text"
                                                {...register("treat2d")}
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>3.</td>
                                        <td>
                                            <input
                                                type="text"
                                                {...register("treat3a")}
                                            />
                                        </td>
                                        <td>
                                            <input
                                                type="text"
                                                {...register("treat3b")}
                                            />
                                        </td>
                                        <td>
                                            <input
                                                type="text"
                                                {...register("treat3c")}
                                            />
                                        </td>
                                        <td>
                                            <input
                                                type="text"
                                                {...register("treat3d")}
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>4.</td>
                                        <td>
                                            <input
                                                type="text"
                                                {...register("treat4a")}
                                            />
                                        </td>
                                        <td>
                                            <input
                                                type="text"
                                                {...register("treat4b")}
                                            />
                                        </td>
                                        <td>
                                            <input
                                                type="text"
                                                {...register("treat4c")}
                                            />
                                        </td>
                                        <td>
                                            <input
                                                type="text"
                                                {...register("treat4d")}
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>5.</td>
                                        <td>
                                            <input
                                                type="text"
                                                {...register("treat5a")}
                                            />
                                        </td>
                                        <td>
                                            <input
                                                type="text"
                                                {...register("treat5b")}
                                            />
                                        </td>
                                        <td>
                                            <input
                                                type="text"
                                                {...register("treat5c")}
                                            />
                                        </td>
                                        <td>
                                            <input
                                                type="text"
                                                {...register("treat5d")}
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>6.</td>
                                        <td>
                                            <input
                                                type="text"
                                                {...register("treat6a")}
                                            />
                                        </td>
                                        <td>
                                            <input
                                                type="text"
                                                {...register("treat6b")}
                                            />
                                        </td>
                                        <td>
                                            <input
                                                type="text"
                                                {...register("treat6c")}
                                            />
                                        </td>
                                        <td>
                                            <input
                                                type="text"
                                                {...register("treat6d")}
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>7.</td>
                                        <td>
                                            <input
                                                type="text"
                                                {...register("treat7a")}
                                            />
                                        </td>
                                        <td>
                                            <input
                                                type="text"
                                                {...register("treat7b")}
                                            />
                                        </td>
                                        <td>
                                            <input
                                                type="text"
                                                {...register("treat7c")}
                                            />
                                        </td>
                                        <td>
                                            <input
                                                type="text"
                                                {...register("treat7d")}
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>8.</td>
                                        <td>
                                            <input
                                                type="text"
                                                {...register("treat8a")}
                                            />
                                        </td>
                                        <td>
                                            <input
                                                type="text"
                                                {...register("treat8b")}
                                            />
                                        </td>
                                        <td>
                                            <input
                                                type="text"
                                                {...register("treat8c")}
                                            />
                                        </td>
                                        <td>
                                            <input
                                                type="text"
                                                {...register("treat8d")}
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>9.</td>
                                        <td>
                                            <input
                                                type="text"
                                                {...register("treat9a")}
                                            />
                                        </td>
                                        <td>
                                            <input
                                                type="text"
                                                {...register("treat9b")}
                                            />
                                        </td>
                                        <td>
                                            <input
                                                type="text"
                                                {...register("treat9c")}
                                            />
                                        </td>
                                        <td>
                                            <input
                                                type="text"
                                                {...register("treat9d")}
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>10.</td>
                                        <td>
                                            <input
                                                type="text"
                                                {...register("treat10a")}
                                            />
                                        </td>
                                        <td>
                                            <input
                                                type="text"
                                                {...register("treat10b")}
                                            />
                                        </td>
                                        <td>
                                            <input
                                                type="text"
                                                {...register("treat10c")}
                                            />
                                        </td>
                                        <td>
                                            <input
                                                type="text"
                                                {...register("treat10d")}
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>11.</td>
                                        <td>
                                            <input
                                                type="text"
                                                {...register("treat11a")}
                                            />
                                        </td>
                                        <td>
                                            <input
                                                type="text"
                                                {...register("treat11b")}
                                            />
                                        </td>
                                        <td>
                                            <input
                                                type="text"
                                                {...register("treat11c")}
                                            />
                                        </td>
                                        <td>
                                            <input
                                                type="text"
                                                {...register("treat11d")}
                                            />
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>12.</td>
                                        <td>
                                            <input
                                                type="text"
                                                {...register("treat12a")}
                                            />
                                        </td>
                                        <td>
                                            <input
                                                type="text"
                                                {...register("treat12b")}
                                            />
                                        </td>
                                        <td>
                                            <input
                                                type="text"
                                                {...register("treat12c")}
                                            />
                                        </td>
                                        <td>
                                            <input
                                                type="text"
                                                {...register("treat12d")}
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>13.</td>
                                        <td>
                                            <input
                                                type="text"
                                                {...register("treat13a")}
                                            />
                                        </td>
                                        <td>
                                            <input
                                                type="text"
                                                {...register("treat13b")}
                                            />
                                        </td>
                                        <td>
                                            <input
                                                type="text"
                                                {...register("treat13c")}
                                            />
                                        </td>
                                        <td>
                                            <input
                                                type="text"
                                                {...register("treat13d")}
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>14.</td>
                                        <td>
                                            <input
                                                type="text"
                                                {...register("treat14a")}
                                            />
                                        </td>
                                        <td>
                                            <input
                                                type="text"
                                                {...register("treat14b")}
                                            />
                                        </td>
                                        <td>
                                            <input
                                                type="text"
                                                {...register("treat14c")}
                                            />
                                        </td>
                                        <td>
                                            <input
                                                type="text"
                                                {...register("treat14d")}
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>15.</td>
                                        <td>
                                            <input
                                                type="text"
                                                {...register("treat15a")}
                                            />
                                        </td>
                                        <td>
                                            <input
                                                type="text"
                                                {...register("treat15b")}
                                            />
                                        </td>
                                        <td>
                                            <input
                                                type="text"
                                                {...register("treat15c")}
                                            />
                                        </td>
                                        <td>
                                            <input
                                                type="text"
                                                {...register("treat15d")}
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>16.</td>
                                        <td>
                                            <input
                                                type="text"
                                                {...register("treat16a")}
                                            />
                                        </td>
                                        <td>
                                            <input
                                                type="text"
                                                {...register("treat16b")}
                                            />
                                        </td>
                                        <td>
                                            <input
                                                type="text"
                                                {...register("treat16c")}
                                            />
                                        </td>
                                        <td>
                                            <input
                                                type="text"
                                                {...register("treat16d")}
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>17.</td>
                                        <td>
                                            <input
                                                type="text"
                                                {...register("treat17a")}
                                            />
                                        </td>
                                        <td>
                                            <input
                                                type="text"
                                                {...register("treat17b")}
                                            />
                                        </td>
                                        <td>
                                            <input
                                                type="text"
                                                {...register("treat17c")}
                                            />
                                        </td>
                                        <td>
                                            <input
                                                type="text"
                                                {...register("treat17d")}
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>18.</td>
                                        <td>
                                            <input
                                                type="text"
                                                {...register("treat18a")}
                                            />
                                        </td>
                                        <td>
                                            <input
                                                type="text"
                                                {...register("treat18b")}
                                            />
                                        </td>
                                        <td>
                                            <input
                                                type="text"
                                                {...register("treat18c")}
                                            />
                                        </td>
                                        <td>
                                            <input
                                                type="text"
                                                {...register("treat18d")}
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>19.</td>
                                        <td>
                                            <input
                                                type="text"
                                                {...register("treat19a")}
                                            />
                                        </td>
                                        <td>
                                            <input
                                                type="text"
                                                {...register("treat19b")}
                                            />
                                        </td>
                                        <td>
                                            <input
                                                type="text"
                                                {...register("treat19c")}
                                            />
                                        </td>
                                        <td>
                                            <input
                                                type="text"
                                                {...register("treat19d")}
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>20.</td>
                                        <td>
                                            <input
                                                type="text"
                                                {...register("treat20a")}
                                            />
                                        </td>
                                        <td>
                                            <input
                                                type="text"
                                                {...register("treat20b")}
                                            />
                                        </td>
                                        <td>
                                            <input
                                                type="text"
                                                {...register("treat20c")}
                                            />
                                        </td>
                                        <td>
                                            <input
                                                type="text"
                                                {...register("treat20d")}
                                            />
                                        </td>
                                    </tr>

                                </tbody>
                            </table>

                            <Button onClick={handlePrint2} className='mt-3'>Printează</Button>
                        </div>
                    </div>

                </Form >
            </Modal.Body >
            <Modal.Footer className='pt-0 pb-0'>
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
