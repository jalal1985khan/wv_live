import React, { useEffect, useState } from "react";
import {Card, Button,Col, Row, Container} from 'react-bootstrap';
import Link from 'next/link'
import Image from 'next/image'
import Header from '../components/Header';
import Brand from '../components/BrandLogo';
import Footer from '../components/Footer';
import Moment from 'react-moment';
import configData from "../config.json";
import { NextSeo } from 'next-seo';
import {useRouter} from 'next/router';


const SuccessStories = ({ heroBannerpost }) => { 
  const pathname = useRouter()
  const [posts, setMovies] = useState([]);
  const [page, setPage] = useState(12);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({});
  const [next, setNext] = useState();
  const [total, setTotal] = useState();
  const [end, setEnd] = useState(true);

  const fetchPosts = async () => {
    setLoading(true);
    let url = "";
    const urlPage = `${page}`;
    //console.log(urlPage)
    //url = query ? `${API_ENDPOINT}${urlPage}${urlQuery}` : "";
    url = `${configData.SERVER_URL}posts?_embed&categories[]=13&status[]=publish&production[]=78&per_page=${urlPage}`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      //console.log(data.length);
      setMovies(data);
      setLoading(false);

      console.log(total);
      if (data.length <= 8) {
        setEnd(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const fetchNos = async () => {
    setLoading(true);
    let cat = "";
    cat = `${configData.SERVER_URL}categories/13`;

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
    fetchPosts();
    fetchNos();
  }, [page],[next]);


const loadMore = () => {
    //console.log("Total:", total);
    //console.log("Next count:", next.count);
    setTotal(next.count);
  
    if (total >= next.count) {
      console.log("Reached end of posts");
      setEnd(false);
    }
  
    setPage((oldPage) => {
      //console.log("Updating page:", oldPage + 2);
      return oldPage + 2;
    });
  };
  
  return (
<>
 <Header/> 
 <Container fluid style={{padding:0}} className="overflow-hidden">
<Row>
{
              heroBannerpost.map((post, index) => {
  //            console.log(post);
              var Myimg = post['acf']['inside_banner']['url'];
              var Mytitle = post['title']['rendered'];

  return (
  <>
  <NextSeo
      title={Mytitle}
      description="News and updates  - Walmart Vriddhi Walmart and Flipkart have made a long-term commitment to transform India’s MSME ecosystem by empowering 50,000 MSMEs. We strive to play a catalytic role by supporting small businesses with growth opportunities to reach greater heights and new markets. Walmart Vriddhi is a supplier development program tailored to help MSMEs modernize"
        canonical={pathname}
        openGraph={{
          url: pathname,
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
          siteName: {Mytitle},
        }}
        twitter={{
          handle: '@handle',
          site: '@site',
          cardType: 'summary_large_image',
        }}
    />

<Image
      src={post['acf']['inside_banner']}
      width="800"
      height="300"
      background='no-repeat'
      background-size= 'cover'
      alt={post['title']['rendered']}
      className="banner-img d-flex align-items-end"
      
    /> 
    <Container className="wbg-main px-4" >
      <Row >
        <Col sm={8} className="pt-3">
        <p className="text-white fs-5 bogle-medium">{post['title']['rendered']}</p>
        <p><Moment className="datetime" aria-hidden={true}>{post.date}</Moment></p>
        </Col >
        <Col sm={3} className="d-flex align-items-center">
        <Link key={index} href={`${post['acf']['source_url']}`} target="_blank">
            <Button className="news-btn">Know more</Button></Link>
        </Col>
      </Row>  
    </Container>
    
</>
)


})}
</Row>
</Container>
<Brand/>
<Container>
<Row>

{
    
posts.map((post,index)=>{
   //console.log(post);
return (

<Col sm={4} className="p-3" key={index}>
<Card className="news-card" >
<Image
        src={post['_embedded']['wp:featuredmedia'][0]['source_url']}
        alt={post['title']['rendered']}
        className="news-img"
        width={600}
        height={250}
                  />
      <Card.Body>
      <h3 dangerouslySetInnerHTML={{__html:post['acf']['source']}} className="fs-6 authors bogle-medium"></h3>
      <h3 className="fs-6 authors"><Moment className="datetime" aria-hidden={true}>{post.date}</Moment></h3>
        <Card.Title className="fs-5 bogle-medium mb-4" style={{height:80}}>{post['title']['rendered']}</Card.Title>
        <Link key={index} href={`${post['acf']['source_url']}`} target="_blank">
        <Button variant="primary" className="authors_btn fs-5">Read more</Button>
            </Link>
      </Card.Body>
    </Card>
  
</Col>
)


})}
</Row>
</Container>


<section className="section text-center mb-3">
  {loading && <h2 className="loading">Loading...</h2>}
  <div className="loadmodediv">
    {end && 
  <Button variant="primary" className="authors_btn fs-5" onClick={loadMore}>
      Load More
    </Button>}
  </div>
</section>
<Footer/>


   </>
  );
};

export default SuccessStories;



export async function bannerPost(){
  const getPosts = await fetch(`${configData.SERVER_URL}posts?_embed&status[]=publish&categories[]=13&order=desc&per_page=1`);
  const data = await getPosts.json();
  return data
  }
  
      export async function getServerSideProps() {
          const heroBannerpost = await bannerPost();
          return {
            props: {
              heroBannerpost,
            },
          }
        } 