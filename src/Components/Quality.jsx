import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Quality = () => {
  return (
    <div>
      <Container fluid className="parts">
        <Container>
          <h2>
            <b>Who Should Participate?</b>
          </h2>
          <div className="part">
            <Row>
              <Col md={4}>
                <p>
                  Justo donec enim diam vulputate ut pharetra sit amet aliquam.
                </p>
              </Col>
              <Col md={4}>
                <p>
                  Justo donec enim diam vulputate ut pharetra sit amet aliquam.
                  Ut placerat.
                </p>
              </Col>
              <Col md={4}>
                <p>
                  Justo donec enim diam vulputate ut pharetra sit amet aliquam.
                  Ut placerat orci nulla pellentesque dignissim enim sit amet.
                </p>
              </Col>
            </Row>
          </div>

          <div className="part">
            <Row>
              <Col md={4}>
                <p>
                  Justo donec enim diam vulputate ut pharetra sit amet aliquam.
                  Ut placerat orci nulla pellentesque dignissim enim sit amet.
                </p>
              </Col>
              <Col md={4}>
                <p>
                  Justo donec enim diam vulputate ut pharetra sit amet aliquam.
                  Ut placerat orci nulla pellentesque dignissim enim sit amet.
                </p>
              </Col>
              <Col md={4}>
                <p>
                  Justo donec enim diam vulputate ut pharetra sit amet aliquam.
                  Ut placerat orci nulla pellentesque dignissim enim sit amet.
                </p>
              </Col>
            </Row>
          </div>
        </Container>
      </Container>

      <section
        fluid
        className="hws"
        style={{ overflowX: "clip", paddingBottom: "30px" }}
      >
        <Container className="hows">
          <h2>
            <b>How to Participate?</b>
          </h2>
          <div className="how">
            <Row>
              <div className="col-md-2 col-4 how1">
                <div className="stp5">
                  <b>05</b>
                </div>
                <p>........................................................</p>
                <h4>
                  <b>Step5</b>
                </h4>
                <p>Justo donec enim diam</p>
              </div>
            </Row>

            <Row>
              <div className="col-md-2 col-4 how2">
                <div className="stp4">
                  <b>04</b>
                </div>
                <p>......................................................</p>
                <h4>
                  <b>Step4</b>
                </h4>
                <p>
                  Justo donec enim diam vulputate ut pharetra sit amet aliquam.
                  Ut placerat orci nulla pellentesque dignissim enim sit amet.
                </p>
              </div>
            </Row>

            <Row>
              <div className="col-md-2 col-4 how3">
                <div className="stp3">
                  <b>03</b>
                </div>
                <p>
                  ................................................................
                </p>
                <h4>
                  <b>Step3</b>
                </h4>
                <p>
                  Justo donec enim diam vulputate ut pharetra sit amet aliquam.
                  Ut placerat orci nulla.
                </p>
              </div>
            </Row>

            <Row>
              <div className="col-md-2 col-4 how4">
                <div className="stp2">
                  <b>02</b>
                </div>
                <p>
                  .....................................................................
                </p>
                <h4>
                  <b>Step2</b>
                </h4>
                <p>Justo donec enim diam vulputate ut phar.</p>
              </div>
            </Row>

            <Row>
              <div className="col-md-2 col-4 how5">
                <div className="stp1">
                  <b>01</b>
                </div>
                <p>.....................................................</p>
                <h4>
                  <b>Step1</b>
                </h4>
                <p>Justo donec amet.</p>
              </div>
            </Row>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Quality;
