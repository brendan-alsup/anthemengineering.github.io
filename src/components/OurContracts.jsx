import React from 'react'
import {Button, Card, CardBody, CardImg, CardSubtitle, CardText, CardTitle, Col, Container, Row} from "reactstrap";

function OurContracts () {
  return (
    <section className="section section-components pb-0">
      <Container>
        <h2 className="mb-5">
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
                {/*<Button>Button</Button>*/}
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default OurContracts;
