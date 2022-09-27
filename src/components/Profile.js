import React from "react";
import { Container, Row } from "react-bootstrap";
import AuthService from "../services/Auth/AuthService";

const Profile = () => {
  const currentUser = AuthService.getCurrentUser();

  return (
    <Container fluid>
      <Row>
        <header className="jumbotron">
          <strong>{currentUser.username}</strong> Profile
        </header>
      </Row>
      <Row style={{padding: "10px"}}>
        Email: {currentUser.email}
      </Row>
      <Row style={{padding: "10px"}}>
        Authorities: {currentUser.roles}
      </Row>
    </Container>
  );
};

export default Profile;