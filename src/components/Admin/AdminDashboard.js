import React, { Component } from 'react';
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import FormManager from './FormManager';
import AuthService from "../../services/Auth/AuthService";

export default class AdminDashboard extends Component {

  constructor(props) {

    super(props);
    this.handleFormChange = this.handleFormChange.bind(this);
    this.state = {
      formToRender: 99
    }
  }

  handleFormChange(form, e) {

    this.setState({ formToRender: form });
  }

  render() {

    return (
      <Container>
        <Navbar variant="primary" bg="primary" fixed="top">
          <Nav justify variant="pills" className='me-auto'>
            <Nav.Link onClick={(e) => this.handleFormChange(99, e)}> Home </Nav.Link>
            <NavDropdown title="Data Operations">
              <NavDropdown.Item onClick={(e) => this.handleFormChange(1, e)}>Add New Medicine</NavDropdown.Item>
              <NavDropdown.Item onClick={(e) => this.handleFormChange(2, e)}>Update Medicine</NavDropdown.Item>
              <NavDropdown.Item onClick={(e) => this.handleFormChange(3, e)}>Remove Medcine</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={(e) => this.handleFormChange(4, e)}>View Reports</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/" onClick={() => AuthService.logout()}> Sign Out </Nav.Link>
          </Nav>
        </Navbar>
        <FormManager formToRender={this.state.formToRender} />
      </Container>
    );
  }

  componentDidUpdate() { }
}