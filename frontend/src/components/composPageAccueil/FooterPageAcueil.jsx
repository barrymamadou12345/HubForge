import React, { useState } from "react";
import { BiLoaderCircle } from "react-icons/bi";
import { useAppContext } from "../../context/AppContext";

export const FooterPageAcueil = () => {
  const { darkMode } = useAppContext();

  const date = new Date();
  const formatDate = (dateString) => {
    const options = {
      year: "numeric",
      month: "numeric",
      day: "numeric",
      // hour: "numeric",
      // minute: "numeric",
      // second: "numeric",
      // hour12: false,
    };
    return new Date(dateString).toLocaleDateString("fr-FR", options);
  };

  return (
    <div className=" mt-24 pb-6 text-sm tracking-wide">
      <div class="mx-auto flex flex-col items-start justify-center px-6 md:max-w-full md:px-12 lg:max-w-8xl">
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
            <span class="block w-60 pt-1">
              &copy; HubForge {formatDate(date)}
            </span>
          </div>
          <div class="-mb-4 flex gap-1 overflow-hidden font-medium text-gray-600 ">
            Proudly By
            <h2 class="-mt-[3px] flex items-start justify-center gap-2 text-center text-lg font-semibold text-blue-950  sm:gap-1">
              <div class="block">
                <div class="relative block pb-2">
                  <span class="block"> Bakeli </span>
                </div>
              </div>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};
