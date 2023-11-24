import React, { useEffect } from "react";
import Aos from "aos";

import { Link } from "react-router-dom";

const Showcase = ({ data, transition }) => {
  return (
    <div className="flex flex-wrap my-2 md:mb-10 md:px-0 justify-between md:justify-[normal] md:mx-[10px]  ">
      {data.map((event) => (
        <div key={event.id}>
          <div className="w-[130px] md:w-[335px]   mt-4 rounded-3xl bg-[#D9D9D91A]">
            <div className="">
              <img className="w-full" src={event.image} />
            </div>
            <div className="flex flex-col px-2 py-1 text-white text-start ">
              <h2 className="py-1 font-base text-xl md:text-4xl font-semibold font-['inknut_Antiqua']">
                {event.name}
              </h2>
              <p className="my-2 font-mono text-base md:text-xl">
                {event.desc}
              </p>

              <div className="flex justify-center">
                <Link
                  to={`/Events/${event.name}`}
                  className="cursor-pointer px-4 py-1 text-[13px] md:text-xl
                  rounded-full w-fit border-2 border-white md:px-12 md:py-1 mb-2
                  font-semibold bg-[#d9d9d994]"
                >
                  Details
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Showcase;
