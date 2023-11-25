import img1 from "../Images/eventImages/LFR.png";
import img2 from "../Images/eventImages/ROBOSOCCER.png";
import img3 from "../Images/eventImages/OffRoading.png";
import img4 from "../Images/eventImages/RoboSumo.png";
import img5 from "../Images/eventImages/Coding.png";
import img6 from "../Images/eventImages/BRIDGE.jpg";
import OFFROADINGRULE from "../RuleBooks/OFFROADING.pdf";
import BRIDGERULE from "../RuleBooks/BRIDGE.pdf";
import CodingRULE from "../RuleBooks/Coding.pdf";
import LFRRULE from "../RuleBooks/LFR.pdf";
import RobosoccerRULE from "../RuleBooks/Robosoccer.pdf";
import ROBOSUMORULE from "../RuleBooks/OFFROADING.pdf";

export const Eventdata = [
  {
    id: "1",
    name: "Line Following Robot",
    desc: "Line following robot competition",
    image: img1,
    tags: ["Robotics"],
    link: LFRRULE,
    branchEntry: "249/-",
    branchFirst: "2k",
    branchSecond: "1k",
    CordinateName: "ABC",
    CordinateNumber: "131464",
  },
  {
    id: "2",
    name: "Robo Sumo",
    desc: "Robot Sumo competition",
    image: img4,
    tags: ["Robotics"],
    link: ROBOSUMORULE,
    branchEntry: "499/-",
    branchFirst: "3k",
    branchSecond: "1.5k",
    CordinateName: "ABC",
    CordinateNumber: "131464",
  },
  {
    id: "3",
    name: "Robo Soccer",
    desc: "A Soccer competition between robots",
    image: img2,
    tags: ["Robotics"],
    link: RobosoccerRULE,
    branchEntry: "499/-",
    branchFirst: "4k",
    branchSecond: "2k",
    CordinateName: "ABC",
    CordinateNumber: "131464",
  },
  {
    id: "4",
    name: "Off Roading",
    desc: "Off Roading competition is going to happen",
    image: img3,
    tags: ["Robotics"],
    link: OFFROADINGRULE,
    branchEntry: "499/-",
    branchFirst: "3k",
    branchSecond: "1.5k",
    CordinateName: "ABC",
    CordinateNumber: "131464",
  },

  {
    id: "5",
    name: "Coding Competition",
    desc: "Hackathon",
    image: img5,
    tags: ["Coding"],
    link: CodingRULE,
    branchEntry: "99 per Head",
    branchFirst: "3k",
    branchSecond: "1.5k",
    CordinateName: "ABC",
    CordinateNumber: "131464",
  },
  {
    id: "6",
    name: "Bridge It",
    desc: "Bridge It is a robotic game",
    image: img6,
    tags: ["Robotics"],
    link: BRIDGERULE,
    branchEntry: "149/-",
    branchFirst: "1k",
    branchSecond: "500/-",
    CordinateName: "ABC",
    CordinateNumber: "131464",
  },
];
