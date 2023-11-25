import React from "react";
import team from "../Images/team.png";
import { FacultyData } from "../data/facultyData";
import { HeadData } from "../data/facultyData";
import { ManagerData } from "../data/facultyData";
import '../data/fonts.css'
const AboutPage = () => {
  return (
    <div className="text-center text-white">
      <h1 className="py-5 text-xl white text-font-medium md:text-6xl"  style={{fontFamily: 'Syne'}}>
        About{" "}
        <span className="text-2xl text-yellow-500 md:text-7xl"  style={{fontFamily: 'Syne'}}>SPANDAN</span>
      </h1>
      <div className="text-sm md:text-2xl">
        <p className="mt-1 font-normal md:font-medium md:mt-5"  style={{fontFamily: 'spacemono'}}>
        Welcome to SPANDAN-2023, the pinnacle of technological innovation brought to you by GBPIET's Student Activity Cell.
         As a beacon of cutting-edge advancements, 
        this festival transcends mere celebration; it's an immersive journey into the pulsating realm of technology.
        </p>
        <p className="mt-5 font-normal md:font-medium "  style={{fontFamily: 'spacemono'}}>
        Brace yourself for a riveting showcase featuring epic robo battles, adrenaline-fueled hackathons, 
        and the exhilarating spectacle of robo soccer. 
        Dive into the intricate challenges of our line-following robot tracks, designed to push the boundaries of precision and ingenuity.
        </p>
        <p className="mt-5 font-normal md:font-medium"  style={{fontFamily: 'spacemono'}}>
        2023 beckons you to partake in an unparalleled technological odyssey, where imagination finds flight, competitiveness thrives, and creativity knows no limits. Join us for an unforgettable exploration into the future of technology,
         marking your calendars for an experience that promises to redefine boundaries and leave an indelible mark on your technological journey.
        </p>
      </div>
      <h2 className="mt-10 text-xl font-semibold md:mt-20 md:text-6xl"  style={{fontFamily: 'Syne'}}>
        OUR TEAM
      </h2>
      <div className="flex justify-center">
        <img src={team} className="sm:w-96" />
      </div>

      <div className="flex gap-x-5 flex-wrap justify-center">
        {FacultyData.map((item) => (
          <div key={item.id} className="">
            <div className="w-32  sm:w-52 md:w-64 lg:w-80">
              <img src={item.img} className="" />
            </div>
            <div className="relative bottom-16">
              <p>{item.name}</p>
              <p>{item.position}</p>
            </div>
          </div>
        ))}
      </div>
      <div>
        <h2 className="text-3xl  text-left mb-2 md:text-3xl md:my-10">HEADS</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3  gap-x-5 md:grid lg:grid-cols-4 lg:gap-10 mt-10">
          {HeadData.map((item) => (
            <div key={item.id} className=" ">
              <img src={item.img} />
              <div className="relative bottom-10 sm:bottom-16 text-xs sm:text-lg lg:text-xl ">
                <p>{item.name}</p>
                <p>{item.position}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h2 className="text-3xl  text-left mb-2 md:text-3xl md:my-10">
          TEAM HEADS
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3  gap-x-5 md:grid lg:grid-cols-4 lg:gap-10 mt-10">
          {ManagerData.map((item) => (
            <div key={item.id} className=" ">
              <img src={item.img} />
              <div className="relative sm:bottom-16 bottom-10 text-xs sm:text-lg lg:text-xl ">
                <p>{item.name}</p>
                <p>{item.position}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
