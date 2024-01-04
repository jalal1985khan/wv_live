import React, { useEffect, useState } from 'react';
import { Container, Image } from 'react-bootstrap';
import { Card, Button, Col, Row, Modal } from 'react-bootstrap';
import { NextSeo } from 'next-seo';
import { useRouter } from 'next/navigation';
import Header from '../components/Header';
import Brand from '../components/BrandLogo';
import Footer from '../components/Footer';
import configData from "../config.json";


const ITEMS_PER_LOAD = 6; // Number of items to load initially and on "Load More"

const Webinars = ({ webinarvideo, spotlightvideo }) => {
  const router = useRouter();

  useEffect(() => {
    const $ = document.querySelector.bind(document);
    const $$ = document.querySelectorAll.bind(document);
    const tabs = $$(".tab-item");
    const panes = $$(".tab-pane");
    const tabActive = $(".tab-item.active");
    const line = $(".tabs .line");

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

  const [isOpen, setOpen] = useState(false);
  const handleClose = () => setProduct(false);
  const [currentProduct, setProduct] = useState(null);
  const [currentUrl, setUrl] = useState(null);
  const [currentTitle, setTitle] = useState(null);

  const [visibleWebinars, setVisibleWebinars] = useState([]);
  const [visibleSpotlights, setVisibleSpotlights] = useState([]);
  const [webinarsToShow, setWebinarsToShow] = useState(ITEMS_PER_LOAD);
  const [spotlightsToShow, setSpotlightsToShow] = useState(ITEMS_PER_LOAD);

  useEffect(() => {
    setVisibleWebinars(webinarvideo.slice(0, webinarsToShow));
    setVisibleSpotlights(spotlightvideo.slice(0, spotlightsToShow));
  }, [webinarsToShow, spotlightsToShow, webinarvideo, spotlightvideo]);

  const handleLoadMoreWebinars = () => {
    setWebinarsToShow((prev) => prev + ITEMS_PER_LOAD);
  };

  const handleLoadMoreSpotlights = () => {
    setSpotlightsToShow((prev) => prev + ITEMS_PER_LOAD);
  };

  return (
    <>
     <NextSeo
      title="MSME Business Training, Business Training Programs, Small Business Training Programs, Business Training Programs Online"
      description="Walmart Vriddhi is a supplier development program tailored to help MSMEs grow their business by expanding their domestic and international markets Know more about us here"
        canonical=''
        openGraph={{
          url: '',
          title: 'MSME Business Training, Business Training Programs, Small Business Training Programs, Business Training Programs Online',
          description: 'Walmart Vriddhi is a supplier development program tailored to help MSMEs grow their business by expanding their domestic and international markets Know more about us here',
          images: [
            {
              url:'/images/banner_webinar.jpeg',
              width: 800,
              height: 600,
              alt: 'Walmart Vridhi',
              type: 'image/jpeg',
            },
            {
              url:'/images/banner_webinar.jpeg',
              width: 900,
              height: 800,
              alt: 'Walmart Vridhi',
              type: 'image/jpeg',
            },
            { url: '/images/banner_webinar.jpeg' },
            { url: '/images/banner_webinar.jpeg' },
          ],
          siteName: "MSME Business Training, Business Training Programs, Small Business Training Programs, Business Training Programs Online",
        }}
        twitter={{
          handle: '@handle',
          site: '@site',
          cardType: 'summary_large_image',
        }}
    />
      <Header />
      <Image
        src="../images/banner_webinar.jpeg"
        width="100%"
        height="620"
        background="no-repeat"
        background-size="cover"
        className="banner-img"
      />
      <Brand />
      <Container fluid className="wbg-main p-0">
        <Container className="text-center">
          <p className="fs-2 bogle-medium text-white pt-3">Webinars</p>
          <Image src="/images/line-svg-png-1.png" width={100} height={20} alt="Industry Connect Series" />
          <p className="fs-3 text-white w-60">
            A collection of webinars that define the Walmart Vriddhi story through
            <br /> the MSME spotlight and industry connect series
          </p>
        </Container>
        <Container>
          <div className="tabs">
            <div className="tab-item active">
              <Image src="../images/settings.svg" alt="msme training Program online" className="img" />
              <span className="eael-tab-title walmart-default bogle-medium">Industry Connect Series</span>
            </div>
            <div className="tab-item">
              <Image src="../images/peoples.svg" alt="msme training Program online" className="img" />
              <span className="eael-tab-title walmart-default bogle-medium">MSME Spotlight Series</span>
            </div>

            <div className="line"></div>
          </div>
        </Container>

        <Container fluid className="wbg_grey">
          {/* Webinars tab */}
          <div className="tab-content">
            <div className="tab-pane active">
              <Row className="w-center">
                {visibleWebinars.map((web, index) => (
                  <Col md={4} className="py-3" key={index}>
                    { console.log(visibleWebinars)}
                    <Card className="webinar_post">
                      <Image
                        src={web['_embedded']['wp:featuredmedia'][0]['source_url']}
                        alt={web['title']['rendered']}
                        className="img-hover webimg"
                        onClick={() => {
                          setProduct(web.id);
                          setUrl(web.acf.video_url);
                          setTitle(web.title.rendered);
                        }}
                      />
                       <Card.Body>
                            <Card.Title className="fs-4 bogle-medium walmart-default pt-2" style={{ minHeight: 112 }} dangerouslySetInnerHTML={{ __html: web['title']['rendered'] }} />
                            <div dangerouslySetInnerHTML={{ __html: web['acf']['short_decription'] }} style={{ minHeight: 195 }} />
                            <div style={{ minHeight: 230 }}>
                              <Button variant="primary" className="pri-category mb-3" >{web['acf']['category']}</Button>
                              <h3 className="fs-5 bogle-medium mb-1 ">{web['acf']['expert_name']}</h3>
                              <h3 className="fs-6 mb-3 ">{web['acf']['expert_designation']}</h3>
                              <h3 className="fs-5 bogle-medium mb-1">{web['acf']['expert_name_copy']}</h3>
                              <h3 className="fs-6 mb-3">{web['acf']['expert_designation_copy']}</h3>
                            </div >
                          </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>

              {/* "Load More" button for webinars */}
              <Container className='text-center pb-5 mb-5'>
              {webinarvideo.length > webinarsToShow && (
                   <Button variant="primary" className="authors_btn fs-5" onClick={handleLoadMoreWebinars}>
                   Load more
                 </Button>
                )}
                </Container>
            </div>

            {/* Spotlights tab */}
            <div className="tab-pane">
              <Row className="w-center">
                {visibleSpotlights.map((spot, index) => (
                  <Col md={4} className="py-3" key={index}>
                    <Card className="webinar_post">
                      <Image
                        src={spot['_embedded']['wp:featuredmedia'][0]['source_url']}
                        alt={spot['title']['rendered']}
                        className="img-hover webimg"
                        onClick={() => {
                          setProduct(spot.id);
                          setUrl(spot.acf.video_url);
                          setTitle(spot.title.rendered);
                        }}
                      />
                        <Card.Body>
                            <Card.Title className="fs-3 bogle-medium walmart-default" style={{ minHeight: 110 }} dangerouslySetInnerHTML={{ __html: spot['title']['rendered'] }} />
                            <div dangerouslySetInnerHTML={{ __html: spot['acf']['short_decription'] }} style={{ minHeight: 180 }} />
                            <div style={{ minHeight: 190 }}>
                              <Button variant="primary" className="pri-category mb-3" >{spot['acf']['category']}</Button>
                              <h3 className="fs-5 bogle-medium mb-1">{spot['acf']['expert_name']}</h3>
                              <h3 className="fs-6 mb-3">{spot['acf']['expert_designation']}</h3>
                              <h3 className="fs-5 bogle-medium mb-1 ">{spot['acf']['expert_name_copy']}</h3>
                              <h3 className="fs-6 mb-3 ">{spot['acf']['expert_designation_copy']}</h3>
                            </div >
                          </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
              <Container className='text-center pb-5 mb-5'>
              {/* "Load More" button for spotlights */}
              {spotlightvideo.length > spotlightsToShow && (
                
                <Button variant="primary" className="authors_btn fs-5" onClick={handleLoadMoreSpotlights}>
                Load more
              </Button>
              )}</Container>
            </div>
          </div>
        </Container>
      </Container>
      <Footer />
    </>
  );
};

export default Webinars;


async function getWebinars() {
  const res = await fetch(`${configData.SERVER_URL}industry_connect?_embed&status=publish&production[]=77&per_page=100`)
  const json = await res.json()
  console.log(json)
  return json
}

async function getSpotlight() {
  const res = await fetch(`${configData.SERVER_URL}msme_spotlight?_embed&status=publish&production[]=77&per_page=100`)
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