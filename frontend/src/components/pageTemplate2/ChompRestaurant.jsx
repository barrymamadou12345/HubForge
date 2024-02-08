import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BsCart2 } from "react-icons/bs";
import Logo from "./images/Logo.svg";
import HeroImage from "./images/HeroImage.png";
import Phones from "./images/Phones.png";
import Group33 from "./images/Group33.png";
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
          className="banner flex justify-center items-center h-[50px] bg-[#35B8BE] py-[5px] px-[29.8438px]"
        >
          <div className="banner-wrap p-0 m-0">
            <div className="notice-text text-center text-15 text-white h-[20px] ">
              We're open and available for takeaway &amp; delivery.
              <Link to="#" className="white-link">
                Order Now
              </Link>
            </div>
          </div>
        </div>

        <header className="bg-white">
          <div className="mx-auto w-100 px-[37.8px] py-[20px] sm:px-6 lg:px-8 h-[100px]">
            <div className="flex items-center justify-between h-[68px]">
              <div className="flex-1 md:flex md:items-center">
                <a className="block text-teal-600" href="/">
                  <span className="sr-only">Home</span>
                  <img src={Logo} alt="" className="w-[40px] h-[51.25px]" />
                </a>
              </div>

              <div className="md:flex md:items-center">
                <nav aria-label="Global" className="hidden md:block">
                  <ul className="flex items-center text-md">
                    <li>
                      <a
                        className="text-gray-500 transition hover:text-[#35B8BE] w-[76.63] h-[60px] px-[20px] py-[16px] text-xl"
                        href="/"
                      >
                        {" "}
                        Home{" "}
                      </a>
                    </li>

                    <li>
                      <a
                        className="text-gray-500 transition hover:text-[#35B8BE] w-[76.63] h-[60px] px-[20px] py-[16px] text-xl"
                        href="/"
                      >
                        {" "}
                        Order{" "}
                      </a>
                    </li>

                    <li>
                      <a
                        className="text-gray-500 transition hover:text-[#35B8BE] w-[76.63] h-[60px] px-[20px] py-[16px] text-xl"
                        href="/"
                      >
                        {" "}
                        Company{" "}
                      </a>
                    </li>

                    <li>
                      <a
                        className="text-gray-500 transition hover:text-[#35B8BE] w-[76.63] h-[60px] px-[20px] py-[16px] text-xl"
                        href="/"
                      >
                        {" "}
                        FAQ{" "}
                      </a>
                    </li>

                    <li>
                      <a
                        className="text-gray-500 transition hover:text-[#35B8BE] w-[76.63] h-[60px] px-[20px] py-[16px] text-xl"
                        href="/"
                      >
                        {" "}
                        Contact{" "}
                      </a>
                    </li>
                  </ul>
                </nav>

                <div className="flex items-center gap-4">
                  <div className="sm:flex sm:gap-4">
                    <a
                      className="flex justify-center items-center rounded-md bg-teal-600 text-sm font-medium text-white shadow w-[65px] h-[65px] p-[13px]"
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
              Beautiful food &amp; takeaway,{" "}
              <span className="brand-span text-[#35B8BE]">delivered</span> to
              your door.
            </h1>
            <p className="w-auto  mb-[80px] text-[20px] font-bold text-[#546285]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500.
            </p>
            <Link
              className="flex  align-center items-center text-center w-[210px] h-[70px] rounded-[10px] border text-[19px] px-[35px] py-[22px] mb-[30px] text-md font-medium text-white bg-[#35B8BE]"
              to="#"
            >
              Place an Order
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
                <span className="text-[#35B8BE]">4.8 out of 5</span> based on
                2000+ review
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
            <h1 className="text-[#35B8BE] my-[20px] mx-0 w-auto text-6xl font-bold sm:mb-[20px] break-words">
              The home of &amp; fresh products{" "}
            </h1>
            <p className="w-auto  mb-[80px] text-[20px] font-bold text-[#546285]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500.
            </p>
            <Link
              className="flex align-center items-center text-center w-[210px] h-[70px] rounded-[10px] border text-[19px] px-[35px] py-[22px] mb-[30px] text-md font-medium text-white bg-[#35B8BE]"
              to="#"
            >
              Learn about us
            </Link>
          </div>
          <div
            className="secContentD2 bg-no-repeat bg-center bg-contain h-screen lg:w-[50%] sm:w-[100%]"
            style={{ backgroundImage: `url(${Group33})` }}
          ></div>
        </div>

        <div className="flex justify-center items-center h-[100%] py-[120px] px-[37px]">
          <div className="cardContainer md:flex flex-col justify-center md:items-center">
            <div className="title text-center flex justify-center w-[670px] h-[95px]">
              <h2 className="text-center w-[500px] h-[75px] text-[#35B8BE] text-[50px] font-bold">
                HOW IT WORKS
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
                    Adapt your menu items
                  </h5>

                  <p className="text-center w-[335px] h-[81px] text-[#546285] text-[21px] mb-[10px]">
                    Easily adapt your menu using the webflow CMS and allow
                    customers to browse your items.
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
                  <h5 className="text-[25px] font-bold w-[550px] h-[22px] my-[10px] mx-[0px] text-center mb-[20px]">
                    Accept online orders & takeout
                  </h5>

                  <p className="text-center w-[335px] h-[81px] text-[#546285] text-[21px] mb-[10px]">
                    Let your customers order and pay via the powerful ecommerce
                    system, or simple let them call your store.
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
                    Manage delivery or takeout
                  </h5>

                  <p className="text-center w-[335px] h-[81px] text-[#546285] text-[21px] mb-[10px]">
                    Manage your own logistics and take orders simply through the
                    ecommerce system.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center h-[100%] py-[120px] px-[37px]">
          <div className="bg-[#F5FBFE] cardContainer md:flex flex-col justify-center md:items-center">
            <div className="title flex flex-col w-[670px] h-[159px] mb-40">
              <h2 className="text-center w-[700px] h-[75px] text-[#35B8BE] text-[55px] font-bold my-5">
                Browse our menu
              </h2>
              <p className="text-center w-[700px] h-[54px] text-[23px] mb-5">
                Use our menu to place an order online, or{" "}
                <span className="text-[#35B8BE]">phone</span> our store to place
                a pickup order. Fast and fresh food.
              </p>
              <div className="button flex flex-row justify-around align-center m-[50px]">
                <Link
                  className="flex align-center items-center text-center w-[160px] h-[60px] rounded-[10px] border text-[19px] px-[50px] py-[9px] mx-[15px] text-md font-medium bg-white hover:bg-[#35B8BE] focus:bg-[#35B8BE] hover:text-white focus:text-white"
                  to="#"
                >
                  Burgers
                </Link>
                <Link
                  className="flex align-center items-center text-center w-[160px] h-[60px] rounded-[10px] border text-[19px] px-[50px] py-[9px] mx-[15px] text-md font-medium bg-white hover:bg-[#35B8BE] focus:bg-[#35B8BE] hover:text-white focus:text-white"
                  to="#"
                >
                  Sides
                </Link>
                <Link
                  className="flex align-center items-center text-center w-[160px] h-[60px] rounded-[10px] border text-[19px] px-[50px] py-[9px] mx-[15px] text-md font-medium bg-white hover:bg-[#35B8BE] focus:bg-[#35B8BE] hover:text-white focus:text-white"
                  to="#"
                >
                  Drinks
                </Link>
              </div>
            </div>
            <div class="cardsFood md:flex md:flex-wrap justify-center items-center sm:ms-10">
              <div class="foodCard bg-white flex w-[600px] h-[220px] p-[25px] m-[10px] border hover:border-[#35B8BE] rounded-[9px] ">
                <div className="card-img flex justify-center items-center w-[30%] h-full">
                  <img src={Burger01} alt="" className="w-[130px] h-[130px]" />
                </div>
                <div className="card-libeller flex flex-col items-center w-[70%] h-full">
                  <span className="flex justify-between w-full h-[40px] mb-[4px]">
                    <h6 className="w-[160px] h-[20px] my-[10px] text-[22px] font-bold">
                      Burger Dreams
                    </h6>
                    <p className="w-[100px] h-[20px] my-[10px] text-[20px] text-[#35B8BE]">
                      $ 9.20 USD
                    </p>
                  </span>
                  <p className="w-full h-[48px] text-[#546285] mb-[10px] text-[18px]">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                  <form className="flex w-full h-[45px]">
                    <input
                      type="number"
                      className="w-[60px] h-[50px] text-center me-[8px] p-[8px 6px 8px 12px] border border-gray bg-[#FAFAFA] rounded-[5px] focus:border-blue-500"
                    />
                    <Link
                      className="flex align-center items-center text-center text-white w-[155px] h-[50px] rounded-[10px] border text-[19px] px-[25px] py-[9px] bg-[#35B8BE]"
                      to="#"
                    >
                      Add to Cart
                    </Link>
                  </form>
                </div>
              </div>
              <div class="foodCard bg-white flex w-[600px] h-[220px] p-[25px] m-[10px] border hover:border-[#35B8BE] rounded-[9px] ">
                <div className="card-img flex justify-center items-center w-[30%] h-full">
                  <img src={Burger02} alt="" className="w-[130px] h-[130px]" />
                </div>
                <div className="card-libeller flex flex-col items-center w-[70%] h-full">
                  <span className="flex justify-between w-full h-[40px] mb-[4px]">
                    <h6 className="w-[160px] h-[20px] my-[10px] text-[22px] font-bold">
                      Burger Waldo
                    </h6>
                    <p className="w-[100px] h-[20px] my-[10px] text-[20px] text-[#35B8BE]">
                      $ 9.20 USD
                    </p>
                  </span>
                  <p className="w-full h-[48px] text-[#546285] mb-[10px] text-[18px]">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                  <form className="flex w-full h-[45px]">
                    <input
                      type="number"
                      className="w-[60px] h-[50px] text-center me-[8px] p-[8px 6px 8px 12px] border border-gray bg-[#FAFAFA] rounded-[5px] focus:border-blue-500"
                    />
                    <Link
                      className="flex align-center items-center text-center text-white w-[155px] h-[50px] rounded-[10px] border text-[19px] px-[25px] py-[9px] bg-[#35B8BE]"
                      to="#"
                    >
                      Add to Cart
                    </Link>
                  </form>
                </div>
              </div>
              <div class="foodCard bg-white flex w-[600px] h-[220px] p-[25px] m-[10px] border hover:border-[#35B8BE] rounded-[9px] ">
                <div className="card-img flex justify-center items-center w-[30%] h-full">
                  <img src={Burger03} alt="" className="w-[130px] h-[130px]" />
                </div>
                <div className="card-libeller flex flex-col items-center w-[70%] h-full">
                  <span className="flex justify-between w-full h-[40px] mb-[4px]">
                    <h6 className="w-[160px] h-[20px] my-[10px] text-[22px] font-bold">
                      Burger Cali
                    </h6>
                    <p className="w-[100px] h-[20px] my-[10px] text-[20px] text-[#35B8BE]">
                      $ 9.20 USD
                    </p>
                  </span>
                  <p className="w-full h-[48px] text-[#546285] mb-[10px] text-[18px]">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                  <form className="flex w-full h-[45px]">
                    <input
                      type="number"
                      className="w-[60px] h-[50px] text-center me-[8px] p-[8px 6px 8px 12px] border border-gray bg-[#FAFAFA] rounded-[5px] focus:border-blue-500"
                    />
                    <Link
                      className="flex align-center items-center text-center text-white w-[155px] h-[50px] rounded-[10px] border text-[19px] px-[25px] py-[9px] bg-[#35B8BE]"
                      to="#"
                    >
                      Add to Cart
                    </Link>
                  </form>
                </div>
              </div>
              <div class="foodCard bg-white flex w-[600px] h-[220px] p-[25px] m-[10px] border hover:border-[#35B8BE] rounded-[9px] ">
                <div className="card-img flex justify-center items-center w-[30%] h-full">
                  <img src={Burger04} alt="" className="w-[130px] h-[130px]" />
                </div>
                <div className="card-libeller flex flex-col items-center w-[70%] h-full">
                  <span className="flex justify-between w-full h-[40px] mb-[4px]">
                    <h6 className="w-[1_0px] h-[20px] my-[10px] text-[22px] font-bold">
                      Burger Bacon Buddy
                    </h6>
                    <p className="w-[100px] h-[20px] my-[10px] text-[20px] text-[#35B8BE]">
                      $ 9.20 USD
                    </p>
                  </span>
                  <p className="w-full h-[48px] text-[#546285] mb-[10px] text-[18px]">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                  <form className="flex w-full h-[45px]">
                    <input
                      type="number"
                      className="w-[60px] h-[50px] text-center me-[8px] p-[8px 6px 8px 12px] border border-gray bg-[#FAFAFA] rounded-[5px] focus:border-blue-500"
                    />
                    <Link
                      className="flex align-center items-center text-center text-white w-[155px] h-[50px] rounded-[10px] border text-[19px] px-[25px] py-[9px] bg-[#35B8BE]"
                      to="#"
                    >
                      Add to Cart
                    </Link>
                  </form>
                </div>
              </div>
              <div class="foodCard bg-white flex w-[600px] h-[220px] p-[25px] m-[10px] border hover:border-[#35B8BE] rounded-[9px] ">
                <div className="card-img flex justify-center items-center w-[30%] h-full">
                  <img src={Burger05} alt="" className="w-[130px] h-[130px]" />
                </div>
                <div className="card-libeller flex flex-col items-center w-[70%] h-full">
                  <span className="flex justify-between w-full h-[40px] mb-[4px]">
                    <h6 className="w-[160px] h-[20px] my-[10px] text-[22px] font-bold">
                      Burger Spicy
                    </h6>
                    <p className="w-[100px] h-[20px] my-[10px] text-[20px] text-[#35B8BE]">
                      $ 9.20 USD
                    </p>
                  </span>
                  <p className="w-full h-[48px] text-[#546285] mb-[10px] text-[18px]">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                  <form className="flex w-full h-[45px]">
                    <input
                      type="number"
                      className="w-[60px] h-[50px] text-center me-[8px] p-[8px 6px 8px 12px] border border-gray bg-[#FAFAFA] rounded-[5px] focus:border-blue-500"
                    />
                    <Link
                      className="flex align-center items-center text-center text-white w-[155px] h-[50px] rounded-[10px] border text-[19px] px-[25px] py-[9px] bg-[#35B8BE]"
                      to="#"
                    >
                      Add to Cart
                    </Link>
                  </form>
                </div>
              </div>
              <div class="foodCard bg-white flex w-[600px] h-[220px] p-[25px] m-[10px] border hover:border-[#35B8BE] rounded-[9px] ">
                <div className="card-img flex justify-center items-center w-[30%] h-full">
                  <img src={Burger06} alt="" className="w-[130px] h-[130px]" />
                </div>
                <div className="card-libeller flex flex-col items-center w-[70%] h-full">
                  <span className="flex justify-between w-full h-[40px] mb-[4px]">
                    <h6 className="w-[160px] h-[20px] my-[10px] text-[22px] font-bold">
                      Burger Classic
                    </h6>
                    <p className="w-[100px] h-[20px] my-[10px] text-[20px] text-[#35B8BE]">
                      $ 9.20 USD
                    </p>
                  </span>
                  <p className="w-full h-[48px] text-[#546285] mb-[10px] text-[18px]">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                  <form className="flex w-full h-[45px]">
                    <input
                      type="number"
                      className="w-[60px] h-[50px] text-center me-[8px] p-[8px 6px 8px 12px] border border-gray bg-[#FAFAFA] rounded-[5px] focus:border-blue-500"
                    />
                    <Link
                      className="flex align-center items-center text-center text-white w-[155px] h-[50px]  rounded-[10px] border text-[19px] px-[25px] py-[9px] bg-[#35B8BE]"
                      to="#"
                    >
                      Add to Cart
                    </Link>
                  </form>
                </div>
              </div>
            </div>
            <Link
              className="flex align-center items-center text-center w-[210px] h-[70px]  rounded-[10px] border text-[19px] px-[40px] py-[22px] mt-[40px] text-xl font-medium text-white bg-[#35B8BE]"
              to="#"
            >
              See Full Menu
            </Link>
          </div>
        </div>

        <div className="md:flex md:items-center h-[100%] py-[100px] px-[40px]">
          <div
            className="secContentD bg-no-repeat bg-center bg-contain h-screen lg:w-[50%] sm:w-100"
            style={{ backgroundImage: `url(${Phones})` }}
          ></div>
          <div className="secContentG h-full lg:w-[50%] flex flex-col justify-center lg:items-start lg:text-start sm:items-center sm:text-center w-auto">
            <h1 className="my-[20px] mx-0 w-auto text-6xl font-bold sm:mb-[20px] text-[#35B8BE]">
              Order online with our simple checkout.
            </h1>
            <p className="w-auto  mb-[80px] text-[20px] font-bold text-[#546285]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500.
            </p>
            <Link
              className="flex align-center items-center text-center w-[210px] h-[70px]  rounded-[10px] border text-[19px] px-[35px] py-[22px] mb-[30px] text-md font-medium text-white bg-[#35B8BE]"
              to="#"
            >
              See our FAQ
            </Link>
          </div>
        </div>

        <div className="bg-[#F5FBFE] md:flex md:items-center h-[100%] py-[100px] px-[40px]">
          <div className="sectionG2 h-full lg:w-[50%] flex flex-col justify-center lg:items-start lg:text-start sm:items-center sm:text-center w-auto">
            <h1 className="text-[#35B8BE] my-[20px] mx-0 w-auto text-6xl font-bold sm:mb-[20px] break-words">
              Call our store and takeaway when it suits you best.
            </h1>
            <p className="w-auto  mb-[80px] text-[20px] font-bold text-[#546285]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500.
            </p>
            <Link
              className="flex align-center items-center text-center w-[250px] h-[70px]  rounded-[10px] border text-[19px] px-[45px] py-[22px] mb-[30px] text-md font-medium text-white bg-[#35B8BE]"
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
