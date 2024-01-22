import React from "react";
import { FiSearch } from "react-icons/fi";
import { MdOutlineLocalOffer } from "react-icons/md";
import { IoMdHelpCircleOutline } from "react-icons/io";
import { FaRegUser } from "react-icons/fa6";
import { LuShoppingCart } from "react-icons/lu";

const Header = () => {
  return (
    <div className="flex justify-around sticky top-0 bg-white z-50 p-4 shadow-lg ">
      <img src="/swiggy.svg" alt="logo" />

      <ul className="flex list-none gap-14 ">
        <li className=" flex items-center gap-2 cursor-pointer">
          <FiSearch />
          Search
        </li>
        <li className=" flex items-center gap-2 cursor-pointer">
          <MdOutlineLocalOffer /> Offer
        </li>
        <li className=" flex items-center gap-2 cursor-pointer">
          <IoMdHelpCircleOutline /> Help
        </li>
        <li className=" flex items-center gap-2 cursor-pointer">
          <FaRegUser />
          Login
        </li>
        <li className=" flex items-center gap-2 cursor-pointer">
          <LuShoppingCart />
          Cart
        </li>
      </ul>
    </div>
  );
};

export default Header;
