import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useAppContext } from "../../context/AppContext";
import { CardsTemplateContenu2 } from "../Utils/UtilsTemplates";
import { CardesTemplate } from "./CardesTemplate";
import { FooterPageAcueil } from "./FooterPageAcueil";
import { HubForgeHeader } from "./HubForgeHeader";

export const PageAccueil = () => {
  const { darkMode } = useAppContext();
  return (
    <div
      className={`min-h-[132vw] ${
        darkMode ? "bg-noir text-blanc" : "bg-blanc text-noir"
      }`}
    >
      <div>
        <div>
          <HubForgeHeader
            pageName={"Dashbords"}
            directionPage={"/dashbords"}
            arrowDirect={
              <FaArrowRight className="text-[32px] pt-1 ps-4  animate-pulse" />
            }
            pixels={"px-6"}
          />
        </div>
        <div
          className={`mt-8 max-sm:mx-4 md:mx-24 flex justify-around flex-wrap`}
        >
          {CardsTemplateContenu2.map((card, index) => (
            <CardesTemplate {...card} key={index} />
          ))}
        </div>
      </div>
      <div className="mb-4">
        <FooterPageAcueil />
      </div>
    </div>
  );
};
