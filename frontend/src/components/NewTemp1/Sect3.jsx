import React, { useState } from 'react';
import { IoIosArrowDown } from "react-icons/io";
import { FaStar } from "react-icons/fa6";
import { PiCurrencyDollarBold } from "react-icons/pi";

function Sect3() {
    const [isOpen1, setIsOpen1] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
    const [isOpen3, setIsOpen3] = useState(false);
  
    return (
      <div className=" mx-auto py-5">
        <h1 className="font-semibold text-center text-4xl text-amber-300 ">Best
        <span className="text-fuchsia-900 text-4xl">Seller Books</span></h1>
        <div className="w-full max-w-md mx-auto mt-12">
          <div className="bg-white py-10  rounded-lg p-4 shadow">
            <div className="flex items-center justify-between">
            <div className=''>
              <h2 className=" font-semibold">The Lord of the Rings 
              </h2>
              <span>J.R.R Tolkien</span>
              </div>
              <div className='flex gap-2 text-amber-300'><FaStar  className='bg-amer-300' /><FaStar  className='bg-amer-300' /><FaStar className='bg-amer-300' /><FaStar className='bg-amer-300' /><FaStar className='bg-amer-300' />
              </div>
              <span className='flex items-center'><PiCurrencyDollarBold />12</span>
              <IoIosArrowDown className="cursor-pointer" onClick={() => setIsOpen1(!isOpen1)} />
            </div>
            {isOpen1 && (
              <div className="mt-2">
                <p className="text-gray-700">Content for Accordion 1</p>
              </div>
            )}
          </div>
          <div className="bg-white w-full mx-auto py-10 rounded-lg p-4 mt-4 shadow">
            <div className="flex items-center justify-between">
            <div className=''>
              <h2 className=" font-semibold">The Lord of the Rings 
              </h2>
              <span>J.R.R Tolkien</span>
              </div>
              <div className='flex gap-2 text-amber-300'><FaStar  className='bg-amer-300' /><FaStar  className='bg-amer-300' /><FaStar className='bg-amer-300' /><FaStar className='bg-amer-300' /><FaStar className='bg-amer-300' />
              </div>
              <span className='flex items-center'><PiCurrencyDollarBold />16</span>
              <IoIosArrowDown className="cursor-pointer" onClick={() => setIsOpen2(!isOpen2)} />
            </div>
            {isOpen2 && (
              <div className="mt-2">
                <p className="text-gray-700">Content for Accordion 2</p>
              </div>
            )}
          </div>
          <div className="bg-white py-10 rounded-lg p-4 mt-4 shadow">
            <div className="flex items-center justify-between">
            <div className=''>
              <h2 className=" font-semibold">The Lord of the Rings 
              </h2>
              <span>J.R.R Tolkien</span>
              </div>
              <div className='flex gap-2 text-amber-300'><FaStar  className='bg-amer-300' /><FaStar  className='bg-amer-300' /><FaStar className='bg-amer-300' /><FaStar className='bg-amer-300' /><FaStar className='bg-amer-300' />
              </div>
              <span className='flex items-center'><PiCurrencyDollarBold />18</span>
              <IoIosArrowDown className="cursor-pointer" onClick={() => setIsOpen3(!isOpen3)} />
            </div>
            {isOpen3 && (
              <div className="mt-2">
                <p className="text-gray-700">Content for Accordion 3</p>
              </div>
            )}
          </div>
        </div>
      <div className='text-center mt-12'>
          <a
            className="rounded-3xl bg-fuchsia-900 px-8 py-2 text-sm font-medium text-white shadow"
            href="#"
          >
            Find More
          </a>
      </div>
      </div>
    );
}

export default Sect3;
