import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import LogoSite from '../Assets/movies.png'

const NavBar = () => {

    return <>
           <Navbar fixed='top' expand="lg" className="navbar border-2 border-bottom">
      <Container fluid>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-1"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <div className='ms-5 d-flex align-items-center justify-content-center'>  
              <div className='d-flex justify-content-center ms-4' >
                <Nav.Link className='cursor text-white' href="/accueil">Home</Nav.Link>
                <Nav.Link className='cursor text-white' href="/latest">Latest</Nav.Link>
                <Nav.Link className='cursor text-white' href="/toprated">Top rated</Nav.Link>
                <Nav.Link className='cursor text-white' href="/tvshow">TV show</Nav.Link>
                <Nav.Link className='cursor text-white' href="/trends">Trends</Nav.Link>
              </div>
              <div className='ms-5'>
                <Nav.Link><img  className='ms-5' height={400} width={400} src={LogoSite}alt="logo" /></Nav.Link>
              </div>
            </div>
          </Nav>
          <Form className="d-flex me-5">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-warning">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>   
    </>

}



export default NavBar;