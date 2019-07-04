import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import { Col,
  Collapse,
  Container,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Nav,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Row,
  UncontrolledDropdown
} from "reactstrap";

/*
* Contains styles for the header of
* */
const imgHeaderStyle = {
  height: '15%',
  width: '15%'
};

class IndexNavbar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collapseOpen: false,
      backgroundColor: 'navbar-transparent',
      logoColor: 'white',
      // TODO determine better method to deliver dynamic image other than a relative path
      // Also, JavaScript bundler has issues handling dynamic `require`, so I prepended `require` to the relative path
      logoImage: require('../../assets/img/brand/anthem-engineering-logo-white.png')
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.changeColor);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.changeColor);
  }

  /*
  * As the scrolling location changes, the navbar changes the following properties:
  * navbar background color, logo color, logo picture(one white & the other grey)
  * */
  changeColor = () => {
    if (
      document.documentElement.scrollTop > 10 ||
      document.body.scrollTop > 10
    ) {
      this.setState({
        backgroundColor: "bg-secondary",
        logoColor: '#414141',
        logoImage: require('../../assets/img/brand/anthem-engineering-logo.png')
      });
    } else if (
      document.documentElement.scrollTop < 11 ||
      document.body.scrollTop < 11
    ) {
      this.setState({
        backgroundColor: "navbar-transparent",
        logoColor: 'white',
        logoImage: require('../../assets/img/brand/anthem-engineering-logo-white.png')
      });
    }
  };

  toggleCollapse = () => {
    document.documentElement.classList.toggle("nav-open");
    this.setState({
      collapseOpen: !this.state.collapseOpen
    });
  };

  onCollapseExiting = () => {
    this.setState({
      collapseOut: "collapsing-out"
    });
  };

  onCollapseExited = () => {
    this.setState({
      collapseOut: ""
    });
  };

  render() {
    return (
      <Navbar
        className={"fixed-top " + this.state.backgroundColor}
        color-on-scroll="100"
        expand="lg"
      >
        <Container>
          {/* Logo *********************************************************************************/}
          <div className="navbar-translate">
            <NavbarBrand
              data-placement="bottom"
              to="/"
              rel="noopener noreferrer"
              tag={Link}
            >
              <img alt="..." src={this.state.logoImage}  style={imgHeaderStyle}/>
              <span style={{color: this.state.logoColor}}><b>Anthem</b>Engineering</span>
            </NavbarBrand>
          </div>
          {/* End Logo *****************************************************************************/}

          <Collapse
            className={"justify-content-end " + this.state.collapseOut}
            navbar
            isOpen={this.state.collapseOpen}
            onExiting={this.onCollapseExiting}
            onExited={this.onCollapseExited}
          >
            <div className="navbar-collapse-header">
              <Row>
                <Col className="collapse-brand" xs="6">
                  <a href="#pablo" onClick={e => e.preventDefault()}>
                    Anthem Engineering
                  </a>
                </Col>
                <Col className="collapse-close text-right" xs="6">
                  <button
                    aria-expanded={this.state.collapseOpen}
                    className="navbar-toggler"
                    onClick={this.toggleCollapse}
                  >
                    <i className="tim-icons icon-simple-remove" />
                  </button>
                </Col>
              </Row>
            </div>
            <Nav className="align-items-lg-center ml-lg-auto" navbar>
              {/* Social Media Links *****************************************************/}
              <NavItem className="p-0">
                <NavLink
                  data-placement="bottom"
                  href="https://twitter.com/anthemeng"
                  rel="noopener noreferrer"
                  target="_blank"
                  title="Follow us on Twitter"
                >
                  <i className="fa fa-twitter" />
                  <p className="d-lg-none d-xl-none">Twitter</p>
                </NavLink>
              </NavItem>
              <NavItem className="p-0">
                <NavLink
                  data-placement="bottom"
                  href="https://www.facebook.com/AnthemEngineering/"
                  rel="noopener noreferrer"
                  target="_blank"
                  title="Like us on Facebook"
                >
                  <i className="fa fa-facebook-square" />
                  <p className="d-lg-none d-xl-none">Facebook</p>
                </NavLink>
              </NavItem>
              <NavItem className="p-0">
                <NavLink
                  data-placement="bottom"
                  href="https://github.com/anthemengineering"
                  rel="noopener noreferrer"
                  target="_blank"
                  title="Checkout code from our GitHub"
                >
                  <i className="fa fa-github" />
                  <p className="d-lg-none d-xl-none">GitHub</p>
                </NavLink>
              </NavItem>
              <NavItem className="p-0">
                <NavLink
                  data-placement="bottom"
                  href="https://www.linkedin.com/company/anthem-engineering-llc/"
                  rel="noopener noreferrer"
                  target="_blank"
                  title="Follow us on LinkedIn"
                >
                  <i className="fa fa-linkedin" />
                  <p className="d-lg-none d-xl-none">LinkedIn</p>
                </NavLink>
              </NavItem>
              {/* End Social Media Links **********************************************************/}

              {/* Page Navigation DropDown ********************************************************/}
              <UncontrolledDropdown nav>
                <DropdownToggle
                  caret
                  color="default"
                  data-toggle="dropdown"
                  href="#pablo"
                  nav
                  onClick={e => e.preventDefault()}
                >
                  <i className="ni ni-collection d-lg-none mr-1" />
                  <span className="nav-link-inner--text">Page Navigation</span>
                  {/* TODO Change 'Page Navigation' to dynamically render what the current page is on */}
                </DropdownToggle>
                {/* 'Position: absolute' prevents the dropdown menu from being positioned over dropdown toggle */}
                <DropdownMenu className="dropdown-with-icons" style={{position: 'absolute'}}>
                  <DropdownItem tag={Link} to="/home">
                    <i className="tim-icons icon-paper" />
                    Home
                  </DropdownItem>
                  <DropdownItem tag={Link} to="/about-us">
                    <i className="tim-icons icon-bullet-list-67" />
                    About Us
                  </DropdownItem>
                  <DropdownItem tag={Link} to="/contact-us">
                    <i className="tim-icons icon-bullet-list-67" />
                    Contact Us
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              {/* End Page Navigation ***********************************************************/}
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default IndexNavbar;
