import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Eventdata } from "../data/eventData";

const EventDetail = () => {
  const [eventDetail, setEventDetail] = useState({});
  const params = useParams();

  const id = params.id;
  useEffect(() => {
    return () => {
      const filteredEvent = Eventdata.filter((f) => f.name.includes(id));

      setEventDetail(filteredEvent[0]);
      console.log(eventDetail);
    };
  }, []);

  return (
    <div className="flex flex-col text-white">
      <div className=" ">
        <img className="rounded-3xl cover " src={eventDetail.image} />
      </div>
      <div className="py-5">
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
        {eventDetail.collgeEntry && (
          <div>
            <p>{eventDetail.collgeEntry}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default EventDetail;
