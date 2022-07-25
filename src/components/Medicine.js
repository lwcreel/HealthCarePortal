import React from "react";
import { Col, Card, ButtonGroup, Button } from 'react-bootstrap';


export default function Medicine(prop) {

    return (
        <Col lg={4}>
            <Card className="m-2">
                <Card.Header>{prop.medicine.medicineName}</Card.Header>
                <Card.Body>$ {prop.medicine.price}</Card.Body>

                <Card.Body>
                    <span className="badge">{prop.medicine.quantity}</span>
                    <ButtonGroup>
                        <Button variant="outline-success" onClick={() => { /*props.onIncrement(prop.medicine, 10);*/ }}>
                            +
                        </Button>

                        <Button variant="outline-success" onClick={() => { /*props.onDecrement(prop.medicine, 0);*/ }}>
                            -
                        </Button>
                    </ButtonGroup>

                    <div>{prop.children}</div>

                </Card.Body>
            </Card>
        </Col>
    );
}