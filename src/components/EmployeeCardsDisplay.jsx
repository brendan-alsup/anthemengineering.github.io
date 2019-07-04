import React from 'react';
import {Button, Card, CardBody, CardImg, CardSubtitle, CardText, CardTitle, Container, Row} from 'reactstrap';
import CardDeck from 'reactstrap/es/CardDeck';

/*
* Displays the employees of Anthem Engineering
* TODO Get pictures and information from employees to use
* TODO Randomly select three employees from the list and display them
* TODO Route to profile page when 'View Team Member Button' is clicked
* */
export default class EmployeeCardsDisplay extends React.Component {
  render() {
    return (
      <section className='section section-components pb-0'>
        <Container>
          <h2 className='mb-5'>
            <span>Meet a Few of Our Team Members</span>
          </h2>
          <Row>
            <CardDeck>
              <Card>
                <CardImg
                  top
                  width='100%'
                  src={require('../assets/img/employees/chuck-norris.jpeg')}
                  alt='Card image cap'
                  style={{maxHeight: '250px'}}/>
                <CardBody>
                  <CardTitle><b>Chuck Norris</b></CardTitle>
                  <CardSubtitle>Software Master</CardSubtitle>
                  <CardText>When Chuck Norris throws exceptions, it's across the room.</CardText>
                  <Button>View Team Member</Button>
                </CardBody>
              </Card>
              <Card>
                <CardImg
                  top
                  width='100%'
                  src={require('../assets/img/employees/jet-li.jpeg')}
                  alt='Card image cap'
                  style={{maxHeight: '250px'}}
                />
                <CardBody>
                  <CardTitle><b>Jet Li</b></CardTitle>
                  <CardSubtitle>Software Engineer</CardSubtitle>
                  <CardText>Some stuff</CardText>
                  <Button>View Team Member</Button>
                </CardBody>
              </Card>
              <Card>
                <CardImg
                  top
                  width='100%'
                  src={require('../assets/img/employees/hulk-hogan.jpeg')}
                  alt='Card image cap'
                  style={{maxHeight: '250px'}}
                />
                <CardBody>
                  <CardTitle><b>Hulk Hogan</b></CardTitle>
                  <CardSubtitle>Human Resources</CardSubtitle>
                  <CardText>You can't see me</CardText>
                  <Button>View Team Member</Button>
                </CardBody>
              </Card>
            </CardDeck>
          </Row>
        </Container>
      </section>
    );
  }
}
