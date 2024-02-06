import React from "react";
import Image4 from "../../assets/images/img5.jpg";
import Image5 from "../../assets/images/img6.jpg";
import Image6 from "../../assets/images/img7.jpg";
import { HiStar } from "react-icons/hi";
import { PiUsersThin } from "react-icons/pi";
export const NewTempSec4 = () => {
  return (
    <div className="mx-auto px-16 max-w-8xl mt-24 flex flex-wrap max-xl:justify-center justify-between mb-16 ">
      <div className="border-2 border-gray-200 rounded-xl p-8">
        <div className="">
          <img
            src={Image4}
            alt="image"
            className="rounded-xl w-[380px] h-[300px] max-sm:h-[240px]"
          />
        </div>
        <p className="text-2xl pt-8 font-bold text-gray-600">
          Graphic design course
        </p>
        <div className="flex justify-between items-center">
          <div className="flex mt-8">
            <HiStar className="text-yellow-500 text-2xl" />
            <HiStar className="text-yellow-500 text-2xl" />
            <HiStar className="text-yellow-500 text-2xl" />
            <HiStar className="text-yellow-500 text-2xl" />
            <HiStar className="text-yellow-500 text-2xl" />
          </div>
          <p className="text-green-600 text-sm mt-8">$119.99</p>
        </div>
        <div className="flex items-center mt-8">
          <PiUsersThin className="text-gray-500 text-2xl" />
          <p className="text-gray-500 text-sm ms-2">25K+ Students</p>
        </div>
      </div>

      <div className="border-2 border-gray-200 rounded-xl p-8 max-sm:mt-6">
        <div className="">
          <img
            src={Image5}
            alt="image"
            className="rounded-xl w-[380px] h-[300px] max-sm:h-[240px]"
          />
        </div>
        <p className="text-2xl pt-8 font-bold text-gray-600">
          Illustration design course
        </p>
        <div className="flex justify-between items-center">
          <div className="flex mt-8">
            <HiStar className="text-yellow-500 text-2xl" />
            <HiStar className="text-yellow-500 text-2xl" />
            <HiStar className="text-yellow-500 text-2xl" />
            <HiStar className="text-yellow-500 text-2xl" />
            <HiStar className="text-yellow-500 text-2xl" />
          </div>
          <p className="text-green-600 text-sm mt-8">$119.99</p>
        </div>
        <div className="flex items-center mt-8">
          <PiUsersThin className="text-gray-500 text-2xl" />
          <p className="text-gray-500 text-sm ms-2">25K+ Students</p>
        </div>
      </div>

      <div className="border-2 border-gray-200 rounded-xl p-8 max-sm:mt-6">
        <div className="">
          <img
            src={Image6}
            alt="image"
            className="rounded-xl w-[380px] h-[300px] max-sm:h-[240px]"
          />
        </div>
        <p className="text-2xl pt-8 font-bold text-gray-600">
          UI/UX design course
        </p>
        <div className="flex justify-between items-center">
          <div className="flex mt-8">
            <HiStar className="text-yellow-500 text-2xl" />
            <HiStar className="text-yellow-500 text-2xl" />
            <HiStar className="text-yellow-500 text-2xl" />
            <HiStar className="text-yellow-500 text-2xl" />
            <HiStar className="text-yellow-500 text-2xl" />
          </div>
          <p className="text-green-600 text-sm mt-8">$119.99</p>
        </div>
        <div className="flex items-center mt-8">
          <PiUsersThin className="text-gray-500 text-2xl" />
          <p className="text-gray-500 text-sm ms-2">25K+ Students</p>
        </div>
      </div>
    </div>
  );
};
