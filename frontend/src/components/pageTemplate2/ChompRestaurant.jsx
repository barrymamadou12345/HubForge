import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "./images/Logo.svg";
import HeroImage from "./images/HeroImage.png";
import { BsCart2 } from "react-icons/bs";

export default function ChompRestaurant() {
  return (
    <>
      <div className="MainPage">
        <div
          id="Banner"
          className="banner flex justify-center items-center h-[50px] bg-[#35B8BE] py-[5px] px-[29.8438px]"
        >
          <div className="banner-wrap p-0 m-0">
            <div className="notice-text text-center text-15 text-white h-[20px] ">
              We're open and available for takeaway &amp; delivery.{" "}
              <Link to="#" className="white-link">
                Order Now
              </Link>
            </div>
          </div>
        </div>

        <header className="bg-white">
          <div className="mx-auto w-100 px-[37.8px] py-[20px] sm:px-6 lg:px-8 h-[100px]">
            <div className="flex h-16 items-center justify-between h-[60px]">
              <div className="flex-1 md:flex md:items-center">
                <a className="block text-teal-600" href="/">
                  <span className="sr-only">Home</span>
                  <img src={Logo} alt="" className="w-[40px] h-[51.25px]" />
                </a>
              </div>

              <div className="md:flex md:items-center">
                <nav aria-label="Global" className="hidden md:block">
                  <ul className="flex items-center text-md">
                    <li>
                      <a
                        className="text-gray-500 transition hover:text-[#35B8BE] w-[76.63] h-[60px] px-[20px] py-[16px] text-xl"
                        href="/"
                      >
                        {" "}
                        Home{" "}
                      </a>
                    </li>

                    <li>
                      <a
                        className="text-gray-500 transition hover:text-[#35B8BE] w-[76.63] h-[60px] px-[20px] py-[16px] text-xl"
                        href="/"
                      >
                        {" "}
                        Order{" "}
                      </a>
                    </li>

                    <li>
                      <a
                        className="text-gray-500 transition hover:text-[#35B8BE] w-[76.63] h-[60px] px-[20px] py-[16px] text-xl"
                        href="/"
                      >
                        {" "}
                        Company{" "}
                      </a>
                    </li>

                    <li>
                      <a
                        className="text-gray-500 transition hover:text-[#35B8BE] w-[76.63] h-[60px] px-[20px] py-[16px] text-xl"
                        href="/"
                      >
                        {" "}
                        FAQ{" "}
                      </a>
                    </li>

                    <li>
                      <a
                        className="text-gray-500 transition hover:text-[#35B8BE] w-[76.63] h-[60px] px-[20px] py-[16px] text-xl"
                        href="/"
                      >
                        {" "}
                        Contact{" "}
                      </a>
                    </li>
                  </ul>
                </nav>

                <div className="flex items-center gap-4">
                  <div className="sm:flex sm:gap-4">
                    <a
                      className="flex justify-center items-center rounded-md bg-teal-600 text-sm font-medium text-white shadow w-[65px] h-[65px] p-[13px]"
                      href="#"
                    >
                      <BsCart2 className="text-2xl" />
                    </a>
                  </div>

                  <div className="block md:hidden">
                    <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4 6h16M4 12h16M4 18h16"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        <div className="md:flex md:items-center h-[814.03px] py-[100px] px-[40px]">
          <div className="secContentG w-[50%]">
            <h1 className="my-[20px] mx-0 w-auto h-[180px] text-6xl font-bold">
              Beautiful food &amp; takeaway,{" "}
              <span className="brand-span">delivered</span> to your door.
            </h1>
            <p className="w-auto h-[72.33px] mb-[100px] text-[20px] font-bold text-[#546285]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500.
            </p>
            <Link
              className="flex align-center items-center w-[195.66px] h-[60px] inline-block rounded border text-[18px] px-[35px] py-[20px] text-md font-medium text-white bg-[#35B8BE]"
              to="#"
            >
              Place an Order
            </Link>
          </div>
          <div
            className="secContentD bg-no-repeat bg-center bg-contain h-screen w-[50%]"
            style={{ backgroundImage: `url(${HeroImage})` }}
          >
          </div>
        </div>
      </div>
    </>
  );
}
