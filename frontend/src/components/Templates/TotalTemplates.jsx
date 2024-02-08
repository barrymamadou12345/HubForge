import React from "react";
import { CardesTemplate } from "../composPageAccueil/CardesTemplate";
import { CardsTemplateContenu } from "../Utils/UtilsTemplates";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";
import { NavBarPageAccueil } from "../composPageAccueil/NavBarPageAccueil";
import { useAppContext } from "../../context/AppContext";

export const TotalTemplates = () => {
  const { darkMode } = useAppContext();
  return (
    <div
      className={`${darkMode ? " bg-gray-900 text-white" : "border-gray-100"}`}
    >
      <div
        className={`border-b-2 max-sm:px-4 px-20 max-sm:border-0 pb-3 ${
          darkMode ? " border-gray-400" : "border-gray-100"
        }`}
      >
        <NavBarPageAccueil />
      </div>
      <div className={` w-full mt-14 px-6`}>
        <h1 className={`text-center text-4xl font-bold italic text-gray-600`}>
          Transformez votre
          <span> vision en réalité </span>
          <span> simplement</span>
        </h1>
        <p
          className={`text-center pb-14 pt-8 italic text-xl font-[400] text-gris`}
        >
          Concrétiser vos idées et votre vision grâce à des modèles de sites{" "}
          <br /> vitrines et des dashboards.
        </p>
      </div>

      <div className="w-full flex justify-center mb-20">
        <Link to="/">
          <button
            className={`text-white font-bold px-10 rounded-full hover:bg-[#161818] py-3 text-2xl flex bg-[#20143de4] ${
              darkMode ? "bg-blue-800" : ""
            }`}
          >
            <span>
              <FaArrowLeft className="text-4xl pe-4  animate-pulse" />
            </span>
            Accueil
          </button>
        </Link>
      </div>
      <div
        className={`mt-8 max-sm:mx-4 md:mx-24 flex justify-around flex-wrap`}
      >
        {CardsTemplateContenu.map((card, index) => (
          <CardesTemplate {...card} key={index} />
        ))}
      </div>
    </div>
  );
};
