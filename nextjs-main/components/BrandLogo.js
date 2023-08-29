import {Container, Row, Col, Image} from 'react-bootstrap';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
function AutoLayoutSizingExample() {
  return (
    <Container fluid className="bg-light mx-auto p-3 border-primary border-bottom border-4 overflow-hidden">
      <Row>
        
        <Col sm={3} xs={6}>
        <LazyLoadImage
                  src='../images/brand-flipkart.png'
                  alt=''
                  
                  className="rounded mx-auto d-block img-fluid"
                  
                />
       
        </Col>
        <Col className="m-tm-none" ></Col>
        <Col sm={3} xs={6}className='d-flex justify-content-end'>
        <LazyLoadImage
                  src='../images/brand-swasti.png'
                  alt=''
                  
                  className="rounded mx-auto d-block img-fluid"
                  
                />
            </Col>
      </Row>
    </Container>
  );
}

export default AutoLayoutSizingExample;