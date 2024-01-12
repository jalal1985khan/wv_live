import React, { useState, useEffect } from "react";
import { Container, Col, Row, Image } from "react-bootstrap";
import Link from 'next/link'
import { usePathname } from "next/navigation";

function Banner() {
  const pathname = usePathname()
  const [url, setUrl] = useState(true)
  
  useEffect(() => {
    if (pathname === '/walmart-vriddhi-msme-summit-2024') {
      setUrl(false);
    }
  }, [pathname]);


  return (
    <>
      <Container
        fluid
        className="text-center position-relative d-flex justify-content-center"
        style={{ 
          backgroundImage: `url("/images/Background.png")` ,height:'640px'
        }}
        
      >
        <Image
          src="images/top-corner-image.svg"
          alt="Top Corner Image"
          className="position-absolute top-0 end-0 img-banner z-index"
          
        />
        <Image
          src="images/bottom-corner-image.svg"
          alt="Bottom Corner Image" 
          className="position-absolute bottom-0 start-0 img-banner z-index"
        
        />
        <Row className="ravi d-flex justify-content-center align-items-center">
          <Col lg="6" className="d-flex align-items-end justify-content-center">
            <Row className="d-flex flex-column">
              <Col style={{ marginBottom: '33' }}>
                <h2 className="bogle-medium b-font text-white text-center">
              Celebrating today,<br/>building tomorrow
                </h2></Col>
  
              {url ? (
              <Col className="mt-5"><Link href="/walmart-vriddhi-msme-summit-2024" className="w-orange fs-5">Know more</Link></Col>

              ) :''}
              
            </Row>
          </Col>
          <Col lg="6"
            className="d-flex justify-content-center align-items-center"
          >
            <Image
              src="/images/msme.png"
              alt="msme Image"
              className="img-fluid h-100 z-index"
            />
          </Col>
        </Row>
      </Container>
     
    </>
  );
}

export default Banner;
