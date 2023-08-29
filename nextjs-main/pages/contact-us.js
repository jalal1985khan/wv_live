import {Container, Row, Col,Card, Image} from 'react-bootstrap';
import Brand from '../components/BrandLogo';
import Header from '../components/Header';
import Footer from '../components/Footer';


function ContainerExample() {
  return (
    <>
    <Header/>
    
      <Image
      src="/images/contact_banner.jpeg"
      width="100%"
      height="620"
      background='no-repeat'
      background-size= 'cover'
      
      className="banner-img"
      
    />
    <Brand/>
    <Container>
    <Row>
        <Col className="text-center">
        <p className="fs-1 bogle-bold walmart-default mt-4">To learn more about the program and be part of our growth journey;</p>
        </Col>
      </Row> 

      <Row>
        <Col className="text-center">
        <Card className="align-items-center rounded-0 border-0 ">
        <Image
                  src='/images/call_us.png'
                  alt=''
         
                />
     
      <Card.Body>
        <Card.Title>call us on</Card.Title>
        <Card.Text className="bogle-bold fs-3">
        +91 6361 056 533
        </Card.Text>
      </Card.Body>
    </Card>
        </Col>
        <Col className="text-center">
        <Card className="align-items-center rounded-0 border-0 bogle-bold">
        <Image
                  src='/images/email_icon.png'
                  alt=''
         
                />
      <Card.Body>
        <Card.Title>email us at</Card.Title>
        <Card.Text className="bogle-bold fs-3">
        contactus@walmartvriddhi.org
        </Card.Text>
      </Card.Body>
    </Card>
        </Col>
      </Row> 
    </Container>
    <Footer/>




    </>
  );
}

export default ContainerExample;