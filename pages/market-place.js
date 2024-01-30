import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Container, Row, Col } from 'react-bootstrap'
import Image from 'next/image'
import Link from 'next/link'
function MarketPlace() {
  return (
      <>
          <Header />
          <Container class="market-banner"  fluid>
              <Row style={{height:'760px'}}>
                  <Col className='d-flex justify-content-center align-items-center order-sm-1 order-lg-0' sm={12} lg={6}><h1 className='text-white fs-1 bogle-medium'><span className='fs-1 bogle-medium walmart-primary'>#GrowKaro</span> with<br/>Walmart Marketplace</h1></Col>
                  <Col className='position-relative g-0 order-0 order-lg-1' sm={12} lg={6}>
                  
              </Col></Row>
          </Container>
          <Container className='w-80 p-5'>
              <h2 className='walmart-default fs-1 text-center bogle-medium'>Boost Your Business with Cross Border Trade</h2>
              <p className='fs-5 text-center mt-5'>Expand your business via Cross Border Trade (CBT) on Walmart Marketplace and reach new heights. Walmart Marketplace is a popular eCommerce platform that allows third-party sellers to list their products for sale on Walmart.com.</p>

          </Container>
          <Container className='wbg-blue-m p-4 rounded-5'>
              <h2 className='text-white fs-1 text-center bogle-medium mt-3'>What’s in it for the MSMEs?</h2>
              <Container className='p-5'>
                  <Row><Col>
                  
                  <div class="card border-0 wbg-blue-m">
                          <img src="/images/icon-1.svg" class="card-img-top" alt="" width={70} height={70} />
  <div class="card-body">
    <p class="card-text text-white fs-5 text-center">Walmart Marketplace enables third-party sellers to showcase their products on Walmart’s website, focusing on popular sectors such as home and kitchen, beauty, jewellery, apparel, leather accessories, and other emerging segments.</p>
  </div>
</div>
                  </Col><Col>
                  <div class="card border-0 wbg-blue-m">
  <img src="/images/icon-2.svg" class="card-img-top" alt="..." width={70} height={70}/>
  <div class="card-body">
    <p class="card-text fs-5 text-white text-center">Last year, over 20,000 sellers joined the Marketplace, and this year, Walmart aims to double that number while increasing its assortment from 170 million to 200 million items. To support this expansion, Walmart actively recruits overseas sellers from India, Asia, and Europe, although most sellers on the Marketplace are currently based in the U.S.</p>
  </div>
</div>
                      </Col></Row>
              </Container>
          </Container>

          <Container className='mt-5 w-70 p-5'>
              <h2 className='fs-1 walmart-default bogle-medium text-center'>What Does CBT Offer?</h2>
              <p className='fs-5 text-center mt-5'>Walmart’s marketplace offers a trusted partnership for MSMEs, facilitating their growth and providing the biggest opportunity for business expansion online. Acceptance into Walmart Marketplace is a strong endorsement of a seller’s quality and trustworthiness which will attract customers.</p>
</Container>

<Container style={{border:'3px solid #FCB525'}} className='rounded-5 p-5'>
              <h2 className='fs-1 text-center bogle-medium mb-5 pb-5'>Benefits</h2>              
              <Row className='wbg-blue-m rounded-4 pb-5'>
                  <Col sm={12} lg={4} className='mpt-5'>
              <div class="border-0 mt-n5">
                      <img src="/images/time-1.svg" class="card-img-top" alt="..." width={70} height={70} />
  <div class="card-body wbg-blue-m">
    <p class="card-text text-center text-white mt-4 fs-5">No standard fees</p>
  </div>
</div>
              </Col><Col sm={12} lg={4} className='mpt-5'>
              <div class="border-0 mt-n5">
  <img src="/images/time-2.svg" class="card-img-top" alt="..." width={70} height={70}/>
  <div class="card-body wbg-blue-m">
    <p class="card-text text-center text-white mt-4 fs-5">No SKU limitations to list<br/>your products</p>
  </div>
</div>
                  </Col><Col sm={12} lg={4} className='mpt-5'>
<div class="border-0 mt-n5">
  <img src="/images/time-3.svg" class="card-img-top" alt="..." width={70} height={70}/>
  <div class="card-body wbg-blue-m">
    <p class="card-text text-center text-white mt-4 fs-5">Reach over 100 million unique<br/> Walmart.com visitors each month</p>
  </div>
</div>
                  
                  </Col></Row>
                  <h2 className='fs-1 text-center bogle-medium mt-5 mb-5'>Unique Features</h2>
              <Row className='g-0'>
                  <Col className='b-end b-bottom p-4' lg={3}>
              <div class="">
                      <img src="/images/feature.svg" class="card-img-top" alt="..." width={70} height={70} />
  <div class="card-body">
    <p class="card-text text-center fs-5 mt-4">Financial & Foreign Exchange management</p>
  </div>
</div>
              
              </Col><Col className='b-end b-bottom p-4' lg={3}>
              <div class="">
  <img src="/images/feature-1.svg" class="card-img-top" alt="..." width={70} height={70}/>
  <div class="card-body">
    <p class="card-text text-center fs-5 mt-4">Legal requirements & compliance issues</p>
  </div>
</div>
                  </Col><Col className='b-end b-bottom p-4' lg={3}>
                  <div class="">
  <img src="/images/feature-2.svg" class="card-img-top" alt="..." width={70} height={70}/>
  <div class="card-body">
    <p class="card-text text-center fs-5 mt-4">Foreign Trade Policy & other promotional schemes</p>
  </div>
</div>
                  
                  </Col>
                  <Col className='p-4 b-bottom' lg={3}>
                  <div class="">
  <img src="/images/feature-3.svg" class="card-img-top" alt="..." width={70} height={70}/>
  <div class="card-body">
    <p class="card-text text-center fs-5 mt-4">Introduction to Customs & Cross Border Trade</p>
  </div>
</div>
                  
                  </Col>
                  <Col className='p-4 b-end m-bottom' lg={3}>
                  <div class="">
  <img src="/images/feature-4.svg" class="card-img-top" alt="..." width={70} height={70}/>
  <div class="card-body">
    <p class="card-text text-center fs-5 mt-4">Business ethics <br/>& culture</p>
  </div>
</div>
                  
                  </Col>

                  <Col className='p-4 b-end m-bottom' lg={3}>
                  <div class="">
  <img src="/images/feature-5.svg" class="card-img-top" alt="..." width={70} height={70}/>
  <div class="card-body">
    <p class="card-text text-center fs-5 mt-4">Packaging, logistics<br/>& distribution</p>
  </div>
</div>
                  
                  </Col>

                  <Col className='p-4 b-end m-bottom' lg={3}>
                  <div class="">
  <img src="/images/feature-6.svg" class="card-img-top" alt="..." width={70} height={70}/>
  <div class="card-body">
    <p class="card-text text-center fs-5 mt-4">Walmart Marketplace<br/>business growth levers</p>
  </div>
</div>
                  
                  </Col>

                  <Col className='p-4' lg={3}>
                  <div class="">
  <img src="/images/feature-7.svg" class="card-img-top" alt="..." width={70} height={70}/>
  <div class="card-body">
    <p class="card-text text-center fs-5 mt-4">Walmart Marketplace<br/>Onboarding & Seller Centre</p>
  </div>
</div>
                  </Col>
              </Row>
              <Container>
              <h2 className='fs-1 text-center bogle-medium mt-5 mb-5'>Eligibility</h2>
                  <Row className='g-0'>
                  <Col className='p-end'sm={12} lg={3} ><p className='fs-5 market-hover'>Import Export Code (IC)</p></Col>
                  <Col lg={1} sm={12} className='p-end'><p className='fs-5 market-hover'>GSTIN</p></Col>
                  <Col lg={1} sm={12} className='p-end'><p className='fs-5 market-hover'>PAN</p></Col>
                  <Col className='p-end' sm={12} lg={3}><p className='fs-5 market-hover'>Online (Marketplace) experience</p></Col>
                  <Col className=''sm={12} lg={3}><p className='fs-5 market-hover'>Export volume above $20K/ year</p></Col>
              </Row>
              </Container>

              <Container>
                  <h2 className='fs-1 text-center bogle-medium mt-5 mb-5'>Incubation Support</h2>
                  <Container className='wbg-blue-m p-3 rounded-4 w-80'>
                      <Row className='g-4 justify-content-center'>
                          <Col className='bm-end' lg={5}>                      
<div class="mb-3">
  <div class="row g-0">
    <div class="col-md-2">
      <img src="/images/support.svg" class="img-fluid rounded-start" alt="..."/>
    </div>
    <div class="col-md-10">
      <div class="card-body mx-3">
        <p class="card-text text-white pt-3 fs-5">Impactful advertising & marketing<br/> campaigns via Walmart Connect</p>
      </div>
    </div>
  </div>
</div>
                      </Col>
                          <Col lg={5} className='margin-l'>                      
<div class="mb-3">
  <div class="row g-0">
    <div class="col-md-2">
      <img src="/images/support-1.svg" class="img-fluid rounded-start" alt="..."/>
    </div>
    <div class="col-md-10">
      <div class="card-body mx-3">
        <p class="card-text text-white pt-3 fs-5">Insights on U.S. customers, global supply<br/> chain best practices & business strategies</p>
      </div>
    </div>
  </div>
</div>
                      </Col>                      
                      
                      </Row>


                  </Container>
              </Container>              

</Container>
<Container className='my-5'>
<Container className=' text-center mw-70'>
<p className='fs-5 wbg-green p-4 text-white'>For more information, or to register, reach us at: <Link className='bogle-medium text-white text-decoration-none' href="tel:+916361056533">+91 6361 056 533</Link></p>           
</Container>
</Container>
<Container fluid className='wbg_grey p-4'>
              <p className='fs-6'><b className='bogle-medium'>Disclaimer:</b> Completion of these modules does not assure onboarding to Walmart.com. Walmart Marketplace team will reach out to you if your products align with market demand, providing onboarding and incubation support to assist potential sellers.</p>
</Container>
          <Footer />
              
      
    </>
  )
}

export default MarketPlace