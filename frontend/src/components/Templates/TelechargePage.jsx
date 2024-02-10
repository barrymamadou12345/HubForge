// TelechargePage.jsx
import React from "react";
import { Link, useParams } from "react-router-dom";
import {
  CardsTemplateContenu,
  CardsTemplateContenu2,
} from "../Utils/UtilsTemplates";
import { FaArrowRight } from "react-icons/fa6";
import { GoTriangleRight } from "react-icons/go";

const TelechargePage = () => {
  const { templateId } = useParams();
  let templateData;

  if (templateId === "template10" || templateId === "template11") {
    templateData = CardsTemplateContenu.find(
      (template) => template.telechargeLink === `/telecharge/${templateId}`
    );
  } else if (
    templateId === "template1" ||
    templateId === "template2" ||
    templateId === "template3" ||
    templateId === "template4" ||
    templateId === "template5" ||
    templateId === "template6" ||
    templateId === "template7" ||
    templateId === "template8" ||
    templateId === "template9"
  ) {
    templateData = CardsTemplateContenu2.find(
      (template) => template.telechargeLink === `/telecharge/${templateId}`
    );
  }

  return (
    <div>
      <div
        className={`flex flex-wrap max-lg:justify-center p-10  h-screen max-lg:h-auto ${templateData.fonCardTemplate}`}
      >
        <img
          src={templateData.imageTemplate}
          className="w-6/12 h-[480px] max-lg:h-[420px] rounded-3xl hover:scale-105 animation-all duration-500 max-lg:w-[650px] max-lg:m-auto max-md:w-10/12 max-sm:w-full"
          alt="L'image du Template"
        />

        <div className="px-4  w-6/12 max-lg:w-full flex justify-center">
          <div className=" max-lg:mt-4">
            <h1 className="text-[#20143de4] ps-4 italic font-bold text-4xl max-md:text-2xl">
              <span className="text-2xl font-bold  text-black ">Titre : </span>
              {templateData.titreCrdTemplate}
            </h1>

            <h2 className="text-[#20143de4] px-4 italic  text-xl max-md:text-xl">
              <span className="text-2xl font-bold pe-3 text-black ">
                Description :
              </span>
              {templateData.DesctiptionTemplate}
            </h2>

            <h3 className="flex items-center pt-1 text-[#20143de4] ps-4 italic  text-xl max-md:text-xl">
              <span className="text-2xl font-bold pe-3 text-black ">
                Prix :
              </span>
              {templateData.prixTemplate}
            </h3>
            <h2 className="text-[#120320e4] font-bold px-4 pt-4 italic  text-xl max-md:text-xl">
              Types de Code :
            </h2>
            <div className="bg-re0 w-full ms-14 max-md:ms-0">
              {templateId !== "template10" && templateId !== "template11" && (
                <div>
                  <h2 className="text-[#08601be8] flex font-bold p-4 italic  text-xl max-md:text-xl">
                    <span>
                      <FaArrowRight className="text-4xl pe-4  animate-pulse" />
                    </span>
                    HTML - TailwindCss
                  </h2>
                  <Link
                    to={templateData.handleDownloadHtml}
                    className={` bg-[#08601be8] w-[280px] hover:scale-105 transition-all duration-500 text-blanc italic text-xl rounded-full flex items-center h-[50px] px-5`}
                  >
                    Télécharger version HTML
                  </Link>
                </div>
              )}
              {templateId !== "template10" && templateId !== "template11" && (
                <div className="bg-gray-500 h-1 rounded-full w-8/12 my-8"></div>
              )}

              <div>
                <h2 className="text-[#20146de8] flex font-bold pb-2 px-4 italic  text-xl max-md:text-xl">
                  <span>
                    <FaArrowRight className="text-4xl pe-4  animate-pulse" />
                  </span>
                  React.Js - TailwindCss
                </h2>
                <h2 className="text-[#20143de4] italic pb-4 ps-4 e-14 text-lg max-md:text-xl">
                  Après le téléchargement du Template :
                  <span className="flex pt-2 ">
                    <GoTriangleRight className=" text-3xl " /> Intallez les
                    dépendances avec
                    <span className=" ms-1 pb-1 px-2 bg-gray-200 text-xl font-bold  rounded-lg  ">
                      npm install
                    </span>
                  </span>
                  <span className="flex mt-2">
                    <GoTriangleRight className=" text-3xl" /> Lencer
                    L'application avec
                    <span className=" ms-1 pb-1 px-2 bg-gray-200 text-xl font-bold  rounded-lg  ">
                      {templateId === "template10" ||
                      templateId === "template11"
                        ? "npm run start:dev"
                        : "npm start"}
                    </span>
                  </span>
                </h2>

                <Link
                  to={templateData.handleBuy}
                  className={`bg-blue-950 w-[280px] hover:scale-105 transition-all duration-500 text-blanc italic text-xl rounded-full flex items-center h-[50px] px-5`}
                >
                  Télécharger version React.Js
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TelechargePage;
