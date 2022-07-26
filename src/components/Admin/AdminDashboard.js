import React, { Component } from 'react';
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import FormManager from './FormManager';

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
            <NavDropdown title="Generate Report">
              <NavDropdown.Item onClick={(e) => this.handleFormChange(0, e)}>Stock Report</NavDropdown.Item>
              <NavDropdown.Item onClick={(e) => this.handleFormChange(1, e)}>Sales Report</NavDropdown.Item>
              <NavDropdown.Item onClick={(e) => this.handleFormChange(2, e)}>Medicine Report</NavDropdown.Item>
              <NavDropdown.Item onClick={(e) => this.handleFormChange(3, e)}>Order Report</NavDropdown.Item>
              <NavDropdown.Item onClick={(e) => this.handleFormChange(4, e)}>Data Report</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Data Operations">
              <NavDropdown.Item onClick={(e) => this.handleFormChange(5, e)}>Add New Medicine</NavDropdown.Item>
              <NavDropdown.Item onClick={(e) => this.handleFormChange(6, e)}>Update Medicine</NavDropdown.Item>
              <NavDropdown.Item onClick={(e) => this.handleFormChange(7, e)}>Remove Medcine</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={(e) => this.handleFormChange(8, e)}>View Reports</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link> Sign Out </Nav.Link>
          </Nav>
        </Navbar>
        <FormManager formToRender={this.state.formToRender} />
      </Container>
    );
  }

  componentDidUpdate() { }
}