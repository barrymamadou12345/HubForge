import React, { useState } from "react";
import { BiLoaderCircle } from "react-icons/bi";
import { useAppContext } from "../../context/AppContext";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { MdLightMode } from "react-icons/md";
import { HiMenuAlt4 } from "react-icons/hi";

export const NavBarPageAccueil = () => {
  const { darkMode, toggleDarkMode } = useAppContext();
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <div>
      <div className="mx-auto max-w-screen-xlpx-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="md:flex md:items-center md:gap-12">
            <a
              className={`${
                darkMode ? "text-blanc" : "text-dark"
              } flex items-center`}
              href="/"
            >
              <BiLoaderCircle className={`text-[37px] me-3`} />
              <p className="text-2xl font-[500]">Pulso</p>
            </a>
          </div>
          <div
            className={` flex max-sm:flex-col-reverse items-center justify-end ${
              menuVisible ? "max-sm:mt-[120px]" : "mt-4"
            }`} // je dois ajouter un background pour le toggle et adapter le darkMode
          >
            <div
              className={` me-32 md:flex md:items-center w-full md:gap-12 ${
                menuVisible ? "block" : "hidden"
              }`}
            >
              <ul
                className={` flex gap-4 text-md ${
                  menuVisible ? " max-sm:flex-col  gap-3" : " "
                }`}
              >
                <li>
                  {/*className="pb-2 sm:p-0" -- pour la responsivité du menu*/}
                  <a
                    className={` ${darkMode ? "text-blanc" : "text-gris"}`}
                    href="/"
                  >
                    History
                  </a>
                </li>

                <li>
                  <a
                    className={`${darkMode ? "text-blanc" : "text-gris"}`}
                    href="/"
                  >
                    Services
                  </a>
                </li>

                <li>
                  <a
                    className={`${darkMode ? "text-blanc" : "text-gris"}`}
                    href="/"
                  >
                    Projects
                  </a>
                </li>
              </ul>
            </div>
            <div className=" flex items-center w-full justify-end gap-4">
              <div className="sm:flex sm:gap-4">
                <button onClick={toggleDarkMode} className="ms-4">
                  {darkMode ? (
                    <MdLightMode className="hover:text-orange text-2xl" />
                  ) : (
                    <BsFillMoonStarsFill className="text-2xl" />
                  )}
                </button>
              </div>

              <div className="block monToggle md:hidden">
                <button
                  onClick={toggleMenu}
                  className="rounded p-2 transition text-3xl"
                >
                  <HiMenuAlt4 />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
