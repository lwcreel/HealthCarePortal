import React from 'react';
import { Nav } from 'react-bootstrap';

 export default function UserNavbar() {

        return (
            <Nav>
                <Nav.Link to="/dashboard" className='App-link'> Home </Nav.Link>
                <Nav.Link to="/dashboard/cart " className='App-link'> Cart </Nav.Link>
                <Nav.Link to="/dashboard/status" className='App-link'> Status </Nav.Link>
                <Nav.Link to="/dashboard/funds" className='App-link'> Funds </Nav.Link>
            </Nav>
        );   
}
