import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white">
      <div className=" w-[50%] mx-auto flex flex-row justify-between items-center p-3">
        <NavLink to="/" className="text-2xl font-bold">
          <img
            className="w-10"
            src="https://e7.pngegg.com/pngimages/324/868/png-clipart-online-shopping-e-commerce-retail-digital-marketing-e-commerce-text-retail-thumbnail.png"
            alt="logo"
          />
        </NavLink>
        <div className="flex flex-row items-center gap-3">
          <NavLink to="/" className="flex flex-row items-center gap-1">
            <p className="text-sm font-bold uppercase">Home</p>
          </NavLink>
          <NavLink to="/cart" className="flex flex-row items-center gap-1">
            <FaShoppingCart />
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
