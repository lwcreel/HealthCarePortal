import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import  medLogo  from './../../resources/med-bottle-logo.jpg'
import  reportLogo  from './../../resources/report-logo.png'


export default function AdminDashboard() {
  return (

    <Container fluid >
      <Row>
        <h2>Admin Dashboard</h2>
      </Row>
      <Row>
        <Col md={6}><Link to="/admin/medicine"><img className="Link-logo" src={medLogo} alt="Update Med Data"/></Link></Col>
        <Col md={6}><Link to="/admin/reports"><img className="Link-logo" src={reportLogo} alt="Generate Report"/></Link></Col>
      </Row>
    </Container>
  );
}