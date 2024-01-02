import React, { useEffect, useState } from "react";
import { Card, Button, Col, Row, Container, Carousel } from 'react-bootstrap';
import Image from 'next/image'



const Home = () => {
  return (
   <Carousel controls={false}>
<Carousel.Item>
              <Image
          className="w-100 m-tm-none h-100"
          src='/images/HomeBanner-1.jpeg'
          alt="walmart vridhi registartion"
          width={900}
          height={710}  
              />
              <Image
                className="w-100 d-sm-none h-100"
                src='/images/HomeMobileBanne-1.jpeg'
          alt="walmart vridhi"
          width={900}
          height={710}
              />

      </Carousel.Item>
      <Carousel.Item>
              <Image
                className="w-100 m-tm-none h-100"
                src='/images/HomeBanner-2.jpeg'
          alt="walmart vridhi"
          width={900}
          height={710}
              />
              <Image
                className="w-100 d-sm-none h-100"
                src='/images/HomeMobileBanner-2.jpeg'
          alt="walmart vridhi"
          width={900}
          height={710}
              />
      </Carousel.Item>
      <Carousel.Item>
              <Image
                className="w-100 m-tm-none h-100"
                src='/images/HomeBanner-3.jpeg'
          alt="walmart vridhi"
          width={900}
          height={710}
              />
              <Image
                className="w-100 d-sm-none h-100"
                src='/images/HomeMobileBanner-3.jpeg'
          alt="walmart vridhi"
          width={900}
          height={710}
              />
      </Carousel.Item>
      <Carousel.Item>
              <Image
                className="w-100 m-tm-none h-100"
                src='/images/HomeBanner-4.jpeg'
          alt="walmart vridhi"
          width={900}
          height={710}
              />
              <Image
                className="w-100 d-sm-none h-100"
                src='/images/HomeMobileBanner-4.jpeg'
          alt="walmart vridhi"
          width={900}
          height={710}
              />
      </Carousel.Item>
      <Carousel.Item>
              <Image
                className="w-100 m-tm-none h-100"
                src='/images/HomeBanner-5.jpeg'
          alt="walmart vridhi"
          width={900}
          height={710}
              />
              <Image
                className="w-100 d-sm-none h-100"
                src='/images/HomeMobileBanner-5.jpeg'
          alt="walmart vridhi"
          width={900}
          height={710}
              />
            </Carousel.Item> 
       </Carousel>
    
  );
};

export default Home;
