import React, { useState } from 'react'
import { useAppContext } from '../../context/AppContext';
import { Link } from 'react-router-dom';
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
        className={` rounded-xl p-10 max-sm:w-[92%] max-sm:h-[400px]  mx-auto my-2  ${fonCardTemplate} flex justify-center items-center h-[500px] w-[600px]`}
      >
        <img
          src={imageTemplate}
          alt="template1"
          className={` ${
            ishover
              ? "h-[422px] w-[522px] transition-all duration-700 max-sm:h-[360px] max-sm:w-[100%]  "
              : "h-[400px] w-[500px] max-sm:h-[320px] max-sm:w-[93%]   transition-all  duration-700 "
          } object-fil z-0`}
        />
      </div>
      <div
        className={`rounded-xl w-[592px] max-sm:w-[91%]  max-sm:ms-[20px] mx-1 border absolute flex
         h-[78px] justify-center -mt-[88px] ${
           darkMode ? "bg-gray-600" : "bg-white"
         } ${
          ishover
            ? "block transition-all pt-4 duration-700 "
            : "hidden transition-all duration-700  "
        }`}
      >
        <Link
          to={handleBuy}
          className="bg-blue-500 text-blanc pb-1 text-xl rounded-full flex items-center h-[45px] px-5"
        >
          Buy
        </Link>
        <Link
          to={HandlePreview}
          className={` ${
            darkMode ? "text-blanc" : "text-gray-600 "
          } text-xl border-2 ms-4 pb-1 rounded-full flex items-center h-[45px] px-4`}
        >
          preview <FaArrowUpRightFromSquare className="text-[15px] ms-4 mt-1" />
        </Link>
      </div>
      <div className="flex justify-between px-4 w-full">
        <div>
          <Link
            to={handlePriceTo}
            className={` font-bold text-xl ${
              ishover
                ? "text-blue-500"
                : darkMode
                ? "text-blanc"
                : "text-gray-600"
            }`}
          >
            {titreCrdTemplate}
          </Link> <br />
          <Link to={handlePriceTo}>{DesctiptionTemplate}</Link>
        </div>
        <Link
          to={handlePriceTo}
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
