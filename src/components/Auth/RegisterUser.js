import React, { Component } from "react";
import { Container, Row } from 'react-bootstrap';
import Form from "react-validation/build/form";
import input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";

import { registerUser } from '../../services/Auth/AuthService';

export default class RegisterUser extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
            firstName: "",
            lastName: "",
            dateOfBirth: "",
            phoneNo: "",
            address: "",
            message: "",
            successful: true
        };

        this.onSubmit = this.onSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    onSubmit(e) {
        e.preventDefault();
        registerUser();
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        let elements = "";

        if (this.state.successful === false) {
            elements =
                <Container>
                    <Form>
                        <Row>
                            <label>Email</label>
                            <input type="text" name="email" value={this.state.email} onChange={this.handleChange} />
                        </Row>
                        <Row>
                            <label>Password</label>
                            <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
                        </Row>
                        <Row>
                            <label>First Name</label>
                            <input type="text" name="firstName" value={this.state.firstName} onChange={this.handleChange} />
                        </Row>
                        <Row>
                            <label>Last Name</label>
                            <input type="text" name="lastName" value={this.state.lastName} onChange={this.handleChange} />
                        </Row>
                        <Row>
                            <label>DoB</label>
                            <input type="date" name="dateOfBirth" value={this.state.dateOfBirth} onChange={this.handleChange} />
                        </Row>
                        <Row>
                            <label>Phone</label>
                            <input type="text" name="phoneNo" value={this.state.phoneNo} onChange={this.handleChange} />
                        </Row>
                        <Row>
                            <label>Address</label>
                            <input type="text" name="address" value={this.state.address} onChange={this.handleChange} />
                        </Row>
                        <Row>
                            <button className="btn btn-primary btn-block">Sign Up</button>
                        </Row>
                    </Form>
                </Container>
        }
        else {
            elements =
                <div className="col-md-12">
                    <div className="card card-container">
                        <span style={{ 'color': 'green' }}>{"Registration Successful!"}</span>
                    </div>
                    <div className="col-md-6 d-flex justify-content-center align-items-center">
                        <button className="btn btn-primary btn-block">Return to Login Page</button>
                    </div>
                </div>
        }

        return (elements);
    }
}