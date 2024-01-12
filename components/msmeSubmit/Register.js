import React from 'react'
import { Container, Col, Row, Image, Button } from "react-bootstrap";
import Link from 'next/link'

function Register() {
  return (
    <Container className='text-center mt-5 mb-3 pt-5 pb-5'>
    <Row>
        <Col>
        <Link href="https://forms.gle/1eZnYRz8qs1gxKST7" target='_blank' className='walmart-orange fs-5 bogle-medium text-white'>REGISTER NOW</Link>
        <p className='mt-5 fs-5'>Don’t miss out on this opportunity to connect, learn, and grow.<br/> Click ‘Register Now’ to be a part of this inspiring journey.</p>
        
        </Col>
    </Row>
      
    </Container>
  )
}

export default Register
