import React from "react";

// reactstrap components
import { Container, Row, Col, Card, CardText, CardImg, CardBody, CardTitle, CardSubtitle, Button } from "reactstrap";

// core components
import IndexNavbar from '../components/base/IndexNavbar.jsx'
import Footer from '../components/base/Footer.jsx';

// index page sections
import Hero from "../components/Hero.jsx";
/*import Buttons from "./IndexSections/Buttons.jsx";
import Inputs from "./IndexSections/Inputs.jsx";
import CustomControls from "./IndexSections/CustomControls.jsx";
import Menus from "./IndexSections/Menus.jsx";
import Navbars from "./IndexSections/Navbars.jsx";
import Tabs from "./IndexSections/Tabs.jsx";
import Progress from "./IndexSections/Progress.jsx";
import Pagination from "./IndexSections/Pagination.jsx";
import Pills from "./IndexSections/Pills.jsx";
import Labels from "./IndexSections/Labels.jsx";
import Alerts from "./IndexSections/Alerts.jsx";
import Typography from "./IndexSections/Typography.jsx";
import Modals from "./IndexSections/Modals.jsx";
import Datepicker from "./IndexSections/Datepicker.jsx";
import TooltipPopover from "./IndexSections/TooltipPopover.jsx";
import Carousel from "./IndexSections/Carousel.jsx";
import Icons from "./IndexSections/Icons.jsx";
import Login from "./IndexSections/Login.jsx";
import Download from "./IndexSections/Download.jsx";*/
import EmployeeCardsDisplay from "../components/EmployeeCardsDisplay";

class Home extends React.Component {
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <>
        <main ref="main">
          <Hero />

          <section className="section section-components pb-0">
            <Container>
              <h2 className="mb-5">
                <span>We're A Team</span>
              </h2>
              <Row>
                <Col>
                  <Card>
                    <CardImg
                      top
                      width="100%"
                      src={require('../assets/img/team-hands.jpg')}
                      alt="Card image cap"
                      style={{maxHeight: "400px"}}
                    />
                  </Card>
                </Col>

                <Col>
                  <p>
                    Our team is made of great <b>technical talent</b> with a diverse set of experiences with extensive
                    backgrounds with the <b>U.S. government and intelligence community</b>. We have delivered solutions across
                    a diverse set of missions, products, and platforms and use our experience to build <b>better problem
                    solving capabilities for our other customers.</b>
                  </p>
                  <p>
                    We've found that <b>highly qualified engineers</b> working closely with mission and business experts is the
                    most <b>effective, rapid,</b> and <b>impactful</b> way of solving problems. Tight feedback loops between experts,
                    engineers, and users lets us create solutions that are on target as efficiently as possible.
                  </p>
                </Col>
              </Row>
            </Container>
          </section>

          <EmployeeCardsDisplay />

{/*          <Buttons />
          <Inputs />
          <section className="section">
            <Container>
              <CustomControls />
              <Menus />
            </Container>
          </section>
          <Navbars />
          <section className="section section-components">
            <Container>
              <Tabs />
              <Row className="row-grid justify-content-between align-items-center mt-lg">
                <Progress />
                <Pagination />
              </Row>
              <Row className="row-grid justify-content-between">
                <Pills />
                <Labels />
              </Row>
              <Alerts />
              <Typography />
              <Modals />
              <Datepicker />
              <TooltipPopover />
            </Container>
          </section>
          <Carousel />
          <Icons />
          <Login />
          <Download />*/}

        </main>
      </>
    );
  }
}

export default Home;
