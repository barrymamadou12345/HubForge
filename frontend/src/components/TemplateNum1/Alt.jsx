import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/ALT.svg";
import img1 from "../../assets/img1.webp";
import img2 from "../../assets/img2.webp";
import img3 from "../../assets/img3.webp";
import img4 from "../../assets/img4.webp";
import img5 from "../../assets/img5.webp";
import img6 from "../../assets/img6.webp";

export default function Alt() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="main bg-gray-50 marcellusSerif">
        <header className="py-6 sm:py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-12 lg:px-8 xl:px-16">
            <div className="flex flex-wrap justify-between lg:items-center">
              <div className="relative z-30 flex w-full items-center justify-between overflow-hidden lg:w-auto">
                <Link to="/">
                  <img
                    className="h-8 w-8"
                    src={logo}
                    alt="alt img"
                    width="120"
                    height="120"
                  />
                </Link>
                <button
                  aria-label="humburger"
                  id="hamburger"
                  className={`-mr-6 p-6 lg:hidden ${
                    isMenuOpen ? "bg-primary" : ""
                  }`}
                  onClick={handleMenuClick}
                >
                  <div
                    aria-hidden="true"
                    className="jumbotron m-auto h-0.5 w-6 rounded bg-dark transition duration-300"
                  ></div>
                  <div
                    aria-hidden="true"
                    className="jumbotron m-auto mt-2 h-0.5 w-6 rounded bg-dark transition duration-300"
                  ></div>
                </button>
              </div>
              <div
                id="navlinks"
                className={`fixed inset-0 z-20 h-full w-full items-center justify-center bg-white/90 backdrop-blur-3xl lg:static lg:block lg:h-auto lg:w-auto lg:bg-transparent lg:backdrop-blur-none ${
                  isMenuOpen ? "block" : "hidden"
                }`}
              >
                <ul className="group flex justify-auto sm:justify-center flex-col items-center gap-6 font-serif text-lg text-gray-600 lg:flex-row lg:gap-0 lg:font-sans lg:text-sm md:h-auto sm:h-screen">
                  <li className="text-right transition duration-500 group-hover:text-gray-300 lg:text-left">
                    <Link
                      to="/"
                      className="block py-1 px-6 hover:text-gray-800"
                    >
                      Work
                    </Link>
                  </li>
                  <li className="text-right transition duration-500 group-hover:text-gray-300 lg:text-left">
                    <Link
                      to="/pages/services.html"
                      className="block py-1 px-6 hover:text-gray-800"
                    >
                      Services
                    </Link>
                  </li>
                  <li className="text-right transition duration-500 group-hover:text-gray-300 lg:text-left">
                    <Link
                      to="/pages/about.html"
                      className="block py-1 px-6 hover:text-gray-800"
                    >
                      About
                    </Link>
                  </li>
                  <li className="text-right lg:pl-6 lg:text-left">
                    <Link
                      to="/pages/contact.html"
                      className="group flex h-9 items-center overflow-hidden rounded border border-gray-400 py-1 px-4 text-sm text-primary transition-all duration-300 hover:rounded-md hover:border-primary hover:bg-primary hover:text-white"
                    >
                      <span className="relative flex items-center">
                        Contact
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="group-hover:translate-x-2 h-4 w-4 translate-x-1 duration-300"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M8.25 4.5l7.5 7.5-7.5 7.5"
                          ></path>
                        </svg>
                      </span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </header>
        <main>
          <section className="pt-12 sm:pt-20 md:pt-32">
            <div className="mx-auto max-w-7xl px-4 sm:px-12 lg:px-8 xl:px-16">
              <h1 className="text-4xl font-bold text-gray-800 sm:text-5xl sm:leading-snug lg:text-6xl lg:leading-tight">
                We build better <span className="text-primary"> products</span>{" "}
                to help our clients build better companies.
              </h1>
              <div className="mt-12 sm:mt-24">
                <Link
                  to="/pages/about.html"
                  className="relative border-b py-3 font-serif text-xl before:absolute before:inset-x-0 before:bottom-0 before:h-px before:origin-right before:scale-x-0 before:bg-primary before:transition before:duration-300 hover:before:origin-left hover:before:scale-x-100"
                >
                  <span className="text-gray-600">About us</span>
                </Link>
              </div>
            </div>
          </section>

          <section>
            <div className="my-24 mx-auto px-2 sm:px-4 lg:px-4 xl:max-w-7xl xl:gap-x-24 xl:px-0 2xl:max-w-[90rem]">
              <div className="grid gap-4 sm:grid-cols-8 sm:gap-y-12 lg:gap-x-16 lg:gap-y-32">
                <Link to="/pages/project.html" className="group sm:col-span-4">
                  <div className="overflow-hidden rounded-md transition-all duration-300 group-hover:rounded-xl">
                    <img
                      className="h-full w-full object-cover brightness-95 transition duration-300 group-hover:scale-105"
                      src={img1}
                      alt="project cover"
                      width="1000"
                      height="1000"
                    />
                  </div>
                  <div className="p-2 sm:p-4">
                    <h2 className="text-lg font-medium text-gray-700 duration-300 hover:text-primary">
                      Higher Ground School
                    </h2>
                    <span className="mt-1 text-sm text-gray-500">
                      Network of schools
                    </span>
                  </div>
                </Link>
                <Link
                  to="/pages/project.html"
                  className="group flex flex-col sm:col-span-4 lg:mt-8 xl:mt-16"
                >
                  <div className="order-last p-2 sm:order-first sm:p-4">
                    <h2 className="text-lg font-medium text-gray-700 duration-300 hover:text-primary">
                      Higher Ground School
                    </h2>
                    <span className="mt-1 text-sm text-gray-500">
                      Network of schools
                    </span>
                  </div>
                  <div className="overflow-hidden rounded-md transition-all duration-300 group-hover:rounded-xl">
                    <img
                      className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                      src={img2}
                      alt="project cover"
                      width="1380"
                      height="1380"
                    />
                  </div>
                </Link>
                <Link
                  to="/pages/project.html"
                  className="group col-span-full lg:col-span-5"
                >
                  <div className="h-[30rem] overflow-hidden rounded-md transition-all duration-300 group-hover:rounded-xl">
                    <img
                      className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                      src={img3}
                      alt="project cover"
                      width="1800"
                      height="1201"
                    />
                  </div>
                  <div className="order-last p-2 sm:order-first sm:p-4">
                    <h2 className="text-lg font-medium text-gray-700 duration-300 hover:text-primary">
                      Higher Ground School
                    </h2>
                    <span className="mt-1 text-sm text-gray-500">
                      Network of schools
                    </span>
                  </div>
                </Link>
                <Link
                  to="/pages/project.html"
                  className="group col-span-full flex flex-col sm:row-start-4 lg:col-span-3 lg:row-start-auto"
                >
                  <div className="order-last p-2 sm:p-4 lg:order-first">
                    <h2 className="text-lg font-medium text-gray-700 duration-300 hover:text-primary">
                      Higher Ground School
                    </h2>
                    <span className="mt-1 text-sm text-gray-500">
                      Network of schools
                    </span>
                  </div>
                  <div className="overflow-hidden rounded-md transition-all duration-300 group-hover:rounded-xl lg:h-[30rem]">
                    <img
                      className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                      src={img4}
                      alt="project cover"
                      width="826"
                      height="1156"
                    />
                  </div>
                </Link>
                <Link to="/pages/project.html" className="group sm:col-span-4">
                  <div className="overflow-hidden rounded-md transition-all duration-300 group-hover:rounded-xl">
                    <img
                      className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                      src={img5}
                      alt="project cover"
                      width="826"
                      height="1239"
                    />
                  </div>
                  <div className="p-2 sm:p-4">
                    <h2 className="text-lg font-medium text-gray-700 duration-300 hover:text-primary">
                      Higher Ground School
                    </h2>
                    <span className="mt-1 text-sm text-gray-500">
                      Network of schools
                    </span>
                  </div>
                </Link>
                <Link
                  to="/pages/project.html"
                  className="group flex flex-col sm:col-span-4 lg:mt-8 xl:mt-16"
                >
                  <div className="order-last p-2 sm:order-first sm:p-4">
                    <h2 className="text-lg font-medium text-gray-700 duration-300 hover:text-primary">
                      Higher Ground School
                    </h2>
                    <span className="mt-1 text-sm text-gray-500">
                      Network of schools
                    </span>
                  </div>
                  <div className="overflow-hidden rounded-md transition-all duration-300 group-hover:rounded-3xl">
                    <img
                      className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                      src={img6}
                      alt="project cover"
                      width="826"
                      height="1239"
                    />
                  </div>
                </Link>
              </div>
            </div>
          </section>

          <section className="border-t border-b border-b-gray-100 py-32 group relative">
            <div className="mx-auto max-w-7xl px-4 sm:px-12 lg:px-8 xl:px-16">
              <h2 className="text-center text-lg font-medium text-gray-600">
                Parlons de votre projet
              </h2>
              <a
                href="mailto:hello@tailus.io"
                className="relative mt-4 block text-center text-5xl font-thin transition-all duration-500 hover:tracking-wide sm:text-7xl"
              >
                <span className="font-serif text-gray-700 transition duration-700 hover:bg-gradient-to-r hover:from-secondary hover:to-primary hover:bg-clip-text hover:text-transparent group-hover:text-primary">
                  hello@tailus.io
                </span>
              </a>
            </div>
          </section>
        </main>
        <footer className="bg-white pt-6">
          <div className="mx-auto max-w-7xl divide-y px-4 sm:px-12 lg:px-8 xl:px-16">
            <div className="flex flex-col items-center justify-between gap-6 pb-6 sm:flex-row">
              <Link to="/" className="block w-max">
                <img
                  className="h-8 w-8"
                  src={logo}
                  alt="alt img"
                  width="120"
                  height="120"
                />
              </Link>
              <ul className="group items-center justify-center gap-0 text-center text-sm text-gray-600 sm:flex lg:gap-0">
                <li className="transition duration-500 group-hover:text-gray-300">
                  <Link to="/" className="block py-1 px-3 hover:text-gray-800">
                    Work
                  </Link>
                </li>
                <li className="transition duration-500 group-hover:text-gray-300">
                  <Link
                    to="/pages/services.html"
                    className="block py-1 px-3 hover:text-gray-800"
                  >
                    Services
                  </Link>
                </li>
                <li className="transition duration-500 group-hover:text-gray-300">
                  <Link
                    to="/pages/contact.html"
                    className="block py-1 px-3 hover:text-gray-800"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-col flex-wrap items-center justify-between gap-4 py-6 text-sm text-gray-500 sm:flex-row sm:gap-6">
              <span className="order-last sm:order-first">
                Copyright © ALT 2019 - Présent
              </span>
              <ul className="order-first flex gap-6 sm:order-2">
                <li>
                  <Link
                    to="#"
                    target="_blank"
                    className="transition duration-300 hover:text-gray-600"
                  >
                    Twitter
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    target="_blank"
                    className="transition duration-300 hover:text-gray-600"
                  >
                    Behance
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    target="_blank"
                    className="transition duration-300 hover:text-gray-600"
                  >
                    Instagram
                  </Link>
                </li>
              </ul>
              <Link
                to="/pages/privacy.html"
                className="order-2 transition duration-300 hover:text-gray-600 sm:order-last"
              >
                Politique de confidentialité
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
