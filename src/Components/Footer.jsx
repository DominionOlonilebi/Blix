import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <div>
      <Container fluid className="footer">
        <Container>
          <Row className="d-flex flex-row justify-content-center">
            <Col md={2}>
              <h1>Blix</h1>
            </Col>
            <Col md={3}>
              <p>Lorem ipsum dolor sit amet</p>
              <p>consectetur adipiscing</p>
              <p>nulla pellentesque</p>
            </Col>
            <Col md={3}>
              <p>Lorem ipsum dolor sit amet</p>
              <p>consectetur adipiscing</p>
              <p>nulla pellentesque</p>
            </Col>
            <Col md={3}>
              <Button className="simple-linear">Register Now</Button>
            </Col>
          </Row>
        </Container>

        <Container>
          <Row>
            <Col>
              <h6>&copy; Copyright 2023. Designed by Dominion</h6>
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
};

export default Footer;
