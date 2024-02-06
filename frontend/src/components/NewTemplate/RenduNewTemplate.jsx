import React from "react";
import { NavbarNewTemp } from "./NavbarNewTemp";
import Image1 from "../../assets/images/img1.jpg";
import Image8 from "../../assets/images/img8.jpg";
import { IoSearch } from "react-icons/io5";
import { NewTempSec2 } from "./NewTempSec2";
import { NewTempSec3 } from "./NewTempSec3";
import { NewTempSec4 } from "./NewTempSec4";
import { NewTempFooter } from "./NewTempFooter";

export const RenduNewTemplate = () => {
  return (
    <div>
      <div className="">
        <NavbarNewTemp />
      </div>

      <div className="mx-auto px-16 max-w-8xl mt-24">
        <div className="flex flex-wrap max-xl:justify-center justify-between w-full">
          <div className="w-[650px] py-4">
            <h1 className="text-green-600 text-2xl ">Grow yourself with us</h1>
            <p className="text-7xl pt-6 font-bold leading-[85px] text-gray-700">
              Grow your skill & get world class job's
            </p>
            <p className="text-2xl pt-10 text-gray-800">
              Non-disclosure agreement seed round seed money accelerator
              influencer. Growth hacking return nondis sure agreement seed round
              seed .
            </p>
            <div className="w-full flex mt-8 ms-4 max-sm:pe-8">
              <div class="relative flex items-center sm:w-4/5">
                <IoSearch className="-me-8 text-xl text-gray-600" />
                <input
                  name="email"
                  type="search"
                  placeholder="Search course title"
                  class="relative h-16 text-xl w-full rounded-xl border outline-blue-500 bg-transparent py-2.5 pl-10 pr-5  tracking-wide placeholder-gray-500  dark:border-gray-600 dark:placeholder-gray-200"
                />
              </div>
              <button className="px-10 -ms-8 z-10 bg-[#21a57e] rounded-lg text-white text-xl">
                Log In
              </button>
            </div>
          </div>
          <div className="w-[600px] max-sm:mt-12">
            <img src={Image1} alt="image" />
          </div>
        </div>
      </div>
      <div>
        <NewTempSec2 />
      </div>
      <div className="w-full mt-20 max-sm:px-6">
        <p className="text-7xl pt-6 font-bold text-center text-gray-700">
          How it works
        </p>
        <p className="text-2xl pt-6 text-center text-gray-800">
          Non-disclosure agreement seed round seed <br /> money accelerator
          influencer.
        </p>
      </div>

      <div>
        <NewTempSec3 />
      </div>

      <div className="w-full my-20 max-sm:px-6">
        <p className="text-6xl pt-6 font-bold text-center text-gray-700">
          Our popular courses
        </p>
        <p className="text-2xl pt-6 text-center text-gray-800">
          Non-disclosure agreement seed round seed <br /> money accelerator
          influencer.
        </p>
      </div>

      <div>
        <NewTempSec4 />
      </div>

      <div className="mx-auto px-16 max-w-7xl mt-2">
        <div className="flex flex-wrap max-xl:justify-center justify-between w-full items-center">
          <div className="w-[500px]">
            <img
              src={Image8}
              alt="image"
              className="w-full h-[580px] max-sm:h-[480px]"
            />
          </div>
          <div className="w-[650px] py-4">
            <p className="text-5xl pt-6 font-bold leading-[85px] text-gray-700">
              Do you have any query?
            </p>
            <p className="text-2xl text-gray-800">
              Non-disclosure agreement seed.
            </p>
            <div className="w-full flex mt-6 ms-4 max-sm:pe-8">
              <div class="relative flex items-center sm:w-4/5">
                <IoSearch className="-me-8 text-xl text-gray-600" />
                <input
                  name="email"
                  type="search"
                  placeholder="Search course title"
                  class="relative h-16 text-xl w-full rounded-xl border outline-blue-500 bg-transparent py-2.5 pl-10 pr-5  tracking-wide placeholder-gray-500  dark:border-gray-600 dark:placeholder-gray-200"
                />
              </div>
              <button className="px-10 -ms-8 z-10 bg-[#21a57e] rounded-lg text-white text-xl">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>

      <div>
        <NewTempFooter />
      </div>
    </div>
  );
};
