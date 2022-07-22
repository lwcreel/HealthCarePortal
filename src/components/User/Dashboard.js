import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import MedicineShop from './MedicineShop';
import NavBar from './UserNavbar';

class Dashboard extends Component() {

  state = {

    // this should be set by API call
    fundAmount: 1000
  };

  render() {
    return (
      <div className="dash-wrapper">
        <Container fluid>
          <Row><NavBar /></Row>
          <Row><h2>User Dashboard</h2></Row>
          <Row>
            <MedicineShop />
          </Row>
        </Container>
        <h5 align="right">Funds: {this.state.fundAmount}</h5>
      </div>
    );
  }
}

export default Dashboard;