import React from 'react'
import {Button, Card, CardBody, CardImg, CardSubtitle, CardText, CardTitle, Col, Container, Row} from "reactstrap";

class EmployeeCardsDisplay extends React.Component {
  render () {
    return (
      <section className="section section-components pb-0">
        <Container>
          <h2 className="mb-5">
            <span>Meet a Few of Our Team Members</span>
          </h2>
          <Row>
            <Col>
              <Card>
                <CardImg
                  top
                  width="100%"
                  src={require('../assets/img/employees/chuck-norris.jpeg')}
                  alt="Card image cap"
                  style={{maxHeight: "250px"}}/>
                <CardBody>
                  <CardTitle><b>Chuck Norris</b></CardTitle>
                  <CardSubtitle>Software Master</CardSubtitle>
                  <CardText>When Chuck Norris throws exceptions, it's across the room.</CardText>
                  <Button>View Team Member</Button>
                </CardBody>
              </Card>
            </Col>
            <Col>
              <Card>
                <CardImg
                  top
                  width="100%"
                  src={require('../assets/img/employees/jet-li.jpeg')}
                  alt="Card image cap"
                  style={{maxHeight: "250px"}}
                />
                <CardBody>
                  <CardTitle><b>Jet Li</b></CardTitle>
                  <CardSubtitle>Software Engineer</CardSubtitle>
                  <CardText>Some stuff</CardText>
                  <Button>View Team Member</Button>
                </CardBody>
              </Card>
            </Col>
            <Col>
              <Card>
                <CardImg
                  top
                  width="100%"
                  src={require('../assets/img/employees/hulk-hogan.jpeg')}
                  alt="Card image cap"
                  style={{maxHeight: "250px"}}
                />
                <CardBody>
                  <CardTitle><b>Hulk Hogan</b></CardTitle>
                  <CardSubtitle>Human Resources</CardSubtitle>
                  <CardText>You can't see me</CardText>
                  <Button>View Team Member</Button>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    )
  }
}

export default EmployeeCardsDisplay;
