import React, { Component } from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class NavBar extends Component {

    render() {
        return (
            <Nav>
                <Nav.Link><Link to="/dashboard" className='App-link'> Home </Link></Nav.Link>
                <Nav.Link><Link to="/dashboard/cart " className='App-link'> Cart </Link></Nav.Link>
                <Nav.Link><Link to="/dashboard/status" className='App-link'> Status </Link></Nav.Link>
                <Nav.Link><Link to="/dashboard/funds" className='App-link'> Funds </Link></Nav.Link>
            </Nav>
        );
    }
}

export default NavBar;