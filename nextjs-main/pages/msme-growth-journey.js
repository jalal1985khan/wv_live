import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Header from '../components/Header';
import Brand from '../components/BrandLogo';
import Footer from '../components/Footer';
import { Card, Col, Row, Image} from 'react-bootstrap';





const Webinars = () => {


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
            <Header />
           
            <Image
                src="/images/msme_banner.jpeg"
                width="100%"
                height="620"
                background='no-repeat'
                background-size='cover'
                className="banner-img"
                
            />
            <Brand />
            <Container fluid className="wbg-main p-0 overflow-hidden">
                <Container className="text-center">
                    <p className="fs-1 bogle-medium text-white" >MSME Growth Journey</p>
                    <Image src="/images/line-svg-png-1.png" width={100} height={20} alt="Industry Connect Series" />
                    <p className="fs-3 text-white">The Walmart Vriddhi program helps you address your business challenges and pursue your aspirations, wherever you are in your business growth journey. It aims to equip MSMEs to ‘Make-in-India’ as well as enable their offline and online growth by becoming part of local and global supply chains.</p>
                </Container>
                <Container>
                    <div className="tabs">
                        <div className="tab-item active" >
                            <Image src="/images/learning_ico.svg" alt="msme training Program online" className="img" />
                            <span className="eael-tab-title">Learning</span>
                        </div>
                        <div className="tab-item">
                            <Image src="/images/mentoring_ico.svg" alt="msme training Program online" className="img" />
                            <span className="eael-tab-title">Personalized Mentoring</span>
                        </div>
                        <div className="tab-item">
                            <Image src="/images/market_ico.svg" alt="msme training Program online" className="img" />
                            <span className="eael-tab-title">Market Connect</span>
                        </div>

                        <div className="line"></div>
                    </div>
                </Container>

                <Container fluid className='wbg-white overflow-hidden'>
                    <div className="tab-content">
                        <div className="tab-pane active"  >
                            <Row className='w-center'>
                                <Container>
                                    <p className="fs-1 bogle-medium walmart-default mt-4" >Learning</p>
                                    <Image src="/images/line-svg-png-1.png" width={100} height={20} alt="Industry Connect Series" />
                                    <p className="fs-4">The Walmart Vriddhi learning program equips you with tailored support to help you unlock your growth potential. It provides you with interactive virtual learning experiences through the mobile app available on iOS and Android, in English, Hindi and Tamil.</p>
                                    <div className="banner-ribbon arrow-bottom fs-3 bogle-medium mt-5">Business Fundamentals</div>
                                    <p className="fs-4">The program helps you gain a foundational understanding of business management, with a special focus on the global shift towards eCommerce. Frameworks and established theories will guide you on how to modernise and expand your businesses.</p>

                                    <Row className="d-flex align-items-center px-2">
                                        <Col sm={4} className=" fs-4 b-box-3" >Channel-Based Costing</Col>
                                        <Col sm={4} className="fs-4 b-box-3">Introduction to Supply Chain</Col>
                                        <Col sm={4} className="fs-4 b-box-3">Pitch and Customer Value Proposition</Col>
                                    </Row>
                                    <Row className="d-flex align-items-center px-2">
                                        <Col sm={4} className="fs-4 b-box-3">Digital Enablement</Col>
                                        <Col sm={4} className="fs-4 b-box-3">MSME Response to Covid-19</Col>
                                        <Col sm={4} className="fs-4 b-box-3">Raising Capital and Leveraging Support</Col>
                                    </Row>
                                    <Row className="d-flex align-items-center px-2">
                                        <Col sm={4} className="fs-4 b-box-3">Innovation</Col>
                                        <Col sm={4} className="fs-4 b-box-3">Trade Promotions and Visual Merchandising</Col>
                                        <Col sm={4} className="fs-4 b-box-3">Workforce Motivation</Col>
                                    </Row>
                                    <Row className="d-flex align-items-center px-2">
                                        <Col sm={4} className="fs-4 b-box-3">Way Forward Strategy</Col>
                                        <Col sm={4} className="fs-4 b-box-3">Cost Competitiveness</Col>
                                        <Col sm={4} className="fs-4 b-box-3">Risk and Legal Responsible Sourcing</Col>
                                    </Row>
                                    <Row className="d-flex align-items-center px-1">
                                        <Col sm={6} className="fs-4 b-box-2">Marketing</Col>
                                        <Col sm={6} className="fs-4 b-box-2">Basics of Finance</Col>

                                    </Row>




                                    <div className="banner-ribbon arrow-bottom fs-3 bogle-medium mt-5">Advanced Business</div>
                                    <p className="fs-4">The program helps you apply advanced business management tools and strategies to your business. It offers relevant case studies to assist you gain real-life experience of MSMEs and get a deep understanding of markets, consumers, and digital transformation tools.</p>
                                    <Image
                                        src='/images/advanced_banner.jpeg'
                                        alt=''
                                        width='100%'
                                        className=""
                                     

                                    />

                                    <Row className="d-flex align-items-center">
                                        <Col sm={4} className=" fs-4 a-box-3" >Success Factors for B2B eCommerce</Col>
                                        <Col sm={4} className="fs-4 a-box-3">Supply Chain Management - Elements and Digitization</Col>
                                        <Col sm={4} className="fs-4 a-box-3">Market Intelligence</Col>
                                    </Row>
                                    <Row className="d-flex align-items-center">
                                        <Col sm={4} className="fs-4 a-box-3">Risk and Legal Responsible Sourcing</Col>
                                        <Col sm={4} className="fs-4 a-box-3">LEAN Manufacturing</Col>
                                        <Col sm={4} className="fs-4 a-box-3">Success Factors for B2C eCommerce</Col>
                                    </Row>
                                    <Row className="d-flex align-items-center">
                                        <Col sm={4} className="fs-4 a-box-3">Digital Enablement</Col>
                                        <Col sm={4} className="fs-4 a-box-3">Global Sourcing</Col>
                                        <Col sm={4} className="fs-4 a-box-3">Business Case</Col>
                                    </Row>
                                    <Row className="d-flex align-items-center">
                                        <Col sm={4} className="fs-4 a-box-3">Product Development</Col>
                                        <Col sm={4} className="fs-4 a-box-3">Advanced Marketing</Col>
                                        <Col sm={4} className="fs-4 a-box-3">Data-Based Performance Management</Col>
                                    </Row>
                                    <Row className="d-flex align-items-center">
                                        <Col sm={4} className="fs-4 a-box-3">Demand Forecasting</Col>
                                        <Col sm={4} className="fs-4 a-box-3">Procurement</Col>
                                        <Col sm={4} className="fs-4 a-box-3">Managing your Finances</Col>
                                    </Row>
                                    <Row className="d-flex align-items-center">
                                        <Col sm={6} className="fs-4 a-box-2">Advanced Financing</Col>
                                        <Col sm={6} className="fs-4 a-box-2">Women in Business</Col>

                                    </Row>

                                </Container>





                            </Row>
                        </div>
                        {/* 2nd tab starts here  */}
                        <div className="tab-pane" >
                            <Row className='w-center'>
                                <Container>
                                    <p className="fs-1 bogle-medium walmart-default mt-4" >Personalized Mentoring</p>
                                    <Image src="/images/line-svg-png-1.png" width={100} height={20} alt="Industry Connect Series" />
                                    <p className="fs-4">One-to-one mentoring support to help you handle business challenges and make the most of opportunities.</p>
                                    <p className="fs-4">Mentors act as strategy experts to guide Vriddhi entrepreneurs on their transformational journey to help them identify the key action points and take their business forward to the next level.</p>

                                    <Row className="d-flex align-items-center">
                                        <Col sm={4}  >
                                            <div className="card-box">
                                                <Image
                                                    src='/images/opportunities.svg'
                                                    alt=''
                                                    width='90%'
                                                    className=""
                                                    

                                                />
                                                <p className="bogle-medium fs-5">Do a SWOT Analysis
                                                    (Strengths, weaknesses,
                                                    opportunities and threats)</p>
                                            </div>
                                        </Col>
                                        <Col sm={4} className="card-border" >
                                            <div className="card-box">
                                                <Image
                                                    src='../images/identify.svg'
                                                    alt=''
                                                    width='90%'
                                                    className=""
                                                 

                                                />
                                                <p className="bogle-medium fs-5">Identify areas of improvement</p>
                                            </div>
                                        </Col>
                                        <Col sm={4} className="card-border">
                                            <div className="card-box ">
                                                <Image
                                                    src='../images/actionable.svg'
                                                    alt=''
                                                    width='90%'
                                                    className=""
                                                    

                                                />
                                                <p className="bogle-medium fs-5">Create an actionable roadmap towards business growth</p>
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row className="d-flex align-items-center">
                                        <Col sm={4} className=" fs-5 p-box-4" ><p>Duration of Personalized Mentoring:</p><p className="bogle-medium walmart-default">6 months</p></Col>
                                        <Col sm={2} className="fs-5 p-box-4"><p>Number of sessions:</p><p className="bogle-medium walmart-default">6</p></Col>
                                        <Col sm={2} className="fs-5 p-box-4"><p>Duration of sessions:</p><p className="bogle-medium walmart-default">60-90 minutes</p></Col>
                                        <Col sm={4} className="fs-5 p-box-4"><p>Medium:</p><p className="bogle-medium walmart-default">Virtual meetings</p></Col>
                                    </Row>
                                    <p className="fs-3 bogle-medium walmart-default mt-4">Mentors: Average industry experience of 30 years</p>
                                    <Image
                                        src='../images/mentor_exp.png'
                                        alt=''
                                        width='90%'
                                        className=""
                                     

                                    />
                                    <Image
                                        src='../images/msme_growth_banner.png'
                                        alt=''
                                        width='100%'
                                        className="my-3"
                                     

                                    />

                                </Container>





                            </Row>
                        </div>

                        {/* third tab start here */}

                        <div className="tab-pane" >
                            <Row className='w-center'>
                                <Container>
                                    <p className="fs-1 bogle-medium walmart-default mt-4" >Market Connect</p>
                                    <Image src="/images/line-svg-png-1.png" width={100} height={20} alt="Industry Connect Series" />
                                    <p className="fs-4">Expand your business reach by capturing new markets and widening existing markets. Vriddhi offers you the opportunity to grow through the supply chains of Flipkart and Walmart and other major domestic and international companies.</p>
                                </Container>
                            </Row>
                            <Container className="wbg_grey" fluid>
                                <Row>
                                    <Container className='w-center'> <p className="fs-1 bogle-medium  mt-4" >Domestic</p>
                                        <Image src="/images/flipkart-1.png" width={180} height={70} alt="Industry Connect Series" />
                                        <p className="fs-4 mb-4 pb-4">As a Walmart Vriddhi-certified seller, you would be eligible for onboarding as well as incubation support to take your business digital on Flipkart.</p>


                                        <Container className="wbg-blue-m pb-4 mt-4">
                                            <div className="onboard fs-3 bogle-medium walmart-border-right walmart-border-left">Onboarding</div>
                                            <p className="fs-3 bogle-medium text-white py-4 pb-4">Get handholding support to register and start selling on Flipkart.</p>
                                            <Row className="d-flex align-items-center">
                                                <Col sm={2} className="fs-4 h-box-5">
                                                    <Image
                                                        src='/images/sign_up.png'
                                                        alt=''
                                                        width='65%'
                                                        className=""
                                                     

                                                    />
                                                    <p style={{ height: 107 }}>Sign up as a seller on Flipkart</p></Col>
                                                <Col sm={2} className="fs-4 h-box-5">
                                                    <Image
                                                        src='/images/gstin.png'
                                                        alt=''
                                                        width='65%'
                                                        className=""
                                                        effect="blur"

                                                    /><p style={{ height: 107 }}>Update GSTIN in Seller Dashboard</p></Col>
                                                <Col sm={2} className="fs-4 h-box-5">
                                                    <Image
                                                        src='../images/upload.png'
                                                        alt=''
                                                        width='65%'
                                                        className=""
                                                        effect="blur"

                                                    /><p style={{ height: 107 }}>Upload one listing on Flipkart</p></Col>
                                                <Col sm={2} className="fs-4 h-box-5">
                                                    <Image
                                                        src='/images/products.png'
                                                        alt=''
                                                        width='65%'
                                                        className=""
                                                        

                                                    /><p style={{ height: 107 }}>Select brand and vertical approval when listing products</p></Col>
                                                <Col sm={2} className="fs-4 h-box-5">
                                                    <Image
                                                        src='/images/new_orders.png'
                                                        alt=''
                                                        width='65%'
                                                        className=""
                                                        

                                                    /><p style={{ height: 107 }}>Process new orders</p></Col>
                                            </Row>
                                        </Container>


                                        <Container className="wbg-footer pb-4">
                                            <div className="onboard fs-3 bogle-medium walmart-border-right walmart-border-left">Incubation</div>
                                            <p className="fs-3 bogle-medium text-white py-4 pb-4">Get a dedicated account manager to help you manage your business efficiently and get maximum customers on Flipkart.</p>
                                            <Container>
                                                <Row className="d-flex align-items-center">
                                                    <Col sm={6} className="fs-4 s-box text-white border-box">
                                                        <p>Support to select the right products through knowledge of ‘Best Selling’ and ‘New and Trending’. </p></Col>

                                                    <Col sm={6} className="fs-4 s-box text-white border-box">
                                                        <p>Guidance on pricing the products based on available information.</p></Col>
                                                </Row>
                                                <Row className="d-flex align-items-center mt-4">

                                                    <Col sm={6} className="fs-4 s-box text-white border-box">
                                                        <p>Support to monitor business performance and connect with an Account Manager at least 4 times a week.</p></Col>
                                                    <Col sm={6} className="fs-4 s-box text-white border-box">
                                                        <p>Assistance with keyword selection and advertising services to increase visibility.</p></Col>
                                                </Row>
                                                <Row className="d-flex align-items-center mt-4">

                                                    <Col sm={6} className="fs-4 s-box text-white border-box">
                                                        <p>Help to improve business metrics and avail programs (Flipkart Fulfillment, Smart Fulfillment, Sunday Working and Express Working)</p></Col>
                                                    <Col sm={6} className="fs-4 s-box text-white border-box">
                                                        <p>Real-time notifications on Flipkart promotions so you don’t miss out on the best deals.</p></Col>
                                                </Row>
                                            </Container>
                                        </Container>


                                    </Container>


                                </Row>

                            </Container>

                            <Container fluid className="wbg-light">

                    <Container className="wbg-main mb-4 pb-4">
                        <p className="fs-3 bogle-medium text-white py-4 pb-4 w-center">Exports</p>
                        <Row>
                            
                            <Col>
                            
                                <Image
                                    src='/images/walmart_marketplace.png'
                                    alt=''
                                    width='75%'
                                    className="mx-4"
                                    

                                />
                                <Card className="rounded-0 wbg-market text-white box-arw" style={{ height: 250 }}>

                                    <Card.Body>
                                        <Card.Title className="fs-4 bogle-medium">Walmart Marketplace</Card.Title>
                                        
                                        <Card.Text className="fs-5">
                                            MSMEs like you, have the unique opportunity to reach over 120 million unique Walmart.com visitors each month. Outstanding ‘Make in India’ brands can expand their global networks, learn export best practices and diversify their product categories in concert with Walmart as they take on the world. The opportunity to easily access global consumers can be transformative for Indian sellers.
                                        </Card.Text>

                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col>
                            <Image
                                    src='/images/walmart_global_sourcing.png'
                                    alt=''
                                    width='75%'
                                    className="mx-4"
                                    

                                />
                                <Card className="rounded-0 wbg-global text-white box-arw" style={{ height: 250 }}>

                                    <Card.Body>
                                        <Card.Title className="fs-4 bogle-medium">Walmart Global Sourcing</Card.Title>
                                        <Card.Text className="fs-5">
                                            Learn how to qualify as a Walmart Global Sourcing supplier and take ‘Make in India’ products to the world as Walmart triples its exports from India to $10 billion annually by 2027.
                                        </Card.Text>

                                    </Card.Body>
                                </Card>
                            </Col>

                        </Row>
                    </Container>
                </Container>
                        </div>


                    </div>


                </Container>

                
            </Container>
            <Footer />
        </div>
    )
}

export default Webinars



