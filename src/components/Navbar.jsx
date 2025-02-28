import React from "react";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi"; 
import logo from "./image/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full h-20 flex justify-between items-center px-6 md:px-10 bg-white shadow-md fixed top-0 z-50">
      <div className="w-3/12">
            <div className="flex space-x-1.5 ml-4">
              <img
                src={logo}
                alt="logo"
                className="h-12  rounded-lg"
              />
             
            </div>
          </div>

      <ul className="hidden md:flex space-x-6 text-lg">
        <li>
          <a href="#" className="hover:text-blue-500">
            Home
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-blue-500">
            Features
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-blue-500">
            About
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-blue-500">
            Contact
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-blue-500">
            Pricing
          </a>
        </li>
      </ul>

  
      <div className="hidden md:flex space-x-4">
        <button className="border border-blue-500 text-blue-500 px-4 py-2 rounded-md hover:bg-blue-500 hover:text-white transition">
          Sign in →
        </button>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition">
          Create project +
        </button>
      </div>

      <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-3xl">
        {isOpen ? <FiX /> : <FiMenu />}
      </button>

      {isOpen && (
        <div className="absolute top-20 left-0 w-full bg-white shadow-md flex flex-col items-center space-y-6 py-6 text-lg md:hidden">
          <a href="#" className="hover:text-blue-500">
            Home
          </a>
          <a href="#" className="hover:text-blue-500">
            Features
          </a>
          <a href="#" className="hover:text-blue-500">
            About
          </a>
          <a href="#" className="hover:text-blue-500">
            Contact
          </a>
          <a href="#" className="hover:text-blue-500">
            Pricing
          </a>
          <button className="border border-blue-500 text-blue-500 px-4 py-2 rounded-md hover:bg-blue-500 hover:text-white transition">
            Sign in →
          </button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition">
            Create project +
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
