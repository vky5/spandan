import React from "react";

function Timeline(){
    return(
        <div className="relative box-border justify-center flex">
            <div className="text-white lg:text-9xl md:text-8xl sm:text-7xl text-6xl absolute top-20">
                TIMELINE
            </div>
            <div className="text-white lg:text-9xl md:text-8xl sm:text-7xl text-6xl absolute top-40 my-10">
                COMING
            </div>
            <div className="text-white lg:text-9xl md:text-8xl sm:text-7xl text-6xl absolute top-60 my-10">
                SOON
            </div>
        </div>
    )
}

export default Timeline;