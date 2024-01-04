import React, { useEffect, useState } from "react";
import { Card, Button, Col, Row, Container } from 'react-bootstrap';
import Link from 'next/link';
import Image from 'next/image';
import Header from '../components/Header';
import Brand from '../components/BrandLogo';
import Footer from '../components/Footer';
import configData from "../config.json";
import { NextSeo } from 'next-seo';
import date from 'date-and-time';

const SuccessStories = ({ heroBannerpost, initialNewsPosts }) => {
  const [newsPosts, setNewsPosts] = useState(initialNewsPosts);
  const [visiblePosts, setVisiblePosts] = useState(6); // Initial number of posts to display

  const loadMorePosts = () => {
    setVisiblePosts((prev) => prev + 6); // Increase the number of posts to display on each click
  };

  return (
    <>
      <Header />
      <Container fluid style={{ padding: 0 }} className="overflow-hidden">
        <Row>
          {heroBannerpost.map((post, index) => {
            const Myimg = post['acf']['inside_banner']['url'];
            const Mytitle = post['title']['rendered'];

            return (
              <>
                <NextSeo
                  title={Mytitle}
                  description="News and updates  - Walmart Vriddhi Walmart and Flipkart have made a long-term commitment to transform India’s MSME ecosystem by empowering 50,000 MSMEs. We strive to play a catalytic role by supporting small businesses with growth opportunities to reach greater heights and new markets. Walmart Vriddhi is a supplier development program tailored to help MSMEs modernize"
                  canonical=''
                  openGraph={{
                    url: '',
                    title: 'News and updates  - Walmart Vriddhi',
                    description: 'News and updates  - Walmart Vriddhi Walmart and Flipkart have made a long-term commitment to transform India’s MSME ecosystem by empowering 50,000 MSMEs. We strive to play a catalytic role by supporting small businesses with growth opportunities to reach greater heights and new markets. Walmart Vriddhi is a supplier development program tailored to help MSMEs modernize',
                    images: [
                      {
                        url: Myimg,
                        width: 800,
                        height: 600,
                        alt: 'Walmart Vridhi',
                        type: 'image/jpeg',
                      },
                      {
                        url: Myimg,
                        width: 900,
                        height: 800,
                        alt: 'Walmart Vridhi',
                        type: 'image/jpeg',
                      },
                      { url: Myimg },
                      { url: Myimg },
                    ],
                    siteName: { Mytitle },
                  }}
                  twitter={{
                    handle: '@handle',
                    site: '@site',
                    cardType: 'summary_large_image',
                  }}
                />
                <Container fluid>
                  <Row className="d-flex flex-column">
                    <Col>
                      <Image
                        src={post['acf']['inside_banner']}
                        width="800"
                        height="300"
                        background='no-repeat'
                        background-size='cover'
                        alt={post['title']['rendered']}
                        className="banner-img d-flex align-items-end w-100"
                      />
                    </Col>
                    <Col>
                      <Container className="wbg-main px-4 news_b">
                        <Row>
                          <Col sm={8} lg={8} className="pt-3">
                            <p className="text-white fs-5 bogle-medium" dangerouslySetInnerHTML={{ __html: post['title']['rendered'] }} />
                            <p className="text-white">
                              {date.format(new Date(post.date), 'MMMM DD, YYYY')}
                            </p>
                          </Col>
                          <Col sm={3} lg={3} className="d-flex align-items-center">
                            <Link key={index} href={`${post['acf']['source_url']}`} target="_blank">
                              <Button className="news-btn">Know more</Button>
                            </Link>
                          </Col>
                        </Row>
                      </Container>
                    </Col>
                  </Row>
                </Container>
              </>
            );
          })}
        </Row>
      </Container>
      <Brand />

      <Container style={{ background: '#dee2e6' }} fluid>
        <Container>
          <Row className="pt-5">
            {newsPosts.slice(0, visiblePosts).map((post, index) => (
              <Col sm={4} className="p-3" key={index}>
                <Card className="news-card">
                  <Image
                    src={post['_embedded']['wp:featuredmedia'][0]['source_url']}
                    alt={post['title']['rendered']}
                    className="news-img"
                    width={600}
                    height={250}
                  />

                  <div className="ribbon-wrapper">
                    <div className="ribbon-edge-topleft"></div>
                  </div>

                  <Card.Body className=" new-card">
                    <h3 dangerouslySetInnerHTML={{ __html: post['acf']['source'] }} className="fs-6 authors bogle-medium"></h3>
                    <h3 className="fs-6 walmart-secondary bogle-medium">
                      {date.format(new Date(post.date), 'MMMM DD, YYYY')}
                    </h3>
                    <Card.Title className="fs-5 bogle-medium mb-4" style={{ minHeight: 80, height: 95 }} dangerouslySetInnerHTML={{ __html: post['title']['rendered'] }} />
                    <Link key={index} href={`${post['acf']['source_url']}`} target="_blank">
                      <Button variant="primary" className="news_btn fs-5">Read more</Button>
                    </Link>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
      
        </Container>

        <Container className='text-center pb-5 mb-5'>
              {/* "Load More" button for spotlights */}
              {visiblePosts < newsPosts.length && (
                
                <Button variant="primary" className="authors_btn fs-5" onClick={loadMorePosts}>
                Load more
              </Button>
              )}</Container>
      </Container>

      <Footer />
    </>
  );
};

export default SuccessStories;

// Your existing code for fetching banner post and news
// ...

export async function bannerPost() {
  const getPosts = await fetch(`${configData.SERVER_URL}posts?_embed&status[]=publish&categories[]=13&order=desc&per_page=1`);
  const data = await getPosts.json();
  return data;
}

async function getNews() {
  const res = await fetch(`${configData.SERVER_URL}posts?_embed&categories[]=13&status[]=publish&production[]=77&per_page=100`);
  const json = await res.json();
  return json;
}

export async function getServerSideProps() {
  const heroBannerpost = await bannerPost();
  const initialNewsPosts = await getNews();
  return {
    props: {
      heroBannerpost,
      initialNewsPosts,
    },
  };
}

