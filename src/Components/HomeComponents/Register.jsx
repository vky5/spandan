import React from "react";
import background1 from "../../Images/homeImages/homepage-bg.png";
import down from "../../Images/homeImages/arrowdown.png";

function Registerpage() {
  const style = {
    backgroundImage: `url(${background1})`,
    backgroundSize: "cover",
  };

  return (
    <>
      <div style={style} className=" flex flex-col items-center justify-center">
        <div className="text-white lg:text-9xl md:text-8xl sm:text-7xl text-6xl lg:my-3 my-12">
          SPANDAN
        </div>
        <div className="text-white lg:text-7xl md:text-6xl sm:text-5xl text-4xl justify-center my-8 lg:my-5">
          2K23
        </div>
        <div className="text-white lg:text-6xl md:text-5xl sm:text-2xl text-2xl my-5">
          "Feel The Pulse of Innovation"
        </div>
        <div className="text-white lg:text-4xl md:text-3xl sm:text=2xl text-xl my-3">
          <button className=" hover:bg-blue-700 text-yellow-400 font-bold py-2 px-4 rounded-lg backdrop-blur-3xl my-7 lg:my-5">
            REGISTER NOW
          </button>
        </div>
        <div>
          <img src={down} alt="down image logo" />
        </div>
      </div>
    </>
  );
}

export default Registerpage;
