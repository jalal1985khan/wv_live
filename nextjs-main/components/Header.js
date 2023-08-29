import React, { useEffect, useState } from "react";
import { Card, Col, Row } from 'react-bootstrap';
import { Container, Button, Form, Nav, Navbar, Offcanvas, Image, InputGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "bootstrap/dist/css/bootstrap.min.css";
import Link from 'next/link'
import configData from "../config.json";
import useDebounce from "../components/useDebounce";

const SuccessStories = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(10);
  const [loading, setLoading] = useState(false);
  const [quey, setQuey] = useState(false);
  const [error, setError] = useState({});
  const [query, setQuery] = useState();
  const [end, setEnd] = useState(true);
  const API_ENDPOINT = `${configData.SERVER_URL}posts?_embed&search=`;

  const fetchMovies = async () => {
    setLoading(true);
    let url = "";
    const perPage = '&per_page=4';
    //console.log(urlPage)
    //url = query ? `${API_ENDPOINT}${urlPage}${urlQuery}` : "";
    url = query ? `${API_ENDPOINT}${query}${perPage}` : "";
    console.log(url);
    //url = `${configData.SERVER_URL}posts?_embed&categories[]=12&status[]=publish&per_page=${urlPage}`;

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

  
  const [val, setVal] = useState(query);
   const debouncedVal = useDebounce(val, 1000);

  useEffect(() => {
    if (debouncedVal) {
      setQuery(debouncedVal);
    }
  }, [debouncedVal]);

  useEffect(() => {
  fetchMovies();
  }, [query]);

  return (
    <div>

      {[false].map((expand) => (
        <Navbar key={expand} bg="light" expand={expand} className="mb-0 overflow-hidden">
          <Container fluid>
            <Link href="/">
              <Navbar.Brand >
                <Image
                  src='../images/Walmart-Vriddhi-logo.svg'
                  alt="walmart Vriddhi"
                  
                  className="logo-img"
                  
                />

              </Navbar.Brand>
            </Link>
            <Navbar className="ms-auto px-4 m-btn">
              <Nav className="me-auto">
                <Form className="px-4 m-tm-none"
                  onSubmit={(e) => e.preventDefault()}>
                  <InputGroup className="">
                    <Form.Control
                      type="text "
                      placeholder="Search...."
                      aria-label="Search...."
                      aria-describedby="basic-addon2"
                      className="search"
                      value={val}
                      onChange={(e) => setVal(e.target.value)}

                    />
                    <Button variant="outline-secondary" id="button-addon2" className="src-button">
                      <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
                    </Button>
                  </InputGroup>
                  {error.show && <div className="error">{error.msg}</div>}
                </Form>

                <Link href="/registration">
                  <Button className="register" > Register</Button>
                </Link>

              </Nav></Navbar>

            {/* Toggle busston start from here */}
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
              className="text-white"
            >
              <Offcanvas.Header closeButton >
              </Offcanvas.Header>
              <Offcanvas.Body className="fs-5 bogle-medium p-0">
                <Nav className="justify-content-end flex-grow-1">

                  <ul className="navbar-nav">

                    <li className="nav-item">
                      <Link href="/about-us" className="nav-link px-5 " aria-current="page" >About us</Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/msme-growth-journey" className="nav-link px-5 " aria-current="page" >MSME growth journey</Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/success-stories" className="nav-link px-5" aria-current="page" >Success Stories</Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/webinars" className="nav-link px-5" aria-current="page" >Webinars</Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/news-and-updates" className="nav-link px-5" aria-current="page" >News and Updates</Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/contact-us" className="nav-link px-5" aria-current="page" >Contact</Link>
                    </li>
                  </ul>

                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>

      ))}





      <Container className="search-box">

      {val && 

            <Row>

            {
  
              movies.map((post, index) => {
                // console.log(post);
                return (
                  <Link key={index} href={`/success-story/${post['slug']}`} className="search-text" target="_blank">
                    <Row className="py-3">
                      <Col sm={4}> <Image
                        src={post['_embedded']['wp:featuredmedia'][0]['source_url']}
                        alt={post['title']['rendered']}
                        
                        className="search-img"
                      /></Col>
                      <Col className="d-flex justify-content-center align-items-center"><h3 className="fs-5" dangerouslySetInnerHTML={{ __html: post['title']['rendered'] }} /></Col>
  
                    </Row></Link>
  
                )
  
  
              })}
          </Row>
            
            }
        
        
      </Container>






    </div>
  );
};

export default SuccessStories;