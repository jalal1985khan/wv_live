import React, { useState, useEffect } from 'react';

import dynamic from "next/dynamic";
import Image from 'next/image';
import configData from "../config.json";
const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
    ssr: false,
  });


  const options = {
      loop: true,
      margin: 10,
      nav: false,
      dots:true,
      //stagePadding: 50,
      //stageOuterClass:'owl-stage-outer',
      navText: [
        '<span class="left"><</span>',
        '<span class="right">></span>'
    ],
    responsive: {
      0: {
        items: 2
      },
      600: {
        items: 3
      },
      1000: {
        items: 3
      }
    }
  };

function AlumniCarousel() {

  const [movies, setMovies] = useState([]);
  const fetchMovies = async () => {
      let url = "";
      //const urlPage = `${page}`;
      //console.log(urlPage)
      //url = query ? `${API_ENDPOINT}${urlPage}${urlQuery}` : "";
      //url = `${configData.SERVER_URL}posts?_embed&categories[]=12&status[]=publish&per_page=${urlPage}`;
      url = `${configData.SERVER_URL}posts?_embed&categories[]=13&status[]=publish&per_page=3`;
      try {
        const response = await fetch(url);
        const data = await response.json();
        setMovies(data);
        //console.log('hello')
        //console.log(data)

      } catch (error) {
        console.log(error);
      }
    };
  
    useEffect(() => {
      fetchMovies();
    },[]);

  return (
    <OwlCarousel className='owl-theme' loop margin={10} nav>

{
            movies.map((post, index) => {
            //console.log(post);
                return ( 
                  <div class='item' key={post.id}>
                    <Image
                    alt={post['title']['rendered']}
                    src={post['_embedded']['wp:featuredmedia'][0]['source_url']}
                    className="w-100 h-100"
                    width={260}
                    height={260}
                    />
                    <h5>{post['title']['rendered']}</h5>
                    </div>                  
            )
            
            
            })
        
        }


</OwlCarousel>


)




}
export default AlumniCarousel