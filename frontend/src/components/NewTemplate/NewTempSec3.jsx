import React from "react";
import Image3 from "../../assets/images/img3.jpg";
import { SlDocs } from "react-icons/sl";
import { PiCurrencyDollarSimple } from "react-icons/pi";
import { HiOutlineUserCircle } from "react-icons/hi2";

export const NewTempSec3 = () => {
  return (
    <div className="mx-auto px-16 max-w-8xl mt-24 ">
      <div className="flex flex-wrap max-xl:justify-center justify-between w-full">
        <div className="w-[600px] py-4">
          <div className="bg-white rounded-2xl shadow-2xl shadow-gray-500 p-6">
            <div className="flex ">
              <SlDocs className="text-5xl mt-6 me-4 text-green-400" />
              <div className="">
                <p className="text-4xl pt-6 font-bold text-gray-600">
                  Select a course
                </p>
                <p className="text-2xl pt-8 leading-[35px] text-gray-800">
                  Non-disclosure agreement seed round seed money accelerator
                  influencer.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-2xl mt-6  p-6">
            <div className="flex">
              <PiCurrencyDollarSimple className="text-5xl mt-6 me-4 text-green-400" />
              <div className="">
                <p className="text-4xl pt-6 font-bold text-gray-600 ">
                  Fill it up & give payment
                </p>
                <p className="text-2xl pt-8 leading-[35px] text-gray-800">
                  Non-disclosure agreement seed round seed money accelerator
                  influencer.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-2xl mt-6 p-6">
            <div className="flex">
              <HiOutlineUserCircle className="text-5xl mt-6 me-4 text-green-400" />
              <div className="">
                <p className="text-4xl pt-6 font-bold text-gray-600">
                  Start build yourself
                </p>
                <p className="text-2xl pt-8 leading-[35px] text-gray-800">
                  Non-disclosure agreement seed round seed money accelerator
                  influencer.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[600px] max-sm:mx-auto max-sm:mt-2">
          <img src={Image3} alt="image" />
        </div>
      </div>
    </div>
  );
};
