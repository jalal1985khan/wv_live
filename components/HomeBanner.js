import React, { useEffect, useState } from "react";
import { Card, Button, Col, Row, Container, Image,Carousel } from 'react-bootstrap';



const Home = () => {
  
  

  return (
   <Carousel>

              <Carousel.Item>
              <Image
                className="w-100 m-tm-none"
                src='/images/HomeBanner-1.jpeg'
                alt="walmart vridhi"
              />
              <Image
                className="w-100 d-sm-none"
                src='/images/HomeBanner-2.jpeg'
                alt="walmart vridhi"
              />

      </Carousel.Item>
      <Carousel.Item>
              <Image
                className="w-100 m-tm-none"
                src='/images/HomeBanner-2.jpeg'
                alt="walmart vridhi"
              />
              <Image
                className="w-100 d-sm-none"
                src='/images/HomeBanner-2.jpeg'
                alt="walmart vridhi"
              />
      </Carousel.Item>
      <Carousel.Item>
              <Image
                className="w-100 m-tm-none"
                src='/images/HomeBanner-3.jpeg'
                alt="walmart vridhi"
              />
              <Image
                className="w-100 d-sm-none"
                src='/images/HomeBanner-3.jpeg'
                alt="walmart vridhi"
              />
      </Carousel.Item>
      <Carousel.Item>
              <Image
                className="w-100 m-tm-none"
                src='/images/HomeBanner-4.jpeg'
                alt="walmart vridhi"
              />
              <Image
                className="w-100 d-sm-none"
                src='/images/HomeBanner-4.jpeg'
                alt="walmart vridhi"
              />
      </Carousel.Item>
      <Carousel.Item>
              <Image
                className="w-100 m-tm-none"
                src='/images/HomeBanner-5.jpeg'
                alt="walmart vridhi"
              />
              <Image
                className="w-100 d-sm-none"
                src='/images/HomeBanner-5.jpeg'
                alt="walmart vridhi"
              />
            </Carousel.Item>

           
       </Carousel>
    
  );
};

export default Home;
