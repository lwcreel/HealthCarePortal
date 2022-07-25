import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';

export default function UserNavbar() {

    return (
        <Navbar variant="primary" bg="primary" expand="lg" fixed="top">
            <Nav justify variant="pills" className='me-auto'>
                <Nav.Link to="/dashboard"> Home </Nav.Link>
                <Nav.Link to="/dashboard/cart "> View Cart </Nav.Link>
                <Nav.Link to="/dashboard/status"> Order Status </Nav.Link>
                <Nav.Link to="/dashboard/funds"> Funds </Nav.Link>
            </Nav>
        </Navbar>
    );
}
