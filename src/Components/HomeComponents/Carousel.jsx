import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import imgSlide from "../../data/slideshow";

function MyCarousel(){ 
  return (
    <>
    <Carousel showThumbs={false} showStatus={false} autoPlay={true} infiniteLoop={true}>
      {
        imgSlide.map((s)=>(
          
          <div key={s.id}>

            <img src={s.src} alt={s.alt} />
          </div>
        ))
      }
    </Carousel>
    </>
  );
}

export default MyCarousel;
