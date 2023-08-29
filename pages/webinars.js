import React, { useEffect, useState } from 'react';
import { Container , Image} from 'react-bootstrap';
import Header from '../components/Header';
import Brand from '../components/BrandLogo';
import Footer from '../components/Footer';
import { Card, Button, Col, Row, Modal } from 'react-bootstrap';
import configData from "../config.json";



const Webinars = ({ webinarvideo, spotlightvideo }) => {


  useEffect(() => {
    const $ = document.querySelector.bind(document);
    const $$ = document.querySelectorAll.bind(document);

    const tabs = $$(".tab-item");
    const panes = $$(".tab-pane");

    const tabActive = $(".tab-item.active");
    const line = $(".tabs .line");

    requestIdleCallback(function () {
      line.style.left = tabActive.offsetLeft + "px";
      line.style.width = tabActive.offsetWidth + "px";

    });

    tabs.forEach((tab, index) => {
      const pane = panes[index];

      tab.onclick = function () {
        $(".tab-item.active").classList.remove("active");
        $(".tab-pane.active").classList.remove("active");

        line.style.left = this.offsetLeft + "px";
        line.style.width = this.offsetWidth + "px";

        this.classList.add("active");
        pane.classList.add("active");
      };
    });

  }, []);


  const [isOpen, setOpen] = useState(false)
  const handleClose = () => setProduct(false);
  const [currentProduct, setProduct] = useState(null);
  const [currentUrl, setUrl] = useState(null);
  const [currentTitle, setTitle] = useState(null);


  return (
    <div>
      <Header />
     
      <Image
        src="../images/banner_webinar.jpeg"
        width="100%"
        height="620"
        background='no-repeat'
        background-size='cover'
        className="banner-img"
       
      />
      <Brand />
      <Container fluid className="wbg-main p-0">
        <Container className="text-center">
          <p className="fs-1 bogle-medium text-white" >Webinars</p>
          <Image src="/images/line-svg-png-1.png" width={100} height={20} alt="Industry Connect Series" />
          <p className="fs-3 text-white">A collection of webinars that define the Walmart Vriddhi story through the MSME spotlight and industry connect series</p>
        </Container>
        <Container>
          <div className="tabs">
            <div className="tab-item active" >
              <Image src="../images/settings.svg" alt="msme training Program online" className="img" />
              <span className="eael-tab-title">Industry Connect Series</span>
            </div>
            <div className="tab-item">
              <Image src="../images/peoples.svg" alt="msme training Program online" className="img" />
              <span className="eael-tab-title">MSME Spotlight Series</span>
            </div>

            <div className="line"></div>
          </div>
        </Container>

        <Container fluid className='wbg_grey'>
          <div className="tab-content">
            <div className="tab-pane active"  >
              <Row className='w-center'>
                <p className="fs-1 bogle-medium " >Webinars</p>
                <Modal show={currentProduct} onHide={handleClose}

                  closeTimeoutMS={300}
                  isOpen={Boolean(currentProduct)}
                  onRequestClose={() => setProduct(null)}
                  size="lg"
                >
                  <Modal.Header closeButton>
                    <Modal.Title dangerouslySetInnerHTML={{ __html: currentTitle }} />
                  </Modal.Header>
                  <Modal.Body><iframe width="100%" height="400" src={currentUrl} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe></Modal.Body>
                </Modal>

                {

                  webinarvideo.map((web, index) => {

                    return (

                      <Col md={4} className='  py-3' key={index}>

                        <Card className="webinar_post" >
                          <Image
                            src={web['_embedded']['wp:featuredmedia'][0]['source_url']}
                            alt={web['title']['rendered']}
                            className="img-hover webimg"
                            
                            onClick={() => {
                              setProduct(web.id)
                              setUrl(web.acf.video_url)
                              setTitle(web.title.rendered)
                            }}
                          />
                          <Card.Body>
                            <Card.Title className="fs-3 bogle-medium" style={{ height: 65 }} dangerouslySetInnerHTML={{ __html: web['title']['rendered'] }} />
                            <div dangerouslySetInnerHTML={{ __html: web['acf']['short_decription'] }} style={{ height: 180 }} />
                            <div style={{ height: 220 }}>
                              <Button variant="primary" className="pri-category mb-3" >{web['acf']['category']}</Button>
                              <h3 className="fs-5 bogle-medium mb-3">{web['acf']['expert_name']}</h3>
                              <h3 className="fs-6 mb-3">{web['acf']['expert_designation']}</h3>
                              <h3 className="fs-5 bogle-medium mb-3">{web['acf']['expert_name_copy']}</h3>
                              <h3 className="fs-6 mb-3">{web['acf']['expert_designation_copy']}</h3>
                            </div >
                          </Card.Body>
                        </Card>
                      </Col>
                    )


                  })}</Row>
            </div>
            {/* 2nd tab starts here  */}
            <div className="tab-pane" >
              <Row className='w-center'>
                <p className="fs-1 bogle-medium " >Webinars</p>
                <Modal show={currentProduct} onHide={handleClose}

                  closeTimeoutMS={300}
                  isOpen={Boolean(currentProduct)}
                  onRequestClose={() => setProduct(null)}
                  size="lg"
                >
                  <Modal.Header closeButton>
                    <Modal.Title dangerouslySetInnerHTML={{ __html: currentTitle }} />
                  </Modal.Header>
                  <Modal.Body><iframe width="100%" height="400" src={currentUrl} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe></Modal.Body>
                </Modal>

                {

                  spotlightvideo.map((spot, index) => {

                    return (

                      <Col md={4} className='py-3' key={index}>

                        <Card className="webinar_post" >
                          <Image
                            src={spot['_embedded']['wp:featuredmedia'][0]['source_url']}
                            alt={spot['title']['rendered']}
                            className="img-hover webimg"
                           
                            onClick={() => {
                              setProduct(spot.id)
                              setUrl(spot.acf.video_url)
                              setTitle(spot.title.rendered)
                            }}
                          />
                          <Card.Body>
                            <Card.Title className="fs-3 bogle-medium" style={{ height: 65 }} dangerouslySetInnerHTML={{ __html: spot['title']['rendered'] }} />
                            <div dangerouslySetInnerHTML={{ __html: spot['acf']['short_decription'] }} style={{ height: 180 }} />
                            <div style={{ height: 220 }}>
                              <Button variant="primary" className="pri-category mb-3" >{spot['acf']['category']}</Button>
                              <h3 className="fs-5 bogle-medium mb-3">{spot['acf']['expert_name']}</h3>
                              <h3 className="fs-6 mb-3">{spot['acf']['expert_designation']}</h3>
                              <h3 className="fs-5 bogle-medium mb-3">{spot['acf']['expert_name_copy']}</h3>
                              <h3 className="fs-6 mb-3">{spot['acf']['expert_designation_copy']}</h3>
                            </div >
                          </Card.Body>
                        </Card>
                      </Col>
                    )


                  })}
              </Row>
            </div>
          </div>


        </Container>


      </Container>
      <Footer />
    </div>
  )
}

export default Webinars

async function getWebinars() {
  const res = await fetch(`${configData.SERVER_URL}industry_connect?_embed&status=publish`)
  const json = await res.json()


  return json
}

async function getSpotlight() {
  const res = await fetch(`${configData.SERVER_URL}msme_spotlight?_embed&status=publish`)
  const json = await res.json()
  return json
}

export async function getServerSideProps() {
  const webinarvideo = await getWebinars()
  const spotlightvideo = await getSpotlight()

  return {
    props: {
      webinarvideo,
      spotlightvideo,
    },
  }
}

