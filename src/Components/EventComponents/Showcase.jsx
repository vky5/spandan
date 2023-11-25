import React, { useEffect } from "react";
import Aos from "aos";
import '../../data/fonts.css'

import { Link, useNavigate } from "react-router-dom";

const Showcase = ({ data, transition }) => {
  const navigate = useNavigate();
  return (
    <div className="mt-10 sm:grid sm:grid-cols-2 gap-x-5 lg:grid-cols-3 lg:gap-10 ">
      {data.map((events) => (
        <div
          key={events.id}
          className="mt-4 rounded-3xl bg-[#D9D9D91A] 
          "
        >
          <div className="w-full scale-90 hover:scale-110">
            <img
              className="object-cover w-full h-full rounded-3xl "
              src={events.image}
            />
          </div>
          <div className="flex flex-col px-4 py-1 text-white text-start ">
            <h2 className="py-1 font-base text-xl md:text-4xl font-semibold font-['inknut_Antiqua']" style={{fontFamily:"Syne"}}>
              {events.name}
            </h2>
            {/* <p className="my-2 font-mono text-base md:text-xl">{events.desc}</p> */}
            <div className="grow-[10]"></div>
            <div className="flex justify-evenly sm:flex-col xl:flex-row">
              <div className="flex justify-center">
                <button
                  onClick={() =>
                    navigate(`/Events/${events.id}`, {
                      state: { events: events },
                    })
                  }
                  className="cursor-pointer px-4 py-1 text-[13px] md:text-xl
                  rounded-full w-fit border-2 border-white md:px-12 md:py-1 mb-2
                  font-semibold bg-[#d9d9d994]"
                  style={{fontFamily :"spacemono"}}
                >
                  Details
                </button>
              </div>
              <div className="flex justify-center">
                <Link
                  to={`/Events/${events.id}`}
                  className="cursor-pointer px-4 py-1 text-[13px] md:text-xl
                  rounded-full w-fit border-2 border-white md:px-12 md:py-1 mb-2
                  font-semibold bg-[#d9d9d994]"
                  style={{fontFamily :"spacemono"}}
                >
                  Register
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
