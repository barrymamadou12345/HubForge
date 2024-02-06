import React from 'react';
import { MdOutlineArrowDropDown } from "react-icons/md";
import BackgroundImage from '../../assets/images/tempsnip.png';

export default function NavbarT() {
  return (
    <div className='w-full'>

      <header class="lg:px-16 px-4 right-0 left-0 flex fixed mx-auto w-screen max-sm:shadow px-4 sm:px-6 lg:px-8 flex-wrap items-center py-4 " style={{ backdropFilter: 'blur(10px)' }}>
        <div class="flex-1 flex justify-between items-center">
          <a href="#" class="text-2xl text-fuchsia-900 font-bold">Lecturama</a>
        </div>
        <div className='bg-cover bg-center bg-no-repeat bg-fixed' style={{ backgroundImage: `url(${BackgroundImage})`, backgroundSize: 'contain', backgroundPosition: 'right' }}>
    {/* Rest of the navbar content goes here */}
        </div>
        <label for="menu-toggle" class="pointer-cursor md:hidden block">
          <svg class="fill-current text-gray-900"
            xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
            <title>menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
          </svg>
        </label>
        <input class="hidden" type="checkbox" id="menu-toggle" />

        <div class="hidden md:flex md:items-center md:w-auto w-full md:gap-4 " id="menu">

          <nav>
            <ul class="md:flex md:gap-5 items-center justify-between text-base text-gray-700 pt-4 md:pt-0">
              <li><a class="md:p-4 py-3 px-0 block" href="#">Home</a>
              </li>
              <li className='flex items-center'><a class="md:p-2 py-3 px-0 block" href="#">Browse</a> <span><MdOutlineArrowDropDown /></span></li>
              <li className='flex items-center'><a class="md:p-2 py-3 px-0 block" href="#">My Books</a> <span><MdOutlineArrowDropDown /></span></li>
              <li className='flex items-center'><a class="md:p-2 py-3 px-0 block md:mb-0 mb-2" href="#">More</a> <span><MdOutlineArrowDropDown /></span></li>
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
