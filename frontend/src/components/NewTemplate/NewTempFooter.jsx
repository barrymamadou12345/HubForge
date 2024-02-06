import React from "react";
import { BiLoaderCircle } from "react-icons/bi";
import { TbBrandFacebook } from "react-icons/tb";
import { FiTwitter } from "react-icons/fi";
import { CiLinkedin } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa6";

export const NewTempFooter = () => {
  return (
    <div className="mx-auto px-16 max-w-8xl mt-24 bg-gray-800 text-white">
      <div className="mx-auto space-y-8 px-4 py-16 sm:px-6 lg:space-y-10 lg:px-6">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <div className="flex items-center">
              <BiLoaderCircle className={`text-[37px] me-3`} />
              <h1 className="font-bold text-[28px]">Logo</h1>
            </div>
            <p className="mt-4 max-w-lg text-xl">
              Non-disclosure agreement seed round seed money accelerator
              influencer. Growth hacking return nondis sure agreement .
            </p>

            <ul className="mt-8 flex gap-8  ">
              <TbBrandFacebook className={`text-[30px] me-3`} />
              <FiTwitter className={`text-[30px] me-3`} />
              <CiLinkedin className={`text-[30px] me-3`} />
              <FaInstagram className={`text-[30px] me-3`} />
            </ul>
          </div>

          <div className=" justify-center grid grid-cols-1 gap-24 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-3">
            <div className="mx-auto">
              <p className="text-xl text-white font-bold">About Product</p>

              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <a href="#" className=" text-lg transition hover:opacity-75">
                    Patch
                  </a>
                </li>

                <li>
                  <a href="#" className=" text-lg transition hover:opacity-75">
                    Updates
                  </a>
                </li>

                <li>
                  <a href="#" className=" text-lg transition hover:opacity-75">
                    Beta test
                  </a>
                </li>

                <li>
                  <a href="#" className=" text-lg transition hover:opacity-75">
                    Pricing product
                  </a>
                </li>
              </ul>
            </div>

            <div className="mx-auto">
              <p className="text-xl text-white font-bold">Help and Solutions</p>

              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <a href="#" className=" text-lg transition hover:opacity-75">
                    Talk to support
                  </a>
                </li>

                <li>
                  <a href="#" className=" text-lg transition hover:opacity-75">
                    Support docs
                  </a>
                </li>

                <li>
                  <a href="#" className=" text-lg transition hover:opacity-75">
                    Systèm Status
                  </a>
                </li>
              </ul>
            </div>

            <div className="mx-auto">
              <p className="text-xl text-white font-bold">Support</p>

              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <a href="#" className=" text-lg transition hover:opacity-75">
                    Help center
                  </a>
                </li>

                <li>
                  <a href="#" className=" text-lg transition hover:opacity-75">
                    Account information
                  </a>
                </li>

                <li>
                  <a href="#" className=" text-lg transition hover:opacity-75">
                    About
                  </a>
                </li>

                <li>
                  <a href="#" className=" text-lg transition hover:opacity-75">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex justify-between flex-wrrap">
          <p className="text-xl text-gray-200 font-light">
            &copy; skillhub, 2022
          </p>
          <p className="text-xl text-gray-200 font-light">
            Terms and Conditions · Privacy Policy
          </p>
        </div>
      </div>
    </div>
  );
};
