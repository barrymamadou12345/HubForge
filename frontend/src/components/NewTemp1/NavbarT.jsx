import React, { useState,useEffect,useRef } from 'react';
import { MdOutlineArrowDropDown } from "react-icons/md";
import BackgroundImage from '../../assets/images/tempsnip.png';

export default function NavbarT() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const menuRef = useRef(null);

  const handleModalToggle = () => {
    setIsModalOpen(!isModalOpen);
  };
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsModalOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className=' max-w-screen-xl mx-auto'>
      <header class="lg:px-16 px-4 right-0 left-0 top-0 flex fixed max-sm:shadow  sm:px-6 flex-wrap items-center py-2 " style={{ backdropFilter: 'blur(10px)' }}>
        <div className='w-3 h-7 bg-fuchsia-900'></div>
        <div className='w-2 m-2 h-4 bg-fuchsia-900'></div>
        <div class="flex-1 flex justify-between items-center">
          <a href="#" class="text-2xl text-fuchsia-900 font-bold">Lecturama</a>
        </div>
        <div className='bg-cover bg-center bg-no-repeat bg-fixed' style={{ backgroundImage: `url(${BackgroundImage})`, backgroundSize: 'contain', backgroundPosition: 'right' }}>
          {/* Rest of the navbar content goes here */}
        </div>
        <label for="menu-toggle" class="pointer-cursor md:hidden block" onClick={handleModalToggle}>
          <svg class="fill-current text-gray-900"
            xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
            <title>menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
          </svg>
        </label>
        <input class="hidden" type="checkbox" id="menu-toggle" />

        {/* Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 z-10 bg-black bg-opacity-50 flex items-center justify-center">
            <div ref={menuRef} className="bg-white opacity-70 w-64 mt-64 mx-auto p-4 rounded-md">
              <nav>
                <ul class="flex flex-col gap-5 items-center justify-between text-base text-gray-700 pt-4">
                  <li><a class="p-4 py-3 px-0 block font-bold" href="#">Home</a></li>
                  <li className='flex items-center font-bold'><a class="p-2 py-3 px-0 block" href="#">Browse</a> <span><MdOutlineArrowDropDown /></span></li>
                  <li className='flex items-center font-bold'><a class="p-2 py-3 px-0 block" href="#">My Books</a> <span><MdOutlineArrowDropDown /></span></li>
                  <li className='flex items-center font-bold'><a class="p-2 py-3 px-0 block mb-0" href="#">More</a> <span><MdOutlineArrowDropDown /></span></li>
                </ul>
              </nav>
              <a
                className="rounded-3xl bg-fuchsia-900 px-8 py-2 text-sm font-medium text-white shadow mt-4 block w-max mx-auto"
                href="#"
              >
                LOGIN
              </a>
            </div>
          </div>
        )}

        <div class="hidden md:flex md:items-center md:w-auto w-full md:gap-4 " id="menu">
          <nav>
            <ul class="md:flex md:gap-5 items-center justify-between text-base text-gray-700 pt-4 md:pt-0">
              <li><a class="md:p-4 py-3 px-0 block font-bold" href="#">Home</a></li>
              <li className='flex items-center font-bold'><a class="md:p-2 py-3 px-0 block" href="#">Browse</a> <span><MdOutlineArrowDropDown /></span></li>
              <li className='flex items-center font-bold'><a class="md:p-2 py-3 px-0 block" href="#">My Books</a> <span><MdOutlineArrowDropDown /></span></li>
              <li className='flex items-center font-bold'><a class="md:p-2 py-3 px-0 block mb-0" href="#">More</a> <span><MdOutlineArrowDropDown /></span></li>
            </ul>
          </nav>
          <a
            className="rounded-3xl bg-fuchsia-900 px-8 py-2 text-sm font-medium text-white shadow"
            href="#"
          >
            LOGIN
          </a>
        </div>
      </header>
    </div>
  )
}
