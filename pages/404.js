import React from 'react'
import Header from '../components/Header';
import Brand from '../components/BrandLogo';
import Footer from '../components/Footer';
import { Container, Row, Col } from 'react-bootstrap';
import Link from 'next/link'

function Error() {
  return (
    <div>
      <Header /> 
      <Container className='my-5'>
        <Row>
        <Col sm={12} lg={5} className='text-center'>
            <h1 className='bogle-bold walmart-default' style={{fontSize:'15em'}}>404</h1>
          <h2 className='walmart-primary fs-1'>Page not found!</h2>
          </Col>
          <Col sm={12} lg={7}>
            <h2 className='fs-1 bogle-medium walmart-default'>Accept our appologies!</h2>
            <p className='fs-3 mb-5'>The page you were looking for doesn't exists.You may have misstyped the address or the page may have moved.</p>
            <Link href="" className='error-btn fs-5 text-white '>Go to Home page</Link>
          </Col>
          

</Row>


      </Container>
<Footer/>      
    </div>
  )
}

export default Error
