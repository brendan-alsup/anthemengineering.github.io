// eslint-disable no-unused-vars
import React from 'react';
import {Card, CardImg, Col, Container, Row} from 'reactstrap';
import Hero from '../components/Hero';
import EmployeeCardsDisplay from '../components/EmployeeCardsDisplay';

/**
* Displays content for the homepage
*/
export default class Home extends React.Component {
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }

  render() {
    return (
      <>
        <main ref='main'>
          <Hero />
          <section className='section section-components pb-0'>
            <Container>
              <h2 className="mb-5">
                <span>We're A Team</span>
              </h2>
              <Row>
                <Col>
                  <Card>
                    <CardImg
                      top
                      width='100%'
                      src={require('../assets/img/team-hands.jpg')}
                      alt='Card image cap'
                      style={{maxHeight: '400px'}}
                    />
                  </Card>
                </Col>

                <Col>
                  <p>
                    Our team is made of great <b>technical talent</b> with a diverse set of experiences with extensive
                    backgrounds with the <b>U.S. government and intelligence community</b>. We have delivered solutions
                    across a diverse set of missions, products, and platforms and use our experience to build <b>better
                    problem solving capabilities for our other customers.</b>
                  </p>
                  <p>
                    We've found that <b>highly qualified engineers</b> working closely with mission and business experts
                    is the most <b>effective, rapid,</b> and <b>impactful</b> way of solving problems. Tight feedback
                    loops between experts, engineers, and users lets us create solutions that are on target as
                    efficiently as possible.
                  </p>
                </Col>
              </Row>
            </Container>
          </section>

          {/* Employee Cards ***************************************************/}
          <EmployeeCardsDisplay />
          {/* End Employee Cards ***********************************************/}

        </main>
      </>
    );
  }
}
