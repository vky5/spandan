import React from "react";
import { Eventdata } from "../../data/eventData.js";

const Event = () => {
  return (
    <div>
      {Eventdata.map((item) => (
        <div key={item.id}>
          <div
            className={`py-12 px-10 flex  bg-black  justify-evenly ${
              item.id % 2 == 0 ? "flex-row-reverse" : "flex-row"
            }`}
          >
            <div className="flex flex-col w-3/5 py-4 text-center text-white">
              <h2 className=" py-5 text-3xl font-semibold font-['inknut_Antiqua']">
                {item.name}
              </h2>
              <p className="font-mono text-3xl ">{item.desc}</p>
            </div>
            <div className="">
              <img className="w-[450px]" src={item.image} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Event;
