import React from "react";
import background1 from "../../Images/homeImages/homepage-bg.png";

function Registerpage(){
    const style={
        backgroundImage: `url(${background1})`,
        backgroundSize: "cover",
      };
      
    return(
        <>
        <div style={style} className=" flex flex-col items-center justify-center">
            <div className="text-white lg:text-9xl md:text-8xl sm:text-7xl text-6xl my-3">
                SPANDAN
            </div>
            <div className="text-white lg:text-7xl md:text-6xl sm:text-5xl text-4xl justify-center my-8">
                2K23
            </div>
            <div className="text-white lg:text-6xl md:text-5xl sm:text-4xl text-2xl my-5">
                "Feel The Pulse of Innovation"
            </div>
            <div className="text-white lg:text-4xl md:text-3xl sm:text=2xl text-xl my-5">
            <button className=" hover:bg-blue-700 text-yellow-400 font-bold py-2 px-4 rounded-lg backdrop-blur-3xl">
                REGISTER NOW
            </button>

            </div>
        </div>
        </>
    )
}

export default Registerpage;