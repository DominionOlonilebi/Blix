import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import Cards from "./Cards";
import Footer from "./Footer";

const Project = () => {
  return (
    <div>
      <Container>
        <Row className="tols d-flex flex-row justify-content-center">
          <h1>
            <b>Sample Projects</b>
          </h1>
          <Col md={3} className="squar mx-2 pb-5 mb-3">
            <img
              src="Images/pics60.jpg"
              alt=""
              width={255}
              height={280}
              className="rounded mb-3 mt-2"
            />
            <h4>
              <b>Laboratory Equipment</b>
            </h4>
            <p>
              <b>placerat orci nulla</b>
            </p>
          </Col>

          <Col md={3} className="square mx-2 pb-4 mb-3">
            <img
              src="Images/pics80.jpg"
              alt=""
              width={255}
              height={280}
              className="rounded mb-3 mt-2"
            />
            <h4>
              <b>Ready to Learn 100%</b>
            </h4>
            <p>
              <b>dignissim sit amet.</b>
            </p>
          </Col>

          <Col md={3} className="squares mx-2 pb-4 mb-3">
            <img
              src="Images/pics70.jpg"
              alt=""
              width={255}
              height={280}
              className="rounded mb-3 mt-2"
            />
            <h4>
              <b>Experimental Tool</b>
            </h4>
            <p>
              <b>placerat orci</b>
            </p>
          </Col>
        </Row>
      </Container>

      <Container fluid className="update">
        <Container>
          <Row className="d-flex flex-row justify-content-center">
            <h1>
              <b>Resources & Updates</b>
            </h1>
            <Col md={4}>
              <Card style={{ width: "20rem" }} className="mb-3">
                <Card.Img variant="top" src="Images/pics8.jpg" alt="" />
                <Card.Body>
                  <Card.Title>Justo donec enim</Card.Title>
                  <Card.Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </Card.Text>
                  <Button variant="danger">Click</Button>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4}>
              <Card style={{ width: "20rem" }} className="mb-3">
                <Card.Img variant="top" src="Images/pics2.jpg" alt="" />
                <Card.Body>
                  <Card.Title>Justo donec enim</Card.Title>
                  <Card.Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </Card.Text>
                  <Button variant="danger">Click</Button>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4}>
              <Card style={{ width: "20rem" }} className="mb-3">
                <Card.Img variant="top" src="Images/pics8.jpg" alt="" />
                <Card.Body>
                  <Card.Title>Justo donec enim</Card.Title>
                  <Card.Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </Card.Text>
                  <Button variant="danger">Click</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </Container>
      <Cards />
      <Footer />
    </div>
  );
};

export default Project;
