import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <div>
      <Container fluid className="footer">
        <Container>
          <Row className="d-flex flex-row justify-content-center">
            <div className="col-md-2 mb-4">
              <h1>Blix</h1>
            </div>
            <div className="col-md-3 col-6 mb-4">
              <p>Lorem ipsum dolor sit amet</p>
              <p>consectetur adipiscing</p>
              <p>nulla pellentesque</p>
            </div>
            <div className="col-md-3 col-6 mb-4">
              <p>Lorem ipsum dolor sit amet</p>
              <p>consectetur adipiscing</p>
              <p>nulla pellentesque</p>
            </div>
            <div className="col-md-2 ">
              <Button className="simple-linear">Register Now</Button>
            </div>
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
