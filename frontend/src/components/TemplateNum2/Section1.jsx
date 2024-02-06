import React from 'react';
import Etoile from "../../assets/images/xp.webp";
import { HiOutlineShieldCheck } from "react-icons/hi";
import { MdPayment } from "react-icons/md";
import { SiFastapi } from "react-icons/si";
import { CiSearch } from "react-icons/ci";



export default function Section1({ sec1 }) {
  return (
    <section>
      <div
        id={sec1}
        class="max-w-screen-xl mt-10 mx-auto px-4 py-6 sm:px-6 sm:py-12 lg:px-8 lg:py-16"
      >
        <div className="text-center">
          <h2 className="text-5xl font-bold pb-5">Shaped to meet your needs</h2>
          <p className="text-xl  ">
            apiente optio repellendus atque illum odio! Fugiat at expedita
            deserunt dolorum molestias.
          </p>
        </div>
        <div class="grid grid-cols-1 py-4 lg:grid-cols-2 lg:items-center border  rounded-3xl mt-28">
          <div class="mx-auto max-w-lg text-center lg:mx-8 ltr:lg:text-left rtl:lg:text-right">
            <div className="w-20 h-20 mx-auto">
              <img src={Etoile} className="w-full h-full" alt="" />
            </div>
            <h2 class="lg:text-xl font-bold sm:text-4xl">User Centerd</h2>
            <p class="text-gray-600 lg:text-center mx-36">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut vero
              aliquid sint distinctio
            </p>
          </div>
          <div className="grid lg:grid-cols-2 lg:py-8 gap-4 sm:grid-cols-3 mx-3 bg-gray-200 rounded-xl">
            <a
              className="block rounded-xl py-4 hover:bg-white m-2 p-4 hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
              href="/accountant"
            >
              <span className="inline-block border-gray-300 rounded-lg bg-gray-200 border  p-3 text-2xl">
                <HiOutlineShieldCheck />
              </span>
              <h2 className="mt-2 font-bold">Security first</h2>
              <p class="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                Dolorem aliquid officiis quae ipsum nobis libero alias Iure
                nobis dicta.
              </p>
            </a>
            <a
              className="block rounded-xl py-4 hover:bg-white m-2 p-4 hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
              href="/accountant"
            >
              <span class="inline-block border-gray-300 rounded-lg bg-gray-200 border  p-3 text-2xl">
                <MdPayment />
              </span>
              <h2 class="mt-2 font-bold">Simple Payement</h2>
              <p class="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                Lorem ipsum dolor sit amet consectetur.
              </p>
            </a>
            <a
              className="block rounded-xl py-4 hover:bg-white m-2 p-4 hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
              href="/accountant"
            >
              <span class="inline-block border-gray-300 rounded-lg bg-gray-200 border  p-3 text-2xl">
                <SiFastapi />
              </span>

              <h2 class="mt-2 font-bold">Fast Speed</h2>

              <p class="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                Lorem ipsum dolor sit amet consectetur.
              </p>
            </a>
            <a
              className="block rounded-xl py-4 hover:bg-white m-2 p-4 hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
              href="/accountant"
            >
              <span class="inline-block border-gray-300 rounded-lg bg-gray-200 border  p-3 text-2xl">
                <CiSearch />
              </span>
              <h2 class="mt-2 font-bold">Searching enging</h2>
              <p class="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                Lorem ipsum dolor sit amet consectetur.
              </p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
