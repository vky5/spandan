import React from "react";
import team from "../Images/team.png";
import { FacultyData } from "../data/facultyData";
import { HeadData } from "../data/facultyData";
import { ManagerData } from "../data/facultyData";
const AboutPage = () => {
  return (
    <div className="text-center text-white">
      <h1 className="py-5 text-xl white text-font-medium md:text-6xl">
        About{" "}
        <span className="text-2xl text-yellow-500 md:text-7xl">SPANDAN</span>
      </h1>
      <div className="text-sm md:text-2xl">
        <p className="mt-1 font-normal md:font-medium md:mt-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris Excepteur sint
          occaecat cupidatat non proident, sunt in culpa qui officia deserunt
          mollit anim id est laborum
        </p>
        <p className="mt-5 font-normal md:font-medium ">
          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </p>
        <p className="mt-5 font-normal md:font-medium">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates
          atque omnis recusandae, odit officiis magnam.
        </p>
      </div>
      <h2 className="mt-10 text-xl font-semibold md:mt-20 md:text-6xl">
        OUR TEAM
      </h2>
      <div className="flex justify-center">
        <img src={team} className="sm:w-96" />
      </div>

      <div className="flex p-12 justify-center">
        {FacultyData.map((item) => (
          <div key={item.id} className="">
            <div className="sm:w-52 md:w-64 lg:w-80">
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
        <h2 className="text-3xl  text-left mb-2 md:text-3xl md:my-10">
          HEADS
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3  gap-x-5 md:grid lg:grid-cols-4 lg:gap-10 mt-10">
          {HeadData.map((item) => (
            <div key={item.id} className=" ">
              <img src={item.img} />
              <div className="relative bottom-16 ">
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
