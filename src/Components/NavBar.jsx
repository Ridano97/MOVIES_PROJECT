import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import {Navbar as NavbarBootstrap }from 'react-bootstrap';




const NavBar = () => {

    return <>
            <NavbarBootstrap bg="dark" data-bs-theme="dark">
        <Container>
          <NavbarBootstrap.Brand href="#home"><h1>MOVIES & CHILL</h1></NavbarBootstrap.Brand>
          <Nav >
            <Nav.Link href="/films"><span className='text-white'>Films</span></Nav.Link>
            <Nav.Link href="/series"><span className='text-white'>Series</span></Nav.Link>
            <Nav.Link href="/pages"><span className='text-white'>Animes</span></Nav.Link>
            <Nav.Link href="/tvshows"><span className='text-white'>TV shows</span></Nav.Link>
            
          </Nav>
        </Container>
      </NavbarBootstrap>
    </>

}



export default NavBar;