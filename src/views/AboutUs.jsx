import React from "react";

// reactstrap components
import { Button, Container, Row, Col, UncontrolledCarousel } from "reactstrap";
import OurContracts from "../components/OurContracts";
import SolutionsDisplay from "../components/SolutionsDisplay";

// TODO replace images with 800 x 800
const items = [
  {
    src: require("../assets/img/networking.jpg"),
    altText: "",
    caption: "",
    header: ""
  },
  {
    src: require("../assets/img/teamwork.jpg"),
    altText: "",
    caption: "",
    header: ""
  }
];

class Carousel extends React.Component {
  render() {
    return (
      <>
        <section className="section section-shaped">
          <div className="shape shape-style-1 shape-default">
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
          <Container className="py-md">
            {/* Header *********************************************************/}
            <Row className="justify-content-between align-items-center">
              <Col className="mb-5 mb-lg-0" lg="6">
                <h2 className="text-white font-weight-light">
                  WE'RE <b>ANTHEM ENGINEERING</b>
                </h2>
                <p className="lead text-white mt-4">
                  Anthem Engineering is a software, systems, and solutions company focused on rapidly developing
                  capabilities that make a difference. We believe that technology exists to serve the mission, not to
                  serve itself. We use the most advanced technology available to solve problems for our customers.
                </p>
                {/* TODO Create ref to scroll to page where contracts are */}
                <Button
                  className="btn-white mt-4"
                  color="default"
                  href=""
                >
                  See New Contracts
                </Button>
              </Col>
              <Col className="mb-lg-auto" lg="6">
                <div className="rounded shadow-lg overflow-hidden transform-perspective-right">
                  <UncontrolledCarousel items={items} />
                </div>
              </Col>
            </Row>
            {/* End Header *****************************************************/}
          </Container>

          {/* SVG separator */}
          <div className="separator separator-bottom separator-skew">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon className="fill-white" points="2560 0 2560 100 0 100" />
            </svg>
          </div>
        </section>

        <SolutionsDisplay />

        {/* New Contracts ****************************************************/}
        <OurContracts />
        {/* End New Contracts ************************************************/}
      </>
    );
  }
}

export default Carousel;
