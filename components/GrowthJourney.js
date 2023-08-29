import { Container, Row, Col, Card, Image, Carousel  } from 'react-bootstrap';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

function AutoLayoutExample() {
  return (
    <Container fluid className="wbg-gy  mt-4 pt-4 overflow-hidden">

      <Container className="text-center">
        <p className="fs-1 bogle-medium walmart-default" >Your growth journey with Walmart Vriddhi</p>
        <LazyLoadImage src="/images/line-svg-png-1.png" alt="walmart Vriddhi"/>
      </Container>
      <Container fluid className="p-0 d-none d-sm-block">
      <Row className="align-items-end">
        <Col className="col-sm px-0" >
          <Card className="border-0 rounded-0 wbg-gy">
            <LazyLoadImage
              src='/images/flipkart.png'
              alt="walmart Vriddhi Flipkart"
              
              className='p-4'
            />

            <Card.Body className="wbg-main text-white">
              <Card.Title>Grow domestically with<br />
                Flipkart incubation support</Card.Title>
            </Card.Body>
          </Card>

        </Col>
        <Col className="col-sm px-0">
          <Card className="border-0 rounded-0 wbg-gy">
            <LazyLoadImage
              src='/images/advisory-support.png'
              alt="walmart Vriddhi advisory support"
              className='p-4'
            />
            <Card.Body className="wbg-main text-white g-box" >
              <Card.Title >Enterprise-specific<br />
                Personalized Mentoring support</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col className="col-md px-0">
          <Card className="border-0 rounded-0 wbg-gy">
            <LazyLoadImage
              src='../images/exports-with-Walmart.png'
              alt="walmart Vriddhi"
              className='p-4'
            />
            <Card.Body className="wbg-main text-white g-box-1">
              <Card.Title>Grow your exports<br />
                with Walmart</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      </Container>


<Container className="d-sm-none pb-4">

<Carousel

fade ={false}
controls={false}
indicators={false}
touch={true}
slide={true}
>
      <Carousel.Item>
      <Card className="border-0 rounded-0 wbg-gy">
            <LazyLoadImage
              src='/images/flipkart.png'
              alt="walmart Vriddhi Flipkart"
              className='p-4'
            />

            <Card.Body className="wbg-main text-white g-box">
              <Card.Title>Grow domestically with<br />
                Flipkart incubation support</Card.Title>
            </Card.Body>
          </Card>
      </Carousel.Item>
      <Carousel.Item>
      <Card className="border-0 rounded-0 wbg-gy">
            <LazyLoadImage
              src='/images/advisory-support.png'
              alt="walmart Vriddhi Support"
              className='p-4'
            />
            <Card.Body className="wbg-main text-white g-box" >
              <Card.Title >Enterprise-specific<br />
                Personalized Mentoring support</Card.Title>
            </Card.Body>
          </Card>
      </Carousel.Item>
      <Carousel.Item>
      <Card className="border-0 rounded-0 wbg-gy">
            <LazyLoadImage
              src='/images/exports-with-Walmart.png'
              alt="walmart Vriddhi"
              
              className='p-4'
            />
            <Card.Body className="wbg-main text-white g-box">
              <Card.Title>Grow your exports<br />
                with Walmart</Card.Title>
            </Card.Body>
          </Card>
      </Carousel.Item>
    </Carousel>

</Container>


    </Container>
  );
}

export default AutoLayoutExample;