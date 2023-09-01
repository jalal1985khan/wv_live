import React, { useState, useEffect } from 'react';
import configData from "../config.json";
var $ = require("jquery");
if (typeof window !== "undefined") {
   window.$ = window.jQuery = require("jquery");
}
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import dynamic from "next/dynamic";
import Image from 'next/image'




const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
    ssr: false,
  });

  const options = {
      loop: true,
      margin: 10,
      nav: true,
      dots:false,
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
        items: 2
      }
    }
  };

function AlumniCarousel() {

    //const pathname = usePathname()
    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(10);

    const fetchMovies = async () => {
        let url = "";
        const urlPage = `${page}`;
        //console.log(urlPage)
        //url = query ? `${API_ENDPOINT}${urlPage}${urlQuery}` : "";
        //url = `${configData.SERVER_URL}posts?_embed&categories[]=12&status[]=publish&per_page=${urlPage}`;
        url = `${configData.SERVER_URL}msme_speaks?_embed&status[]=publish&per_page=${urlPage}`;
        try {
          const response = await fetch(url);
          const data = await response.json();
          //console.log(data);
          setMovies(data);
        } catch (error) {
          console.log(error);
        }
      };
    
      useEffect(() => {
        fetchMovies();
      }, []);


    return (
     <>
        <OwlCarousel  
                    nav
          // className="owl-theme"
          loop={true}
          autoplay={true}
          margin={10}
          {...options}
          className="owl-theme owl-loaded"
            >
                
                {
            movies.map((post, index) => {
            //console.log(post);
                return ( 
                
       
                    <div class="item" key={post.id}>
                            <Image
                        alt={post['title']['rendered']}
                        src={post['acf']['video_thumbnail']['url']}
                        className="w-100 h-100"
                        width={360}
                        height={360}
            />
                  
                  </div>
                )
            
            
            })
        
        }
</OwlCarousel>
            </> 
  )
}
export default AlumniCarousel
