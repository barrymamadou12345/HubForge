import React from 'react'
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";


export default function Footer() {
  return (
    <div >
        <div class="row flex-center bg-white border-t-2 py-4 border-fuchsia-900">
            <div class="col-auto mb-2">
           <div className='flex max-sm:hidden'>
           <div className='w-3 h-7 bg-fuchsia-900'></div>
            <div className='w-2 m-2 h-4 bg-fuchsia-900'></div>
            <div class="flex-1 flex justify-between items-center">
            <a href="#" class="text-2xl text-fuchsia-900 font-bold ">Lecturama</a>
            </div>
           </div>
              <p class="mb-0 fs--1 my-2 text-center">© This template is made with &nbsp;&nbsp;by&nbsp;</p>
            </div>
            <div class=" col-auto text-center my-4">
              <ul class="list-unstyled flex justify-center list-inline mb-0">
                <li class="list-inline-item me-3 text-fuchsia-900"><a href="#!">
                <FaYoutube /> </a></li>
                <li class="list-inline-item me-3 text-fuchsia-900"><a href="#!">
                <FaTwitter />  </a></li>
                <li class="list-inline-item me-3 text-fuchsia-900"><a class="text-decoration-none" href="#!">
                <FaFacebookF />  </a></li>
                <li class="list-inline-item me-3 text-fuchsia-900"><a href="#!">
                <FaLinkedin /> </a></li>
                <li class="list-inline-item me-3 text-fuchsia-900"><a href="#!">
                <FaInstagramSquare /></a></li>
              </ul>
            </div>
          </div>
    </div>
  )
}
