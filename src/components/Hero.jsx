import React from 'react';
import {Button, Col, Container, Row} from 'reactstrap';
import {Link} from 'react-router-dom';
import SvgSeparator from './base/SvgSeparator';

/*
* Header used specifically for the Home page
* */
export default function Hero() {
  return (
    <>
      <div className='position-relative'>
        <section className='section section-lg section-hero section-shaped'>
          {/* Background shapes *******************************/}
          <div className='shape shape-style-2 shape-dark'>
            <span className='span-150' />
            <span className='span-50' />
            <span className='span-50' />
            <span className='span-75' />
            <span className='span-100' />
            <span className='span-75' />
            <span className='span-50' />
            <span className='span-100' />
            <span className='span-50' />
            <span className='span-100' />
          </div>
          {/* End Background shapes ***************************/}
          <Container className='shape-container d-flex align-items-center py-lg'>
            <div className='col px-0'>
              <Row className='align-items-center justify-content-center'>
                <Col className='text-center' lg='6'>
                  <img
                    alt='...'
                    className='img-fluid'
                    src={require('../assets/img/brand/anthem-engineering-white-logo.png')}
                    style={{width: '300px'}}
                  />
                  <p className='lead text-white'>
                    Software. Solutions. Success
                  </p>
                  <div className='btn-wrapper mt-5'>
                    {/* Link to about-us page *****************************/}
                    <Link to='/about-us'>
                      <Button
                        className='btn-white btn-icon mb-3 mb-sm-0'
                        color='default'
                        size='lg'
                      >
                        <span className='btn-inner--icon mr-1'>
                          <i className='ni ni-app' />
                        </span>
                        <span className='btn-inner--text'>About Us</span>
                      </Button>{' '}
                    </Link>
                    {/* End Link to about-us page *************************/}
                    {/* Link to careers page ******************************/}
                    <Link to='/contact-us'>
                      <Button
                        className='btn-icon mb-3 mb-sm-0'
                        color='github'
                        size='lg'
                        target='_blank'
                      >
                        <span className='btn-inner--icon mr-1'>
                          <i className='ni ni-world' />
                        </span>
                        <span className='btn-inner--text'>
                          <span className='text-info mr-1'>Careers</span>
                        </span>
                      </Button>
                    </Link>
                    {/* End Link to careers page **************************/}
                  </div>
                </Col>
              </Row>
            </div>
          </Container>

          {/* SVG separator ****************************************************/}
          <SvgSeparator />
          {/* End SVG separator ************************************************/}

        </section>
      </div>
    </>
  );
}
