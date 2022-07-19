import React from 'react';
import { Container, Row, Col, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import medLogo from './../../resources/med-bottle-logo.jpg'
import reportLogo from './../../resources/report-logo.png'
import NavBar from './UserNavbar';

export default function Dashboard() {
  return (
    
    <div>
    <NavBar />

    <Container fluid >
      <Row>
        <h2>User Dashboard</h2>
      </Row>
      <Row>
        <Col md={6}><Link to="/user/medicine"><img className="Link-logo" src={medLogo} alt="Search for Meds" /></Link></Col>
        <Col md={6}><Link to="/user/status"><img className="Link-logo" src={reportLogo} alt="Order Status" /></Link></Col>
      </Row>
    </Container>
    </div>
    );
}