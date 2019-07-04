import React from 'react';
import {Link} from 'react-router-dom';
import {Button, NavItem, NavLink, Nav, Container, Row, Col} from 'reactstrap';

const imgHeaderStyle = {
  height: '15%',
  width: '15%'
};

/*
* Footer for website contains links to social media pages and routes to other pages on website
* */
export default function Footer() {
  return (
    <footer className='footer' style={{marginTop: '100px'}}>
      <Container>
        <Row>

          {/* Image Brand *****************************************************************/}
          <Col md='5'>
            <h3 className='title'>
              <img
                src={require('../../assets/img/brand/anthem-engineering-logo.png')}
                alt='...'
                style={imgHeaderStyle}
              />
              <b>Anthem</b>Engineering
            </h3>
          </Col>
          {/* End Image Brand *************************************************************/}

          {/* Page Navigation Links *******************************************************/}
          <Col md='2'>
            {/* TODO Go over links to see which ones will be added */}
            <Nav>
              <NavItem>
                <NavLink to='/' tag={Link}>
                  Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to='/about-us' tag={Link}>
                  About Us
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to='/contact-us' tag={Link}>
                  Careers
                </NavLink>
              </NavItem>
            </Nav>
          </Col>

          <Col md='2'>
            <Nav>
              <NavItem>
                <NavLink to='/about-us' tag={Link}>
                  Solutions
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink>
                  News
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to='/contact-us'>
                  Contact Us
                </NavLink>
              </NavItem>
            </Nav>
          </Col>
          {/* End Page Navigation Links ****************************************************************/}

          {/* Social Media Links ***********************************************************************/}
          <Col md='3'>
            <h3 className='title'>Follow us:</h3>
            <div className='btn-wrapper profile'>
              <Button
                className='btn-icon btn-round'
                color='twitter'
                href='https://twitter.com/anthemeng'
                id='twitter'
                size='lg'
              >
                <i className='fa fa-twitter' />
              </Button>
              <Button
                className='btn-icon btn-round'
                color='facebook'
                href='https://www.facebook.com/AnthemEngineering/'
                id='facebook'
                size='lg'
              >
                <i className='fa fa-facebook-square' />
              </Button>
              <Button
                className='btn-icon btn-round'
                color='github'
                href='https://github.com/anthemengineering'
                id='tooltip877922017'
                size='lg'
                target='_blank'
              >
                <i className='fa fa-github' />
              </Button>
              <Button
                className='btn-icon btn-round'
                color='facebook'
                href='https://www.linkedin.com/company/anthem-engineering-llc/'
                id='linkedin'
                size='lg'
              >
                <i className='fa fa-linkedin' />
              </Button>
            </div>
          </Col>
        </Row>
        {/* End Social Media Links ****************************************************************/}

      </Container>

      {/* Licence *******************************************************************************/}
      <Row style={{marginTop: '30px'}}>
        <Col style={{textAlign: 'center'}}>
          {/* Automatically update the copyright to current year */}
          <span style={{position: 'relative'}}>
            &copy; { new Date().getFullYear() } Anthem Engineering LLC, All Rights Reserved. Elkridge, MD 21075
          </span>
        </Col>
      </Row>
      {/* End Licence ***************************************************************************/}
    </footer>
  );
}
