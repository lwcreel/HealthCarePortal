import React from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';

export default function AdminNavbar() {

    return (
        <Navbar variant="primary" bg="primary"  fixed="top">
            <Nav justify variant="pills" className='me-auto'>
                <Nav.Link to="/dashboard"> Home </Nav.Link>
                <NavDropdown title="Data Operations">
                    <NavDropdown.Item>Add New Medicine</NavDropdown.Item>
                    <NavDropdown.Item>Update Medicine</NavDropdown.Item>
                    <NavDropdown.Item>Remove Medcine</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item>View Reports</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Generate Report">
                    <NavDropdown.Item>Stock Report</NavDropdown.Item>
                    <NavDropdown.Item>Sales Report</NavDropdown.Item>
                    <NavDropdown.Item>Medicine Report</NavDropdown.Item>
                    <NavDropdown.Item>Order Report</NavDropdown.Item>
                    <NavDropdown.Item>Data Report</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link> Sign Out </Nav.Link>
            </Nav>
        </Navbar>
    );
}
