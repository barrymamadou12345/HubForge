import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BsCart2 } from "react-icons/bs";
import Logo from "./images/Logo.png";
import HeroImage from "./images/HeroImage.jpg";
import Phones from "./images/Phones.png";
import Group33 from "./images/Group33.avif";
import FoodTakeaway from "./images/FoodTakeaway.png";
import trustpilot from "./images/trustpilot-logo.svg";
import card1 from "./images/Step01.png";
import card2 from "./images/Step02.png";
import card3 from "./images/Step03.png";
import Burger01 from "./images/Burger01.png";
import Burger02 from "./images/Burger02.png";
import Burger03 from "./images/Burger03.png";
import Burger04 from "./images/Burger04.png";
import Burger05 from "./images/Burger05.png";
import Burger06 from "./images/Burger06.png";

export default function ChompRestaurant() {
  return (
    <>
      <div className="MainPage">
        <div
          id="Banner"
          className="banner flex justify-center items-center h-[50px] bg-red-500 py-[5px] px-[29.8438px]"
        >
          <div className="banner-wrap p-0 m-0">
            <div className="notice-text text-center text-15 text-white h-[20px] ">
              Nous sommes ouverts et disponibles pour vos commandes à emporter
              et vos livraison .
              <Link to="#" className="white-link">
                Commandez maintenant.
              </Link>
            </div>
          </div>
        </div>

        <header className="bg-white">
          <div className="mx-auto w-100 px-[37.8px] py-[20px] sm:px-6 lg:px-8 h-[100px]">
            <div className="flex h-16 items-center justify-between h-[60px]">
              <div className="flex-1 md:flex md:items-center">
                <a className="block text-teal-600" href="/">
                  <span className="sr-only">Accueil</span>
                  <img src={Logo} alt="" className="w-[100px] h-[100px]" />
                </a>
              </div>

              <div className="md:flex md:items-center">
                <nav aria-label="Global" className="hidden md:block">
                  <ul className="flex items-center text-md">
                    <li>
                      <a
                        className="text-gray-500 transition hover:text-red-500 w-[76.63] h-[60px] px-[20px] py-[16px] text-xl"
                        href=""
                      >
                        Accueil
                      </a>
                    </li>

                    <li>
                      <a
                        className="text-gray-500 transition hover:text-red-500 w-[76.63] h-[60px] px-[20px] py-[16px] text-xl"
                        href=""
                      >
                        Commander
                      </a>
                    </li>

                    <li>
                      <a
                        className="text-gray-500 transition hover:text-red-500 w-[76.63] h-[60px] px-[20px] py-[16px] text-xl"
                        href="/"
                      >
                        Entreprise
                      </a>
                    </li>

                    <li>
                      <a
                        className="text-gray-500 transition hover:text-red-500 w-[76.63] h-[60px] px-[20px] py-[16px] text-xl"
                        href="/"
                      >
                        FAQ
                      </a>
                    </li>

                    <li>
                      <a
                        className="text-gray-500 transition hover:text-red-500 w-[76.63] h-[60px] px-[20px] py-[16px] text-xl"
                        href="/"
                      >
                        Contact
                      </a>
                    </li>
                  </ul>
                </nav>

                <div className="flex items-center gap-4">
                  <div className="sm:flex sm:gap-4">
                    <a
                      className="flex justify-center items-center rounded-md bg-red-600 text-sm font-medium text-white shadow w-[65px] h-[65px] p-[13px]"
                      href="#"
                    >
                      <BsCart2 className="text-2xl" />
                    </a>
                  </div>

                  <div className="block md:hidden">
                    <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4 6h16M4 12h16M4 18h16"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        <div className="md:flex md:items-center h-[100%] py-[100px] px-[40px]">
          <div className="secContentG h-full lg:w-[50%] flex flex-col justify-center lg:items-start lg:text-start sm:items-center sm:text-center w-auto">
            <h1 className="my-[20px] mx-0 w-auto text-6xl font-bold sm:mb-[20px]">
              Bonne nourriture et plats à emporter,
              <span className="brand-span text-red-500">livrer</span> à
              domicile
            </h1>
            <p className="w-auto  mb-[80px] text-[20px] font-bold text-[#546285]">
              Découvrez une expérience culinaire inoubliable avec notre
              restaurant. Des saveurs exquises livrées directement à votre
              porte. Commandez dès maintenant et laissez-vous transporter par un
              festin de délices!
            </p>
            <Link
              className="flex align-center items-center text-center w-[210px] h-[70px] inline-block rounded-[10px] border text-[19px] px-[50px] py-[22px] mb-[30px] text-md font-medium text-white bg-red-500"
              to="#"
            >
              Commander
            </Link>
            <div className="flex flex-col justify-center lg:items-start lg:text-start sm:items-center sm:text-center">
              <span className="">
                <img
                  src={trustpilot}
                  alt="trustpilot"
                  className="m-[0px 16px 10px 0px] w-[110px] h-[27px]"
                />
              </span>
              <h1 className="text-[18px] h-[16px] mt-[10px] font-bolder">
                <span className="text-red-500">Note de 4,8 sur 5 </span>
                basée sur plus de 2000 avis.
              </h1>
            </div>
          </div>
          <div
            className="secContentD bg-no-repeat bg-center bg-contain h-screen lg:w-[50%] sm:w-100"
            style={{ backgroundImage: `url(${HeroImage})` }}
          ></div>
        </div>

        <div className="bg-[#F5FBFE] md:flex md:items-center h-[100%] py-[100px] px-[40px]">
          <div className="sectionG2 h-full lg:w-[50%] flex flex-col justify-center lg:items-start lg:text-start sm:items-center sm:text-center w-auto">
            <h1 className="text-red-500 my-[20px] mx-0 w-auto text-6xl font-bold sm:mb-[20px] break-words">
              Le foyer des produits frais.
            </h1>
            <p className="w-auto  mb-[80px] text-[20px] font-bold text-[#546285]">
              Découvrez une cuisine qui célèbre la fraîcheur, où chaque plat
              raconte une histoire de qualité et d'authenticité. Bienvenue dans
              notre oasis gastronomique, le foyer des produits frais.
            </p>
            <Link
              className="flex align-center items-center text-center w-[210px] h-[70px] inline-block rounded-[10px] border text-[19px] px-[35px] py-[22px] mb-[30px] text-md font-medium text-white bg-red-500"
              to="#"
            >
              Learn about us
            </Link>
          </div>
          <div
            className="secContentD2 bg-no-repeat bg-center bg-contain h-screen lg:w-[50%] sm:w-[100%]"
            style={{
              backgroundImage: `url(${Group33})`,
            }}
          ></div>
        </div>

        <div className="flex justify-center items-center h-[100%] py-[120px] px-[37px]">
          <div className="cardContainer md:flex flex-col justify-center md:items-center">
            <div className="title text-center flex justify-center w-[670px] h-[95px]">
              <h2 className="text-center w-[500px] h-[75px] text-red-500 text-[50px] font-bold">
                Mode d'emploi
              </h2>
            </div>
            <div className="cards md:flex justify-between items-center">
              <article className="flex flex-col justify-center items-center lg:mx-10 sm:mx-0 sm:mt-30">
                <img
                  alt="Lava"
                  src={card1}
                  className="object-cover w-[350px] h-[270px]"
                />

                <div className="w-[329px] h-[133px] p-4 flex flex-col justify-center items-center">
                  <h5 className="text-[25px] font-bold w-[329px] h-[22px] my-[10px] mx-[0px] text-center mb-[20px]">
                    Adaptez votre menu
                  </h5>

                  <p className="text-center w-[335px] h-[81px] text-[#546285] text-[21px] mb-[10px]">
                    Découvrez une expérience culinaire sur mesure en
                    personnalisant nos délicieux plats à votre goût.
                  </p>
                </div>
              </article>
              <article className="flex flex-col justify-center items-center lg:mx-10 sm:mx-0 sm:mt-30">
                <img
                  alt="Lava"
                  src={card2}
                  className="object-cover w-[350px] h-[270px]"
                />

                <div className="w-[329px] h-[133px] p-4 flex flex-col justify-center items-center">
                  <h5 className="text-[25px] font-bold w-[329px] h-[22px] my-[10px] mx-[0px] text-center mb-[20px]">
                    Commander rapidement
                  </h5>

                  <p className="text-center w-[335px] h-[81px] text-[#546285] text-[21px] mb-[10px]">
                    Commandez vos délices préférés en quelques clics!
                  </p>
                </div>
              </article>
              <article className="flex flex-col justify-center items-center lg:mx-10 sm:mx-0 sm:mt-30">
                <img
                  alt="Lava"
                  src={card3}
                  className="object-cover w-[350px] h-[270px]"
                />

                <div className="w-[329px] h-[133px] p-4 flex flex-col justify-center items-center">
                  <h5 className="text-[25px] font-bold w-[329px] h-[22px] my-[10px] mx-[0px] text-center mb-[20px]">
                    Livraison a domicile
                  </h5>

                  <p className="text-center w-[335px] h-[81px] text-[#546285] text-[21px] mb-[10px]">
                    laissez-nous vous apporter la magie culinaire avec notre
                    service de livraison à domicile.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center h-[100%] py-[120px] px-[37px]">
          <div className="bg-[#F5FBFE] cardContainer md:flex flex-col justify-center md:items-center">
            <div className="title flex flex-col w-[670px] h-[159px] mb-40">
              <h2 className="text-center w-[700px] h-[75px] text-red-500 text-[55px] font-bold my-5">
                Parcourez notre menu
              </h2>
              <p className="text-center w-[700px] h-[54px] text-[23px] mb-5">
                Utilisez notre menu pour passer une commande en ligne,ou
                <span className="text-red-500"> appelez</span> notre magasin
                pour passer une commande à emporter. Une nourriture rapide et
                fraîche.
              </p>
              <div className="button flex flex-row justify-around align-center m-[50px]">
                <Link
                  className="flex align-center items-center text-center w-[160px] h-[60px] inline-block rounded-[10px] border text-[19px] px-[35px] py-[9px] mx-[15px] text-md font-medium bg-white hover:bg-red-500 focus:bg-red-500 hover:text-white focus:text-white"
                  to="#"
                >
                  Hamburger
                </Link>
                <Link
                  className="flex align-center items-center text-center w-[160px] h-[60px] inline-block rounded-[10px] border text-[19px] px-[35px] py-[9px] mx-[15px] text-md font-medium bg-white hover:bg-red-500 focus:bg-red-500 hover:text-white focus:text-white"
                  to="#"
                >
                  Garnitures
                </Link>
                <Link
                  className="flex align-center items-center text-center w-[160px] h-[60px] inline-block rounded-[10px] border text-[19px] px-[45px] py-[9px] mx-[15px] text-md font-medium bg-white hover:bg-red-500 focus:bg-red-500 hover:text-white focus:text-white"
                  to="#"
                >
                  Boissons
                </Link>
              </div>
            </div>
            <div className="cardsFood md:flex md:flex-wrap justify-center items-center sm:ms-10">
              <div className="foodCard bg-white flex w-[600px] h-[220px] p-[25px] m-[10px] border hover:border-red-500 rounded-[9px] ">
                <div className="card-img flex justify-center items-center w-[30%] h-full">
                  <img src={Burger01} alt="" className="w-[130px] h-[130px]" />
                </div>
                <div className="card-libeller flex flex-col items-center w-[70%] h-full">
                  <span className="flex justify-between w-full h-[40px] mb-[4px]">
                    <h6 className="w-[160px] h-[20px] my-[10px] text-[22px] font-bold">
                      Le Classique
                    </h6>
                    <p className="w-[100px] h-[20px] my-[10px] text-[20px] text-red-500">
                      5.600 CFA
                    </p>
                  </span>
                  <p className="w-full h-[48px] text-[#546285] mb-[10px] text-[18px]">
                    Un hamburger juteux garni d'un steak de bœuf grillé, de
                    fromage cheddar fondant, de laitue.
                  </p>
                  <form className="flex w-full h-[45px]">
                    <input
                      type="number"
                      className="w-[60px] h-[50px] text-center me-[8px] p-[8px 6px 8px 12px] border border-gray bg-[#FAFAFA] rounded-[5px] focus:border-blue-500"
                    />
                    <Link
                      className="flex align-center items-center text-center text-white w-[155px] h-[50px] inline-block rounded-[10px] border text-[19px] px-[25px] py-[9px] bg-red-500"
                      to="#"
                    >
                      Commander
                    </Link>
                  </form>
                </div>
              </div>
              <div className="foodCard bg-white flex w-[600px] h-[220px] p-[25px] m-[10px] border hover:border-red-500 rounded-[9px] ">
                <div className="card-img flex justify-center items-center w-[30%] h-full">
                  <img src={Burger02} alt="" className="w-[130px] h-[130px]" />
                </div>
                <div className="card-libeller flex flex-col items-center w-[70%] h-full">
                  <span className="flex justify-between w-full h-[40px] mb-[4px]">
                    <h6 className="w-[160px] h-[20px] my-[10px] text-[22px] font-bold">
                      Le Gourmand
                    </h6>
                    <p className="w-[100px] h-[20px] my-[10px] text-[20px] text-red-500">
                      5.600 CFA
                    </p>
                  </span>
                  <p className="w-full h-[48px] text-[#546285] mb-[10px] text-[18px]">
                    Ce burger audacieux marie le goût fumé du bacon croustillant
                    avec des tranches d'avocat.
                  </p>
                  <form className="flex w-full h-[45px]">
                    <input
                      type="number"
                      className="w-[60px] h-[50px] text-center me-[8px] p-[8px 6px 8px 12px] border border-gray bg-[#FAFAFA] rounded-[5px] focus:border-blue-500"
                    />
                    <Link
                      className="flex align-center items-center text-center text-white w-[155px] h-[50px] inline-block rounded-[10px] border text-[19px] px-[25px] py-[9px] bg-red-500"
                      to="#"
                    >
                      Commander
                    </Link>
                  </form>
                </div>
              </div>
              <div className="foodCard bg-white flex w-[600px] h-[220px] p-[25px] m-[10px] border hover:border-red-500 rounded-[9px] ">
                <div className="card-img flex justify-center items-center w-[30%] h-full">
                  <img src={Burger03} alt="" className="w-[130px] h-[130px]" />
                </div>
                <div className="card-libeller flex flex-col items-center w-[70%] h-full">
                  <span className="flex justify-between w-full h-[40px] mb-[4px]">
                    <h6 className="w-[160px] h-[20px] my-[10px] text-[22px] font-bold">
                      Le Terroir
                    </h6>
                    <p className="w-[100px] h-[20px] my-[10px] text-[20px] text-red-500">
                      5.600 CFA
                    </p>
                  </span>
                  <p className="w-full h-[48px] text-[#546285] mb-[10px] text-[18px]">
                    Ce burger propose un steak de grillés garni de fromage de
                    chèvre crémeux,
                  </p>
                  <form className="flex w-full h-[45px]">
                    <input
                      type="number"
                      className="w-[60px] h-[50px] text-center me-[8px] p-[8px 6px 8px 12px] border border-gray bg-[#FAFAFA] rounded-[5px] focus:border-blue-500"
                    />
                    <Link
                      className="flex align-center items-center text-center text-white w-[155px] h-[50px] inline-block rounded-[10px] border text-[19px] px-[25px] py-[9px] bg-red-500"
                      to="#"
                    >
                      Commander
                    </Link>
                  </form>
                </div>
              </div>
              <div className="foodCard bg-white flex w-[600px] h-[220px] p-[25px] m-[10px] border hover:border-red-500 rounded-[9px] ">
                <div className="card-img flex justify-center items-center w-[30%] h-full">
                  <img src={Burger04} alt="" className="w-[130px] h-[130px]" />
                </div>
                <div className="card-libeller flex flex-col items-center w-[70%] h-full">
                  <span className="flex justify-between w-full h-[40px] mb-[4px]">
                    <h6 className="w-[1_0px] h-[20px] my-[10px] text-[22px] font-bold">
                      Le Délice Méditerranéen
                    </h6>
                    <p className="w-[100px] h-[20px] my-[10px] text-[20px] text-red-500">
                      5.600 CFA
                    </p>
                  </span>
                  <p className="w-full h-[48px] text-[#546285] mb-[10px] text-[18px]">
                    Ce burger met à l'honneur les saveurs locales avec un steak
                    grillé et du fromage caramélisés
                  </p>
                  <form className="flex w-full h-[45px]">
                    <input
                      type="number"
                      className="w-[60px] h-[50px] text-center me-[8px] p-[8px 6px 8px 12px] border border-gray bg-[#FAFAFA] rounded-[5px] focus:border-blue-500"
                    />
                    <Link
                      className="flex align-center items-center text-center text-white w-[155px] h-[50px] inline-block rounded-[10px] border text-[19px] px-[25px] py-[9px] bg-red-500"
                      to="#"
                    >
                      Commander
                    </Link>
                  </form>
                </div>
              </div>
              <div className="foodCard bg-white flex w-[600px] h-[220px] p-[25px] m-[10px] border hover:border-red-500 rounded-[9px] ">
                <div className="card-img flex justify-center items-center w-[30%] h-full">
                  <img src={Burger05} alt="" className="w-[130px] h-[130px]" />
                </div>
                <div className="card-libeller flex flex-col items-center w-[70%] h-full">
                  <span className="flex justify-between w-full h-[40px] mb-[4px]">
                    <h6 className="w-[160px] h-[20px] my-[10px] text-[22px] font-bold">
                      Le Gourmet
                    </h6>
                    <p className="w-[100px] h-[20px] my-[10px] text-[20px] text-red-500">
                      5.600 CFA
                    </p>
                  </span>
                  <p className="w-full h-[48px] text-[#546285] mb-[10px] text-[18px]">
                    Un hamburger gastronomique pour les palais les plus
                    exigeants, composé d'un steak grillé
                  </p>
                  <form className="flex w-full h-[45px]">
                    <input
                      type="number"
                      className="w-[60px] h-[50px] text-center me-[8px] p-[8px 6px 8px 12px] border border-gray bg-[#FAFAFA] rounded-[5px] focus:border-blue-500"
                    />
                    <Link
                      className="flex align-center items-center text-center text-white w-[155px] h-[50px] inline-block rounded-[10px] border text-[19px] px-[25px] py-[9px] bg-red-500"
                      to="#"
                    >
                      Commander
                    </Link>
                  </form>
                </div>
              </div>
              <div className="foodCard bg-white flex w-[600px] h-[220px] p-[25px] m-[10px] border hover:border-red-500 rounded-[9px] ">
                <div className="card-img flex justify-center items-center w-[30%] h-full">
                  <img src={Burger06} alt="" className="w-[130px] h-[130px]" />
                </div>
                <div className="card-libeller flex flex-col items-center w-[70%] h-full">
                  <span className="flex justify-between w-full h-[40px] mb-[4px]">
                    <h6 className="w-[160px] h-[20px] my-[10px] text-[22px] font-bold">
                      L'Aventurier
                    </h6>
                    <p className="w-[100px] h-[20px] my-[10px] text-[20px] text-red-500">
                      5.600 CFA
                    </p>
                  </span>
                  <p className="w-full h-[48px] text-[#546285] mb-[10px] text-[18px]">
                    Inspiré des saveurs ensoleillées, ce burger propose de la
                    viande d'agneau hachée
                  </p>
                  <form className="flex w-full h-[45px]">
                    <input
                      type="number"
                      className="w-[60px] h-[50px] text-center me-[8px] p-[8px 6px 8px 12px] border border-gray bg-[#FAFAFA] rounded-[5px] focus:border-blue-500"
                    />
                    <Link
                      className="flex align-center items-center text-center text-white w-[155px] h-[50px] inline-block rounded-[10px] border text-[19px] px-[25px] py-[9px] bg-red-500"
                      to="#"
                    >
                      Commander
                    </Link>
                  </form>
                </div>
              </div>
            </div>
            <Link
              className="flex align-center items-center text-center w-[210px] h-[70px] inline-block rounded-[10px] border text-[19px] px-[40px] py-[22px] my-[40px] mx-auto text-xl font-medium text-white bg-red-500"
              to="#"
            >
              Plus de menu
            </Link>
          </div>
        </div>

        <div className="md:flex md:items-center h-[100%] py-[100px] px-[40px]">
          <div
            className="secContentD bg-no-repeat bg-center bg-contain h-screen lg:w-[50%] sm:w-100"
            style={{ backgroundImage: `url(${Phones})` }}
          ></div>
          <div className="secContentG h-full lg:w-[50%] flex flex-col justify-center lg:items-start lg:text-start sm:items-center sm:text-center w-auto">
            <h1 className="my-[20px] mx-0 w-auto text-5xl font-bold sm:mb-[20px] text-red-500">
              Commandez en ligne avec notre processus de paiement simple et
              rapide.
            </h1>
            <p className="w-auto  mb-[80px] text-[20px] font-bold text-[#546285]">
              Votre commande en quelques clics : Commandez en ligne avec aisance
              et rapidité grâce à notre processus de paiement simplifié.
            </p>
            <Link
              className="flex align-center items-center text-center w-[210px] h-[70px] inline-block rounded-[10px] border text-[19px] px-[35px] py-[22px] mb-[30px] text-md font-medium text-white bg-red-500"
              to="#"
            >
              Voir notre FAQ
            </Link>
          </div>
        </div>

        <div className="bg-[#F5FBFE] md:flex md:items-center h-[100%] py-[100px] px-[40px]">
          <div className="sectionG2 h-full lg:w-[50%] flex flex-col justify-center lg:items-start lg:text-start sm:items-center sm:text-center w-auto">
            <h1 className="text-red-500 my-[20px] mx-0 w-auto text-4xl font-bold sm:mb-[20px] break-words">
              Appelez notre magasin et emportez votre commande quand cela vous
              convient le mieux.
            </h1>
            <p className="w-auto  mb-[80px] text-[20px] font-bold text-[#546285]">
              Contactez-nous pour passer votre commande et récupérez-la à votre
              convenance
            </p>
            <Link
              className="flex align-center items-center text-center w-[250px] h-[70px] inline-block rounded-[10px] border text-[19px] px-[45px] py-[22px] mb-[30px] text-md font-medium text-white bg-red-500"
              to="#"
            >
              Ph. +61 233 2333
            </Link>
          </div>
          <div
            className="secContentD2 bg-no-repeat bg-center bg-contain h-screen lg:w-[50%] sm:w-[100%]"
            style={{ backgroundImage: `url(${FoodTakeaway})` }}
          ></div>
        </div>

        {/* <div className="bg-[#F5FBFE] md:flex md:items-center h-[100%] py-[100px] px-[40px]">
          <div
            className="secContentD2 bg-no-repeat bg-center bg-contain h-screen lg:w-[50%] sm:w-[100%]"
            style={{ backgroundImage: `url(${FoodTakeaway})` }}
          ></div>
          <div
            className="secContentD2 bg-no-repeat bg-center bg-contain h-screen lg:w-[50%] sm:w-[100%]"
            style={{ backgroundImage: `url(${FoodTakeaway})` }}
          ></div>
        </div> */}
      </div>
    </>
  );
}
