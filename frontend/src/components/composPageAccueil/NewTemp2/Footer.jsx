import React from 'react'

export default function Footer() {
  return (
    <div className='py-6'>
        <div className='flex justify-between bg-indigo-200 py-12 max-lg:px-0 max-lg:flex-wrap max-lg:justify-center max-lg:gap-8  px-12 items-center'>
            <div>
                <h2 className='text-pink-500 text-2xl'>Buy Bitcoin with Credit Card</h2>
                <h2 className='text-white text-2xl'>In Just a few easy Steps</h2>
            </div>
            <div >
                <a className='bg-pink-500 text-white rounded shadow py-2 px-2' href="">CREATE LOGO ACCOUNT</a>
                <a className='bg-white text-pink-500 rounded  shadow py-2 px-4 ml-2' href="">BY NOW</a>
            </div>
        </div>
        <div className='flex justify-between mt-2 px-12 max-lg:flex-wrap  text-gray-400'>
            <div>
            <p> @ 2024 All Rights Reserved</p>
            </div>
            <div className=''>
            <a  href="">Terms of use</a>
            <a  className='ml-2' href="">Privacy Policy</a>
            </div>
        </div>
    </div>
  )
}
