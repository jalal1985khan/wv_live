import React, { useEffect, useState} from 'react'
import Header from '../../components/Header';
import Brand from '../../components/BrandLogo';
import Footer from '../../components/Footer';
import {Col,Container, Row, Button} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import configData from "../../config.json";
import { NextSeo } from 'next-seo';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import {
    TelegramShareButton,
    TelegramIcon,
    FacebookShareButton,
    FacebookIcon,
    WhatsappShareButton,
    WhatsappIcon,
} from 'next-share'
import { TbShare } from "react-icons/tb";  

const post = ({ data }) => {
  const pathname = usePathname()
  //console.log(data);
  return (
    <div>
          <Header />   

<div className='grid grid-cols-3 gap-5 w-full'>
{
          data.map((post) => {
return (
  <>
    <NextSeo
      title={post['title']['rendered']}
      description=''
      canonical={pathname}
      openGraph={{
        url: pathname,
        title: post['title']['rendered'],
        description: '',
        images: [
          {
            url: post['_embedded']['wp:featuredmedia'][0]['source_url'],
            width: 800,
            height: 600,
            alt: '',
            type: 'image/jpeg',
          },
          {
            url: post['_embedded']['wp:featuredmedia'][0]['source_url'],
            width: 900,
            height: 800,
            alt: '',
            type: 'image/jpeg',
          },
          { url: post['_embedded']['wp:featuredmedia'][0]['source_url'] },
          { url: post['_embedded']['wp:featuredmedia'][0]['source_url'] },
        ],
        siteName: 'SiteName',
      }}
      twitter={{
        handle: '@handle',
        site: '@site',
        cardType: 'summary_large_image',
      }}
    />
<Container fluid className="wbg-main yellow-border">
<Container>
                <Row>
                    <Col>
                <div className="row g-0">
                  <div className="col-md-3 p-2">
                    <Image
                      src={post['_embedded']['wp:featuredmedia'][0]['source_url']}
                      className="profile-img img-fluid rounded-start"
                      alt="..."
                      width={100}
                      height={100}
                                />
                    </div>
                    <div className="col-md-9 profile-stat">
                    <div className="card-body text-white">
                      <h4 className="profile-title fw-bold">{post['title']['rendered']}</h4>
                      <p className="card-text fs-5">{post['acf']['company_name_&_place']}</p>
                    </div>
                  </div>
                    </div>
                    
                    </Col>
                    <Col className="d-flex align-items-center justify-content-end text-white fs-5">
       
<div className="p-share">
Share Profile <TbShare className="s-share" />
<Row className="share" style={{'display':'none'}}>
<Col>
<FacebookShareButton
  url={`https://walmartvriddhi.org${pathname}`}
  quote={'Join the alumni network'}
  hashtag={'#walmartvriddhialumni'}>
  <FacebookIcon size={32} round />
</FacebookShareButton>
</Col>
<Col>
<TelegramShareButton
  url={`https://walmartvriddhi.org${pathname}`}
  title={'Join the alumni network'}>
  <TelegramIcon size={32} round />
</TelegramShareButton>
</Col>
<Col>
<WhatsappShareButton
  url={`https://walmartvriddhi.org${pathname}`}
  title={'Join the alumni network'}
  separator=":: "
>
  <WhatsappIcon size={32} round />
</WhatsappShareButton>
</Col>
</Row>                             

</div>
                    </Col>
</Row>                
</Container>
</Container>
<Container>
<Container>
                <p className="fs-3 fw-bold mt-4">Business Category: {post['acf']['business_category']}</p>
                <p dangerouslySetInnerHTML={{ __html: post['acf']['description_2'] }} className="fs-4"></p>
            </Container>
            <hr />
            <Container>
                <h4 className="fs-3 fw-bold mb-4">Gallery</h4>
                <Row>
                    <Col><Image src={post['acf']['gallery'][0]['full_image_url']} width={400} height={300} /></Col>
                    <Col><Image src={post['acf']['gallery'][1]['full_image_url']} width={400} height={300} /></Col>
                    <Col><Image src={post['acf']['gallery'][2]['full_image_url']} width={400} height={300} /></Col>
                </Row>
            </Container>
            <hr />
            <Container className="mb-5 mt-5">
                <Link className="profile-btn" href="/alumni-profiles">Go Back </Link>
                <Link className="profile-btn mx-5" href={post['acf']['visit_the_website']} target="_blank">Vist the webiste</Link>
            </Container>
</Container>
<Footer/>
</>
)

})}

</div>
</div>
  )
  
}

export default post

export async function getServerSideProps(context){
  const {id} = context.params;
  const res = await fetch(`${configData.SERVER_URL}walmart_graduates?_embed&slug=${id}`);
  const data = await res.json();
  console.log(data)
    return {props:{data}}

    }