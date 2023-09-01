import {Container, Row, Col, Card, Button} from 'react-bootstrap';
import Image from 'next/image'
import Header from '../components/Header';
import Brand from '../components/BrandLogo';
import Footer from '../components/Footer';
import "bootstrap/dist/css/bootstrap.min.css";
import { NextSeo } from 'next-seo';

function ContainerExample() {
  return (
    <>
       <NextSeo
      title="About us  - Walmart Vriddhi"
      description="About Walmart Vriddhi Walmart and Flipkart have made a long-term commitment to transform India’s MSME ecosystem by empowering 50,000 MSMEs. We strive to play a catalytic role by supporting small businesses with growth opportunities to reach greater heights and new markets. Walmart Vriddhi is a supplier development program tailored to help MSMEs modernize"
        canonical="https://www.walmartvriddhi.org/about-us/"
        openGraph={{
          url: 'https://www.url.ie/a',
          title: 'About us  - Walmart Vriddhi',
          description: 'About Walmart Vriddhi Walmart and Flipkart have made a long-term commitment to transform India’s MSME ecosystem by empowering 50,000 MSMEs. We strive to play a catalytic role by supporting small businesses with growth opportunities to reach greater heights and new markets. Walmart Vriddhi is a supplier development program tailored to help MSMEs modernize',
          images: [
            {
              url: '/images/banner_about.jpeg',
              width: 800,
              height: 600,
              alt: 'Walmart Vridhi',
              type: 'image/jpeg',
            },
            {
              url: '/images/banner_about.jpeg',
              width: 900,
              height: 800,
              alt: 'Walmart Vridhi',
              type: 'image/jpeg',
            },
            { url: '/images/banner_about.jpeg' },
            { url: '/images/banner_about.jpeg' },
          ],
          siteName: 'About us  - Walmart Vriddhi',
        }}
        twitter={{
          handle: '@handle',
          site: '@site',
          cardType: 'summary_large_image',
        }}
    />
    <Header/>
    <Image
      src="/images/banner_about.jpeg"
      width="800"
      height="620"
      background='no-repeat'
      background-size= 'cover'
      className="banner-img w-100 h-100"
      
    />
    <Brand/>
    <Container>
    <Row>
        <Col className="text-center">
        <p className="fs-1 bogle-bold walmart-default mt-4">About Walmart Vriddhi</p>
<Image
              src='/images/line-svg-png-1.png'
              alt=''
              width={100}
              height={25}
              className=""
                />
<p className="col-md-8 mx-auto text-center fs-4">Walmart and Flipkart have made a long-term commitment to transform India’s MSME ecosystem by empowering 50,000 MSMEs. We strive to play a catalytic role by supporting small businesses with growth opportunities to reach greater heights and new markets.

</p>

        </Col>
      </Row> 
    </Container>
    <Container className="wbg-main p-4">
    <Row>
        <Col className="text-center text-white">
<p className="col-md-8 mx-auto text-center fs-4">Walmart and Flipkart have made a long-term commitment to transform India’s MSME ecosystem by empowering 50,000 MSMEs. We strive to play a catalytic role by supporting small businesses with growth opportunities to reach greater heights and new markets.</p>

        </Col>
      </Row> 
<Row>
          <Col xs={12} lg={3}>
<Card className="rounded-0 border-0 card-logo mb-2">
      <Card.Body className="about-card-body">
        <Image
                  src="/images/flipkart-1.png"
                  alt=''
                  width={400}
                  height={400}
                  className="img-fluid"
         
                />
        <div className="card-hover text-white fs-5">The Flipkart Group is one of India’s digital commerce leaders and includes group companies like Flipkart, Flipkart Wholesale, and Myntra.</div>
      </Card.Body>
    </Card>
</Col>    
<Col xs={12} lg={3}>
<Card className="rounded-0 border-0 card-logo mb-2">
      <Card.Body className="about-card-body">
        
        <Image
                  src="/images/flipkart-wholesale.png"
                  alt=''
                  width={200}
                  height={200}
                  className="img-fluid"
         
                />
        <div className="card-hover text-white fs-5">Flipkart Wholesale is transforming the Kirana retail ecosystem in India by leveraging cutting-edge and locally developed technology.</div>
      </Card.Body>
    </Card>
</Col>
<Col xs={12} lg={3}>
<Card className="rounded-0 border-0 card-logo mb-2">
      <Card.Body className="about-card-body">
        
        <Image
                  src="/images/Walmart-global-sourcing.png"
                  alt=''
                  effect="blur"
                  width={200}
                  height={200}
                  className="img-fluid"
                />
        <div className="card-hover text-white fs-5">Walmart Global Sourcing has long been giving Indian manufacturers a way to sell their products, including apparel, homeware, jewelry, hardlines, and more, in overseas markets such as the U.S., Canada, Mexico, Central America, and the United Kingdom.
</div>
      </Card.Body>
    </Card>
</Col>
<Col xs={12} lg={3}>
<Card className="rounded-0 border-0 card-logo">
      <Card.Body className="about-card-body">
        
        <Image
                  src="/images/Walmart-Marketplace.png"
                  alt=''
                  width={200}
                  height={200}
                  className="img-fluid"
                  
                />
        <div className="card-hover text-white fs-5">Walmart Marketplace allows third-party sellers to list their items on Walmart’s website. MSMEs have the unique opportunity to reach over 100 million unique Walmart.com visitors each month.</div>
      </Card.Body>
    </Card>
</Col>
</Row>
</Container>
<Container className="pb-5">
<Row className="align-items-center about-section text-white fs-5"> 
<Col xs={12} sm={6}>
<Image
                  src="/images/white-logo-swasti.png"
                  alt=''
                  width={200}
              height={100}
              className="img-fluid"
                  
                />
<p>Swasti, a member of the Catalyst family, was founded in 2004. Swasti co-designs demonstrable and scalable solution models for businesses in partnership with communities on the ground and influences policies nationally and internationally. Swasti is helping communities, governments, and partners shape safe, secure, healthy and more prosperous lives across the world through various initiatives that reach over 400,000 people.
Over the past eight years, Walmart and Swasti have shared a meaningful partnership which now includes the Walmart Vriddhi program.</p>
<Button className="ab-button mb-4">Read more</Button>
</Col>
<Col className="p-0 d-flex justify-content-end">

<Image
                  src="/images/about-us.png"
                  alt=''
                  width={600}
                  height={600}
                  
                  className="ab-image m-tm-none img-fluid"
                />
</Col>
</Row>

</Container>

<Footer/>

    </>
  );
}

export default ContainerExample;