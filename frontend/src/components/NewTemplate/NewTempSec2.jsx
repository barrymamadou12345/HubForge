import React from "react";
import Image2 from "../../assets/images/img2.jpg";

export const NewTempSec2 = () => {
  return (
    <div className="mx-auto px-16 max-w-7xl mt-24">
      <div className="flex flex-wrap max-xl:justify-center justify-between w-full">
        <div className="w-[540px] max-sm:mx-auto max-sm:mt-2">
          <img src={Image2} alt="image" />
        </div>
        <div className="w-[600px] py-4">
          <p className="text-6xl pt-6 font-bold leading-[75px] text-gray-700">
            Over 1M+ Students get's job
          </p>
          <p className="text-2xl pt-10 leading-[40px] text-gray-800">
            Non-disclosure agreement seed round seed money accelerator
            influencer. Growth hacking return nondis sure .
          </p>
          <p className="text-2xl pt-4 leading-[40px] text-gray-800">
            Non-disclosure agreement seed round seed money accelerator
            influencer.
          </p>
          <div className="w-full flex mt-8 ms-4 max-sm:pe-8">
            <button className="px-10 py-4 z-10 bg-[#21a57e] rounded-lg hover:bg-transparent hover:text-green-600 hover:border-green-400 hover:border text-white text-xl">
              Explore me
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
