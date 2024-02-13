import React from "react";
import { CardesTemplate } from "../composPageAccueil/CardesTemplate";
import { CardsTemplateContenu } from "../Utils/UtilsTemplates";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";
import { useAppContext } from "../../context/AppContext";
import { HubForgeHeader } from "../composPageAccueil/HubForgeHeader";

export const TotalTemplates = () => {
  const { darkMode } = useAppContext();
  return (
    <div
      className={`${darkMode ? " bg-gray-900 text-white" : "border-gray-100"}`}
    >
      <div>
        <HubForgeHeader
          arrowDirect={
            <FaArrowLeft className="text-[32px] pt-1 ps-4  animate-pulse" />
          }
          directionPage={"/"}
          pageName={"Templats"}
          pixels={"px-8"}
        />
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
