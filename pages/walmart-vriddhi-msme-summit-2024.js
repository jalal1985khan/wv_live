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
import News from '../utils/fetchNews'
import Banner from '../components/msmeSubmit/Banner'
import Submit from '../components/msmeSubmit/Summit2024'
import SubmitHight from '../components/msmeSubmit/SummitHighlights'
import Flipkart from '../components/msmeSubmit/InteractiveFlipkart'
import Gallery from '../components/msmeSubmit/MsmeGallery'
import Register from '../components/msmeSubmit/Register'
function Summit() {
  return (
    <>
          <Header />
          <Banner />
          <Brand />
          <Submit />
          <SubmitHight />
          <Flipkart/>
          <Gallery />
          <Register/>
          <Footer />
    </>
  )
}

export default Summit
