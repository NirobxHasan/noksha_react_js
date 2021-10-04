import React from 'react';
import { Container, Navbar, NavDropdown,Nav,Button } from 'react-bootstrap';
import './NavBar.css'
const NavBar = () => {
    return (
        <Navbar fixed="top" collapseOnSelect expand="lg" className="navbar">
            <Container>
                <Navbar.Brand onClick={()=>console.log('ok')} className="brand-name" href="#home">NOKSHA</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                    <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                    </Nav>

                    <Nav>
                    <Nav.Link>
                        <Button className="btn-color">Signup</Button>
                    </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;