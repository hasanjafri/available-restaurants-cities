import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

class NavBar extends React.Component {
    render() {
        return(
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">Restaurants Finder</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link active>Search by City</Nav.Link>
                        <Nav.Link disabled>Search by Local Area</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default NavBar;