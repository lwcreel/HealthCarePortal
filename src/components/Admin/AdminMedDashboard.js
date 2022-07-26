import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

export default function AdminMedDashboard() {
  return (
    <Container fluid>
      <Row>
        <p>Medicine Operations</p>
      </Row>
      <Row>
        <Col md={4}><Link to="/admin/medicine/add">Add Medicine</Link></Col>
        <Col md={4}><Link to="/admin/medicine/delete">Delete Medicine</Link></Col>
        <Col md={4}><Link to="/admin/medicine/update">Update Medicine</Link></Col>
      </Row>
    </Container>
  );
}