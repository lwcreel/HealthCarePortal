import React, { Component } from 'react';
import { Nav } from 'react-bootstrap';

class NavBar extends Component {

    render() {
        return (
            <Nav>
                <Nav.Link> Home </Nav.Link>
                <Nav.Link> Cart </Nav.Link>
                <Nav.Link> Status </Nav.Link>
                <Nav.Link> Funds </Nav.Link>
            </Nav>
        );
    }
}

export default NavBar;