import React, { useContext, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { MdRoundaboutRight } from "react-icons/md";
import { FaRegUser } from "react-icons/fa6";
import { LuContact2, LuShoppingCart } from "react-icons/lu";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import SideBar from "./Location/SideBar";
import { CityContext } from "../App";

const Header = () => {
  const [activeLink, setActiveLink] = useState(null);
  const cartItem = useSelector((store) => store.cart.items);
  const [sideBar, setSideBar] = useState(false);
  const itemCount = Object.keys(cartItem).length;
  const { city, setCity } = useContext(CityContext);
  const [hover, setHover] = useState(false);

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };
  return (
    <div className="flex justify-between sm:justify-around sticky top-0 bg-white z-50 p-4 shadow-lg">
      <div className="flex items-center justify-center flex-row gap-5">
        <div className="h-[23px] sm:h-[32px] lg:h-[40px] ">
          <Link to="/" onClick={() => handleLinkClick("")}>
            <img
              className="w-full h-full object-cover"
              src="/petpoojalogo.png"
              alt="logo"
            />
          </Link>
        </div>
        <div
          onClick={() => setSideBar(true)}
          className="flex gap-2 items-center justify-center cursor-pointer"
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          <div
            className={`text-xs sm:text-sm  border-b-2 border-black text-gray-800 font-bold ${
              hover && "text-orange-600"
            } ${hover && "border-orange-600"}`}
          >
            Other
          </div>
          <div
            className={`text-[10px] sm:text-xs font-medium max-w-20 sm:max-w-32  md:max-w-40 truncate ${
              hover == true ? "text-gray-400" : "text-gray-600"
            }`}
          >
            {city}
          </div>
          <div className="text-orange-600 ">
            <IoIosArrowDown />
          </div>
        </div>
      </div>
      <div>
        {" "}
        <SideBar sideBar={sideBar} setSideBar={setSideBar} />
      </div>

      <div className="flex  gap-3 sm:hidden">
        <Link
          onClick={() => handleLinkClick("search")}
          to="/search"
          className={`flex items-center gap-2 cursor-pointer ${
            activeLink === "search" ? "text-orange-500" : ""
          }`}
        >
          <FiSearch size={20} />
        </Link>
        <Link
          onClick={() => handleLinkClick("cart")}
          to="/cart"
          className={`flex items-center  cursor-pointer ${
            activeLink === "cart" ? "text-orange-500" : ""
          }`}
        >
          <LuShoppingCart />
          {itemCount}
        </Link>
      </div>

      <ul className="sm:flex list-none hidden sm:visible sm:gap-2 md:gap-5 lg:gap-10">
        <Link
          onClick={() => handleLinkClick("search")}
          to="/search"
          className={`flex items-center gap-2 cursor-pointer hover:text-orange-500  ${
            activeLink === "search" ? "text-orange-500" : ""
          }`}
        >
          <FiSearch size={20} />
          Search
        </Link>
        <Link
          to="/about"
          onClick={() => handleLinkClick("offer")}
          className={`flex items-center gap-2 cursor-pointer hover:text-orange-500 ${
            activeLink === "offer" ? "text-orange-500" : ""
          }`}
        >
          <MdRoundaboutRight size={20} /> About
        </Link>
        <Link
          to="/contact"
          onClick={() => handleLinkClick("help")}
          className={`flex items-center gap-2 cursor-pointer hover:text-orange-500 ${
            activeLink === "help" ? "text-orange-500" : ""
          }`}
        >
          <LuContact2 size={20} /> Contact
        </Link>
        <Link
          to="/auth"
          onClick={() => handleLinkClick("login")}
          className={`flex items-center gap-2 cursor-pointer hover:text-orange-500 ${
            activeLink === "login" ? "text-orange-500" : ""
          }`}
        >
          <FaRegUser />
          Login
        </Link>

        <Link
          onClick={() => handleLinkClick("cart")}
          to="/cart"
          className={`flex items-center gap-2 cursor-pointer hover:text-orange-500 ${
            activeLink === "cart" ? "text-orange-500" : ""
          }`}
        >
          <LuShoppingCart />
          Cart {itemCount}
        </Link>
      </ul>
    </div>
  );
};

export default Header;
