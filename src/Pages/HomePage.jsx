import React from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Registerpage from "../Components/HomeComponents/Register";

import background1 from '../Images/homeImages/homepage-bg.png'


function Homepage() {
    return(
        <>
        <Parallax pages={2}>
            <ParallaxLayer
                style={{
                    backgroundImage: `url(${background1})`  ,
                    backgroundSize: 'cover',
                }}
                offset={0}
                
            />
            <ParallaxLayer
            speed={1}
            >
                <Registerpage/>
            </ParallaxLayer>
            <ParallaxLayer
                offset={1}
                
                style={{
                    backgroundColor:"#002046"
                }}
            />
            
        </Parallax>
        </>

    )
}

export default Homepage;