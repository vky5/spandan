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
        <img src={team} className="md:w-96" />
      </div>

      <div className="flex gap-2 md:justify-evenly">
        {FacultyData.map((item) => (
          <div key={item.id}>
            <div className="md:w-72">
              <img src={item.img} />
            </div>
            <div className="-mt-12">
              <p>{item.name}</p>
              <p>{item.position}</p>
            </div>
          </div>
        ))}
      </div>
      <div>
        <h2 className="text-xl mt-5 text-left mb-2 md:text-3xl md:my-10">
          HEADS
        </h2>
        <div className="flex flex-row gap-1 flex-wrap md:grid md:grid-cols-3 md:gap-4">
          {HeadData.map((item) => (
            <div key={item.id} className="w-[80px] md:w-72 ">
              <img src={item.img} />
              <div className="-mt-12">
                <p>{item.name}</p>
                <p>{item.position}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h2 className="text-xl text-left mt-5 mb-2 md:text-3xl md:my-10">
          MANAGERS
        </h2>
        <div className="flex flex-row gap-2 flex-wrap md:grid md:grid-cols-4 md:gap-4">
          {ManagerData.map((item) => (
            <div key={item.id} className="w-[93px] md:w-72">
              <img src={item.img} />
              <div className="-mt-12">
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
