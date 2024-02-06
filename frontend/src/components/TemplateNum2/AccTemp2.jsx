import React from 'react'
import Hero from "../../assets/images/hero.webp"
import AIR from "../../assets/images/téléchargement.png"
import GOOGLE from "../../assets/images/google.svg"
import GO from "../../assets/images/ge.svg"
import Netflix from "../../assets/images/netflix.svg"
import Microsoft from "../../assets/images/microsoft.svg"

export default function AccTemp2() {
  return (
<div>
<section>
  <div className="mx-auto mt-20 max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-16">
      <div className="lg:py-26">
       <div className='lg:text-left'>
       <h2 className="lg:text-7xl font-bold max-sm:text-center  max-sm:text-5xl">Business management made easy</h2>
        <p className="mt-4 text-gray-600 max-sm:text-center ">
        Odio incidunt nam sit illum. Voluptas doloribus asperiores quaerat aperiam. Quidem harum omnis beatae ipsum soluta!
        </p>
        </div>
        <div className='flex gap-3 max-sm:gap-2'>   
        <a
          href="#"
          className="mt-8 inline-block rounded-3xl bg-purple-500 px-8 py-3 text-sm font-medium text-white transition  focus:outline-none focus:ring focus:ring-yellow-400"
        >
          Get Started 
        </a>
        <a
          href="#"
          className="mt-8 inline-block rounded-3xl bg-purple-200 px-8 py-3 text-sm font-medium text-purple-500 transition  focus:outline-none focus:ring focus:ring-yellow-400"
        >
          Learne More
        </a>
        </div>
      </div>
      <div class="relative max-sm:w-80 h-64 overflow-hidden  rounded-lg sm:h-80 lg:order-last lg:h-full">
      <img class="h-full object-cover object-left dark:hidden" src={Hero} alt="app screenshot" width="1628" height="1233"/>
      </div>
    </div>
    <div className='flex flex-col justify-center mt-10 '>
    <h3 className='font-bold text-center text-2xl'>TRUSTED BY YOUR FAVORED TOP TECHS COMPANIES</h3>
    <div className='grid grid-cols-1 mt-5 gap-5 lg:grid-cols-5 max-sm:grid-cols-3 lg:gap-20 md:grid-cols-4'>
       <div className='w-28 h-20'>
        <img src={AIR} className='w-full h-full' alt="" />
        </div> 
        <div className='w-28 h-20'>
        <img src={GOOGLE} className='w-full h-full' alt="" />
        </div>  
        <div className='w-20 h-20'>
        <img src={GO} className='w-full h-full'  alt="" />
        </div>  
       <div className='w-28 h-20'>
       <img src={Netflix} className='w-full h-full'  alt="" />
       </div>
       <div className='w-28 h-20'>
       <img src={Microsoft} className='w-full h-full'  alt="" />
       </div>

    </div>
    </div>
  </div>
</section>
</div>
  )
}
