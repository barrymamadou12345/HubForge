import React, { useState } from "react";
import { useAppContext } from "../../context/AppContext";
import { Link } from "react-router-dom";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

export const CardesTemplate = ({
  HandlePreview,
  handleBuy,
  imageTemplate,
  fonCardTemplate,
  handlePriceTo,
  titreCrdTemplate,
  DesctiptionTemplate,
  prixTemplate,
}) => {
  const [ishover, setIsHover] = useState(false);
  const { darkMode } = useAppContext();

  const hoverMethode = () => {
    setIsHover(true);
  };
  const hoveredMethode = () => {
    setIsHover(false);
  };
  return (
    <div
      className="relative mb-12"
      onMouseEnter={hoverMethode}
      onMouseLeave={hoveredMethode}
    >
      <div
        className={` rounded-xl p-10 max-sm:w-[92%] max-sm:h-[400px]  mx-auto my-2  ${fonCardTemplate} flex justify-center items-center h-[475px] w-[550px]`}
      >
        <img
          src={imageTemplate}
          alt="template1"
          className={` ${
            ishover
              ? "hover:scale-105 transition-all duration-700 "
              : "  transition-all  duration-700 "
          } h-[400px] w-[500px] object-fil max-sm:h-[330px] max-sm:w-[100%] z-0`}
        />
      </div>
      <div
        className={`rounded-xl w-[542px] max-sm:w-[91%]  max-sm:ms-[20px] mx-1 absolute flex
         h-[78px] justify-center -mt-[88px] ${
           darkMode ? "bg-gray-700" : "bg-white"
         } ${ishover ? "block" : "hidden "}`}
      >
        <Link
          to={handleBuy}
          className={`bg-blue-950 mt-5 hover:scale-105 transition-all duration-500 text-blanc pb-1 text-xl rounded-full flex items-center h-[40px] px-5`}
        >
          Buy
        </Link>
        <Link
          to={HandlePreview}
          target="_blank"
          className={` ${
            darkMode ? " hover:bg-black text-blanc" : "text-gray-600"
          } text-xl hover:scale-105 transition-all duration-500 border border-gray-400 ms-4 pb-1 mt-5 rounded-full flex items-center h-[40px] px-4 `}
        >
          preview <FaArrowUpRightFromSquare className="text-[15px] ms-4 mt-1" />
        </Link>
      </div>
      <div className="flex justify-between px-4 w-full">
        <div>
          <Link
            to={handlePriceTo}
            target="_blank"
            className={` font-bold text-xl ${
              ishover
                ? "text-blue-500"
                : darkMode
                ? "text-blanc"
                : "text-gray-600"
            }`}
          >
            {titreCrdTemplate}
          </Link>
          <br />
          <Link to={handlePriceTo} target="_blank">
            {DesctiptionTemplate}
          </Link>
        </div>
        <Link
          to={handlePriceTo}
          target="_blank"
          className={`text-lg font-[350] ${
            darkMode ? "text-blanc" : "text-gray-600"
          }`}
        >
          {prixTemplate}
        </Link>
      </div>
    </div>
  );
};
