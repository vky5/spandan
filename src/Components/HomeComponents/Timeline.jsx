import React from "react";
import boxevent from "../HomeComponents/eventbox.jsx";
import eventline from "../Images/homeImages/eventline.png";
import timelinee from "../../Images/homeImages/timelinee.png";

function Timeline() {
  const style = {
    height: 550,
    width: "cover",
    margin: 0,
    display: "grid",
    gridTemplateColumns: "5fr 0.5fr 5fr",
    overflow: "hidden",
  };
  return (
    <>
      <div
        style={{
          backgroundImage: "url(timelinee.png)",
          backgroundSize: "cover",
        }}
      >
        <h1
          style={{
            fontFamily: '"Arial Narrow Bold", sans-serif',
            color: "white",
            textAlign: "center",
          }}
        >
          TIMELINE
        </h1>
        <div style={{ style }}>
          {/*left side*/}
          <div style={{ display: "flex", position: "relative" }}>
            <h4 style={{ color: "white", textAlign: "center", width: "100%" }}>
              November 25
            </h4>
            {/*EVent 1 div*/}
            <boxevent style={{ top: "10%" }}></boxevent>
            {/*EVent 2 div*/}
            <boxevent style={{ top: "50%" }}></boxevent>
          </div>
          {/*center */}
          <div style={{ overflow: "hidden", alignItems: "center" }}>
            <eventline
              className="absolute m-auto"
              style={{ height: 550 }}
            ></eventline>
          </div>

          {/*Right side*/}
          <div style={{ display: "flex", position: "relative" }}>
            <h4 style={{ color: "white", textAlign: "center", width: "100%" }}>
              November 26
            </h4>
            <boxevent style={{ top: "35%" }}></boxevent>
          </div>
        </div>
      </div>
    </>
  );
}

export default Timeline;
// style={{ position: "absolute", margin: "auto", height: 550 }}
