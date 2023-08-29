import { Container, Row, Col } from 'react-bootstrap';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';


function ContainerFluidBreakpointExample() {

  return (
    <Container fluid className="mt-4">
      <Container>
      <Row>
        <Col className="text-center">
          <p className="fs-1 mfs-1 bogle-bold walmart-default">Grow your business with<br />
            the Walmart Vriddhi Learning Program</p>
          <LazyLoadImage
            src='/images/line-svg-png-1.png'
            alt=''
          />
          <p className="col-md-8 mx-auto text-center fs-4 ">Walmart Vriddhi is a supplier development program that aims to work with 50,000
            Micro, Small and Medium Enterprises (MSMEs) in India to expand their domestic
            capabilities and participate in the global economy.
            The program offers the opportunity to:</p>

        </Col>
      </Row>
      
      <Row>
        <Col className="text-center" xs={12} sm={4}>
          <p className="fs-2 bogle-medium walmart-default">DEVELOP</p>
          <p className="fs-5"> On-Demand Learning &<br />
            Personalized Mentoring for MSMEs</p>

        </Col>
        <Col className="text-center" xs={12} sm={4}>
          <p className="fs-2 bogle-medium walmart-secondary">CONNECT</p>
          <p className="fs-5">Market Access & Onboarding<br />
            Support with Flipkart Marketplace</p>

        </Col>
        <Col className="text-center" xs={12} sm={4}>
          <p className="fs-2 bogle-medium walmart-primary">GROW</p>
          <p className="fs-5">Train MSMEs to be Export-Ready<br />and Grow with Walmart</p>
        </Col>

      </Row>
      </Container>
    </Container>

  );
}

export default ContainerFluidBreakpointExample;