import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const About = () => {
  return (
    <>
      <section id="about">
        <Container>
          <Row className="abt_row">
            <Col md={6}>
              <div className="abt">
                <img
                  src="Images/pics80.jpg"
                  alt=""
                  width={440}
                  height={420}
                  className="abts rounded-circle"
                />
                <h1 className="simple-linear mt-2">
                  <b>
                    <span className="hon">BLIX-A</span> -THON
                  </b>
                </h1>
              </div>
            </Col>

            <Col md={6}>
              <div className="about">
                <h2 className="mb-3">
                  <b>About Blix-A-Thon'24</b>
                </h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing nulla
                  pellentesque
                </p>{" "}
                <p className="mb-4">
                  <b>sed do eiusmod tempor incididunt ut labore</b>
                </p>{" "}
                <p>
                  et dolore magna aliqua. Justo donec enim diam vulputate ut
                  pharetra sit amet aliquam. Ut placerat orci nulla pellentesque
                  dignissim enim sit amet. Leo vel fringilla est ullamcorper.
                  Nunc id cursus metus aliquam eleifend mi in nulla posuere.
                  Ornare massa eget egestas purus viverra accumsan in nisl.
                  Massa eget egestas purus viverra accumsan.
                </p>{" "}
                <p>
                  {" "}
                  Quis auctor elit sed vulputate mi sit amet. Massa vitae tortor
                  condimentum lacinia quis vel. Lobortis scelerisque fermentum
                  dui faucibus in ornare quam.
                </p>
              </div>
            </Col>
          </Row>
        </Container>

        <Container>
          <Row>
            <Col>
              <div className="prb">
                <h2>
                  <b>Blix-A-Thon Problem Statement:</b>
                </h2>
                <p className="mx-5">
                  {" "}
                  vulputate mi sit amet. Massa vitae tortor dolore magna aliqua.
                  Justo donec enim diam vulputate ut pharetra sit amet aliquam.
                  Ut placerat orci nulla pellentesque dignissim enim sit amet.
                  Leo vel fringilla est ullamcorper. Nunc id cursus metus
                  aliquam eleifend mi in nulla posuere. Ornare massa eget
                  egestas purus viverra accumsan in nisl. Massa eget egestas
                  purus viverra accumsan elit sed. donec enim diam vulputate ut
                  pharetra sit amet aliquam. Ut placerat orci nulla pellentesque
                  dignissim enim sit amet. Leo vel fringilla est ullamcorper.
                  Nunc id cursus metus aliquam eleifend mi in nulla posuere
                  viverra accumsan.
                </p>
              </div>
            </Col>
          </Row>
        </Container>

        <Container className="date">
          <h2>
            {" "}
            <b>Important Dates</b>
          </h2>
          <div className="dates">
            <Row className="d-flex flex-row justify-content-center">
              <div className="col-md-2 col-4">
                <p className="mx-3">Monday</p>
                <p className="mx-3">8am</p>
                <p className="mx-3">
                  <b>25th Dec 2023</b>
                </p>
              </div>
              <div className="col-md-2 col-4">
                <p className="mx-3">Tuesday</p>
                <p className="mx-3">8am</p>
                <p className="mx-3">
                  <b>25th Dec 2023</b>
                </p>
              </div>
              <div className="col-md-2 col-4">
                <p className="mx-3">Wednesday</p>
                <p className="mx-3">8am</p>
                <p className="mx-3">
                  <b>25th Dec 2023</b>
                </p>
              </div>
              <div className="col-md-2 col-4">
                <p className="mx-3">Thursday</p>
                <p className="mx-3">8am</p>
                <p className="mx-3">
                  <b>25th Dec 2023</b>
                </p>
              </div>
              <div className="col-md-2 col-4">
                <p className="mx-3">Friday</p>
                <p className="mx-3">8am</p>
                <p className="mx-3">
                  <b>25th Dec 2023</b>
                </p>
              </div>
            </Row>
          </div>
        </Container>
      </section>
    </>
  );
};

export default About;
