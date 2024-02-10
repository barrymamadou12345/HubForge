import React from 'react';
import { FaLock } from "react-icons/fa";
import change from "../../../assets/images/changelly1.jpg"
import Change from "../../../assets/images/changellys.jpg"
import tronk from "../../../assets/images/changelly3.jpg"
import Track from "../../../assets/images/changel.jpg"

const Testimonials = () => {

  return (
    <div className="m-20 flex  flex-col items-center">
      <div className="w-10 h-10 text-white border-2xl text-xl bg-indigo-500 rounded-full flex items-center justify-center">
        <FaLock />
      </div>
      <div className="text-center mt-4">
        <h2 className="text-4xl font-semibold mb-4 text-indigo-500">Trusted by 2 million users</h2>
        <p className="text-gray-600 mb-8 ">
          We believe that payments is a problem rooted in code, not finance. We obsessively seek out elegant, <br /> composable abstractions that enable robust, scalable, flexible integrations.
        </p>
      </div>
      <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-8 ">
        <div className='bg-white p-4 rounded-lg shadow-xl'>
            <div className="flex max-lg:flex-wrap  items-center gap-4 mb-4">
              <img src={Change} alt="" className="w-20 h-20 rounded-full" />
              <div className="text-start">
                <span className="font-semibold text-indigo-500">Charlie Shrem</span>
                <p className="text-gray-700">Catch mouse and gave it as a present chew the plant but scratch me there, elevator butt. Always ensure to lay down in such</p>
              </div>
            </div>
        </div>
        <div className='bg-white p-4 rounded-lg shadow-xl'>
            <div className="flex max-lg:flex-wrap items-center gap-4 mb-4">
              <img src={change} alt="" className="w-20 h-20 rounded-full" />
              <div className="text-start">
                <span className="font-semibold text-indigo-500">Bentley Bellinger</span>
                <p className="text-gray-700">Catch mouse and gave it as a present chew the plant but scratch me there, elevator butt. Always ensure to lay down in such.</p>
              </div>
            </div>
        </div>
        <div className='bg-white p-4 rounded-lg shadow-xl'>
            <div className="flex max-lg:flex-wrap items-center gap-4 mb-4">
              <img src={tronk} alt="" className="w-20 h-20 rounded-full" />
              <div className="text-start">
                <span className="font-semibold text-indigo-500">Paul Diskant</span>
                <p className="text-gray-700">Catch mouse and gave it as a present chew the plant but scratch me there, elevator butt. Always ensure to lay down in such.</p>
              </div>
            </div>
        </div>
        <div className='bg-white p-4 rounded-lg shadow-xl'>
            <div className="flex max-lg:flex-wrap items-center gap-4 mb-4">
              <img src={Track} alt="" className="w-20 h-20 rounded-full " />
              <div className="text-start">
                <span className="font-semibold text-indigo-500">Jesse Lazenby</span>
                <p className="text-gray-700">Catch mouse and gave it as a present chew the plant but scratch me there, elevator butt. Always ensure to lay down in such.</p>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
