import React from 'react';
import {Button, Col, Container, Row, UncontrolledCarousel} from 'reactstrap';
import OurContracts from '../components/OurContracts';
import SolutionsDisplay from '../components/SolutionsDisplay';
import SvgSeparator from '../components/base/SvgSeparator';

// TODO replace images with 800 x 800
const carouselImages = [
  {
    src: require('../assets/img/networking.jpg'),
    altText: '',
    caption: '',
    header: ''
  },
  {
    src: require('../assets/img/teamwork.jpg'),
    altText: '',
    caption: '',
    header: ''
  }
];

/**
* Displays content pertaining to information about Anthem Engineering
*/
export default class AboutUs extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // sets the id for the contracts section and passes it to the component as a prop, so button can scroll to element
      contractsElementIdToScroll: 'contracts-section-id',
      solutionsElementIdToScroll: 'solutions-section-id'
    };
  }

  scrollToDownload = () => {
    document
        .getElementById(this.state.contractsElementIdToScroll)
        .scrollIntoView({behavior: 'smooth'});
  };

  render() {
    return (
      <>
        <section className='section section-shaped'>

          {/* Header Background Design *****************************************/}
          <div className='shape shape-style-1 shape-dark'>
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
          {/* End Header Background Design *************************************/}

          {/* Header ***********************************************************/}
          <Container className='py-md'>
            <Row className='justify-content-between align-items-center'>
              <Col className='mb-5 mb-lg-0' lg='6'>
                <h2 className='text-white font-weight-light'>
                  WE'RE <b>ANTHEM ENGINEERING</b>
                </h2>
                <p className='lead text-white mt-4'>
                  Anthem Engineering is a software, systems, and solutions company focused on rapidly developing
                  capabilities that make a difference. We believe that technology exists to serve the mission, not to
                  serve itself. We use the most advanced technology available to solve problems for our customers.
                </p>
                {/* TODO Create ref to scroll to page where contracts are */}
                <Button
                  className='btn-white mt-4'
                  color='default'
                  onClick={this.scrollToDownload}
                >
                  See New Contracts
                </Button>
              </Col>
              <Col className='mb-lg-auto' lg='6'>
                <div className='rounded shadow-lg overflow-hidden transform-perspective-right'>
                  <UncontrolledCarousel items={carouselImages} />
                </div>
              </Col>
            </Row>
          </Container>
          {/* End Header *******************************************************/}

          {/* SVG separator ****************************************************/}
          <SvgSeparator />
          {/* End SVG separator ************************************************/}

        </section>

        {/* Our Solutions ****************************************************/}
        <SolutionsDisplay sectionId={ this.state.solutionsElementIdToScroll } />
        {/* End Our Solutions ************************************************/}

        {/* New Contracts ****************************************************/}
        <OurContracts sectionId={ this.state.contractsElementIdToScroll } />
        {/* End New Contracts ************************************************/}
      </>
    );
  }
}
