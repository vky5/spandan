import React from "react";

import bg2 from '../../Images/homeImages/homepage_bg2.png';

function Box(props) {
  const backgroundStyle = {
    backgroundImage: `url(${bg2})`,
    backgroundSize: 'cover',
  };
  return (
    <>
      <div style={backgroundStyle} className="flex justify-center items-center">

      </div>
    </>
  );
}

export default Box;
