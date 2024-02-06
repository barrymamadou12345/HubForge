import React, { useState, useRef, useEffect } from "react";
import Section1 from "./Section1";
import AccTemp2 from "./AccTemp2";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Section5 from "./Section5";

export default function NavTemp2() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div>
      <header className="bg-white">
        <div className="mx-auto max-w-screen-xl max-sm:shadow px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex-1 md:flex md:items-center md:gap-12">
              <a 
                href="#home"
                aria-label="logo"
                className="flex items-center space-x-2 px-0"
              >
                <div className="h-4 w-4 rounded-full bg-gray-900 dark:bg-white"></div>
                <div className="h-6 w-2 bg-purple-500"></div>
                <span className="text-2xl font-bold text-gray-900 dark:text-white">
                  Astrolus
                </span>
              </a>
            </div>

            <div
              className="lg:flex lg:items-center lg:gap-12 justify-center"
              ref={menuRef}
            >
              <nav
                aria-label="Global"
                className={`lg:block ${isMenuOpen ? "block" : "hidden"}`}
              >
                <ul className="flex flex-col w-full max-sm:relative max-sm:top-40 max-sm:bg-white  max-sm:justify-center lg:flex-row  items-center gap-8 text-sm">
                  <li>
                    <a
                      className="text-gray-500 text-xl transition hover:text-gray-500/75"
                      href="#sec1"
                    >
                      Features
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-gray-500 text-xl transition hover:text-gray-500/75"
                      href="#sec2"
                    >
                      Solution
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-gray-500 text-xl transition hover:text-gray-500/75"
                      href="#sec3"
                    >
                      Reviews
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-gray-500 text-xl transition hover:text-gray-500/75"
                      href="#sec4"
                    >
                      Pricing
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-gray-500 text-xl transition hover:text-gray-500/75"
                      href="#sec5"
                    >
                      Projects
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-gray-500 text-xl transition hover:text-gray-500/75"
                      href="#"
                    >
                      Login
                    </a>
                  </li>
                </ul>
              </nav>
              <div className="flex items-center gap-4">
                <div className="sm:flex sm:gap-4">
                  <a
                    className="rounded-3xl bg-purple-500 px-5 py-2.5 text-sm font-medium text-white shadow"
                    href="#"
                  >
                    Get started
                  </a>
                </div>
                <div className="block lg:hidden">
                  <button
                    className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                  >
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
      <AccTemp2 />
      <Section1 sec1={"sec1"} />
      <Section2 sec2={"sec2"} />
      <Section3 sec3={"sec3"} />
      <Section4 sec4={"sec4"} />
      <Section5 sec5={"sec5"} />
    </div>
  );
}
