import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import "./LoginPage.css"

export default function Login() {

  let isAdmin = useParams();
  console.log(isAdmin);

  return(
    <Container fluid> 
    <div className="login-wrapper">
      <Row>
      <h1>Please Log In</h1>
      </Row>
      <form>
        <Row>
        <label>
          <p>Username</p>
          <input type="text" />
        </label>
        </Row>
        <Row>
        <label>
          <p>Password</p>
          <input type="password" />
        </label>
        </Row>
        <Row>
        <div>
          <button type="submit">Submit</button>
        </div>
        </Row>
      </form>
    </div>
    </Container>
  )
}