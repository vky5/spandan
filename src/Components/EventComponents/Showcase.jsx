import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const ShowCase = ({ data, transition }) => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="flex flex-wrap my-2  md:px-0 justify-between md:justify-[normal] md:ml-[-10px] md:mr-[-10px]  ">
      {data.map((event) => (
        <div key={event.id}>
          <div className="w-[145px] md:w-[350px]  mt-4 rounded-2xl bg-[#D9D9D91A]">
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
                <a
                  href={event.link}
                  target="_blank"
                  className="cursor-pointer px-4 py-1 text-[13px] md:text-xl rounded-full w-fit border-2 border-white md:px-12 md:py-1 mb-2 font-semibold bg-[#D9D9D994]"
                >
                  View RuleBook
                </a>
              </div>
              <div className="flex">
                <span className="grow"></span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShowCase;
