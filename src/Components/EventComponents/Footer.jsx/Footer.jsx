import React from "react";
import { BsArrowUpRight } from "react-icons/bs";
import { BiLogoInstagram, BiLogoLinkedin } from "react-icons/bi";
import { BiLogoFacebook } from "react-icons/bi";

const data1 = [
  {
    id: 1,
    name: "Form",
    link: "WWW.Google.com",
  },
  {
    id: 2,
    name: "GBPIET",
    link: "WWW.Google.com",
  },
  {
    id: 3,
    name: "SAC",
    link: "WWW.Google.com",
  },
];

const data2 = [
  {
    id: 1,
    name: "About Us",
    link: "WWW.Google.com",
  },
  {
    id: 2,
    name: "Workshops",
    link: "WWW.Google.com",
  },
  {
    id: 3,
    name: "Events",
    link: "WWW.Google.com",
  },
  {
    id: 4,
    name: "FAQ's",
    link: "WWW.Google.com",
  },
  {
    id: 5,
    name: "Exhibitions",
    link: "WWW.Google.com",
  },
  {
    id: 6,
    name: "T&C",
    link: "WWW.Google.com",
  },
];
const Footer = () => {
  return (
    <div className="px-4 text-white backdrop-opacity-10 backdrop-opacity-1 ">
      {" "}
      <div className="flex flex-col py-5 border-b-4 md:py-10 md: md:flex-row md:justify-between backdrop-filter backdrop-blur-lg">
        <div className="flex items-center justify-evenly ">
          {data1.map((item) => (
            <p
              className="flex items-center px-3 py-1 mx-0.5 md:mx-2 bg-[#0c2c53] rounded-lg  text-[10px] md:text-xl"
              key={item.id}
            >
              <a href={item.link} target="_blank">
                {item.name}
              </a>
              <BsArrowUpRight />
            </p>
          ))}
        </div>
        <div className="flex justify-around mt-5">
          <ul className="flex flex-wrap items-center justify-evenly text-[12px] w-48 md:w-96 md:text-2xl">
            {data2.map((item) => (
              <li key={item.id} className="px-2">
                <a href={item.link} target="_blank">
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="py-6">
        <p className="md:text-xl">Connect With Us On:</p>
        <div className="flex">
          <div>
            <a href="www.linkdin.com">
              <BiLogoLinkedin className="text-white md:text-2xl" />
            </a>
          </div>
          <div className="">
            <a href="www.linkdin.com">
              <BiLogoFacebook className="text-white md:text-2xl" />
            </a>
          </div>
          <div className="">
            <a href="www.linkdin.com">
              <BiLogoInstagram className="text-white md:text-2xl" />
            </a>
          </div>
        </div>
      </div>
      <div className="pb-5">
        <p className="text-[12px] md:text-xl">
          @Spandhan 2k23.All Right Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
