import React, { useEffect, useState } from 'react';
import { Card, Button, Col, Row, Container, Image } from 'react-bootstrap';
import Link from 'next/link'
import Header from '../components/Header';
import Brand from '../components/BrandLogo';
import Footer from '../components/Footer';
import configData from "../config.json";
import { NextSeo } from 'next-seo';
import Carousel from '../components/AlumniCarousel'
import Video from '../components/AlumniVideo'
import News from '../components/AlumniNew'
import Share from '../components/AlumniShare'
import { usePathname } from 'next/navigation'


const alumniProfiles = () => {
  const pathname = usePathname()
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(10);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({});
  const [next, setNext] = useState();
  const [total, setTotal] = useState();
  const [end, setEnd] = useState(true);

  const fetchMovies = async () => {
    setLoading(true);
    let url = "";
    const urlPage = `${page}`;
    //console.log(urlPage)
    //url = query ? `${API_ENDPOINT}${urlPage}${urlQuery}` : "";
    //url = `${configData.SERVER_URL}posts?_embed&categories[]=12&status[]=publish&per_page=${urlPage}`;
    url = `${configData.SERVER_URL}msme_speaks?_embed&status[]=publish&per_page=${urlPage}`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      //console.log(data);
      setMovies(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchNos = async () => {
    setLoading(true);
    let cat = "";
    cat = `${configData.SERVER_URL}categories/12`;

    try {
      const response = await fetch(cat);
      const cats = await response.json();
      //console.log(cats);
      setNext(cats);
      setLoading(false);

    } catch (error) {
      console.log(error);
    }
  };




  useEffect(() => {
    fetchMovies();
    fetchNos();
  }, [page], [next]);


  const loadMore = () => {
    setTotal(next.count)
    //console.log(total)
    const main = next.count;

    if (total == page) {
      setEnd(false);
    }

    setPage((oldPage) => {
      return oldPage + 2;
    })
  };

  return (
      <>
          <NextSeo
      title="Business Owner Training, Business Owner Training Programs, Sell Products Online in India"
      description="The MSME spotlight and industry connect series is a collection of webinars that define Walmart Vriddhi’s MSME business training programs Learn more about these webinars here"
        canonical={pathname}
        openGraph={{
          url: pathname,
          title: 'Business Owner Training, Business Owner Training Programs, Sell Products Online in India',
          description: 'The MSME spotlight and industry connect series is a collection of webinars that define Walmart Vriddhi’s MSME business training programs Learn more about these webinars here',
          images: [
            {
              url:'/images/success_banner.jpeg',
              width: 800,
              height: 600,
              alt: 'Walmart Vridhi',
              type: 'image/jpeg',
            },
            {
              url:'/images/success_banner.jpeg',
              width: 900,
              height: 800,
              alt: 'Walmart Vridhi',
              type: 'image/jpeg',
            },
            { url: '/images/success_banner.jpeg' },
            { url: '/images/success_banner.jpeg' },
          ],
          siteName: "Business Owner Training, Business Owner Training Programs, Sell Products Online in India",
        }}
        twitter={{
          handle: '@handle',
          site: '@site',
          cardType: 'summary_large_image',
        }}
          />
          <Header />
          <Image
        src="/images/success_banner.jpeg"
        width="100%"
        height="620"
        background='no-repeat'
        background-size='cover'
        
        className="banner-img"
        
      />
<Brand />
<Container className="text-center">
<p className="fs-1 bogle-medium walmart-default" >Walmart Vriddhi Alumni</p>
<Image src="/images/line-svg-png-1.png" width={100} height={20} alt="Walmart Vriddhi Alumni" />
<p className="fs-3">
Walmart Vriddhi supplier development program has assisted over 25,000 MSMEs in India to help them enhance their domestic capabilities and participate in the global economy.</p>
</Container>
          
<Container className="text-center wbg-main" fluid>
<Container>
<p className="fs-1 bogle-medium text-white" >Program Beneficiaries</p>
<Image src="/images/line-svg-png-1.png" width={100} height={20} alt="Walmart Vriddhi Alumni" />
<Carousel/>
</Container>
</Container>
<Container className="text-center">
<p className="fs-1 bogle-medium walmart-default" >MSME Speaks</p>
<Image src="/images/line-svg-png-1.png" width={100} height={20} alt="Walmart Vriddhi Alumni" />
<p className="fs-3">Hear from our graduates about their experience of the Walmart Vriddhi program and how it benefitted them.</p>
<Video/>
      </Container> 

<Container>
<Container className="text-center">
<p className="fs-1 bogle-medium walmart-default" >Alumni Achievements</p>
<Image src="/images/line-svg-png-1.png" width={100} height={20} alt="Walmart Vriddhi Alumni" />
<p className="fs-3">A collection of events that define the journey of Walmart Vriddhi graduates.</p>
</Container>        
<News/>
      </Container> 
<Container className="text-center wbg-main" fluid>
<p className="fs-1 bogle-medium text-white" >Alumni Corner</p>
<Image src="/images/line-svg-png-1.png" width={100} height={20} alt="Walmart Vriddhi Alumni" />
<Share/>
</Container>        

 <Footer/>     
      </>
  );
};

export default alumniProfiles;