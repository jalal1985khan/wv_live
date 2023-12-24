import { Container, Row, Col } from 'react-bootstrap';
import Link from 'next/link'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import CookieConsent from "react-cookie-consent";
import ScrollToTop from "react-scroll-to-top";
import { usePathname } from 'next/navigation'
import NewsLetter from './NewsLetter'
import Floating from '../components/FloatingMenu'

function Footer() {
    const pathname = usePathname()
    return (

        <>
            <Floating/>
            <NewsLetter/>
            <Container fluid className="px-0">
            <ScrollToTop smooth />
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
                                <li className="f-text"><Link href="/about-us" className={pathname == "/about-us" ? "activef" : ""}>About us</Link></li>
                                <li className="f-text"><Link href="/msme-growth-journey" className={pathname == "/msme-growth-journey" ? "activef" : ""}>MSME growth journey</Link></li>
                                <li className="f-text"><Link href="/success-stories" className={pathname == "/success-stories" ? "activef" : ""}>Success Stories</Link></li>
                                <li className="f-text"><Link href="/alumni-profiles" className={pathname == "/alumni-profiles" ? "activef" : ""}>Alumni Profiles</Link></li>
                                <li className="f-text"><Link href="/webinars" className={pathname == "/webinars" ? "activef" : ""}>Webinars</Link></li>
                                <li className="f-text"><Link href="/news-and-updates" className={pathname == "/news-and-updates" ? "activef" : ""}>News and updates</Link></li>
                                <li className="f-text"><Link href="/contact-us" className={pathname == "/contact-us" ? "activef" : ""}>Contact us</Link></li>
                            </ul>
                        </Col>
                        <Col className="px-4 text-white" sm={3} xs={12}>
                            <p className="fs-2 ">PRIVACY POLICY</p>
                            <hr />
                            <ul className="fs-4 list-unstyled">
                                <li className="f-text"><Link href="/privacy-policy" className={pathname == "/privacy-policy" ? "activef" : ""}>Privacy policy</Link></li>
                                <li className="f-text"><Link href="/terms-of-use" className={pathname == "/terms-of-use" ? "activef" : ""}>Terms of use </Link></li>
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
            <CookieConsent
      enableDeclineButton
      flipButtons
      location="bottom"
      buttonText="Accept All"
      declineButtonText="Decline"
      cookieName="YourCoockieName"
                style={{ background: '#ffff' , color:'black' }}
      buttonStyle={{
        color: 'black',
        fontSize: '15px',
      }}
      declineButtonStyle={{
        margin: '10px 10px 10px 0',
      }}
      expires={450}
    >
  We use cookies on our website to give you the most relevant experience by remembering your preferences and repeat visits. By clicking “Accept All”, you consent to the use of ALL the cookies. However, you may visit "Cookie Settings" to provide a controlled consent.
    </CookieConsent>
        </>


    );


}

export default Footer;