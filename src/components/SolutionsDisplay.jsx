import React from 'react';
import PropTypes from 'prop-types';
import {CardDeck, Container, Jumbotron, Row, Card, CardImg, CardBody, CardTitle, CardText} from 'reactstrap';

SolutionsDisplay.propTypes = {
  // sets the html ID for the root of the component
  sectionId: PropTypes.string
};

/*
* Displays the types of solutions that Anthem Engineering offers
* */
export default function SolutionsDisplay(props) {
  return (
    <Jumbotron id={props.sectionId}>
      <Container>
        <h1 className='display-3'>We Create Solutions</h1>
        <br/><br/>
        <Row>
          {/* CardDeck is like putting two Cols together each with a Card inside; however, the CardDeck keeps the
           cards at the same height regardless of the content*/}
          <CardDeck>
            <Card>
              <CardImg top width='100%' src={require('../assets/img/big-data-hand-to-earth.jpg')} alt='Card image cap'/>
              <CardBody>
                <CardTitle><b>Big Data</b></CardTitle>
                <CardText>
                  Organizations have more data available to them now than anytime before. Ingesting, storing, tagging
                  and retrieving this information quickly and securely is difficult. Our engineers have broad
                  experience helping customers manage floods of data and extracting valuable decision support
                  intelligence from it.
                </CardText>
              </CardBody>
            </Card>
            <Card>
              <CardImg top width='100%' src={require('../assets/img/data-networks.jpg')} alt='Card image cap' />
              <CardBody>
                <CardTitle><b>Data Analytics</b></CardTitle>
                <CardText>
                  Analytics are essential to extracting knowledge from the vast amounts of data that overwhelm
                  many customers. Our engineers have developed data analytics that detect trends and patterns,
                  identify anomalies, and visualize data in meaningful ways.
                </CardText>
              </CardBody>
            </Card>
          </CardDeck>
        </Row>

        <br/><br/><br/>

        <Row>
          <CardDeck>
            <Card>
              <CardImg top width='100%' src={require('../assets/img/cloud-service.jpg')} alt='Card image cap' />
              <CardBody>
                <CardTitle><b>Cloud Services</b></CardTitle>
                <CardText>
                  As an enterprise grows, information technology infrastructure must scale to meet business
                  needs. Our engineers have experience across a wide variety of cloud services, including
                  infrastructure, platform, and software as a service (IaaS, PaaS, and SaaS) as well as cloud storage
                  and analytics.
                </CardText>
              </CardBody>
            </Card>
            <Card>
              <CardImg top width='100%' src={require('../assets/img/knowledge-management.png')} alt='Card image cap' />
              <CardBody>
                <CardTitle><b>Knowledge Management</b></CardTitle>
                <CardText>
                  Information is only valuable when in the hands of the right people at the right time. Our engineers
                  have created knowledge management tools that facilitate sharing and collaboration as well as boost
                  an organizations’ retention and retrieval abilities.
                </CardText>
              </CardBody>
            </Card>
          </CardDeck>
        </Row>
      </Container>
    </Jumbotron>
  );
}
