import React from "react";
import { Link } from "react-router-dom";

import { IoIosMoon } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaMedium } from "react-icons/fa6";

import team from "../../assets/Ampire/team.avif";
import airbnb from "../../assets/Ampire/airbnb.svg";
import unis from "../../assets/Ampire/unis.avif";
import ge from "../../assets/Ampire/ge.svg";
import idee from "../../assets/Ampire/idee.avif";
import microsoft from "../../assets/Ampire/microsoft.svg";
import avatar from "../../assets/Ampire/avatar.avif";
import avatar1 from "../../assets/Ampire/avatar-1.avif";
import avatar2 from "../../assets/Ampire/avatar-2.avif";
import avatar3 from "../../assets/Ampire/avatar-3.avif";
import avatar4 from "../../assets/Ampire/avatar-4.avif";
import tailushome from "../../assets/Ampire/tailus-home.avif";
import tailushomedark from "../../assets/Ampire/tailus-home-dark.webp";
import tailuscontact from "../../assets/Ampire/tailus-contact.webp";
import ctacards from "../../assets/Ampire/cta-cards.avif";
import ampire from "../../assets/Ampire/ampire.png";

export default function Ampire() {
  return (
    <>
      <div
        className={`min-h-screen bg-white selection:bg-green-500/10 selection:text-green-500 `}
      >
        <header>
          <nav
            id="navbar"
            className="fixed inset-x-0 z-20 w-full border-b border-gray-100 bg-white/80 backdrop-blur "
          >
            <div className="mx-auto px-4 sm:px-12 xl:max-w-6xl xl:px-0">
              <div className="relative flex flex-wrap items-center justify-between gap-6 lg:gap-0 lg:py-4">
                <div className="relative z-20 flex w-full justify-between md:px-0 lg:w-max">
                  <Link
                    to="#"
                    aria-label="logo"
                    className="flex items-center space-x-2"
                  >
                    <img src={ampire} alt="Ampire" className="h-9.5 w-auto" />
                  </Link>

                  <button
                    aria-label="humburger"
                    id="hamburger"
                    className="relative -mr-6 p-6 lg:hidden"
                  >
                    <div
                      aria-hidden="true"
                      className="m-auto h-0.5 w-5 rounded bg-sky-900 transition duration-300 "
                    ></div>
                    <div
                      aria-hidden="true"
                      className="m-auto mt-2 h-0.5 w-5 rounded bg-sky-900 transition duration-300 "
                    ></div>
                  </button>
                </div>
                <div
                  id="layer"
                  aria-hidden="true"
                  className="fixed inset-0 z-10 h-screen w-screen origin-bottom scale-y-0 bg-white/70 backdrop-blur-2xl transition duration-500 lg:hidden"
                ></div>
                <div
                  id="navlinks"
                  className="invisible absolute top-full left-0 z-20 w-full origin-top-right translate-y-1 scale-90 flex-col flex-wrap justify-end gap-6 rounded-3xl border border-gray-100 bg-white p-8 opacity-0 shadow-2xl shadow-gray-600/10 transition-all duration-300 lg:visible lg:relative lg:flex lg:w-auto lg:translate-y-0 lg:scale-100 lg:flex-row lg:items-center lg:gap-0 lg:border-none lg:bg-transparent lg:p-0 lg:opacity-100 lg:shadow-none lg:peer-checked:translate-y-0 "
                >
                  <div className="text-gray-600 lg:pr-4">
                    <ul className="space-y-6 text-base font-medium tracking-wide lg:flex lg:space-y-0 lg:text-sm">
                      <li>
                        <a
                          to="./pages/solution.html"
                          className="block transition hover:text-green-500 md:px-4"
                        >
                          <span>Solution</span>
                        </a>
                      </li>
                      <li>
                        <a
                          to="./pages/customers.html"
                          className="block transition hover:text-green-500  md:px-4"
                        >
                          <span>Clients</span>
                        </a>
                      </li>
                      <li>
                        <a
                          to="./pages/pricing.html"
                          className="block transition hover:text-green-500 md:px-4"
                        >
                          <span>Prix</span>
                        </a>
                      </li>
                      <li>
                        <a
                          to="./pages/blog.html"
                          className="block transition hover:text-green-500  md:px-4"
                        >
                          <span>Blog</span>
                        </a>
                      </li>
                      <li>
                        <a
                          to="./pages/about.html"
                          className="block transition hover:text-green-500 md:px-4"
                        >
                          <span>Entreprise</span>
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div className="mt-12 -ml-1 flex w-full flex-col space-y-2 border-green-500/10 sm:flex-row md:w-max lg:mt-0 lg:mr-6 lg:space-y-0 lg:border-l lg:pl-6">
                    <Link
                      to="#"
                      className="relative ml-auto flex h-9 w-full items-center justify-center before:absolute before:inset-0 before:rounded-full before:bg-green-500 before:transition-transform before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:px-4 lg:before:border lg:before:border-gray-200 lg:before:bg-gray-100 "
                    >
                      <span className="relative text-sm font-semibold text-white  lg:text-green-500">
                        Commencer
                      </span>
                    </Link>
                  </div>
                  <button
                    aria-label="switch theme"
                    className={`blackwhite switcher group relative hidden h-9 w-9 rounded-full before:absolute before:inset-0 before:rounded-full before:border before:border-gray-200 before:bg-gray-50 before:bg-gradient-to-b before:transition-transform before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 lg:flex`}
                  >
                    <IoIosMoon />
                  </button>
                </div>
                <div className="fixed top-3 right-14 z-20 sm:right-24 lg:hidden">
                  <button
                    aria-label="switche theme"
                    className="switcher group relative flex h-9 w-9 rounded-full before:absolute before:inset-0 before:rounded-full before:border before:border-gray-200 before:bg-gray-50 before:bg-gradient-to-b before:transition-transform before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 "
                  ></button>
                </div>
              </div>
            </div>
          </nav>
        </header>

        <section className="pt-32 sm:pt-40 md:pt-48">
          <div className="mx-auto px-4 sm:px-12 xl:max-w-6xl xl:px-0">
            <div className="relative">
              <h1 className="text-center text-5xl font-bold text-blue-900 sm:text-6xl lg:text-left lg:text-7xl">
                Conception, Construction,
                <span className="relative">
                  <svg
                    className="absolute inset-x-0 -bottom-1 w-full opacity-50"
                    xmlns="http://www.w3.org/2000/svg"
                    id="Layer_1"
                    viewBox="0 0 260 15.6"
                  ></svg>
                  <span className="relative bg-gradient-to-r from-green-500 to-secondaryLight bg-clip-text text-transparent md:px-2">
                    <span className="text-green-500">Expansion</span>
                  </span>
                </span>
              </h1>

              <div className="relative items-center gap-12 lg:flex">
                <div className="text-center sm:mx-auto sm:w-11/12 md:mt-12 md:w-4/5 lg:mt-0 lg:mr-auto lg:w-6/12 lg:text-left">
                  <p className="mt-12 text-lg text-gray-600 sm:text-xl">
                    Les ordinateurs étaient autrefois magiques. Mais une grande
                    partie de cette magie s'est estompée au fil du temps,
                    remplacée par des outils et des pratiques médiocres qui
                    ralentissent les équipes et freinent le travail de qualité.
                  </p>
                  <form action="" className="mt-12">
                    <div className="relative flex items-center rounded-full border border-green-500/20 bg-white p-1 px-2 shadow-md focus-within:ring-2 md:p-2 lg:pr-3">
                      <div className="py-3 pl-4 lg:pl-5">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="m-auto h-6 w-6 fill-gray-500"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                        </svg>
                      </div>
                      <input
                        aria-label="your email"
                        autoComplete="email"
                        placeholder="Your mail address"
                        className="w-full rounded-full bg-transparent p-4 placeholder-gray-600 outline-none"
                        type="email"
                      />
                      <div className="md:pr-1.5 lg:pr-0">
                        <button
                          type="submit"
                          title="Start buying"
                          className="relative ml-auto h-12 w-16 before:absolute before:inset-0 before:rounded-full before:bg-green-500 before:transition before:duration-300 active:duration-75 active:before:scale-95 sm:w-auto sm:px-6"
                        >
                          <span className="relative hidden w-max font-semibold text-white md:block">
                            Commencer
                          </span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="relative mx-auto h-6 w-6 text-white md:hidden"
                          >
                            <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z"></path>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </form>
                  <div className="mt-12 hidden lg:block">
                    <span className="text-gray-700 ">
                      La plus talentueuse des
                      <a
                        to="customers.html"
                        className="text-green-500 underline "
                      >
                        Equipe
                      </a>
                      !
                    </span>
                    <div class="relative mt-5 flex -space-x-1 children:h-10 children:w-10 children:rounded-full children:object-cover children:ring-4 children:ring-gray-100 dark:children:ring-gray-900">
                      <img
                        src={avatar}
                        alt="user avatar"
                        width="60"
                        height="60"
                        className="rounded-full border-4 border-gray-100 relative z-[1]"
                      />
                      <img
                        src={avatar1}
                        alt="user avatar"
                        width="60"
                        height="60"
                        className="rounded-full border-4 border-gray-100 relative z-[2] -left-2"
                      />
                      <img
                        src={avatar2}
                        alt="user avatar"
                        width="60"
                        height="60"
                        className="rounded-full border-4 border-gray-100 relative z-[3] -left-4"
                      />
                      <img
                        src={avatar3}
                        alt="user avatar"
                        width="60"
                        height="60"
                        className="rounded-full border-4 border-gray-100 relative z-[4] -left-6"
                      />
                      <img
                        src={avatar4}
                        alt="user avatar"
                        width="60"
                        height="60"
                        className="rounded-full border-4 border-gray-100 relative z-[5] -left-8"
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-12 w-full overflow-hidden sm:mt-20 lg:-mt-8 lg:w-6/12">
                  <img
                    className="w-full"
                    src={team}
                    alt="team illustration"
                    height="600"
                    width="800"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-32">
          <div className="mx-auto px-4 sm:px-12 xl:max-w-6xl xl:px-0">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-800 md:text-4xl xl:text-5xl">
                Pour les équipes et les organisations en pleine croissance
              </h2>
              <p className="mx-auto mt-6 text-gray-700 md:w-3/4 lg:w-3/5">
                Une équipe en croissance ne doit pas nécessairement signifier
                des difficultés croissantes. La confidentialité et l'outil
                adapté à chaque étape de votre parcours - Jira Software, sans
                friction - quelle que soit la taille de votre entreprise.
              </p>

              <div
                role="tablist"
                aria-label="tabs"
                className="relative mx-auto mt-12 grid h-12 w-auto grid-cols-3 items-center gap-x-1 overflow-hidden rounded-full border border-gray-200 bg-gray-100 px-[3px] text-gray-600 sm:w-max"
              >
                <div
                  className="tab-indicator absolute h-10 rounded-full bg-white shadow-md transition-[left] duration-500 "
                  style={{ left: "4px", width: "113.719px" }}
                ></div>
                <button
                  role="tab"
                  aria-selected="true"
                  aria-controls="panel-0"
                  tabIndex="0"
                  title="tab item"
                  className="tab relative block rounded-full py-2.5 px-4 hover:text-green-500"
                >
                  <span className="m-auto block w-max text-sm font-medium tracking-wider">
                    Onglet 1
                  </span>
                </button>
                <button
                  role="tab"
                  aria-selected="false"
                  aria-controls="panel-1"
                  tabIndex="-1"
                  title="tab item"
                  className="tab relative block rounded-full py-2.5 px-4 hover:text-green-500"
                >
                  <span className="m-auto block w-max text-sm font-medium tracking-wider">
                    Onglet 2
                  </span>
                </button>
                <button
                  role="tab"
                  aria-selected="false"
                  aria-controls="panel-2"
                  tabIndex="-1"
                  title="tab item"
                  className="tab relative block rounded-full py-2.5 px-6 hover:text-green-500"
                >
                  <span className="m-auto block w-max text-sm font-medium tracking-wider">
                    Onglet 3
                  </span>
                </button>
              </div>
            </div>
            <div className="mt-20">
              <div className="gap-6 space-y-12 md:flex md:space-y-0">
                <div className="relative md:w-1/2">
                  <div
                    className="panel visible inset-0 flex scale-100 flex-col justify-center opacity-100 transition duration-500 md:absolute"
                    id="panel-0"
                  >
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 ">
                        Faire circuler le travail à travers les équipes tout en
                        le reliant aux objectifs de l'entreprise.
                      </h3>
                      <p className="mt-8 text-gray-600">
                        Optimisez la collaboration inter-équipes en
                        synchronisant votre flux de travail avec les objectifs
                        stratégiques de votre entreprise, garantissant ainsi une
                        progression fluide et alignée vers le succès.
                      </p>
                      <div className="mt-12 space-y-6">
                        <div className="flex items-center gap-6">
                          <div className="flex h-20 w-20 rounded-3xl border border-gray-200 bg-white p-4">
                            <img
                              className="m-auto h-18 w-20"
                              src={unis}
                              alt="icon illustration"
                              loading="lazy"
                            />
                          </div>
                          <div className="w-[calc(100%-7.5rem)]">
                            <h4 className="text-lg font-semibold text-gray-800 ">
                              Unis tous ensemble
                            </h4>
                            <p className="mt-1 text-gray-600">
                              Unis tous ensemble pour atteindre de nouveaux
                              sommets, ensemble nous formons une équipe solide
                              prête à relever tous les défis.!
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center gap-6">
                          <div className="flex h-20 w-20 rounded-3xl border border-gray-200 bg-white p-4">
                            <img
                              className="m-auto h-18 w-20 rounded-full"
                              src={idee}
                              alt="icon illustration"
                              loading="lazy"
                              width="512"
                              height="512"
                            />
                          </div>
                          <div className="w-[calc(100%-7.5rem)]">
                            <h4 className="text-lg font-semibold text-gray-800 ">
                              Nouveaux idées
                            </h4>
                            <p className="mt-1 text-gray-600">
                              Explorez de nouvelles idées et libérez votre
                              créativité avec notre plateforme innovante, où
                              chaque concept devient une opportunité de
                              transformation.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="panel invisible absolute inset-0 flex scale-90 flex-col justify-center opacity-0 transition duration-500"
                    id="panel-1"
                  >
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 md:text-3xl lg:text-[30px]">
                        Facilitez la circulation du travail entre les équipes
                        tout en les connectant aux objectifs de l'entreprise
                      </h3>

                      <p className="mt-8 text-gray-600">
                        Transformez la façon dont votre entreprise fonctionne en
                        facilitant la circulation harmonieuse du travail entre
                        les équipes, tout en les connectant de manière
                        transparente aux objectifs stratégiques de l'entreprise.
                      </p>
                      <div className="mt-12 space-y-6">
                        <div className="flex items-center gap-6">
                          <div className="flex h-20 w-20 rounded-3xl border border-gray-200 bg-white p-4">
                            <img
                              className="m-auto h-8 w-auto"
                              src={""}
                              alt="icon illustration"
                              loading="lazy"
                              width="512"
                              height="512"
                            />
                          </div>
                          <div className="w-[calc(100%-7.5rem)]">
                            <h4 className="text-lg font-semibold text-gray-800">
                              Together as one
                            </h4>
                            <p className="mt-1 text-gray-600">
                              Accusantium nemo perspiciatis delectus atque
                              autem!
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center gap-6">
                          <div className="flex h-20 w-20 rounded-3xl border border-gray-200 bg-white p-4">
                            <img
                              className="m-auto h-8 w-auto"
                              src="https://cdn-icons-png.flaticon.com/512/2313/2313906.png"
                              alt="icon illustration"
                              loading="lazy"
                              width="512"
                              height="512"
                            />
                          </div>
                          <div className="w-[calc(100%-7.5rem)]">
                            <h4 className="text-lg font-semibold text-gray-800">
                              New ideas
                            </h4>
                            <p className="mt-1 text-gray-600">
                              Accusalectus atque autem accusantium nemo
                              perspiciatis delectus atque autem!
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="panel invisible absolute inset-0 flex scale-90 flex-col justify-center opacity-0 transition duration-500"
                    id="panel-2"
                  >
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 md:text-3xl">
                        Make work flow across teams while connecting back to
                        company goals
                      </h3>
                      <p className="mt-8 text-gray-600">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Eum omnis voluptatem accusantium nemo perspiciatis
                        delectus atque autem! repellat expedita consequatur!
                        Officiis id consequatur atque doloremque!
                      </p>
                      <div className="mt-12 space-y-6">
                        <div className="flex items-center gap-6">
                          <div className="flex h-20 w-20 rounded-3xl border border-gray-200 bg-white p-4">
                            <img
                              className="m-auto h-8 w-auto"
                              src="https://cdn-icons-png.flaticon.com/512/3340/3340200.png"
                              alt="icon illustration"
                              loading="lazy"
                              width="512"
                              height="512"
                            />
                          </div>
                          <div className="w-[calc(100%-7.5rem)]">
                            <h4 className="text-lg font-semibold text-gray-800 ">
                              Together as one
                            </h4>
                            <p className="mt-1 text-gray-600">
                              Accusantium nemo perspiciatis delectus atque
                              autem!
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center gap-6">
                          <div className="flex h-20 w-20 rounded-3xl border border-gray-200 bg-white p-4">
                            <img
                              className="m-auto h-8 w-auto"
                              src="https://cdn-icons-png.flaticon.com/512/5405/5405929.png"
                              alt="icon illustration"
                              loading="lazy"
                              width="512"
                              height="512"
                            />
                          </div>
                          <div className="w-[calc(100%-7.5rem)]">
                            <h4 className="text-lg font-semibold text-gray-800 ">
                              Growth
                            </h4>
                            <p className="mt-1 text-gray-600 ">
                              Accusalectus atque autem accusantium nemo
                              perspiciatis delectus atque autem!
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="-m-4 overflow-hidden p-4 sm:-mx-12 sm:px-12 md:mx-0 md:w-1/2 md:overflow-visible md:px-0">
                  <div className="relative bg-gray-100 before:absolute before:inset-0 before:scale-x-110 before:border-y before:border-gray-200 after:absolute after:inset-0 after:scale-y-110 after:border-x after:border-gray-200">
                    <div className="relative h-96 overflow-clip py-10 sm:h-[32rem] lg:p-20">
                      <div
                        data-target="panel-0"
                        className="panel-preview absolute inset-0 z-10 flex translate-y-0 scale-100 items-end overflow-hidden px-6 opacity-100 transition duration-500 sm:px-10"
                      >
                        <img
                          src={tailushome}
                          className="mx-auto h-80 w-96 rounded-t-3xl border object-cover object-top shadow-2xl sm:h-[28rem]"
                          alt="tailus screenshot"
                          width="850"
                          height="1780"
                        />
                      </div>
                      <div
                        data-target="panel-1"
                        className="panel-preview absolute inset-0 z-0 flex translate-y-[100%] scale-100 items-end overflow-hidden px-6 opacity-50 transition duration-500 sm:px-10"
                      >
                        <img
                          src={tailushomedark}
                          className="mx-auto h-80 w-96 rounded-t-3xl border object-cover object-top shadow-2xl sm:h-[28rem]"
                          alt="tailus screenshot"
                          width="850"
                          height="1780"
                        />
                      </div>
                      <div
                        data-target="panel-2"
                        className="panel-preview absolute inset-0 z-0 flex translate-y-[100%] scale-100 items-end overflow-hidden px-6 opacity-50 transition duration-500 sm:px-10"
                      >
                        <img
                          src={tailuscontact}
                          className="mx-auto h-80 w-96 rounded-t-3xl border object-cover object-top shadow-2xl sm:h-[28rem]"
                          alt="tailus contact screenshot"
                          width="850"
                          height="1780"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-32">
          <div className="mx-auto px-4 sm:px-12 xl:max-w-6xl xl:px-0">
            <div className="space-y-6 md:flex lg:items-center lg:gap-6 lg:space-y-0">
              <div className="md:5/12 lg:w-6/12">
                <img
                  className="md:-ml-8"
                  src={ctacards}
                  alt="tailus stats and login components"
                  loading="lazy"
                  width="1779"
                  height="1592"
                />
              </div>
              <div className="md:7/12 lg:w-6/12">
                <h2 className="text-3xl font-bold text-gray-800 md:text-4xl xl:text-5xl">
                  Le développement est réalisé par des passionnés.
                </h2>
                <p className="mt-8 text-gray-600">
                  Facilitez la circulation harmonieuse du travail au sein de
                  votre organisation, permettant ainsi à chaque équipe de
                  s'aligner efficacement sur les objectifs stratégiques de
                  l'entreprise. Avec notre solution intégrée, vos équipes
                  peuvent collaborer de manière transparente, partageant des
                  idées et des ressources de manière fluide, tout en restant
                  toujours ancrées dans la vision et les objectifs globaux de
                  l'entreprise.
                </p>
                <p className="mb-12 mt-4 text-gray-600">
                  En unissant les efforts de chaque département, nous
                  transformons les défis en opportunités et favorisons une
                  croissance durable, car ensemble, nous atteignons de nouveaux
                  sommets.
                </p>
                <a
                  to="./pages/contact.html"
                  className="relative flex h-11 w-max items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-green-500 before:transition-transform before:duration-300 active:duration-75 active:before:scale-95"
                >
                  <span className="relative text-base font-semibold text-white">
                    Commencer
                  </span>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="relative py-32">
          <div
            aria-hidden="true"
            className="absolute inset-0 top-60 grid grid-cols-2 -space-x-52 opacity-50"
          >
            <div className="h-60 bg-gradient-to-br from-green-500 to-purple-400 blur-[106px]"></div>
            <div className="h-40 bg-gradient-to-r from-cyan-400 to-sky-300 blur-[106px]"></div>
          </div>
          <div className="relative mx-auto px-4 sm:px-12 xl:max-w-6xl xl:px-0">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-800 md:text-4xl xl:text-5xl">
                Une approche axée sur la technologie
              </h2>
              <p className="mx-auto mt-6 text-gray-700 md:w-3/4 lg:w-3/5">
                Une équipe en pleine expansion n'implique pas nécessairement des
                difficultés croissantes. Avec Jira Software, trouvez la
                confidentialité et l'outil adéquat à chaque étape de votre
                progression, quel que soit la taille de votre entreprise.
              </p>
            </div>
            <div className="mt-16 grid gap-8 sm:mx-auto sm:w-2/3 md:w-full md:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-3xl border border-gray-100 bg-white p-8 py-12 shadow-2xl shadow-gray-600/10 sm:p-12">
                <div className="space-y-12 text-center">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/584/584796.png"
                    className="mx-auto h-14 w-auto"
                    width="512"
                    height="512"
                    alt="burger illustration"
                  />
                  <div className="space-y-6">
                    <h3 className="text-2xl font-semibold text-gray-800 transition">
                      Première fonctionnalité
                    </h3>
                    <p className="text-gray-600">
                      Découvrez notre première fonctionnalité révolutionnaire
                      conçue pour catalyser l'efficacité de votre équipe, tout
                      en alignant chaque tâche et projet avec les objectifs
                      stratégiques de votre entreprise. Grâce à cette innovation
                      remarquable, vous pourrez non seulement améliorer la
                      collaboration interne, mais également renforcer la
                      cohésion et la synergie entre les différentes équipes,
                      permettant ainsi à votre entreprise de prospérer et de
                      réaliser son plein potentiel.
                    </p>
                    <a
                      aria-label="read more"
                      to="#"
                      className="group relative mx-auto flex h-12 w-12 items-center justify-center before:absolute before:inset-0 before:rounded-full before:border before:border-gray-200 before:bg-gray-50 before:bg-gradient-to-b before:transition-transform before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="relative h-5 w-5 text-gray-600 transition duration-300 group-hover:translate-x-1"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <div className="rounded-3xl border border-gray-100 bg-white p-8 py-12 shadow-2xl shadow-gray-600/10 sm:p-12">
                <div className="space-y-12 text-center">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/6106/6106288.png"
                    className="mx-auto h-14 w-auto"
                    width="512"
                    height="512"
                    alt="burger illustration"
                  />
                  <div className="space-y-6">
                    <h3 className="text-2xl font-semibold text-gray-800 transition">
                      Seconde fonctionnalité
                    </h3>
                    <p className="text-gray-600">
                      Découvrez notre seconde fonctionnalité révolutionnaire
                      conçue pour catalyser l'efficacité de votre équipe, tout
                      en alignant chaque tâche et projet avec les objectifs
                      stratégiques de votre entreprise. Grâce à cette innovation
                      remarquable, vous pourrez non seulement améliorer la
                      collaboration interne, mais également renforcer la
                      cohésion et la synergie entre les différentes équipes,
                      permettant ainsi à votre entreprise de prospérer et de
                      réaliser son plein potentiel.
                    </p>
                    <a
                      aria-label="read more"
                      to="#"
                      className="group relative mx-auto flex h-12 w-12 items-center justify-center before:absolute before:inset-0 before:rounded-full before:border before:border-gray-200 before:bg-gray-50 before:bg-gradient-to-b before:transition-transform before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="relative h-5 w-5 text-gray-600 transition duration-300 group-hover:translate-x-1"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <div className="rounded-3xl border border-gray-100 bg-white p-8 py-12 shadow-2xl shadow-gray-600/10 sm:p-12">
                <div className="space-y-12 text-center">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/4727/4727266.png"
                    className="mx-auto h-14 w-auto"
                    width="512"
                    height="512"
                    alt="burger illustration"
                  />
                  <div className="space-y-6">
                    <h3 className="text-2xl font-semibold text-gray-800 transition">
                      Troisième fonctionnalité
                    </h3>
                    <p className="text-gray-600">
                      Découvrez notre troisième fonctionnalité révolutionnaire
                      conçue pour catalyser l'efficacité de votre équipe, tout
                      en alignant chaque tâche et projet avec les objectifs
                      stratégiques de votre entreprise. Grâce à cette innovation
                      remarquable, vous pourrez non seulement améliorer la
                      collaboration interne, mais également renforcer la
                      cohésion et la synergie entre les différentes équipes,
                      permettant ainsi à votre entreprise de prospérer et de
                      réaliser son plein potentiel.
                    </p>
                    <a
                      aria-label="read more"
                      to="#"
                      className="group relative mx-auto flex h-12 w-12 items-center justify-center before:absolute before:inset-0 before:rounded-full before:border before:border-gray-200 before:bg-gray-50 before:bg-gradient-to-b before:transition-transform before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="relative h-5 w-5 text-gray-600 transition duration-300 group-hover:translate-x-1"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-32">
          <div className="mx-auto px-4 sm:px-12 xl:max-w-6xl xl:px-0">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-800 md:text-4xl xl:text-5xl">
                Faites confiance aux leaders.
              </h2>
              <p className="mx-auto mt-6 text-gray-700 md:w-3/4 lg:w-3/5">
                Une équipe en pleine croissance n'implique pas nécessairement
                des douleurs de croissance. Avec Jira Software, nous mettons
                l'accent sur la confidentialité et vous fournissons l'outil
                adéquat à chaque étape de votre parcours, sans accroc, quelle
                que soit la taille de votre entreprise.
              </p>
            </div>
          </div>
        </section>

        <section className="relative before:absolute before:inset-0 before:h-px before:w-96 before:bg-gradient-to-r before:from-yellow-300 before:via-pink-400 before:to-transparent after:absolute after:inset-0 after:ml-auto after:mt-auto after:h-px after:w-96 after:bg-gradient-to-l after:from-yellow-300 after:via-pink-400 after:to-transparent">
          <div className="border-y border-gray-200 bg-gray-100">
            <div className="relative mx-auto px-6 md:max-w-full md:px-12 lg:max-w-6xl xl:px-0">
              <div className="items-end justify-between md:flex">
                <div className="h-max py-16 md:w-6/12 xl:w-5/12">
                  <div className="text-center md:text-left">
                    <h2 className="text-3xl font-bold text-gray-800 md:w-max md:text-4xl xl:text-5xl">
                      Un pas de plus vers <br />
                      l'amelioration workflow
                    </h2>
                    <p className="mb-8 mt-6 text-gray-600">
                      notre solution innovante vous offre la possibilité de
                      coordonner efficacement les activités de vos équipes tout
                      en alignant chaque étape sur les objectifs stratégiques de
                      votre entreprise.
                    </p>
                    <form action="" className="mt-12">
                      <div className="relative flex items-center rounded-full border border-green-500/20 bg-white p-1 px-2 shadow-md md:p-2 lg:pr-3">
                        <div className="py-3 pl-4 lg:pl-5">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="m-auto h-6 w-6 fill-gray-500"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                          </svg>
                        </div>
                        <input
                          autoComplete="email"
                          aria-label="your email"
                          placeholder="Your mail address"
                          className="w-full rounded-full bg-transparent p-4 placeholder-gray-600"
                          type="email"
                        />
                        <div className="md:pr-1.5 lg:pr-0">
                          <button
                            type="button"
                            title="Start buying"
                            className="relative ml-auto h-12 w-16 before:absolute before:inset-0 before:rounded-full before:bg-green-500 before:transition before:duration-300 active:duration-75 active:before:scale-95  sm:w-auto sm:px-6"
                          >
                            <span className="relative hidden w-max font-semibold text-white md:block">
                              Commencer
                            </span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              className="relative mx-auto h-6 w-6 text-white md:hidden"
                            >
                              <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z"></path>
                            </svg>
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>

                <div className="md:w-[42%] lg:w-1/2">
                  <img
                    src={ctacards}
                    alt="tailus stat cards components"
                    loading="lazy"
                    width="1299"
                    height="678"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer className="border-t border-gray-100 pt-32 pb-8">
          <div>
            <div className="m-auto space-y-8 px-4 text-gray-600 sm:px-12 xl:max-w-6xl xl:px-0">
              <div className="grid grid-cols-8 gap-6 md:gap-0">
                <div className="col-span-8 md:col-span-2 lg:col-span-3">
                  <div className="flex h-full items-center justify-between gap-6 border-b border-white py-6 md:flex-col md:items-start md:justify-between md:space-y-6 md:border-none md:py-0">
                    <div>
                      <Link
                        to="#"
                        aria-label="ampire logo"
                        className="flex items-center"
                      >
                        <img
                          src={ampire}
                          alt="Ampire"
                          className="h-9.5 w-auto"
                        />
                      </Link>
                      <Link
                        to="https://tailus.io"
                        className="mt-2 inline-block text-sm"
                      >
                        Designed <span className="text-red-500">Red Team</span> (stagiaire)
                      </Link>
                    </div>

                    <div className="flex gap-6">
                      <Link
                        to="#"
                        target="blank"
                        aria-label="github"
                        className="hover:text-green-500"
                      >
                        <span className="sr-only">Github</span>
                        <FaGithub />
                      </Link>
                      <Link
                        to="#"
                        target="blank"
                        aria-label="twitter"
                        className="hover:text-green-500"
                      >
                        <FaTwitter />
                      </Link>
                      <Link
                        to="#"
                        target="blank"
                        aria-label="medium"
                        className="hover:text-green-500"
                      >
                        <span className="sr-only">Medium</span>
                        <FaMedium s />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-span-8 md:col-span-6 lg:col-span-5">
                  <div className="grid grid-cols-2 gap-6 pb-16 sm:grid-cols-3 md:pl-16">
                    <div>
                      <h2 className="text-base font-medium text-gray-800">
                        Entreprise
                      </h2>
                      <ul className="mt-4 list-inside space-y-4">
                        <li>
                          <a
                            to="#"
                            className="text-sm duration-100 hover:text-green-500"
                          >
                            A propos
                          </a>
                        </li>
                        <li>
                          <a
                            to="#"
                            className="text-sm duration-100 hover:text-green-500"
                          >
                            Clients
                          </a>
                        </li>
                        <li>
                          <a
                            to="#"
                            className="text-sm duration-100 hover:text-green-500"
                          >
                            Enterprise
                          </a>
                        </li>
                        <li>
                          <a
                            to="#"
                            className="text-sm duration-100 hover:text-green-500"
                          >
                            Partners
                          </a>
                        </li>
                        <li>
                          <a
                            to="#"
                            className="text-sm duration-100 hover:text-green-500"
                          >
                            Jobs
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h2 className="text-base font-medium text-gray-800">
                        Products
                      </h2>
                      <ul className="mt-4 list-inside space-y-4">
                        <li>
                          <a
                            to="#"
                            className="text-sm duration-100 hover:text-green-500"
                          >
                            About
                          </a>
                        </li>
                        <li>
                          <a
                            to="#"
                            className="text-sm duration-100 hover:text-green-500"
                          >
                            Customers
                          </a>
                        </li>
                        <li>
                          <a
                            to="#"
                            className="text-sm duration-100 hover:text-green-500"
                          >
                            Enterprise
                          </a>
                        </li>
                        <li>
                          <a
                            to="#"
                            className="text-sm duration-100 hover:text-green-500"
                          >
                            Partners
                          </a>
                        </li>
                        <li>
                          <a
                            to="#"
                            className="text-sm duration-100 hover:text-green-500"
                          >
                            Jobs
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h2 className="text-base font-medium text-gray-800">
                        Ressources
                      </h2>
                      <ul className="mt-4 list-inside space-y-4">
                        <li>
                          <a
                            to="#"
                            className="text-sm duration-100 hover:text-green-500"
                          >
                            About
                          </a>
                        </li>
                        <li>
                          <a
                            to="#"
                            className="text-sm duration-100 hover:text-green-500"
                          >
                            Customers
                          </a>
                        </li>
                        <li>
                          <a
                            to="#"
                            className="text-sm duration-100 hover:text-green-500"
                          >
                            Enterprise
                          </a>
                        </li>
                        <li>
                          <a
                            to="#"
                            className="text-sm duration-100 hover:text-green-500"
                          >
                            Partners
                          </a>
                        </li>
                        <li>
                          <a
                            to="#"
                            className="text-sm duration-100 hover:text-green-500"
                          >
                            Jobs
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="flex justify-between text-sm md:pl-16">
                    <span>© Red Team 2024 - Present</span>
                    <span>All right reserved</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
