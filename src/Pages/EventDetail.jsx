import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Eventdata } from "../data/eventData";

const EventDetail = () => {
  const [eventDetail, setEventDetail] = useState({});
  const params = useParams();

  const id = params.id;
  useEffect(() => {
    return () => {
      const filteredEvent = Eventdata.filter((f) => f.id.includes(id));

      setEventDetail(filteredEvent[0]);
    };
  }, []);

  return (
    <div className="text-white h-fit">
      <div className="w-full h-[275px]">
        <img
          className="object-cover w-full h-full rounded-3xl "
          alt="event image"
          src={eventDetail.image}
        />
      </div>
      <div className="mt-54">
        <h1 className="text-4xl font-medium ">{eventDetail.name}</h1>
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
        <div>
          <a
            href={eventDetail.link}
            download={eventDetail.name}
            target="_blank"
          >
            RuleBook
          </a>
        </div>
      </div>
    </div>
  );
};

export default EventDetail;
