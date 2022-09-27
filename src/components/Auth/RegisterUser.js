import React, { useRef, useState } from "react";
import Form from "react-validation/build/form";
import CheckButton from "react-validation/build/button";
import { isEmail } from "validator";

import AuthService from "../../services/Auth/AuthService";

const required = (value) => {
    if (!value) {
        return (
            <div className="alert alert-danger" role="alert">
                This field is required!
            </div>
        );
    }
};

const validEmail = (value) => {
    if (!isEmail(value)) {
        return (
            <div className="alert alert-danger" role="alert">
                This is not a valid email.
            </div>
        );
    }
};

const validUsername = (value) => {
    if (value.length < 3 || value.length > 20) {
        return (
            <div className="alert alert-danger" role="alert">
                The username must be between 3 and 20 characters.
            </div>
        );
    }
};

const validPassword = (value) => {
    if (value.length < 6 || value.length > 40) {
        return (
            <div className="alert alert-danger" role="alert">
                The password must be between 6 and 40 characters.
            </div>
        );
    }
};

const Register = () => {

    const handleRegistration = (e) => {

        e.preventDefault();

        setMessage("");
        setSuccessful(true);

        form.current.validateAll();

        if (checkBtn.current.context._errors.length === 0) {
            AuthService.register(firstName, lastName, username, email, phoneNumber, password).then(
                (response) => {
                    setMessage(response.data.message);
                    setSuccessful(true);
                },
                (error) => {
                    const resMessage =
                        (error.response &&
                            error.response.data &&
                            error.response.data.message) ||
                        error.message ||
                        error.toString();

                    setSuccessful(false);
                    setMessage(resMessage);
                }
            );
        }
    }

    const form = useRef();
    const checkBtn = useRef();

    const [username, setUsername] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState(0);
    const [password, setPassword] = useState("");
    const [successful, setSuccessful] = useState(false);
    const [message, setMessage] = useState("");

    return (
        <div className="col-md-4 offset-md-4">
            <div className="card card-container">

                <Form onSubmit={handleRegistration} ref={form}>
                    {!successful && (
                        <div>
                            <div className="form-group" style={{ padding: "10px" }}>
                                <label htmlFor="firstName">First Name</label>
                                <input value={firstName} type="text" name="firstName" onChange={(e) => setFirstName(e.target.value)} className="form-control" validations={[required]} />
                            </div>

                            <div className="form-group" style={{ padding: "10px" }}>
                                <label htmlFor="lastName">Last Name</label>
                                <input value={lastName} type="text" name="lastName" onChange={(e) => setLastName(e.target.value)} className="form-control" validations={[required]} />
                            </div>

                            <div className="form-group" style={{ padding: "10px" }}>
                                <label htmlFor="username">Username</label>
                                <input value={username} type="text" name="username" onChange={(e) => setUsername(e.target.value)} className="form-control" validations={[required, validUsername]} />
                            </div>

                            <div className="form-group" style={{ padding: "10px" }}>
                                <label htmlFor="email">Email</label>
                                <input value={email} type="text" name="email" onChange={(e) => setEmail(e.target.value)} className="form-control" validations={[required, validEmail]} />
                            </div>

                            <div className="form-group" style={{ padding: "10px" }}>
                                <label htmlFor="phoneNumber">Phone Number</label>
                                <input value={phoneNumber} type="text" name="phoneNumber" onChange={(e) => setPhoneNumber(e.target.value)} className="form-control" validations={[required]} />
                            </div>

                            <div className="form-group" style={{ padding: "10px" }}>
                                <label htmlFor="password">Password</label>
                                <input value={password} type="password" name="password" onChange={(e) => setPassword(e.target.value)} className="form-control" validations={[required, validPassword]} />
                            </div>

                            <div id="register" className="form-group" style={{ padding: "10px" }}>
                                <button className="btn btn-primary btn-block" disabled={successful}>
                                    {successful && (
                                        <span className="spinner-border spinner-border-sm"></span>
                                    )}
                                    <span>Register</span>
                                </button>
                            </div>
                        </div>
                    )}

                    {message && (
                        <div className="form-group">
                            <div className="alert alert-danger" role="alert">
                                {message}
                            </div>
                        </div>
                    )}
                    <CheckButton style={{ display: "none" }} ref={checkBtn} />
                </Form>

            </div>
        </div>
    );
};

export default Register