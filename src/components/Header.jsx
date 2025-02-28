import React, { useState } from "react";
import { Menu, SquareX } from "lucide-react";
import { MoveRight } from 'lucide-react';
import logo from "./image/logo.png";
import { Plus } from 'lucide-react';

function Navbar2_2() {
  const [select, setSelected] = useState("trial");
  const [click, setClick] = useState(false);

  return (
    <>
      <section className="">
        <nav className="w-full flex py-3 items-center">
          {/* Logo Section */}
          <div className="w-3/12">
            <div className="flex space-x-1.5 ml-4">
              <img
                src={logo}
                alt="logo"
                className="h-12  rounded-lg"
              />
             
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="w-5/12 hidden md:flex flex-end">
            <ul className="list-none flex space-x-3 lg:space-x-6 font-semibold rounded-lg  text-base lg:text-lg border-gray-200 px-3 lg:px-5 py-1 lg:py-2 cursor-pointer">
              <li className="">Product</li>
              <li className="">Pricing</li>
              <li className="">Company</li>
              <li className="">Blog</li>
              <li className="">Changing</li>
            </ul>
          </div>

          {/* Desktop Buttons */}
          <div className="w-4/12 hidden md:flex space-x-1.5  text-base lg:text-lg justify-end mr-2 items-center">
            <div className="flex justify-center text-gray-400 items-center space-x-1.5">
              <h3
                className={` rounded-lg  cursor-pointer `}
                onClick={() => setSelected("login")}
              >
                <div className="flex flex-row  px-2 lg:px-3 py-1 lg:py-2 bg-blue-500 rounded-lg text-white">
                    <p className="flex ">Create Project</p>
                    <Plus className="flex pl-1 justify-center my-auto"/>
                </div>
              </h3>
              <h3
                className={` rounded-lg cursor-pointer `}
                onClick={() => setSelected("trial")}
              >
                <div className="flex flex-row px-2 lg:px-3 py-1 lg:py-2 bg-blue-500 rounded-lg text-white">
                    <p> Sign in</p>
                    <MoveRight className="flex justify-center pl-1 mt-1 my-auto"/>
                </div>
               
              </h3>
            </div>
          </div>

          {/* Mobile Menu Icon at Extreme Right */}
          <div className="md:hidden flex ml-auto mr-4 text-blue-500">
            <div>
              {click ? (
                <SquareX onClick={() => setClick(false)} className="cursor-pointer" />
              ) : (
                <Menu onClick={() => setClick(true)} className="cursor-pointer" />
              )}
            </div>
          </div>
        </nav>

        {/* Sidebar for Mobile View */}
        <div
          className={`fixed top-0 right-0 w-64 h-full bg-blue-300 text-white shadow-lg transform ${
            click ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-500 ease-in-out md:hidden`}
        >
          {/* Close Button */}
          <div className="flex justify-end p-4">
            <SquareX onClick={() => setClick(false)} className="cursor-pointer text-white" />
          </div>

          {/* Sidebar Links */}
          <ul className="list-none mt-12 flex justify-center flex-col space-y-4 p-6">
            <li className=" cursor-pointer">Product</li>
            <li className=" cursor-pointer">Pricing</li>
            <li className=" cursor-pointer">Company</li>
            <li className=" cursor-pointer">Blog</li>
            <li className=" cursor-pointer">Changing</li>
          </ul>
        </div>
      </section>
    </>
  );
}

export default Navbar2_2;
