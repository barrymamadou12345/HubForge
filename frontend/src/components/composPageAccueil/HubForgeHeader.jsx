import React from "react";
import { useAppContext } from "../../context/AppContext";
import { NavBarPageAccueil } from "./NavBarPageAccueil";
import { Link } from "react-router-dom";

export const HubForgeHeader = ({ directionPage, pageName, arrowDirect ,pixels,}) => {
  const { darkMode } = useAppContext();
  return (
    <div>
      <div
        className={`border-b-2 max-sm:px-4 px-20 max-sm:border-0 pb-3 ${
          darkMode ? " border-gray-900" : "border-gray-100"
        }`}
      >
        <NavBarPageAccueil />
      </div>
      <div className={` w-full mt-14 px-6 ${darkMode ? "" : ""}`}>
        <h1
          className={`text-center text-6xl font-bold leading-[66px] ${
            darkMode ? "text-blanc" : " text-bluq"
          }`}
        >
          Transformez votre <br />
          <span>vision en réalité </span> <br />
          <span>simplement</span>
        </h1>
        <p
          className={`text-center py-14 text-xl font-[400] ${
            darkMode ? "text-blanc" : "text-gris"
          }`}
        >
          Concrétiser vos idées et votre vision grâce à des modèles de sites
          vitrines et des dashboards.
        </p>
      </div>

      <div className="w-full flex justify-center mb-14">
        <Link to={directionPage}>
          <button
            className={`text-white font-bold ${pixels} rounded-full hover:bg-[#34296f] py-2 items-center text-xl flex bg-[#221246] ${
              darkMode ? "bg-blue-800" : ""
            }`}
          >
            {pageName}
            {arrowDirect}
          </button>
        </Link>
      </div>
    </div>
  );
};
