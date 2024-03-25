import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

const Design = () => {
  return (
    <>
      <Container fluid className="builder">
        <Container>
          <Row>
            <Col md={7}>
              <div className="build">
                <h2>
                  <b>
                    <span>Dare to Build.</span>
                    <br />
                    Dare To Complete.
                    <br />
                    Your Journey To
                    <br />
                    Excellence Begins Here!
                  </b>
                </h2>
                <Button className="simple-linear">
                  <b>Register Now</b>
                </Button>
              </div>
            </Col>

            <Col md={5}>
              <div className="my">
                <img
                  src="Images/pics10.jpg"
                  alt=""
                  width={430}
                  height={430}
                  className="imgs rounded-circle"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
};

export default Design;
