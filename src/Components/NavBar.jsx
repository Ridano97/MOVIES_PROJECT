import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import {Navbar as NavbarBootstrap }from 'react-bootstrap';




const NavBar = () => {

    return <>
            <NavbarBootstrap fixed="top" className='blue-night border-bottom border-white'>
        <Container>
          <NavbarBootstrap.Brand className='text-white' ><h1>MOVIES <span className='text-warning'>&</span> CHILL</h1></NavbarBootstrap.Brand>
          <Nav >
          <Nav.Link className='cursor text-white' href="/accueil"><span>Home</span></Nav.Link>
          <Nav.Link className='cursor text-white' href="/latest"><span>Latest</span></Nav.Link>
          <Nav.Link className='cursor text-white' href="/toprated"><span>Top Rated</span></Nav.Link>
          <Nav.Link className='cursor text-white' href="/tvshow"><span>TV show</span></Nav.Link>
          {/*<Nav.Link href="/pagesanimes"><span className='text-white'>Animes</span></Nav.Link>*/}            
          <Nav.Link className='cursor text-white' href="/trends"><span>Trends</span></Nav.Link>
          </Nav>
        </Container>
      </NavbarBootstrap>
    </>

}



export default NavBar;