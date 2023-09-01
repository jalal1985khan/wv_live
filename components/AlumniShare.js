import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Image from 'next/image'

function AlumniShare() {
  return (
      <Container>
          <Row>
              <Col className="d-flex justify-content-end">              
<div class="card wbg-main border-0" style={{width:300}} >
                      <Image src="/images/light.svg" class="card-img-top" alt="..." width={70} height={70} />
  <div class="card-body">
    <a href="#" class="btn btn-primary">Join the Alumni Network</a>
  </div>
</div>
</Col>
<Col>
<div class="card wbg-main border-0" style={{width:300}}>
  <Image src="/images/users.svg" class="card-img-top" alt="..." width={70} height={70}/>
  <div class="card-body">
    <a href="#" class="btn btn-primary">Invite your friends</a>
  </div>
</div>
              
              </Col>

          </Row>

    </Container>
  )
}

export default AlumniShare
