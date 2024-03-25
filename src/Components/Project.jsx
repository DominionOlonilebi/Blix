import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import Cards from "./Cards";
import Footer from "./Footer";

const Project = () => {
  return (
    <div>
      <Container>
        <Row className="tols d-flex flex-row justify-content-center">
          <h2>
            <b>Sample Projects</b>
          </h2>
          <div className="col-md-3 col-6 squar mx-2 mb-3">
            <img
              src="Images/pics60.jpg"
              alt=""
              className="img-fluid rounded mb-3 mt-2"
            />
            <h5>
              <b>Laboratory Equipment</b>
            </h5>
            <p>
              <b>placerat orci nulla</b>
            </p>
          </div>

          <div className="col-md-3 col-6 square mx-2 pb-4 mb-3">
            <img
              src="Images/pics60.jpg"
              alt=""
              className="img-fluid rounded mb-3 mt-2"
            />
            <h5>
              <b>Ready to Learn 100%</b>
            </h5>
            <p>
              <b>dignissim sit amet.</b>
            </p>
          </div>

          <div className="col-md-3 col-6 squares mx-2 pb-4 mb-3">
            <img
              src="Images/pics60.jpg"
              alt=""
              className="img-fluid rounded mb-3 mt-2"
            />
            <h5>
              <b>Experimental Tool</b>
            </h5>
            <p>
              <b>placerat orci</b>
            </p>
          </div>
        </Row>
      </Container>

      <section fluid className="update" style={{ overflowX: "clip" }}>
        <Container>
          <Row className="d-flex flex-row justify-content-center">
            <h1>
              <b>Resources & Updates</b>
            </h1>
            <div className="col-md-4 col-7">
              <Card className="mb-3">
                <Card.Img
                  variant="top"
                  src="Images/pics8.jpg"
                  alt=""
                  className="img-fluid"
                />
                <Card.Body>
                  <Card.Title>Justo donec enim</Card.Title>
                  <Card.Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </Card.Text>
                  <div className="d-flex justify-content-end">
                    <Button variant="danger">Click</Button>
                  </div>
                </Card.Body>
              </Card>
            </div>

            <div className="col-md-4 col-7">
              <Card className="mb-3">
                <Card.Img
                  variant="top"
                  src="Images/pics2.jpg"
                  alt=""
                  className="img-fluid"
                />
                <Card.Body>
                  <Card.Title>Justo donec enim</Card.Title>
                  <Card.Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </Card.Text>
                  <div className="d-flex justify-content-end">
                    <Button variant="danger">Click</Button>
                  </div>{" "}
                </Card.Body>
              </Card>
            </div>

            <div className="col-md-4 col-7">
              <Card className="mb-3">
                <Card.Img
                  variant="top"
                  src="Images/pics8.jpg"
                  alt=""
                  className="img-fluid"
                />
                <Card.Body>
                  <Card.Title>Justo donec enim</Card.Title>
                  <Card.Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </Card.Text>
                  <div className="d-flex justify-content-end">
                    <Button variant="danger">Click</Button>
                  </div>{" "}
                </Card.Body>
              </Card>
            </div>
          </Row>
        </Container>
      </section>
      <Cards />
      <Footer />
    </div>
  );
};

export default Project;
