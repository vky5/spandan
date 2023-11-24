import React from "react";
import logoc from "../../Images/homeImages/logoc.png";

function Timeline(){
    const innerHeight = 300;
    return(
        <div className=" flex flex-col items-center justify-center">
            <div>
          <img style={{height: innerHeight}} src={logoc} />
        </div>
            <div className="text-white lg:text-9xl md:text-8xl sm:text-7xl text-6xl my-5">
                TIMELINE
            </div>
            <div className="text-white lg:text-8xl md:text-7xl sm:text-6xl text-5xl">
                COMING
            </div>
            <div className="text-white lg:text-8xl md:text-7xl sm:text-6xl text-5xl">
                SOON
            </div>
        </div>
    )
}

export default Timeline;