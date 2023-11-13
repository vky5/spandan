import { CgMenuRight } from "react-icons/cg";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../../Images/Spandan_logo.png";
const Menu = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <div className="flex items-center justify-between w-full bg-transparent md:backdrop-blur-xl">
      <div className="w-12 md:w-24">
        <img src={logo} alt="logo" />
      </div>
      <div
        className="mobilemenu relative z-[99] md:hidden"
        onClick={() => setMobileMenu(!mobileMenu)}
      >
        {mobileMenu ? (
          <IoMdClose className={"text-2xl text-white"} />
        ) : (
          <CgMenuRight className={"text-2xl text-white"} />
        )}
      </div>

      <div
        className={`fixed w-full h-full top-0 left-0 z-[9] bg-black  flex-col justify-center items-center gap-[35px] md:flex md:flex-row md:relative md:w-auto md:h-auto md:gap-[unset] md:bg-transparent ${
          mobileMenu ? "flex" : "hidden"
        }`}
      >
        <span
          onClick={() => setMobileMenu(!mobileMenu)}
          className="hover:shadow-[inset_200px_0_0_0_white] hover:text-black transition-shadow ease-in-out text-white md:text-2xl md:font-normal md:leading-none ml-5 p-1 cursor-pointer shadow-[inset_0_0_0_0_white] shadow-white duration-400 hover:shadow-white text-2xl font-semibold "
        >
          <Link to={"/"}>HOME</Link>
        </span>
        <span
          onClick={() => setMobileMenu(!mobileMenu)}
          className="hover:shadow-[inset_200px_0_0_0_white] hover:text-black transition-shadow ease-in-out text-white md:text-2xl md:font-normal leading-none ml-5 p-1 cursor-pointer shadow-[inset_0_0_0_0_white] shadow-white duration-300 hover:shadow-white text-2xl font-semibold "
        >
          <Link to={"/Events"}>EVENTS</Link>
        </span>
        <span
          onClick={() => setMobileMenu(!mobileMenu)}
          className="hover:shadow-[inset_200px_0_0_0_white] hover:text-black transition-shadow ease-in-out text-white md:text-2xl md:font-normal leading-none ml-5 p-1 cursor-pointer shadow-[inset_0_0_0_0_white] shadow-white duration-300 hover:shadow-white text-2xl font-semibold"
        >
          <Link to={"/AboutUs"}>ABOUT US</Link>
        </span>
      </div>
    </div>
  );
};

export default Menu;
