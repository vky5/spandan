import React from "react";
import eventbg from "../../Imageseventbg.png";

function boxevent() {
  return (
    <div
      style={{
        width: "100%",
        height: "25%",
        position: "absolute",
        display: "flex",
        flexDirection: "row",
      }}
    >
      <eventbg className="-scale-x-100"></eventbg>
      <div style={{ overflow: "hidden" }}>
        <h3 style={{ color: "white", margin: 0, padding: 0, height: 20 }}>
          Event 01
        </h3>
        <p style={{ color: "white", fontSize: "small", padding: "1%" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque eos
          nulla fugiat quibusdam accusamus delectus quas eius, quod, soluta
          aperiam earum. Ad doloribus vel itaque et nostrum id error rerum?
        </p>
      </div>
    </div>
  );
}
//style={{ transform: "scaleX(-1)"
export default boxevent;
