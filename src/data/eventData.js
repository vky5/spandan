import img1 from "../Images/eventImages/LFR.png";
import img2 from "../Images/eventImages/ROBOSOCCER.png";
import img3 from "../Images/eventImages/OffRoading.png";
import img4 from "../Images/eventImages/RoboSumo.png";
import img5 from "../Images/eventImages/Coding.png";
import img6 from "../Images/eventImages/BRIDGE.jpg";
import RuleBook from "../RuleBooks/offroading.pdf";

export const Eventdata = [
  {
    id: "1",
    name: "Line Following Robot",
    desc: "Line following robot competition",
    image: img1,
    tags: ["Robotics"],
    link: RuleBook,
    branchEntry: "249/-",
    branchFirst: "2k",
    branchSecond: "1k",
    collgeEntry: "249/-",
    collgeFirst: "2k",
    collgeSecond: "1k",
  },
  {
    id: "4",
    name: "Robo Sumo",
    desc: "Robot Sumo competition",
    image: img4,
    tags: ["Robotics"],
    link: RuleBook,
    branchEntry: "499/-",
    branchFirst: "3k",
    branchSecond: "1.5k",
  },
  {
    id: "2",
    name: "Robo Soccer",
    desc: "A Soccer competition between robots",
    image: img2,
    tags: ["Robotics"],
    link: RuleBook,
    branchEntry: "499/-",
    branchFirst: "4k",
    branchSecond: "2k",
    collgeEntry: "249/-",
    collgeFirst: "2k",
    collgeSecond: "1k",
  },
  {
    id: "3",
    name: "Off Roading",
    desc: "Off Roading competition is going to happen",
    image: img3,
    tags: ["Robotics"],
    link: RuleBook,
    branchEntry: "499/-",
    branchFirst: "3k",
    branchSecond: "1.5k",
    collgeEntry: "249/-",
    collgeFirst: "2k",
    collgeSecond: "1k",
  },

  {
    id: "5",
    name: "Exhibition",
    desc: "Hackathon",
    image: img5,
    tags: ["Coding"],
    link: RuleBook,
    branchEntry: "99 per Head",
    branchFirst: "3k",
    branchSecond: "1.5k",
  },
  {
    id: "6",
    name: "Bridge It",
    desc: "Bridge It is a robotic game",
    image: img6,
    tags: ["Robotics"],
    link: RuleBook,
    branchEntry: "149/-",
    branchFirst: "1k",
    branchSecond: "500/-",
  },
];
