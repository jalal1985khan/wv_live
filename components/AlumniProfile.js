import React, { useEffect, useState } from "react";
import { Card, Col, Container, Form, InputGroup,  Row, Button } from "react-bootstrap";
import Image from "next/image";
import "bootstrap/dist/css/bootstrap.min.css";
import configData from "../config.json";
import useDebounce from "../components/useDebounce";
import Link from 'next/link';

const SuccessStories = () => {
  const [movies, setMovies] = useState([]);
  const [profile, setProfile] = useState([]);
  const [uniqueCities, setUniqueCities] = useState([]);
  const [uniqueIndustry, setUniqueIndustries] = useState([]);
  const [page, setPage] = useState(1);
  const [val, setVal] = useState("");
  const [acfSearch, setSelectedCategory] = useState("");
  const [acfIndustry, setselectedIndustry] = useState("");
  const [hideNext, setHideNext] = useState(false);
  const [showPre, setshowPre] = useState(false);
  

  const postsPerPage = '12';
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(12); // Add this line

  const API_ENDPOINT = `${configData.SERVER_URL}walmart_graduates?_embed&categories[]=27&search=`;

  const fetchMovies = async () => {
    let url = `${API_ENDPOINT}${val}&per_page=${postsPerPage}&page=${totalPages}`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      setMovies(data);
      //console.log(data.length)

    } catch (error) {
      console.log(error);
    }
  };

  const debouncedVal = useDebounce(val, 1000);

  useEffect(() => {
    if (debouncedVal) {
      fetchMovies();
    }
  }, [debouncedVal, page]);


  useEffect(() => {
    fetchCities();
    fetchPosts();
  }, [page]);

  const fetchPosts = async () => {
    let url = `${configData.SERVER_URL}walmart_graduates?_embed&categories[]=27&${acfSearch ? `&city=${acfSearch}` : ''}${acfIndustry ? `&industy=${acfIndustry}` : ''}&per_page=${postsPerPage}&page=${totalPages}`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      setProfile(data);
      if (postsPerPage > data.length) {
        console.log('less then');  
        setHideNext(true);
        setshowPre(false);
      }
      else {
        setHideNext(false);
      }
      if (totalPages === 1)
      {
        setshowPre(true);
      }
      

    } catch (error) {
      console.log(error);
    }
  };

  const fetchCities = async () => {
    let url = `${configData.SERVER_URL}walmart_graduates?_embed&per_page=23`;
    try {
      const response = await fetch(url);
      const data = await response.json();

      const uniqueCities = data.reduce((accumulator, post) => {
        const existingCity = accumulator.find((city) => city.name === post['_embedded']['wp:term'][0][0]['name']);
        if (!existingCity) {
          accumulator.push({
            name: post['_embedded']['wp:term'][0][0]['name'],
            id: post['city'][0],
          });
        }
        return accumulator;
      }, []);
  
      setUniqueCities(uniqueCities);
      


      // Extract unique industries

      const uniqueIndustry = data.reduce((accumulator, post) => {
        const existingIndustry = accumulator.find((industry) => industry.name === post['_embedded']['wp:term'][1][0]['name']);
        if (!existingIndustry) {
          accumulator.push({
            name: post['_embedded']['wp:term'][1][0]['name'],
            id: post['industy'][0],
          });
        }
        return accumulator;
      }, []);
      
      //console.log(uniqueIndustry); // Log the result to see if it contains the expected unique industries
      
      setUniqueIndustries(uniqueIndustry);
      
    } catch (error) {
      console.log(error);
    }
  };

  function handleClick(length) {
    setTotalPages(totalPages + 1);
    
  }

  function handlePrev(length) {
    setTotalPages(totalPages - 1);
    
  }

  const handleCategoryChange = (e) => {
    const selectedCategory = e.target.value;
    setSelectedCategory(selectedCategory);
  };

  const handleIndustryChange = (e) => {
    const selectedIndustry = e.target.value;
    setselectedIndustry(selectedIndustry);
  };

  useEffect(() => {
    fetchPosts();
  }, [acfSearch, acfIndustry, page,totalPages]);

 


  return (
    <div>
      <Container fluid className="mb-5">
      <Row>
          <Col>
            <Form className="px-4 m-tm-none">
              <select
                className="form-select"
                aria-label="Default select example"
                onChange={handleIndustryChange}
              >
                <option value="">All</option>
                {uniqueIndustry.map((industry, index) => (
  <option key={index} value={industry.id}>
    {industry.name}
    
  </option>
                ))}
              </select>
            </Form>
          </Col>
          <Col>
            <Form className="px-4 m-tm-none">
              <select
                className="form-select"
                aria-label="Default select example"
                onChange={handleCategoryChange}
              >
                <option value="">All</option>
                {uniqueCities.map((city, index) => (
  <option key={index} value={city.id}>
    {city.name}
  </option>
))}
              </select>
            </Form>
          </Col>
          <Col>
            <Form className="px-4 m-tm-none" onSubmit={(e) => e.preventDefault()}>
              <InputGroup className="">
                <Form.Control
                  type="text"
                  placeholder="Name...."
                  aria-label="Name...."
                  aria-describedby="basic-addon2"
                  className="search"
                  value={val}
                  onChange={(e) => setVal(e.target.value)}
                />
              </InputGroup>
            </Form>
          </Col>
        </Row>
      </Container>

      <Container className="mb-51">
        {val ? (
          <Row>
          {movies.map((post, index) => (
            <Col lg={4} key={index}>
              <div className="card mb-3 profile">
                <div className="row g-0">
                  <div className="col-md-4">
                    <Image
                      src={post['_embedded']['wp:featuredmedia'][0]['source_url']}
                      className="profile-img img-fluid rounded-start"
                      alt="..."
                      width={150}
                      height={150}
                    />
                    <Container className="mt-3 info">
                      <p className="fw-bold text-white fs-6">{post['acf']['business_category']}</p>
                      <Row className="sharerow">
                            <Col><Link href={post['slug']} className="btn know">Know More</Link></Col>
                            <Col>{post['acf']['visit_the_website'] ? <Link href={post['acf']['visit_the_website']} className="btn know" target="_bank">Visit the website</Link> : ''}</Col>
                      </Row>
                    </Container>
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h4 className="profile-title fw-bold">{post['title']['rendered']}</h4>
                      <p className="card-text fs-4">{post['acf']['company_name_&_place']}</p>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
        ) : (
          <Row className="col-51">
              {profile.map((post, index) =>
                
                
              (
            
            
            <Col lg={4} key={index}>
                  <div className="card mb-3 ">
                    <div class="container profile">
                <div className="row g-0">
                  <div className="col-md-4">
                    <Image
                      src={post['_embedded']['wp:featuredmedia'][0]['source_url']}
                      className="profile-img img-fluid rounded-start"
                      alt="..."
                      width={150}
                      height={150}
                    />
                  
                  <Container className="mt-3 info">
    <p className="fw-bold text-white fs-6">{post['acf']['business_category']}</p>
        <Row className="sharerow">
          <Col><Link href={`/walmart_graduates/${post['slug']}`} className="btn know">Know More</Link></Col>
                              <Col>
                                {post['acf']['visit_the_website'] ? <Link href={post['acf']['visit_the_website']} className="btn know" target="_bank">Visit the website</Link> : ''}
                              </Col>
    </Row>    
  </Container>
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h4 className="profile-title fw-bold">{post['title']['rendered']}</h4>
                      <p className="card-text fs-4">{post['acf']['company_name_&_place']}</p>
                    </div>
                  </div>
                      </div>
                      </div>
              </div>
            </Col>
          ))}
        </Row>
        )}

        {/* Pagination */}
        <div className="d-flex justify-content-center mt-3">
          
          {/* {totalPages} */}
          {/* {page} */}
          {/* {postsPerPage} */}
          {/* {totalPages} */}

          
          <div class="btn-group" role="group" aria-label="Basic example">
          <Button
              onClick={() => handlePrev(profile.length)}
              disabled={showPre}>Prev</Button>
             <Button
              onClick={() => handleClick(profile.length)}
              disabled={hideNext}>Next</Button>
</div>

          
          

           
          
          

       
        </div>
      </Container>
    </div>
  );
};

export default SuccessStories;