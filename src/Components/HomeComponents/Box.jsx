import React from "react";

import bg2 from "../../Images/homeImages/homepage_bg2.png";
import line from "../../Images/homeImages/line.jpeg";
import '../../data/fonts.css'

function Box({ heading, extraHeading, data }) {
  const backgroundStyle = {
    backgroundImage: `url(${bg2})`,
    backgroundSize: "cover",
  };
  return (
    <>
      <div style={backgroundStyle} className="my-5 mx-5 flex md:h-36">
        <div className="w-1/3">
          <div className=" text-yellow-500 font-bold pt-9 pl-5 text-l" style={{fontFamily: 'Syne'}}>
            {heading}
          </div>
          <div className="text-white font-bold text-sm pl-5" style={{fontFamily: 'Syne'}}>
            {extraHeading}
          </div>
        </div>
        <div className="w-1/10 h-16 pl-3 pt-6">
          <img src={line} className="h-24" />
        </div>
        <div className="w-10/12 p-4 text-white text-xs whitespace-normal" style={{fontFamily: 'spacemono'}}>
          {data}
        </div>
      </div>
    </>
  );
}

export default Box;
