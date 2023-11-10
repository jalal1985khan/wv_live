import React, { useEffect, useState } from "react";
import { Card, Col, Row } from 'react-bootstrap';
import { Container, Button, Form, Nav, Navbar, InputGroup } from 'react-bootstrap';
import Image from 'next/image'
import "bootstrap/dist/css/bootstrap.min.css";
import Link from 'next/link'
import configData from "../config.json";
import useDebounce from "../components/useDebounce";

const SuccessStories = () => {
  const [movies, setMovies] = useState([]);
  const [profile, setProfile] = useState([]);
  const [cities, setCities]= useState([]);
  const [page, setPage] = useState(10);
  const [loading, setLoading] = useState(false);
  const [quey, setQuey] = useState(false);
  const [error, setError] = useState({});
  const [query, setQuery] = useState();
  const [end, setEnd] = useState(true);
  const API_ENDPOINT = `${configData.SERVER_URL}walmart_graduates?_embed&categories[]=27&search=`;

  const fetchMovies = async () => {
    //setLoading(true);
    let url = "";
    //const perPage = '&per_page=4';
    //console.log(urlPage)
    //url = query ? `${API_ENDPOINT}${urlPage}${urlQuery}` : "";
    url = query ? `${API_ENDPOINT}${query}${perPage}` : "";
    //console.log(url);
    //url = `${configData.SERVER_URL}posts?_embed&categories[]=12&status[]=publish&per_page=${urlPage}`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      //console.log(data);
      setMovies(data);
      //setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  
    const [val, setVal] = useState(query);
    const [rest, setRest] = useState(false);
   const debouncedVal = useDebounce(val, 1000);

  useEffect(() => {
    if (debouncedVal) {
      setQuery(debouncedVal);
    }
  }, [debouncedVal]);

  useEffect(() => {
  fetchMovies();
  }, [query]);
    
    
    
  const fetchPosts = async () => {
    let url = "";
    const urlPage = `${page}`;
    url = `${configData.SERVER_URL}walmart_graduates?_embed&categories[]=27`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      //console.log(data);
      setProfile(data);
    } catch (error) {
      console.log(error);
    }
  };
    
  useEffect(() => {
    fetchPosts();

  }, []);
  
  const fetchCities = async () => {
    let url = "";
    
    url = `${configData.SERVER_URL}walmart_graduates?_embed&per_page=23`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      setCities(data);
    } catch (error) {
      console.log(error);
    }
  };
    
  useEffect(() => {
    fetchCities();

  }, []);
    

  return (
    <div>

      {[false].map((expand) => (
        
          <Container fluid className="mb-5">
              <Row>
                  <Col>
                  <Form className="px-4 m-tm-none"
                  onSubmit={(e) => e.preventDefault()}>             
           <select class="form-select" aria-label="Default select example">
           <option selected>Open this select menu</option>
           <option value="1">One</option>
           <option value="2">Two</option>
           <option value="3">Three</option>
            </select></Form>
                  </Col>
                  <Col>
                  <Form className="px-4 m-tm-none"
                  onSubmit={(e) => e.preventDefault()}>          
                          <select class="form-select" aria-label="Default select example"
                          onChange={(e) => setVal(e.target.value)}
                          >
                              {
                            cities.map((post, index) => {
                                      return (
                            <option value=''>
                                          {post['_embedded']['wp:term'][0][0]['name']}    
                                          </option>
                              )
                                  })
                              }
            </select></Form>
                  </Col>
                  <Col>
                  <Form className="px-4 m-tm-none"
                  onSubmit={(e) => e.preventDefault()}>
                  <InputGroup className="">
                    <Form.Control
                      type="text "
                      placeholder="Name...."
                      aria-label="Name...."
                      aria-describedby="basic-addon2"
                      className="search"
                      value={val}
                      onChange={(e) => setVal(e.target.value)}

                    />
                   
                  </InputGroup>
                  {error.show && <div className="error">{error.msg}</div>}
                </Form>
                  </Col>
            </Row>            
          </Container>
       

      ))}





<Container className="mb-51">
              {val ?
                  <Row>
                      {
                          movies.map((post, index) => {
                              return (
                                  <Col lg={4}>
            
                                      <div class="card mb-3 profile">
                                          <div class="row g-0">
                                              <div class="col-md-4">
                                                  <Image src={post['_embedded']['wp:featuredmedia'][0]['source_url']}
                                                      class="profile-img img-fluid rounded-start"
                                                      alt="..."
                                                      width={150}
                                                      height={150} />
                                                  <Container className="mt-3 info">
                                                      <p className="fw-bold text-white fs-6">{post['acf']['business_category']}</p>
                                                      <a href="#" class="btn know">Know More</a>
                                                  </Container>
                                              </div>
                                              <div class="col-md-8">
                                                  <div class="card-body">
                                                      <h4 class="profile-title fw-bold">{post['title']['rendered']}</h4>
                                                      <p class="card-text fs-4">{post['acf']['company_name_&_place']}</p>
                                                  </div>
                    
                                              </div>
                    
                                          </div>
                                      </div>

                                  </Col>


                              )
                  
                          })


                      }
                  </Row>
:            
<Row className="col-51">
{
                          profile.map((post, index) => {
                              return (
                                  <Col lg={4}>
         
                                      <div class="card mb-3 profile">
                                          <div class="row g-0">
                                              <div class="col-md-4">
                                                  <Image src={post['_embedded']['wp:featuredmedia'][0]['source_url']}
                                                      class="profile-img img-fluid rounded-start"
                                                      alt="..."
                                                      width={150}
                                                      height={150} />
                                                  <Container className="mt-3 info">
                                                      <p className="fw-bold text-white fs-6">{post['acf']['business_category']}</p>
                                                      <a href="#" class="btn know">Know More</a>
                                                  </Container>
                                              </div>
                                              <div class="col-md-8">
                                                  <div class="card-body">
                                                      <h4 class="profile-title fw-bold">{post['title']['rendered']}</h4>
                                                      <p class="card-text fs-4">{post['acf']['company_name_&_place']}</p>
                                                  </div>
                            
                                              </div>
                            
                                          </div>
                                      </div>
                                  </Col>
                
                              )
                          })
                      }
                      
                  </Row>
      }
      </Container>






    </div>
  );
};

export default SuccessStories;