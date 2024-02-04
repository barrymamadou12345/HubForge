import React from "react";
import { BiLoaderCircle } from "react-icons/bi";
import { useAppContext } from "../../context/AppContext";
import { MdOutlineMailOutline } from "react-icons/md";

export const FooterPageAcueil = () => {
  const { darkMode } = useAppContext();

  return (
    <div className=" mt-32  pb-6 text-sm tracking-wide">
      <div class="mx-auto flex flex-col items-start justify-center px-6 md:max-w-full md:px-12 lg:max-w-8xl">
        <div
          class={` ${
            darkMode ? "text-blanc" : "text-gray-500"
          } mt-12 grid w-full grid-cols-2 gap-4 gap-y-12 pb-14  sm:grid-cols-4 lg:grid-cols-6`}
        >
          <div class="flex flex-col space-y-4">
            <h2 class="pb-4 font-bold ">Guide</h2>
            <a class="transition hover:text-gray-600" href="/guide">
              Get started
            </a>
          </div>
          <div class="flex flex-col space-y-4">
            <h2 class="pb-4 font-bold  ">Ressources</h2>

            <a class="transition hover:text-gray-600" href="/accueil">
              Templates
            </a>
            <a
              class="transition hover:text-gray-600"
              target="_blank"
              rel="noopener noreferrer"
              href="/"
            >
              Snippets
            </a>
          </div>
          <div class="flex flex-col space-y-4">
            <h2 class="pb-4 font-bold  ">Community</h2>
            <a
              class="transition hover:text-gray-600"
              target="_blank"
              rel="noopener noreferrer"
              href="/"
            >
              GitHub
            </a>
            <a
              class="transition hover:text-gray-600"
              target="_blank"
              rel="noopener noreferrer"
              href="/"
            >
              Twitter
            </a>
            <a
              class="transition hover:text-gray-600"
              target="_blank"
              rel="noopener noreferrer"
              href="/"
            >
              YouTube
            </a>
          </div>
          <div class="flex flex-col space-y-4">
            <h2 class="pb-4 font-bold  ">Contact us</h2>
            <a class="transition hover:text-gray-600" href="/contact">
              Get in touch
            </a>
          </div>
          <div class="col-span-2 lg:col-span-2">
            <h2 class="mb-8 font-bold ">Join our Newsletter</h2>
            <p class="text-sm tracking-wide ">
              Never miss an update about all our ressources, be the first to
              know about our next moves.
            </p>
            <div class="relative z-10 mx-auto mt-8 flex items-center gap-4 ">
              <div class="relative flex w-full items-center sm:w-4/5">
                <MdOutlineMailOutline className="-me-8 text-xl" />
                <input
                  name="email"
                  type="email"
                  placeholder="Your email"
                  class="relative h-9 w-full rounded-full border border-gray-300 bg-transparent py-2.5 pl-10 pr-5 text-sm tracking-wide placeholder-gray-500 invalid:border-red-500 dark:border-gray-600 dark:placeholder-gray-200"
                />
              </div>
              <button
                type="submit"
                name="subscribe"
                class=" h-9 w-max items-center justify-center px-4 rounded-full bg-blue-600 transition-all duration-500 hover:scale-105 "
              >
                <span class=" text-sm tracking-wider text-white">
                  Subscribe
                </span>
              </button>
            </div>
          </div>
        </div>
        <div class="relative flex w-full flex-wrap items-center justify-center gap-4 border-t border-gray-300 pt-6 text-sm sm:justify-between">
          <div class="flex items-center  ">
            <div className="md:flex md:items-center md:gap-12">
              <a
                className={`${
                  darkMode ? "text-blanc" : "text-dark"
                } flex items-center`}
                href="/"
              >
                <BiLoaderCircle className={`text-[37px] me-3`} />
              </a>
            </div>
            <span class="block w-60 pt-1">&copy;HubForge 2023 - 2024 </span>
          </div>
          <div class="-mb-4 flex gap-1 overflow-hidden font-medium text-gray-600 ">
            Proudly made in
            <h2 class="-mt-[3px] flex items-start justify-center gap-2 text-center text-lg font-semibold text-blue-950  sm:gap-1">
              <div class="block">
                <div class="relative block pb-2">
                  <span class="block"> Dakar </span>
                </div>
              </div>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};
