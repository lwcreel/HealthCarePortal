import { useState } from "react";
import { Container, Form, Row } from 'react-bootstrap';
import { deleteMedicine } from "../../../services/Admin/MedicineService";



export default function DeleteMedForm() {

    let [medId, setMedId] = useState("");

    return (
        <Container fluid>
            <div>
                <Form onSubmit={(e) => {
                    deleteMedicine(medId);
                }}>
                    <Row>
                        <label>
                            <p>Enter Medicine ID to remove</p>
                            <input type="number" onChange={(e) => {setMedId(e.target.value)}} />
                        </label>
                    </Row>
                    <Row>
                        <div>
                            <input type="submit" value="Submit" />
                        </div>
                    </Row>
                </Form>
            </div>
        </Container>
    )
}