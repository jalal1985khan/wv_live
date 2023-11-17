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
    Test
    
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