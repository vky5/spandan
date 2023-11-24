import React from "react";

import Registerpage from "../Components/HomeComponents/Register";
import Timeline from "../Components/HomeComponents/Timeline";
import Box from "../Components/HomeComponents/Box";
import MyCarousel from "../Components/HomeComponents/Carousel";

import dataofHome from '../data/homepageinfo.js'

function Homepage() {

    console.log(dataofHome);
  return (
    <>
      <Registerpage/>
      <div className="my-4">
        <Timeline/>
      </div>
      
      <Box heading={dataofHome[0].heading} extraHeading={dataofHome[0].extraHeading} data={dataofHome[0].data}/>
      <Box heading={dataofHome[1].heading} extraHeading={dataofHome[1].extraHeading} data={dataofHome[1].data}/>
      <Box heading={dataofHome[2].heading} extraHeading={dataofHome[2].extraHeading} data={dataofHome[2].data}/>
      
      <div className="flex justify-center">
        <MyCarousel/>
      </div>
    </>
  );
}

export default Homepage;
