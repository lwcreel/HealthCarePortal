import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import medLogo from './../../resources/med-bottle-logo.jpg'
import reportLogo from './../../resources/report-logo.png'
import NavBar from './UserNavbar';

export default function Dashboard() {
  return (
    <div className="dash-wrapper">
      <Container fluid>
        <Row><NavBar /></Row>
        <Row><h2>User Dashboard</h2></Row>
        <Row>
          <Col md={6}><Link to="/user/medicine"><img className="Dash-logos" src={medLogo} alt="Search for Meds" /></Link></Col>
          <Col md={6}><Link to="/user/status"><img className="Dash-logos" src={reportLogo} alt="Order Status" /></Link></Col>
        </Row>
      </Container>
      <h5 align="right">Funds: $1000</h5>
    </div>
  );
}