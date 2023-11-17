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
  const pathname = useRouter()

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
      <NextSeo
      title="MSME Business Training, Business Training Programs, Small Business Training Programs, Business Training Programs Online"
      description="Walmart Vriddhi is a supplier development program tailored to help MSMEs grow their business by expanding their domestic and international markets Know more about us here"
        canonical={pathname}
        openGraph={{
          url: pathname,
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
        background='no-repeat'
        background-size='cover'
        className="banner-img"
       
      />
      <Brand />
     
      <Footer />
    </div>
  )
}

export default Webinars

async function getWebinars() {
  const res = await fetch(`${configData.SERVER_URL}industry_connect?_embed&status=publish&production[]=78`)
  const json = await res.json()
  return json
}

async function getSpotlight() {
  const res = await fetch(`${configData.SERVER_URL}msme_spotlight?_embed&status=publish&production[]=78`)
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

