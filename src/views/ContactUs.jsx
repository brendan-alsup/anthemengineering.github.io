import React from 'react';
import {Link} from 'react-router-dom';
import {Button, Card, Col, Container, Row} from 'reactstrap';
import SvgSeparator from '../components/base/SvgSeparator';

/*
* Displays contact information and career options for Anthem Engineering
* */
export default class ContactUs extends React.Component {
  render() {
    return (
      <>
        <section className='section section-lg section-shaped'>
          <div className='shape shape-style-1 shape-dark'>
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
          <Container className='py-md'>
            <Row className='row-grid justify-content-between align-items-center'>
              <Col lg='6'>
                <h3 className='display-3 text-white'>
                  WE'RE A TEAM
                </h3>
                <p className='lead text-white'>
                  Our team is made of great technical talent with a diverse set of experiences with extensive
                  backgrounds with the U.S. government and intelligence community. We have delivered solutions across a
                  diverse set of missions, products, and platforms and use our experience to build better problem
                  solving capabilities for our other customers. <br/>
                </p>
                <div className='btn-wrapper'>
                  <Button color='success' to='/careers' tag={Link}>
                    Join Our Team
                  </Button>
                </div>
              </Col>
              <Col className='mb-lg-auto' lg='5'>
                <div className='transform-perspective-right'>
                  <Card className='bg-secondary shadow border-0'>
                    <img src={require('../assets/img/networking.jpg')} alt='...' />
                  </Card>
                </div>
              </Col>
            </Row>
          </Container>
          {/* SVG separator ****************************************************/}
          <SvgSeparator />
          {/* End SVG separator ************************************************/}
        </section>
      </>
    );
  }
}
