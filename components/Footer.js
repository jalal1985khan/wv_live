import { Container, Row, Col } from 'react-bootstrap';
import Link from 'next/link'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';



function Footer() {
    return (

        <>
            <Container fluid className="px-0">
                <Container className="wbg-main px-4" fluid>
                    <Row className="px-4">
                        <Col xs={2} className="px-4">
                            <LazyLoadImage
                                src='/images/footer_logo.png'
                                alt='walmart vriddhi'

                            />
                        </Col>
                        <Col xs={10}></Col>
                    </Row>
                </Container>

                <Container className="wbg-footer px-4" fluid>
                    <Row className="pt-4">
                        <Col sm={1}></Col>
                        <Col className="px-4 text-white" sm={3} xs={12}>
                            <p className="fs-2">SITEMAP</p>
                            <hr />
                            <ul className="fs-4 list-unstyled">
                                <li className="f-text"><Link href="/about-us">About us</Link></li>
                                <li className="f-text"><Link href="/msme-growth-journey">MSME growth journey</Link></li>
                                <li className="f-text"><Link href="/success-stories">Success Stories</Link></li>
                                <li className="f-text"><Link href="/webinars">Webinars</Link></li>
                                <li className="f-text"><Link href="/news-and-updates">News and updates</Link></li>
                                <li className="f-text"><Link href="/contact-us">Contact us</Link></li>
                            </ul>
                        </Col>
                        <Col className="px-4 text-white" sm={3} xs={12}>
                            <p className="fs-2 ">PRIVACY POLICY</p>
                            <hr />
                            <ul className="fs-4 list-unstyled">
                                <li className="f-text"><Link href="/privacy-policy">Privacy policy</Link></li>
                                <li className="f-text"><Link href="/terms-of-use">Terms of use </Link></li>
                            </ul>
                        </Col>
                        <Col className="px-4 text-white" sm={4}>
                            <p className="fs-2">CONTACT US</p>
                            <hr />
                            <ul className="fs-4 list-unstyled">
                                <li>For more information, contact us:</li>
                                <li>contactus@walmartvriddhi.org</li>
                                <li>+91 6361 056 533</li>
                            </ul>
                        </Col>
                        <Col sm={1}></Col>
                    </Row>
                    <Row>
                        <Col sm={1}></Col>
                        <Col className="text-white fs-5">
                            <hr />
                            <p>Copyright © {new Date().getFullYear()} | All rights reserved | walmartvriddhi.org</p>
                        </Col>
                        <Col sm={1}></Col>
                    </Row>
                </Container>
            </Container>
        </>


    );


}

export default Footer;