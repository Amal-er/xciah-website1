import React from "react";
import logo from "../assets/images/logo1.png";
import { FaSearch, FaUser } from "react-icons/fa"; // Importing icons

function Header() {
  return (
    <div className="w-full h-24 flex justify-between items-center px-8 md:px-10">
      {/* Logo */}
      <div className="w-60">
        <img src={logo} alt="Logo" />
      </div>

      {/* Links */}
      <div className="hidden lg:flex space-x-6">
        <a href="#link1" className="text-blue-600 hover:underline">
          Link 1
        </a>
        <a href="#link2" className="text-blue-600 hover:underline">
          Link 2
        </a>
        <a href="#link3" className="text-blue-600 hover:underline">
          Link 3
        </a>
        <a href="#link4" className="text-blue-600 hover:underline">
          Link 4
        </a>
        <a href="#link5" className="text-blue-600 hover:underline">
          Link 5
        </a>
      </div>

      {/* Right Section with icons and button */}
      <div className="flex items-center space-x-6">
        {/* Demo & Pricing */}
        <div className="hidden lg:flex space-x-4">
          <p className="cursor-pointer">Demo</p>
          <p className="cursor-pointer">Pricing</p>
        </div>

        {/* Icons for Search and Profile */}
        <div className="flex  items-center space-x-4 ">
          <FaSearch className="text-gray-600 cursor-pointer" size={20} />{" "}
          {/* Search Icon */}
          <FaUser className="text-gray-600 cursor-pointer" size={20} />{" "}
          {/* Profile Icon */}
        </div>

        {/* Get Free Button */}
        <div className="hidden lg:block">
          <button className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700">
            Get Free
          </button>
        </div>
      </div>

      {/* Mobile Menu Button */}
      <div className="hidden   items-center space-x-4">
        <FaSearch className="text-gray-600 cursor-pointer" size={20} />{" "}
        {/* Search Icon */}
        <FaUser className="text-gray-600 cursor-pointer" size={20} />{" "}
        {/* Profile Icon */}
      </div>
    </div>
  );
}

export default Header;
