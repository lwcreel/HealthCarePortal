import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Form from "react-validation/build/form";
import CheckButton from "react-validation/build/button";

import AuthService from "../../services/Auth/AuthService";

const required = value => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

const Login = () => {

  const handleLogin = (e) => {

    e.preventDefault();

    setMessage("");
    setLoading(true);

    form.current.validateAll();

    if (checkBtn.current.context._errors.length === 0) {
      AuthService.login(username, password).then(
        (response) => {

          console.log(response);
          if (response.roles[0] === "ROLE_ADMIN") {
            navigate("/admin");
            window.location.reload();
          }
          else {
            navigate("/dashboard");
            window.location.reload();
          }
        },
        (error) => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          setLoading(false);
          setMessage(resMessage);
        }
      );
    } else {
      setLoading(false);
    }
  }

  let navigate = useNavigate();

  const form = useRef();
  const checkBtn = useRef();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  return (
    <div className="col-md-4 offset-md-4">
      <div className="card card-container">

        <Form onSubmit={handleLogin} ref={form}>

          <div className="form-group" style={{ padding: "10px" }}>
            <label htmlFor="username">Username</label>
            <input value={username} type="text" name="username" onChange={(e) => setUsername(e.target.value)} className="form-control" validations={[required]} />
          </div>

          <div className="form-group" style={{ padding: "10px" }}>
            <label htmlFor="password">Password</label>
            <input value={password} type="password" name="password" onChange={(e) => setPassword(e.target.value)} className="form-control" validations={[required]} />
          </div>

          <div id="login" className="form-group" style={{ padding: "10px" }}>
            <button className="btn btn-primary btn-block" disabled={loading}>
              {loading && (
                <span className="spinner-border spinner-border-sm"></span>
              )}
              <span>Login</span>
            </button>
          </div>

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

export default Login;