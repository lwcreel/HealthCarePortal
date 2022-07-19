import React, { Component } from 'react';
import { Container, Row, Col, Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import medLogo from './../../resources/med-bottle-logo.jpg'
import reportLogo from './../../resources/report-logo.png'

class NavBar extends Component {

    render() {
        return (
            <Navbar bg="light" expang="lg">
                <Container>
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#cart">Cart</Nav.Link>
                    <Nav.Link href="#status">Order Status</Nav.Link>
                    <Nav.Link href="#funds">Funds</Nav.Link>
                </Container>
            </Navbar>
        );
    }
}

export default NavBar;