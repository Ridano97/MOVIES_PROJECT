import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

const Footer = () => {
  return (
    <>
      <Navbar className="blue-night border-top border-white">
        <Container>
          <Navbar.Brand className="text-white">MOVIES & CHILL </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text className="p-2 text-white">
                Privacy policy
            </Navbar.Text>
            <Navbar.Text className="p-2 text-white">
                Contact us
            </Navbar.Text>
            <Navbar.Text className="p-2 text-white">
                Terms of use 
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Footer;
