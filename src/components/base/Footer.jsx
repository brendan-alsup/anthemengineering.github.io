import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Button,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
} from "reactstrap";

const imgHeaderStyle = {
  height: '15%',
  width: '15%'
};

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <Container>

          {/* Page Links ********************************************************************/}
          <Row>
            <Col md="4">
              <h3 className="title"><img alt="..." src={require("../../assets/img/brand/anthem-engineering-logo.png")}  style={imgHeaderStyle}/><b>Anthem</b>Engineering</h3>
            </Col>
            <Col md="2">
              <Nav>
                <NavItem>
                  <NavLink to="/" tag={Link}>
                    Home
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/landing-page" tag={Link}>
                    About Us
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/register-page" tag={Link}>
                    Careers
                  </NavLink>
                </NavItem>
              </Nav>
            </Col>
            <Col md="2">
              <Nav>
                <NavItem>
                  <NavLink to="/profile-page" tag={Link}>
                    Solutions
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="https://creative-tim.com/about-us?ref=blkdsr-footer">
                    News
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="https://creative-tim.com/contact-us?ref=blkdsr-footer">
                    Contact Us
                  </NavLink>
                </NavItem>
              </Nav>
            </Col>
            {/* End Page Links ************************************************************************/}

            {/* Social Media Links ********************************************************************/}
            <Col md="3">
              <h3 className="title">Follow us:</h3>
              <div className="btn-wrapper profile">
                <Button
                  className="btn-icon btn-round"
                  color="twitter"
                  href="https://twitter.com/anthemeng"
                  id="twitter"
                  size="lg"
                >
                  <i className="fa fa-twitter" />
                </Button>
                <Button
                  className="btn-icon btn-round"
                  color="facebook"
                  href="https://www.facebook.com/AnthemEngineering/"
                  id="facebook"
                  size="lg"
                >
                  <i className="fa fa-facebook-square" />
                </Button>
                <Button
                  className="btn-icon btn-round"
                  color="github"
                  href="https://github.com/anthemengineering"
                  id="tooltip877922017"
                  size="lg"
                  target="_blank"
                >
                  <i className="fa fa-github" />
                </Button>
                <Button
                  className="btn-icon btn-round"
                  color="facebook"
                  href="https://www.linkedin.com/company/anthem-engineering-llc/"
                  id="linkedin"
                  size="lg"
                >
                  <i className="fa fa-linkedin" />
                </Button>
              </div>
            </Col>
          </Row>
          {/* End Social Media Links ****************************************************************/}

          {/* Licence *******************************************************************************/}
          <Row>
            <Col style={{textAlign: "center"}}>
              <span>&copy; { new Date().getFullYear() } Anthem Engineering LLC, All Rights Reserved. Elkridge, MD 21075</span>
            </Col>
          </Row>
          {/* End Licence ***************************************************************************/}
        </Container>
      </footer>
    );
  }
}

export default Footer;
