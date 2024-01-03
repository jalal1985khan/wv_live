import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Brand from '../components/BrandLogo';
import Footer from '../components/Footer';
import { Col, Container, Row, Image } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import configData from "../config.json";
import { NextSeo } from 'next-seo';
import { usePathname } from 'next/navigation';

const post = ({ data }) => {
  const pathname = usePathname();

  return (
    <div>
      <Header />
      <div className='grid grid-cols-3 gap-5 w-full g-0'>
        {data.map((post, index) => (
         <>
            <Container fluid className="g-0">
              <Row className="g-0">
                <Col style={{ background: '#306FC7' }} className="d-flex flex-column justify-content-center">
                  <div dangerouslySetInnerHTML={{ __html: post['title']['rendered'] }} className="text-white" />
                </Col>
                <Col>
                  <Image
                    src={post['_embedded']['wp:featuredmedia'][0]['source_url']}
                    alt={post['title']['rendered']}
                    width="100%"
                  />
                </Col>
              </Row>
            </Container>
            <Container className="pt-5">
              <div dangerouslySetInnerHTML={{ __html: post['content']['rendered'] }}/>
            </Container>
          </>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default post;

export async function getServerSideProps(context) {
  const { id } = context.params;
  const res = await fetch(`${configData.SERVER_URL}posts?_embed&slug=${id}`);
  const data = await res.json();
  return { props: { data } };
}