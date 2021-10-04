import React from 'react';
import { Container, Navbar, NavDropdown,Nav,Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './NavBar.css'
const NavBar = () => {
    const activestyle={
        fontWeight: "bold",
        color: "#F50057"
    }
    return (
        <Navbar fixed="top" collapseOnSelect expand="lg" className="nav-bar">
            <Container>
                <Navbar.Brand onClick={()=>console.log('ok')} className="brand-name" href="#home">NOKSHA</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                    
                    <Nav.Link ><NavLink className='nav-link' activeClassName="selected" activeStyle={activestyle} to='/home'>Home</NavLink></Nav.Link>
                   <Nav.Link ><NavLink className='nav-link' activeStyle={activestyle} to='/courses'>Courses</NavLink></Nav.Link>
                    
                    <Nav.Link ><NavLink className='nav-link' activeStyle={activestyle} to='/about'>About</NavLink></Nav.Link>
                 
                    <Nav.Link ><NavLink className='nav-link' activeStyle={activestyle} to='/teachers'>Teachers</NavLink></Nav.Link>
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