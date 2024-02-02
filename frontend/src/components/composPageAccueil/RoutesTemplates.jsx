import React, { useContext } from 'react'
import { Link } from "react-router-dom";
import { useAppContext } from '../../context/AppContext';
export const RoutesTemplates = () => {
  const { darkMode } = useAppContext();
  return (
    <div>
      <div
        className={`py-4 flex justify-center ${
          darkMode ? "bg-red-200 text-bleu"
            : "bg-gray-200 text-gray-800"
        }`}
      >
        <div className="flex m-auto w-7/12 justify-around">
          <p className="text-2xl italic me-24">Page d'accueil </p>
          <Link className="text-xl italic" to="template1">
            Template1
          </Link>
          <Link className="text-xl italic" to="template2">
            Template2
          </Link>
          <Link className="text-xl italic" to="template3">
            Template3
          </Link>
          <Link className="text-xl italic" to="template4">
            Template4
          </Link>
        </div>
      </div>
    </div>
  );
};
