import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import inf from './../assets/inf.png'
import inf2 from './../assets/inf2.png'
import inf3 from './../assets/inf3.png'
import inf4 from './../assets/inf4.png'
import inf5 from './../assets/inf5.png'
import "./carousel.css"


function PhotoCarousel() {
    return (
        <div className='carousel_container'>
          <div className="carousel">
                      <h1 className="carousel-title">ГАЛЕРЕЯ</h1>
                      <Carousel className="carousel-container">
                  <div className="carousel-slide">
                    <img src={inf} alt="Image 1" />
                  </div>
                  <div className="carousel-slide">
                    <img src={inf2} alt="Image 2" />
                  </div>
                  <div className="carousel-slide">
                    <img src={inf3} alt="Image 2" />
                  </div>
                  <div className="carousel-slide">
                    <img src={inf4} alt="Image 2" />
                  </div>
                  <div className="carousel-slide">
                    <img src={inf5} alt="Image 2" />
                  </div>
                </Carousel>
                  </div>
        </div>
    );
  }
  
  
  export default PhotoCarousel