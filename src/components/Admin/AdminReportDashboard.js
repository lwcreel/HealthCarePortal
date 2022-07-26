import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

export default function AdminReportDashboard() {
  return (
    <Container fluid>
      <Row>
        <p>Generate Reports</p>
      </Row>
      <Row>
        <Col md={4}><Link to="/admin/reports/stock">Stock Report</Link></Col>
        <Col md={4}><Link to="/admin/reports/sales">Sales Report</Link></Col>
        <Col md={4}><Link to="/admin/reports/medicine">Medicine Report</Link></Col>
      </Row>
      <Row>
        <Col md={6}><Link to="/admin/reports/order">Order Report</Link></Col>
        <Col md={6}><Link to="/admin/reports/data">Data Report</Link></Col>
      </Row>
    </Container>
  );
}