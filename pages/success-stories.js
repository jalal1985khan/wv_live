import React, { useEffect, useState,useCallback } from "react";
import { Card, Button, Col, Row, Container, Image } from 'react-bootstrap';
import Link from 'next/link'
import Header from '../components/Header';
import Brand from '../components/BrandLogo';
import Footer from '../components/Footer';
import configData from "../config.json";
import { NextSeo } from 'next-seo';
import { usePathname } from 'next/navigation'
import debounce from 'lodash.debounce';
import ClockLoader from "react-spinners/ClockLoader";

const SuccessStories = () => {
  const pathname = usePathname()
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(10);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({});
  const [next, setNext] = useState();
  const [total, setTotal] = useState(0);
  const [end, setEnd] = useState(false);
  
  const title = "Business Owner Training, Business Owner Training Programs, Sell Products Online in India";
  const desc = "The MSME spotlight and industry connect series is a collection of webinars that define Walmart Vriddhi’s MSME business training programs Learn more about these webinars here";
  const banner = '/images/success_banner.jpeg';
  const url = 'https://www.walmartvriddhi.org/success-stories/'; 
  
  const fetchMovies = async () => {
    setLoading(true); 
    let url = "";
    const urlPage = `${page}`;
    //url = `${configData.SERVER_URL}posts?_embed&categories[]=12&&production[]=78&status[]=publish&per_page=${urlPage}`; //Staging Enviroment
    url = `${configData.SERVER_URL}posts?_embed&categories[]=12&&production[]=78&status[]=publish&per_page=${urlPage}`; //Live Enviroment
    try {
      const response = await fetch(url);
      const data = await response.json();
      if (data.length === 0) {
        setLoading(false); 
      } else {
        setMovies(data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const debouncedFetchMovies = useCallback(debounce(fetchMovies, 500), [page]);
  const fetchNos = async () => {
    let cat = `${configData.SERVER_URL}categories/12`;

    try {
      const response = await fetch(cat);
      const cats = await response.json();
      setTotal(cats.count); // Set total count here
      setNext(cats);
      //console.log(cats.count)
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchMovies();
    fetchNos();
    debouncedFetchMovies();
  }, [page,debouncedFetchMovies]);

  
  const loadMore = () => {
   // console.log(page)
    if (page >= total) {
      //console.log("Reached end of posts");
      setEnd(true);
      return;
    }

    setPage((oldPage) => {
      //console.log("Updating page:", oldPage + 2);
      return oldPage + 4;
    });
  };

  return (
    <div>
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
        <p className="fs-1 bogle-medium walmart-default" >MSME Success Stories</p>
        <Image src="/images/line-svg-png-1.png" width={100} height={20} alt="MSME Success Stories" />
        <p className="fs-3">We are proud to be part of business journeys that have turned into stories of inspiration and success. Take a look at some of our growth stories.</p>
      </Container>
      <Container className="wbg-light-gy">
        <Row>

          {

            movies.map((post, index) => {
              //console.log(post);
              return (
<>
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
                      <h3 dangerouslySetInnerHTML={{ __html: post['acf']['author_designation'] }} className="fs-7 mb-3" style={{ minHeight: 25 }}></h3>
                      <div dangerouslySetInnerHTML={{ __html: post['excerpt']['rendered'] }} className="fs-5 mb-3 m-height" style={{ minHeight: 200 }}></div>
                      <Link key={index} href={`/success-story/${post['slug']}`}>
                        <Button variant="primary" className="authors_btn fs-5">Know more</Button>
                      </Link>
                    </Card.Body>
                  </Card>

                  </Col>
                  
                  </>
              )


            })}

        </Row>
      </Container>


      <section className="section text-center mb-3">
        
        <div className="loadmodediv">
          {end ? (
            <p>No more posts to load</p>
          ) : (
              
            <Button variant="primary" className="authors_btn fs-5" onClick={loadMore} disabled={loading ? false : true}>
               
            </Button>
            
            
          )}
        </div>
      </section>
      <Footer />


    </div>
  );
};

export default SuccessStories;