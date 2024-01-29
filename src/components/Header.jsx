import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import {
  MdOutlineContactPhone,
  MdOutlineLocalOffer,
  MdRoundaboutRight,
} from "react-icons/md";
import { IoMdHelpCircleOutline } from "react-icons/io";
import { FaRegUser } from "react-icons/fa6";
import { LuContact2, LuShoppingCart } from "react-icons/lu";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { FcAbout } from "react-icons/fc";

const Header = () => {
  const [activeLink, setActiveLink] = useState(null);
  const cartItem = useSelector((store) => store.cart.items);
  const itemCount = Object.keys(cartItem).length;

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <div className="flex justify-around sticky top-0 bg-white z-50 p-4 shadow-lg">
      <Link to="/">
        <img src="/swiggy.svg" alt="logo" />
      </Link>

      <ul className="flex list-none gap-10">
        <Link
          onClick={() => handleLinkClick("search")}
          to="/search"
          className={`flex items-center gap-2 cursor-pointer ${
            activeLink === "search" ? "text-orange-500" : ""
          }`}
        >
          <FiSearch size={20} />
          Search
        </Link>
        <Link
          to="/about"
          onClick={() => handleLinkClick("offer")}
          className={`flex items-center gap-2 cursor-pointer ${
            activeLink === "offer" ? "text-orange-500" : ""
          }`}
        >
          <MdRoundaboutRight size={20} /> About
        </Link>
        <li
          onClick={() => handleLinkClick("help")}
          className={`flex items-center gap-2 cursor-pointer ${
            activeLink === "help" ? "text-orange-500" : ""
          }`}
        >
          <LuContact2 size={20} /> Contact
        </li>
        <li
          onClick={() => handleLinkClick("login")}
          className={`flex items-center gap-2 cursor-pointer ${
            activeLink === "login" ? "text-orange-500" : ""
          }`}
        >
          <FaRegUser />
          Login
        </li>

        <Link
          onClick={() => handleLinkClick("cart")}
          to="/cart"
          className={`flex items-center gap-2 cursor-pointer ${
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
