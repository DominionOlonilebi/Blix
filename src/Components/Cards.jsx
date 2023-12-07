import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";

const Cards = () => {
  return (
    <div>
      <Container className="dist">
        <Row>
          <Col md={4}>
            <img
              src="Images/pics90.png"
              alt=""
              width={300}
              height={330}
              className="dimg"
            />
          </Col>

          <Col md={8} className="diss">
            <p className="mx-5">
              enim diam vulputate ut pharetra sit
              <br />
              <span className="dis">
                placerat orci nulla pellentesque dignissim
              </span>
              Massa vitae tortor dolore magna aliqua. Justo donec enim diam
              vulputate ut pharetra sit amet aliquam. Ut placerat orci nulla
              pellentesque dignissim enim sit amet. Leo vel fringilla est
              ullamcorper Ut pellentesque dignissim enim sit amet. Leo vel
              fringilla est ullamcorper. Nunc id cursus metus aliquam
            </p>
          </Col>
        </Row>
      </Container>

      <Container className="eco">
        <Row>
          <h1>
            <b>Blix Ecosystem</b>
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod
          </p>
          <Col md={4} className="mb-3 ">
            <Card className="ecos pb-3">
              <Card.Body>
                <Card.Title className="m1">
                  <b>Justo donec enim</b>
                </Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ornare massa eget egestas purus viverra accumsan in nisl.
                  Massa eget egestas purus viverra accumsan elit sed.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-3 ">
            <Card className="ecosy pb-3">
              <Card.Body>
                <Card.Title className="m2">
                  <b>Justo donec enim</b>
                </Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ornare massa eget egestas purus viverra accumsan in nisl.
                  Massa eget egestas purus viverra accumsan elit sed.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-3 ">
            <Card className="ecosys pb-3">
              <Card.Body>
                <Card.Title className="m3">
                  <b>Justo donec enim</b>
                </Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ornare massa eget egestas purus viverra accumsan in nisl.
                  Massa eget egestas purus viverra accumsan elit sed.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Button className="simple-linear">Register Now</Button>
      </Container>
    </div>
  );
};

export default Cards;
