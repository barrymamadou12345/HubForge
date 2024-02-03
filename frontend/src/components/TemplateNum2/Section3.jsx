import React from 'react'
import Etoile from "../../assets/images/xp.webp";
import Secur from "../../assets/images/security.webp";
import Card from "../../assets/images/card.webp";
import Illus from "../../assets/images/illus.webp";

export default function Section3() {
  return (
    <div class="max-w-screen-xl mt-10 mx-auto px-4 py-6 sm:px-6 sm:py-12 lg:px-8 lg:py-16 ">
     <div className='text-start  mx-100 '>
     <h2 className='text-6xl font-bold'>Customize your customer experience, Go beyond with our top products</h2>
     </div>
    <div class="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8 mt-20">
    <div class="h-38 rounded-lg bg-gray-200 px-8 py-4 flex flex-col gap-4 shadow-md text-xl text-start">
  <div className='w-10 h-10 '>
    <img src={Secur} className='w-full h-full' alt="" />
    </div>
    <h5 className='font-bold'>Safelus</h5>
    <p>Dolorem aliquid officiis quae ipsum nobis libero alias Iure nobis dicta.</p>
  </div>
  <div class="h-38 rounded-lg bg-gray-200 px-8 py-4 flex flex-col gap-4 shadow-md text-xl text-start">
  <div className='w-10 h-10 '>
    <img src={Card} className='w-full h-full' alt="" />
    </div>
    <h5 className='font-bold'>Paylus</h5>
    <p>Dolorem aliquid officiis quae ipsum nobis libero alias Iure nobis dicta.</p>
  </div>
  <div class="h-38 rounded-lg bg-gray-200 px-8 py-4 flex flex-col gap-4 shadow-md text-xl text-start">
  <div className='w-10 h-10 '>
    <img src={Etoile} className='w-full h-full' alt="" />
    </div>
    <h5 className='font-bold'>TL Certification</h5>
    <p>Dolorem aliquid officiis quae ipsum nobis libero alias Iure nobis dicta.</p>
  </div>
    </div>
    {/* oyher part */}
    <div class="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8 mt-28">
    <div class="relative md:w-2/2">
      <div aria-hidden="true" class="absolute inset-0 m-auto grid h-3/5 w-3/5 grid-cols-2 -space-x-52 opacity-40 dark:opacity-60">
        <div class="h-full rounded-full bg-gradient-to-br from-primary to-purple-400 blur-[106px] dark:from-blue-700"></div>
                <div class="h-full bg-gradient-to-r from-cyan-400 to-primary blur-[106px] dark:to-indigo-600"></div>
              </div>
         <img class="relative dark:hidden" src={Illus} alt="stats illustration" width="1770" height="1746"/>
             <img class="relative hidden dark:block" src="/images/illus-dark.webp" alt="stats illustration" width="1746" height="1746"/>
                        </div>

      <div className="mt-16">
       <div className='lg:text-left flex flex-col items-center gap-12 '>
       <h2 className="lg:text-5xl font-bold max-sm:text-center  max-sm:text-5xl">Go beyond with our top products
</h2>
        <p className=" text-gray-600 max-sm:text-center ">
        Nobis minus voluptatibus pariatur dignissimos libero quaerat ? Asperiores nemo possimus nesciunt dicta veniam aspernatur quam mollitia.
        </p>
        <p className=" text-gray-600 max-sm:text-center ">
        Vitae error, quaerat officia delectus voluptatibus explicabo quo pariatur impedit, at reprehenderit aliquam a ipsum quas voluptatem. Quo pariatur asperiores eum amet.
        </p>
        </div>
        <div className='mt-10 max-sm:gap-2'>   
        <a
          href="#"
          className=" inline-block rounded-3xl bg-purple-500 px-8 py-3 text-sm font-medium text-white transition  focus:outline-none focus:ring focus:ring-yellow-400"
        >
          Get Started 
        </a>
        </div>
      </div>

    </div>

    </div>
  )
}
