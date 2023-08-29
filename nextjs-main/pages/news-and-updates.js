import React, { useEffect, useState } from "react";
import {Card, Button,Col, Row, Container, Image} from 'react-bootstrap';
import Link from 'next/link'
import Header from '../components/Header';
import Brand from '../components/BrandLogo';
import Footer from '../components/Footer';
import Moment from 'react-moment';
import configData from "../config.json";


const SuccessStories = ({heroBannerpost}) => { 
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
    url = `${configData.SERVER_URL}posts?_embed&categories[]=13&status[]=publish&per_page=${urlPage}`;

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
    setTotal(next.count)
//console.log(total)
//console.log(page)
if(page >= total){
setEnd(false);
console.log('im end')
}

setPage((oldPage ) => {
return oldPage + 3;
})
  };
  
  return (
   <div>
 <Header/>
 
 <Container fluid style={{padding:0}} className="overflow-hidden">
<Row>
{
heroBannerpost.map((post,index)=>{
return (
<>
<Image
      src={post['acf']['inside_banner']['url']}
      width="100%"
      height="620"
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


   </div>
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