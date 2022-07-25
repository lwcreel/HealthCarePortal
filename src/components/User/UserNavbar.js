import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';

export default function UserNavbar() {

    return (
        <Navbar variant="primary" bg="primary">
            <Nav variant="pills" className='me-auto'>
                <Nav.Link to="/dashboard"> Home </Nav.Link>
                <Nav.Link to="/dashboard/cart "> Cart </Nav.Link>
                <Nav.Link to="/dashboard/status"> Status </Nav.Link>
                <Nav.Link to="/dashboard/funds"> Funds </Nav.Link>
            </Nav>
        </Navbar>
    );
}
