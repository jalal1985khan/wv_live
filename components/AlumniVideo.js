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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from "@fortawesome/free-solid-svg-icons";



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
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState({});
    const [next, setNext] = useState();
    const [total, setTotal] = useState();
    const [end, setEnd] = useState(true);

    const fetchMovies = async () => {
        setLoading(true);
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
          setLoading(false);
        } catch (error) {
          console.log(error);
        }
      };
    
      const fetchNos = async () => {
        setLoading(true);
        let cat = "";
        cat = `${configData.SERVER_URL}categories/12`;
    
        try {
          const response = await fetch(cat);
          const cats = await response.json();
          //console.log(cats);
          setNext(cats);
          setLoading(false);
    
        } catch (error) {
          console.log(error);
        }
      };
    
    
    
    
      useEffect(() => {
        fetchMovies();
        fetchNos();
      }, [page], [next]);
    
    
      const loadMore = () => {
        setTotal(next.count)
        //console.log(total)
        const main = next.count;
    
        if (total == page) {
          setEnd(false);
        }
    
        setPage((oldPage) => {
          return oldPage + 2;
        })
      };


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
            console.log(post);
                return ( 
                
       
                    <div class="item">
                        
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
