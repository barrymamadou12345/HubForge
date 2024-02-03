import React from 'react'
import { GrLocation } from "react-icons/gr";
import { ImPower } from "react-icons/im";
import { HiOutlineShieldCheck } from "react-icons/hi";
import MILI from "../../assets/images/hero.webp"
import { BsChatLeftText } from "react-icons/bs";


export default function Section2() {
  return (
    <section>
        <div className='max-w-screen-xl  mx-auto px-4 py-6 sm:px-6 sm:py-12 lg:px-8 lg:py-16'>
            <div className='grid grid-cols-1 py-4 lg:grid-cols-2  rounded-3xl mt-28'>
    <div class="max-w-xl text-start ltr:sm:text-left rtl:sm:text-right">
      <h1 class="text-3xl font-extrabold sm:text-5xl">
      Just focus on your business startegy
      </h1>
      <p class="mt-20  sm:text-xl">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus  numquam ea!  numquam ea!  numquam ea!
        numquam ea!
      </p>
      <p class="mt-10   sm:text-xl">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus  numquam ea!  numquam ea!  numquam ea!
        numquam ea!
      </p>
      <div class=" flex justify-start items-center gap-4  mt-5 mb-5">
        <span className='p-2 rounded border'><BsChatLeftText  className=' text-dark text-2xl' /></span>
        <div className=''> 
        <h3 class="font-bold text-gray-800 dark:text-white">
            Chart  AnyTime 
        </h3>
        <p>Asperiores nemo possimus nesciunt quam mollitia.</p>
        </div>
    </div>
    <hr />
    <div class=" flex justify-start items-center gap-4  mt-5">
        <span className='p-2 rounded border'><GrLocation className=' text-dark text-2xl' /></span>
        <div className=''> 
        <h3 class="font-bold text-gray-800 dark:text-white">
            Real Time Location
        </h3>
        <p>Asperiores nemo possimus nesciunt quam mollitia.</p>
        </div>
    </div>
    </div>
   {/* Timelinee */}
    <div className=''>
    <div class="ps-2 my-2 first:mt-0 ">
    </div>
    <div class="flex gap-x-8 ">
        <div class="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-gray-700">
        <div class="relative rounded-full bg-blue-500 p-2 z-10 w-18 h-18 flex justify-center items-center">
        <span class="flex flex-shrink-0 justify-center items-center w-3 h-3 border border-white bg-white rounded-full ">
        </span>
        </div>
        </div>
        <div class="rounded-xl flex gap-3 mb-20 p-4 bg-white shadow-md flex justify-center items-center">
            <span className='p-2 rounded bg-blue-500'><GrLocation className='bg-blue-500 text-white text-2xl' /></span>
        <h3 class="font-bold text-gray-800 dark:text-white">
            Real Time Location
        </h3>
        </div>
    </div>
    <div class="flex gap-x-8">
        <div class="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-gray-700">
        <div class="relative rounded-full bg-black p-2 z-10 w-18 h-18 flex justify-center items-center">
        <span class="flex flex-shrink-0 justify-center items-center w-3 h-3 border border-white bg-white rounded-full ">
        </span>
        </div>
        </div>
        <div class="rounded-xl flex gap-3 mb-28 p-4 bg-white shadow-md flex justify-center items-center">
            <span className='p-2 rounded bg-black'><ImPower
 className=' text-white text-2xl' /></span>
        <h3 class="font-bold text-gray-800 dark:text-white">
            The faster on the market
        </h3>
        </div>
    </div>
    <div class="flex gap-x-8">
        <div class="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-gray-700">
        <div class="relative rounded-full bg-purple-500 p-2 z-10 w-18 h-18 flex justify-center items-center">
        <span class="flex flex-shrink-0 justify-center items-center w-3 h-3 border border-white bg-white rounded-full ">
        </span>
        </div>
        </div>
        <div class="rounded-xl bg-white shadow-md ">
            <div className='flex p-4  gap-3'>
            <span className='p-2 rounded bg-purple-500'><HiOutlineShieldCheck
                    className=' text-white text-2xl' />
            </span>
            <h3 class="font-bold text-gray-800 dark:text-white">
                Safe and Private
            </h3>
            </div>
            <div className='w-96 h-40  mt-8 mr-12 max-sm:w-60'>
            <img src={MILI} className='h-full w-full' alt="" />
            </div>
        </div>
    </div>
                    
    </div>

  </div>
    </div>
    </section>
  )
}
