import React, {Component} from "react";
import { Col, Card, ButtonGroup, Button } from 'react-bootstrap';


export default class Medicine extends Component {

    constructor(props) {

        super(props);
        this.state = {
            medicine: this.props.medicine
        }

        this.state.medicine.quantity = 0;
    }

    render() {
        return (

            <Col lg={3}>
                <Card className="m-2">
                    <Card.Header>{this.state.medicine.medName}</Card.Header>
                    <Card.Body>$ {this.state.medicine.price * this.state.medicine.quantity}</Card.Body>

                    <Card.Body>
                        <span className="badge">{this.state.medicine.quantity}</span>
                        <ButtonGroup>
                            <Button variant="outline-success" onClick={() => { this.props.onIncrement(this.state.medicine, 10); }}>
                                +
                            </Button>

                            <Button variant="outline-success" onClick={() => { this.props.onDecrement(this.state.medicine, 0); }}>
                                -
                            </Button>
                        </ButtonGroup>

                        <div>{this.props.children}</div>

                    </Card.Body>
                </Card>
            </Col>
        );
    }

    componentDidUpdate() {
      }
}