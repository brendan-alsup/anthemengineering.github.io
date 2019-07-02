import React from "react";

// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";
import { Link } from 'react-router-dom'

class Hero extends React.Component {
  render() {
    return (
      <>
        <div className="position-relative">
          {/* Hero for FREE version */}
          <section className="section section-lg section-hero section-shaped">
            {/* Background circles */}
            <div className="shape shape-style-1 shape-default">
              <span className="span-150" />
              <span className="span-50" />
              <span className="span-50" />
              <span className="span-75" />
              <span className="span-100" />
              <span className="span-75" />
              <span className="span-50" />
              <span className="span-100" />
              <span className="span-50" />
              <span className="span-100" />
            </div>
            <Container className="shape-container d-flex align-items-center py-lg">
              <div className="col px-0">
                <Row className="align-items-center justify-content-center">
                  <Col className="text-center" lg="6">
                    <img
                      alt="..."
                      className="img-fluid"
                      src={require("../assets/img/brand/anthem-engineering-white-logo.png")}
                      style={{ width: "300px" }}
                    />
                    <p className="lead text-white">
                      Software. Solutions. Success
                    </p>
                    <div className="btn-wrapper mt-5">
                      {/* Link to about-us page *****************************/}
                      <Link to="/about-us">
                        <Button
                          className="btn-white btn-icon mb-3 mb-sm-0"
                          color="default"
                          size="lg"
                        >
                          <span className="btn-inner--icon mr-1">
                            <i className="ni ni-app" />
                          </span>
                          <span className="btn-inner--text">About Us</span>
                        </Button>{" "}
                      </Link>
                      {/* End Link to about-us page *************************/}
                      {/* Link to careers page ******************************/}
                      <Link to="/contact-us">
                        <Button
                          className="btn-icon mb-3 mb-sm-0"
                          color="github"
                          size="lg"
                          target="_blank"
                        >
                          <span className="btn-inner--icon mr-1">
                            <i className="ni ni-world" />
                          </span>
                          <span className="btn-inner--text">
                            <span className="text-info mr-1">Careers</span>
                          </span>
                        </Button>
                      </Link>
                      {/* End Link to careers page **************************/}
                    </div>
                  </Col>
                </Row>
              </div>
            </Container>
            {/* SVG separator */}
            <div className="separator separator-bottom separator-skew zindex-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 2560 100"
                x="0"
                y="0"
              >
                <polygon
                  className="fill-white"
                  points="2560 0 2560 100 0 100"
                />
              </svg>
            </div>
          </section>
        </div>
      </>
    );
  }
}

export default Hero;
