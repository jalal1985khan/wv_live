import React, { useEffect, useState } from "react";
import { Card, Button, Col, Row, Container, Carousel } from 'react-bootstrap';
import Image from 'next/image'



const Home = () => {
  return (
   <Carousel>
<Carousel.Item>
              <Image
          className="w-100 m-tm-none"
          src='/images/HomeBanner-1.jpeg'
          alt="walmart vridhi registartion"
          width={800}
          height={610}  
              />
              <Image
                className="w-100 d-sm-none"
                src='/images/HomeMobileBanne-1.jpeg'
          alt="walmart vridhi"
          width={800}
          height={610}
              />

      </Carousel.Item>
      <Carousel.Item>
              <Image
                className="w-100 m-tm-none"
                src='/images/HomeBanner-2.jpeg'
          alt="walmart vridhi"
          width={800}
          height={610}
              />
              <Image
                className="w-100 d-sm-none"
                src='/images/HomeMobileBanner-2.jpeg'
          alt="walmart vridhi"
          width={800}
          height={610}
              />
      </Carousel.Item>
      <Carousel.Item>
              <Image
                className="w-100 m-tm-none"
                src='/images/HomeBanner-3.jpeg'
          alt="walmart vridhi"
          width={800}
          height={610}
              />
              <Image
                className="w-100 d-sm-none"
                src='/images/HomeMobileBanner-3.jpeg'
          alt="walmart vridhi"
          width={800}
          height={610}
              />
      </Carousel.Item>
      <Carousel.Item>
              <Image
                className="w-100 m-tm-none"
                src='/images/HomeBanner-4.jpeg'
          alt="walmart vridhi"
          width={800}
          height={610}
              />
              <Image
                className="w-100 d-sm-none"
                src='/images/HomeMobileBanner-4.jpeg'
          alt="walmart vridhi"
          width={800}
          height={610}
              />
      </Carousel.Item>
      <Carousel.Item>
              <Image
                className="w-100 m-tm-none"
                src='/images/HomeBanner-5.jpeg'
          alt="walmart vridhi"
          width={800}
          height={610}
              />
              <Image
                className="w-100 d-sm-none"
                src='/images/HomeMobileBanner-5.jpeg'
          alt="walmart vridhi"
          width={800}
          height={610}
              />
            </Carousel.Item> 
       </Carousel>
    
  );
};

export default Home;
