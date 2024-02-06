import React from 'react'
import BackgroundImage from '../../assets/images/snip.png';

export default function Sect4() {
  return (
    <div>
    <section className="py-0" id="home">
        <div className="bg-holder flex items-center bg-no-repeat d-none md:block bg-right-top bg-contain h-screen"style={{backgroundImage:`url(${BackgroundImage})`}}>
          <div className=" pt-44 px-14 max-sm:pt-64 md:min-h-0">
            <div className="md:w-7/12 lg:w-6/12 px-2 py-6 md:text-left ">
            <h1 className="font-semibold text-3xl text-amber-300 leading-10">Create 
            <span className="text-fuchsia-900 text-3xl">your own <br />
            mobile library
            </span></h1>
              <p className="mb-4 text-xl text-slate-400 leading-10">Create your own library on your phone <br /> easily with Sevi mobile app. Get it free on <br /> Google Play Store for android and Download <br /> on the App Store for iOS for free. </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
