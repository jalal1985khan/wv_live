import React, { useEffect, useState } from "react";
import { Card, Button, Col, Row, Container, Image,Carousel } from 'react-bootstrap';
import configData from '../config.json';


const Home = () => {
  
  
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);


  const fetchMovies = async () => {
    setLoading(true);
    let url = "";
    url = `${configData.SERVER_URL}home_banner?_embed&status=publish&order=asc`;
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

  useEffect(() => {
    fetchMovies();
    
  }, []);

  return (
   <Carousel>
    {loading && <h2 className="loading">Loading...</h2>}
        {
          movies.map((home) => {
            return (
              <Carousel.Item key={home.id}>
              <Image
                className="w-100 m-tm-none"
                src={home['acf']['rest_api_home_banner']['url']}
                alt={home['title']['rendered']}
              />
              <Image
                className="w-100 d-sm-none"
                src={home['acf']['rest_api_mobile_banner']['url']}
                alt={home['title']['rendered']}
              />

            </Carousel.Item>
              
            )
          })}
       </Carousel>
    
  );
};

export default Home;
