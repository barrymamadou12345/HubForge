import React, { useState } from "react";
import { RoutesTemplates } from "./RoutesTemplates";
import { useAppContext } from "../../context/AppContext";
import { NavBarPageAccueil } from "./NavBarPageAccueil";
import { CardesTemplate } from "./CardesTemplate";
import { CardsTemplateContenu } from "../Utils/UtilsTemplates";

export const PageAccueil = () => {
  const { darkMode} = useAppContext();
  return (
    <div
      className={`min-h-[132vw] ${
        darkMode ? "bg-noir text-blanc" : "bg-blanc text-noir"
      }`}
    >
      <div>
        <div
          className={`border-b-2 max-sm:px-4 px-20 max-sm:border-0 pb-3 ${
            darkMode ? " border-gray-900" : "border-gray-100"
          }`}
        >
          <NavBarPageAccueil />
        </div>

        <div className={` w-full mt-16 ${darkMode ? "" : ""}`}>
          <h1
            className={`text-center text-6xl font-bold leading-[66px] ${
              darkMode ? "text-blanc" : " text-blue-900"
            }`}
          >
            Build Stunning <br /> <span>Websites</span>
          </h1>
          <p
            className={`text-center py-14 text-xl font-[400] ${
              darkMode ? "text-blanc" : "text-gris"
            }`}
          >
            Create a unique website with our easy-to-customize templates.
          </p>
        </div>
        <div
          className={`mt-8 max-sm:mx-4 md:mx-24 flex justify-around flex-wrap`}
        >
          {CardsTemplateContenu.map((card, index) => (
            <CardesTemplate {...card} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};
