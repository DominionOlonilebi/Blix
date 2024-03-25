import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";

const MyNav = () => {
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary fixed-top">
        <Container>
          <Navbar.Brand href="#home">
            <b>
              {" "}
              <span className="blix">BLIX-A</span>-THON
            </b>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto px-3 offset-4" variant="underline">
              <Nav.Link href="#home" className="links">
                Home
              </Nav.Link>
              <Nav.Link href="#about" className="links">
                About-Us
              </Nav.Link>
              <Nav.Link href="#quality" className="links">
                Unique Quality
              </Nav.Link>
              <Button className="simple-linear">
                <a href="#project" className="text-white">
                  <b>Our Projects</b>
                </a>
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default MyNav;
