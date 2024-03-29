import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import {Navbar as NavbarBootstrap }from 'react-bootstrap';




const NavBar = () => {

    return <>
            <NavbarBootstrap bg="dark" data-bs-theme="dark">
        <Container>
          <NavbarBootstrap.Brand href="#home"><h1>MOVIES & CHILL </h1></NavbarBootstrap.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </NavbarBootstrap>
    </>

}



export default NavBar;