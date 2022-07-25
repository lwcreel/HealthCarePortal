import React, { Component } from 'react';
import { Container, Row } from 'react-bootstrap';

import MedicineShop from './MedicineShop';
import UserNavbar from './UserNavbar';


class Dashboard extends Component {

  state = {

    availableFunds: 1000
  }

  render () {
    return (
      <div className="dash-wrapper">
        <Container fluid>
          <Row><UserNavbar /></Row>
          <Row><h2>User Dashboard</h2></Row>
          <Row>
            <MedicineShop />
          </Row>
        </Container>
        <h5 align="right">Funds: {this.state.availableFunds}</h5>
      </div>
    );}
  
}

export default Dashboard;