import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BiLoaderCircle } from "react-icons/bi";
export const NavbarNewTemp = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="">
      <div className=" py-4 mx-auto max-w-8xl px-8 sm:px-12 lg:px-8 xl:px-16">
        <div className="flex flex-wrap justify-between lg:items-center">
          <div className="relative z-30 flex w-full items-center justify-between overflow-hidden lg:w-auto">
            <Link to="/" className="flex items-center">
              <BiLoaderCircle className={`text-[37px] me-3`} />
              <h1 className="font-bold text-gray-600 text-[28px]">Logo</h1>
            </Link>
            <button
              aria-label="hamburger"
              id="hamburger"
              className="-mr-6 p-6 lg:hidden"
              onClick={toggleMenu}
            >
              <div
                aria-hidden="true"
                className="m-auto h-0.5 w-6 rounded bg-primary transition duration-300"
              ></div>
              <div
                aria-hidden="true"
                className="m-auto mt-2 h-0.5 w-6 rounded bg-primary transition duration-300"
              ></div>
            </button>
          </div>
          <div
            id="navlinks"
            className={`fixed inset-0 z-20  ${
              isMenuOpen
                ? "bg-white/90 backdrop-blur-3xl flex items-center justify-center"
                : "hidden bg-white/90 backdrop-blur-3xl "
            } lg:static lg:block lg:h-auto lg:w-auto lg:bg-transparent lg:backdrop-blur-none`}
          >
            <ul className=" max-lg:-mt-80 group flex flex-col items-center gap-6 text-lg text-stone-000 dark:text-stone-300 lg:flex-row lg:gap-0 lg:text-sm ">
              <li className=" text-right transition duration-500  group-hover:text-stone-300 lg:text-left">
                <Link
                  to="#"
                  className="block px-6 py-1 hover:text-green-600 text-xl"
                >
                  About Us
                </Link>
              </li>
              <li className="text-right transition duration-500 group-hover:text-stone-300 lg:text-left">
                <Link
                  to="#"
                  className="block px-6 py-1 hover:text-green-600 text-xl"
                >
                  Courses
                </Link>
              </li>
              <li className="text-right transition duration-500 group-hover:text-stone-300 lg:text-left">
                <Link
                  to="#"
                  className="block px-6 py-1 hover:text-green-600 text-xl"
                >
                  Resources
                </Link>
              </li>
              <li className="text-right transition duration-500 group-hover:text-stone-300 lg:text-left">
                <Link
                  to="#"
                  className="block px-6 py-1 hover:text-green-600 text-xl"
                >
                  Online Learning
                </Link>
              </li>
              <li className="text-right group-hover:text-stone-300 lg:pl-6 lg:text-left">
                <button className="px-6 pt-2 pb-3  bg-[#21a57e] rounded-xl text-white text-xl">
                  Log In
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
