import React from "react";
import Ecllips1 from "../../Images/homeImages/Ellipse_1.png";
import Ecllips2 from "../../Images/Ellipse_1new.png";
import { BsArrowUpRightCircle } from "react-icons/bs";
const EventUpper = () => {
  return (
    <div className="bg-[#002046] px-0.5">
      <div className="flex items-end justify-between mt-36">
        <div className="justify-end text-white">
          <h1 className=" text-2xl md:text-6xl font-medium leading-[9px]  top-[160px]">
            Explore all your{" "}
            <span className="text-3xl font-semibold text-yellow-500 md:text-7xl">
              SPANDAN{" "}
            </span>
          </h1>
          <h1 className="text-2xl md:text-6xl font-medium leading-[9px]  top-[230px]  ">
            Event at One place.
          </h1>
        </div>
        <div className="flex p-0">
          <img
            src={Ecllips1}
            alt=""
            className="h-[70px] md:h-40 transform rotate-180 m-0"
          />
        </div>
      </div>
      <div>
        <div>
          <div className="p-2 mt-32 text-white border-b-2 rounded-full cursor-pointer md:rounded-3xl w-fit">
            <a
              href="www.google.com"
              className="flex items-end text-3xl md:text-4xl"
            >
              <BsArrowUpRightCircle className={"text-3xl text-white"} />
              <span className="ml-1">Register Now !</span>
            </a>
          </div>
          <div className="flex justify-end opacity">
            <img src={Ecllips2} className="h-[70px] md:h-64 " />
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default EventUpper;
