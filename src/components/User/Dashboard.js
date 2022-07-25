import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import MedicineShop from './MedicineShop';
import UserNavbar from './UserNavbar';


class Dashboard extends Component {

  state = {

    availableFunds: 1000
  }

  render() {
    return (
        <Container fluid>
          <Row><Col><UserNavbar /></Col></Row>
          <Row><Col>User Dashboard</Col></Row>
          <Row><Col><MedicineShop /></Col></Row>
          <div align="right">Funds: ${this.state.availableFunds}</div>
        </Container>
    );
  }
}

export default Dashboard;