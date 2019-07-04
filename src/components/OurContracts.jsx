import React from 'react';
import PropTypes from 'prop-types';
import {Card, CardBody, CardSubtitle, CardText, CardTitle, Col, Container, Row} from 'reactstrap';

OurContracts.propTypes = {
  // sets the html ID for the root of the component
  sectionId: PropTypes.string
};

/*
* Renders content pertaining to Anthem Engineering's contracts
* */
export default function OurContracts(props) {
  return (
    <section id={props.sectionId} className='section section-components pb-0'>
      <Container>
        <h2 className='mb-5'>
          <span>New Contracts</span>
        </h2>
        <Row>
          <Col>
            <Card>
              <CardBody>
                <CardTitle>JE-RDAP contract</CardTitle>
                <CardSubtitle>02 Nov 2017</CardSubtitle>
                <CardText>
                  Anthem Engineering, LLC was recently awarded a Joint Enterprise Research Development
                  Acquisition and Procurement contract in November 2017 run by the Joint Program Executive Office for
                  Chemical and Biological Defense (JPEO-CBD). JE-RDAP is a 10 year IDIQ award worth 8 billion dollars
                  in revenue. The majority of our work will be based out of our Maryland locations.
                </CardText>
                {/* TODO add button that expands the textbox after a text limit is reached. */}
                {/* <Button>Button</Button>*/}
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
