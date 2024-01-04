import React, { useEffect, useState } from "react";
import { Card, Button, Col, Row, Container, Image } from 'react-bootstrap';
import Link from 'next/link'
import Header from '../components/Header';
import Brand from '../components/BrandLogo';
import Footer from '../components/Footer';
import configData from "../config.json";
import { NextSeo } from 'next-seo';
import { usePathname } from 'next/navigation'
import { RotatingLines } from 'react-loader-spinner'



const title ="Business Owner Training, Business Owner Training Programs, Sell Products Online in India";
const desc ="The MSME spotlight and industry connect series is a collection of webinars that define Walmart Vriddhi’s MSME business training programs Learn more about these webinars here";
const banner ="/images/success_banner.jpeg";
const url = "https://www.walmartvriddhi.org/success-stories/";

const visiblePosts = '6';
const SuccessStories = ({ initialNewsPosts }) => {
  const pathname = usePathname();
  const [newsPosts, setNewsPosts] = useState(initialNewsPosts);
  const [visiblePosts, setVisiblePosts] = useState(6); // Initial number of posts to display


  const fetchNos = async () => {
    let cat = `${configData.SERVER_URL}categories/12`;

    try {
      const response = await fetch(cat);
      const cats = await response.json();
      //setTotal(cats.count); // Set total count here
      //setNext(cats);
      console.log(cats.count)
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const loadMorePosts = () => {
    setVisiblePosts( visiblePosts + 6); // Increase the number of posts to display on each click
  };

  return (
    <>
       <NextSeo
        title={title}
      description={desc}
        canonical={pathname}
        openGraph={{
          url: pathname,
          title: title,
          description: desc,
          images: [
            {
              url:banner,
              width: 800,
              height: 600,
              alt: 'Walmart Vridhi',
              type: 'image/jpeg',
            },
            {
              url:banner,
              width: 900,
              height: 800,
              alt: 'Walmart Vridhi',
              type: 'image/jpeg',
            },
            { url: banner },
            { url: banner },
          ],
          siteName: title,
        }}
        twitter={{
          handle: '@handle',
          site: '@site',
          cardType: 'summary_large_image',
        }}
    />
      <Header />
      <Image
        src={banner}
        width="100%"
        height="620"
        background='no-repeat'
        background-size='cover'
        className="banner-img"
        
      />
      <Brand />
      
      <Container className="text-center wbg-light-gy">
        <p className="fs-2 bogle-medium walmart-default pt-4" >MSME Success Stories</p>
        <Image src="/images/line-svg-png-1.png" width={100} height={20} alt="MSME Success Stories" />
        <p className="fs-3">We are proud to be part of business journeys that have turned into stories of inspiration and success. Take a look at some of our growth stories.</p>
      </Container>


      <Container className="wbg-light-gy">
        
        <Container>
          <Row className="pt-5">
            {newsPosts.slice(0, visiblePosts).map((post, index) => (
               <Col sm={6} className="p-3" key={post.id}>
               <Card className="story_post" >
                 <Image
                   src={post['_embedded']['wp:featuredmedia'][0]['source_url']}
                   alt={post['title']['rendered']}
                   width="100%"
                 />
                 <Card.Body>
                   <Button variant="primary" className="pri-category mb-3 bogle-medium">MSME SuperPower: {post['acf']['primary_category']}</Button>
                   <Card.Title className="fs-3 bogle-medium mb-4 story-title" dangerouslySetInnerHTML={{__html:post['title']['rendered']}}/>
                   <h3 dangerouslySetInnerHTML={{ __html: post['acf']['author_name'] }} className="fs-4 authors bogle-medium"></h3>
                   <h3 dangerouslySetInnerHTML={{ __html: post['acf']['author_designation'] }} className="fs-7 mb-3" style={{ minHeight: 50 }}></h3>
                   <div dangerouslySetInnerHTML={{ __html: post['excerpt']['rendered'] }} className="fs-5 mb-3 m-height" style={{ minHeight: 200 }}></div>
                   <Link key={index} href={`/success-story/${post['slug']}`}>
                     <Button variant="primary" className="authors_btn fs-5">Know more</Button>
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


async function getNews() {
  const res = await fetch(`${configData.SERVER_URL}posts?_embed&categories[]=12&&production[]=77&status[]=publish&per_page=${visiblePosts}`);
  const json = await res.json();
  return json;
}

export async function getServerSideProps() {
  
  const initialNewsPosts = await getNews();
  return {
    props: {
      initialNewsPosts,
    },
  };
}

