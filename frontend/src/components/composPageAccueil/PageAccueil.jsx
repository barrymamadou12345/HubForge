import React from "react";
import { useAppContext } from "../../context/AppContext";
import { NavBarPageAccueil } from "./NavBarPageAccueil";
import { CardesTemplate } from "./CardesTemplate";
import { FooterPageAcueil } from "./FooterPageAcueil";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import Template5 from "../../assets/images/template5.jpg";
import Template6 from "../../assets/images/template6.jpg";
import Template7 from "../../assets/images/template7.jpg";
import Template8 from "../../assets/images/template8.jpg";
import Template9 from "../../assets/images/template9.jpg";
import Template11 from "../../assets/images/template11.jpg";

export const PageAccueil = () => {
  const { darkMode } = useAppContext();
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

        <div className="w-full flex justify-center mb-20">
          <Link to="/templatesPage">
            <button className="text-white font-bold px-10 rounded-full hover:bg-[#3ba18d] animate-pulse py-4 text-xl flex bg-[#171124c2]">
              Templates
              <span>
                <FaArrowRight className="text-4xl ps-4  animate-bounce" />
              </span>
            </button>
          </Link>
        </div>
        <div
          className={`mt-8 max-sm:mx-4 md:mx-24 flex justify-around flex-wrap`}
        >
          <CardesTemplate
            HandlePreview={"/template9"}
            handleBuy={""}
            imageTemplate={Template5}
            fonCardTemplate={"bg-[#35e71621]"}
            titreCrdTemplate={"SkillHub"}
            DesctiptionTemplate={"Modern Sass - Marketing landing page"}
            prixTemplate={"80.000 XOF"}
            handlePriceTo={""}
          />
          <CardesTemplate
            HandlePreview={"https://stage-projet3.vercel.app/"}
            handleBuy={""}
            imageTemplate={Template6}
            fonCardTemplate={"bg-[#ecd0d060]"}
            titreCrdTemplate={"DashBoard"}
            DesctiptionTemplate={"Design agency DasBoards "}
            prixTemplate={"50.000 XOF"}
            handlePriceTo={""}
          />

          <CardesTemplate
            HandlePreview={"https://stage-projet2.vercel.app/"}
            handleBuy={""}
            imageTemplate={Template7}
            fonCardTemplate={"bg-[#7c88cc60]"}
            titreCrdTemplate={"Reduction DashBoard"}
            DesctiptionTemplate={"Modern Marketing dashBoard"}
            prixTemplate={"From $19.99 to $49.99"}
            handlePriceTo={""}
          />

          <CardesTemplate
            HandlePreview={"https://projet3-three.vercel.app/"}
            handleBuy={""}
            imageTemplate={Template8}
            fonCardTemplate={"bg-[#cc7cc740]"}
            titreCrdTemplate={"Dashboard"}
            DesctiptionTemplate={"Simple Designer DashBoard"}
            prixTemplate={
              <p className="text-green-700 font-bold italic">
                <span className="text-gray-500 font-light me-2">$0.00</span>Free
              </p>
            }
            handlePriceTo={""}
          />
          <CardesTemplate
            HandlePreview={"https://projetstage-1.vercel.app/"}
            handleBuy={""}
            imageTemplate={Template9}
            fonCardTemplate={"bg-[#7cc9cc60]"}
            titreCrdTemplate={"DashBoard"}
            DesctiptionTemplate={"Dahashboard template"}
            prixTemplate={
              <p className="text-green-700 font-bold italic">
                <span className="text-gray-500 font-light me-2">$0.00</span>Free
              </p>
            }
            handlePriceTo={""}
          />
          <CardesTemplate
            HandlePreview={"https://red-team-projet2.vercel.app/"}
            handleBuy={""}
            imageTemplate={Template11}
            fonCardTemplate={"bg-[#e716472f]"}
            titreCrdTemplate={"DashBoard"}
            DesctiptionTemplate={"Template DashBoard "}
            prixTemplate={"10.000 XOF"}
            handlePriceTo={""}
          />
        </div>
      </div>
      <div className="mb-4">
        <FooterPageAcueil />
      </div>
    </div>
  );
};
