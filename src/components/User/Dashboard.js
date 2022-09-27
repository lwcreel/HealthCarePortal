import React, { Component } from 'react';
import { Container, Row, Col, Nav, Navbar } from 'react-bootstrap';
import Profile from "../Profile";
import Cart from './Cart';
import MedicineShop from './MedicineShop';
import OrderStatus from './OrderStatus';
import SearchBar from './SearchBar';


class Dashboard extends Component {


  constructor(props) {

    super(props);
    this.handleComponentChange = this.handleComponentChange.bind(this);
    this.state = {

      availableFunds: 1000,
      componentToRender: <SearchBar />,
      cart: []
    }
  }

  handleComponentChange(component, e) {

    this.setState({ componentToRender: component });
  }

  render() {
    return (
      <Container fluid id="user-dashboard">
        <Row><Col><Navbar variant="primary" bg="primary" expand="lg" fixed="top">
          <Nav justify variant="pills" className='me-auto'>

            <Nav.Link 
              to="/dashboard"
              onClick={(e) => this.handleComponentChange(<SearchBar />)}>
                Home
            </Nav.Link>

            <Nav.Link 
              to="/dashboard/shop" 
              onClick={(e) => this.handleComponentChange(<MedicineShop />)}>
                Browse
            </Nav.Link>

            <Nav.Link 
              to="/dashboard/cart"
              onClick={(e) => this.handleComponentChange(<Cart />)}> 
              View Cart 
            </Nav.Link>

            <Nav.Link 
            to="/dashboard/status"
            onClick={(e) => this.handleComponentChange(<OrderStatus />)}> 
            Orders 
            </Nav.Link>
            <Nav.Link to="/profile" onClick={(e) => this.handleComponentChange(<Profile />)}> Profile </Nav.Link>
            <Nav.Link to="/dashboard/funds"> ${this.state.availableFunds} </Nav.Link>
          </Nav>
        </Navbar></Col></Row>
        <Row><Col>User Dashboard</Col></Row>
        <Row><Col>{this.state.componentToRender}</Col></Row>
      </Container>
    );
  }
}

export default Dashboard;