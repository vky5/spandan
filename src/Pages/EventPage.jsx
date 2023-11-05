import React, { useState, useEffect } from "react";
import Filters from "../Components/EventComponents/Filter.jsx";
import ShowCase from "../Components/EventComponents/Showcase.jsx";
import { Eventdata } from "../data/eventData.js";
import EventUpper from "../Components/EventComponents/EventUpper.jsx";
import Navbar from "../Components/EventComponents/Menu/Navbar.jsx";

const EventPage = () => {
  const [events, setEvents] = useState(Eventdata);
  const [transition, setTransition] = useState(false);

  useEffect(() => {
    return () => {
      const filteredEvents = Eventdata.filter((f) =>
        f.tags.includes("Robotics")
      );

      setEvents(filteredEvents);
    };
  }, []);

  const filterEvents = (tag) => {
    setTimeout(() => {
      if (tag != "Robotics") {
        const filteredEvents = Eventdata.filter((f) => f.tags.includes(tag));

        setEvents(filteredEvents);
      } else {
        const filteredEvents = Eventdata.filter((f) =>
          f.tags.includes("Robotics")
        );

        setEvents(filteredEvents);
      }
    }, 200);
  };
  return (
    <div className="flex flex-col w-full md:w-full h-fit bg-[#002046] portfolio-content-wrapper ">
      <EventUpper />
      <Filters filterEvents={(tag) => filterEvents(tag)} />
      <ShowCase data={events} transition={transition} />
    </div>
  );
};

export default EventPage;
