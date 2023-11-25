import React, { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import { Eventdata } from "../data/eventData";

const EventDetail = () => {
  const data = useLocation();

  const eventDetail = data.state.events;

  return (
    <div className="text-white h-fit bg-[#D9D9D91A] px-3 py-3">
      <div className="w-full h-[275px]">
        <img
          className="object-cover w-full h-full rounded-3xl "
          alt="event image"
          src={eventDetail.image}
        />
      </div>
      <div className="mt-54">
        <div className="flex mt-5">
          <h1 className="text-2xl font-medium w-2/3">{eventDetail.name}</h1>
          <span className="px-2 py-1 h-fit  border border-black bg-[#d9d9d994]">
            <a
              href={eventDetail.link}
              download={eventDetail.name}
              target="_blank"
            >
              RuleBook
            </a>
          </span>
        </div>

        <p className="text-xl font-light ">{eventDetail.desc}</p>
        <h2 className="text-3xl font-medium text-center">Entry and Prize</h2>
        <p className="text-center">InterBranch</p>
        <div>
          <div className="flex items-end">
            <p className="text-xl">Entry Price : Rs. </p>
            <p>{eventDetail.branchEntry}</p>
          </div>
          <div className="flex items-end">
            <p className="text-xl">1st Winning : Rs. </p>
            <p>{eventDetail.branchFirst}</p>
          </div>
          <div className="flex items-end">
            <p className="text-xl">2nd Winning : Rs. </p>
            <p>{eventDetail.branchSecond}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetail;
