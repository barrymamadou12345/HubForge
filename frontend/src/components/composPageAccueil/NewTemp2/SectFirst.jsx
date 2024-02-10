import React from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";

export default function SectFirst() {
  return (
    <div className='h-screen bg-gradient-to-r from-indigo-500 from-10% via-purple-500 to-pink-500 to-90% text-white max-lg:h-auto'>
    <div className='w-full px-24 max-sm:px-12'>
        <div className='flex justify-between p-4'>
            <div className='text-3xl '>Changelly</div>
            <div className='flex items-center gap-3 text-2xl'><a href="">Sign In</a><FaLongArrowAltRight /></div>
        </div>
    </div>
    <div className="flex h-[600px] max-lg:h-auto  justify-between items-center w-[85%] max-lg:flex-col  mx-auto">
      <div className="p-4 w-[50%] max-lg:w-[100%] ">
        <div className=' mb-10 rounded-2xl gap-1 md:w-[85%] sm:w-[100%] flex items-center bg-white text-purple-500'>
            <div className='flex m-1 items-center rounded-xl w-16 justify-center text-white bg-pink-500'>
                <p>New</p>
                </div>
                <div className=''>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                </div>
        </div>
        <h1 className="text-2xl font-bold mb-4">Buy Bitcoin with Credit Card</h1>
        <p className="mb-4 leading-8">Always ensure to lay down in such a manner that tail can lightly brush. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam esse cupiditate perspiciatis consequatur minus veritatis vitae dignissimos</p>
        <button className="bg-white text-pink-500 font-bold py-2 mt-5 px-4 shadow rounded">
          CREATE ACCOUNT
        </button>
      </div>
      <div className="p-8 w-[45%] max-lg:w-full   max-lg:mb-12  rounded bg-white text-black">
      <div className="mb-6 h-5 mx-8 bg-neutral-200 dark:bg-neutral-600">
          <div className="h-5 bg-indigo-500" style={{ width: "25%" }}></div>
      </div>
        <div className="flex items-center justify-between w-[90%] max-lg:w-full p-8 mx-auto shadow shadow-gray-400 mb-4">
          <input className="mr-2" type="text" value="$200" />
          <select>
            <option value="usd">USD</option>
            {/* Other currency options would go here */}
          </select>
        </div>
        <p className='text-center py-4'> For 200 USD you will get 0.75454 Bitcoin</p>
        <div className="flex items-center justify-between md:w-[90%] p-8 mx-auto shadow shadow-gray-400 mb-4">
          <input className="mr-2" type="text" value="$200" />
          <select>
            <option value="usd">USD</option>
            {/* Other currency options would go here */}
          </select>
        </div>
        <button className="bg-indigo-500 hover:bg-blue-700 text-white font-bold py-2 rounded mt-4 w-[80%] ms-12 max-lg:w-full max-lg:ms-2  mx-auto">
          Continue
        </button>
        </div>

    </div>
    </div>
  )
}
