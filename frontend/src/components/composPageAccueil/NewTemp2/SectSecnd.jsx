import React from 'react';
import { FaDollarSign } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";
import { TfiReload } from "react-icons/tfi";
import { MdOutlineWatchLater } from "react-icons/md";
import { MdOutlineQuestionMark } from "react-icons/md";


const Feature = ({ title, description,icone }) => (
  <div className="m-12 max-lg:m-2 leading-8 ">
    <div className="w-10 h-10 text-white border-2xl text-xl bg-indigo-500 rounded-full flex items-center justify-center">
      {icone}
    </div>
    <div >
      <h2 className="font-bold text-lg mt-2">{title}</h2>
      <p className="text-gray-700">{description}</p>
      <a href="#" className="text-indigo-500 flex items-center gap-3 hover:underline">Learn More <FaLongArrowAltRight  /> </a>
    </div>
  </div>
);

const SectSecnd = () => ( 
<div className='container mx-auto sm:px-8 max-lg:px-0 px-8 my-4'>
  <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1">
    <div className='flex max-lg:flex-wrap  border-b-2 border-b-pink-200 max-lg:border-none'>
      <div className='max-lg:border-s-pink-200 max-lg:border-s-2 p-8 '>
      <Feature  icone={<FaDollarSign />}  title="REASONABLE FEES" description="Stripe is an always-improving toolchain that gains new features every month. Our world-class engineering team constantly iterates upon every facet of the Stripe stack. And from Apple Pay to Bitcoin, building on Stripe means you get early access ."/>
      </div>
      <div className='border-s-2 border-s-pink-200 p-8'>
      <Feature  icone={<TfiReload />} title="EASY VERIFICATION" description="We help power 100,000+ businesses in 100+ countries and across nearly every industry. Headquartered in San Francisco, Stripe has 3 global offices and hundreds of people working to help transform how modern businesses are built and run." />
      </div>
    </div>
    <div className='flex max-lg:flex-wrap  border-b-2 border-b-pink-200'>
    <div  className='max-lg:border-s-pink-200 max-lg:border-s-2 p-8'>
    <Feature  icone={<MdOutlineWatchLater />} title="QUICK TRANSACTIONS" description="Stripe is an always-improving toolchain that gains new features every month. Our world-class engineering team constantly iterates upon every facet of the Stripe stack. And from Apple Pay to Bitcoin, building on Stripe means you get early access." />
    </div>
    <div className='border-s-2 border-s-pink-200 p-8'>
    <Feature icone={<MdOutlineQuestionMark />} title="INSTANT SUPPORT" description="We help power 100,000+ businesses in 100+ countries and across nearly every industry. Headquartered in San Francisco, Stripe has 3 global offices and hundreds of people working to help transform how modern businesses are built and run." />
    </div>
    </div>
  </div>
  </div>
);

export default SectSecnd;
