import React, { useEffect, useState } from 'react';
import { Container , Image} from 'react-bootstrap';
import Header from '../components/Header';
import Brand from '../components/BrandLogo';
import Footer from '../components/Footer';
import { Card, Button, Col, Row, Modal } from 'react-bootstrap';
import configData from "../config.json";
import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';

const Webinars = ({ webinarvideo, spotlightvideo }) => {

  return (
  
    <>
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
})}
    
    </>


)



}
export default Webinars


async function getWebinars() {
  const res = await fetch(`${configData.SERVER_URL}industry_connect?_embed&status=publish`)
  const json = await res.json()
  return json
}


export async function getServerSideProps() {
  const webinarvideo = await getWebinars()

  return {
    props: {
      webinarvideo,
    },
  }
}