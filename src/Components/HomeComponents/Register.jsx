import React from "react";
import background1 from "../../Images/homeImages/homepage-bg.png";
import down from "../../Images/homeImages/arrowdown.png";
import '../../data/fonts.css'

function Registerpage() {
  const style = {
    backgroundImage: `url(${background1})`,
    backgroundSize: "cover",
  };

  return (
    <>
      <div style={style} className="flex flex-col items-center justify-center ">
        <div className="text-white lg:text-9xl md:text-8xl sm:text-7xl text-7xl lg:my-3" style={{fontFamily: 'nasa'}}>
          SPANDAN
        </div>
        <div className="justify-center my-8 text-3xl text-white lg:text-7xl md:text-6xl sm:text-5xl lg:my-5" style={{fontFamily: 'nasa'}}>
          2K23
        </div>
        <div className="my-5 text-xl text-center text-white lg:text-6xl md:text-5xl sm:text-2xl" style={{fontFamily: 'michroma'}}>
          "Feel The Pulse of Innovation"
        </div>
        <div className="text-white lg:text-4xl md:text-3xl sm:text=2xl text-xl my-3">
          <button className="px-4 py-2 font-bold text-yellow-400 rounded-lg hover:bg-blue-700 backdrop-blur-3xl my-7 lg:my-5" style={{fontFamily: 'Syne'}}>
            REGISTER NOW
          </button>
        </div>
        <div className="animate-bounce">
          <img src={down} alt="down image logo" />
        </div>
      </div>
    </>
  );
}

export default Registerpage;
