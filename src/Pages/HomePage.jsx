import React from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

import Registerpage from "../Components/HomeComponents/Register";
import Timeline from "../Components/HomeComponents/Timeline";
import Box from "../Components/HomeComponents/Box";
import Carousel from "../Components/HomeComponents/Carousel";

import background1 from "../Images/homeImages/homepage-bg.png";
import dataofHome from '../data/homepageinfo.js'

function Homepage() {
    let slides=[background1]
  return (
    <>
      <Parallax pages={4}>
        <ParallaxLayer
          style={{
            backgroundImage: `url(${background1})`,
            backgroundSize: "cover",
          }}
          offset={0}
        />
        <ParallaxLayer speed={0.05} factor={0.5}>
          <Registerpage />
        </ParallaxLayer>
        <ParallaxLayer
          offset={1}
          factor={3}
          style={{
            backgroundColor: "#002046",
          }}
        />
        <ParallaxLayer offset={1} speed={1.5}>
          <Timeline />
        </ParallaxLayer>
        <ParallaxLayer
            offset={2}
            speed={1.25}
            >
                <Box heading={dataofHome[0].heading} extraHeading = {dataofHome[0].extraHeading} data={dataofHome[0].data} />
                <Box heading={dataofHome[1].heading} extraHeading = {dataofHome[1].extraHeading} data={dataofHome[1].data} />
                <Box heading={dataofHome[2].heading} extraHeading = {dataofHome[2].extraHeading} data={dataofHome[2].data} />
        </ParallaxLayer>
        <ParallaxLayer
        offset={3}
        >
            <Carousel slides={slides}/>
        </ParallaxLayer>
      </Parallax>
    </>
  );
}

export default Homepage;
