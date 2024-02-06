import React from 'react';
import BackgroundImage from '../../assets/images/temps.png';

export default function Sect2() {
  return (
    <div>
      <section className="py-0" id="home">
        <div className="bg-holder flex flex-row-reverse items-center bg-no-repeat d-none md:block bg-left-top bg-contain h-screen " style={{backgroundImage:`url(${BackgroundImage})`}}>
          <div className="pt-38 max-sm:pt-52 relative md:min-h-0">
            <div className="  md:relative  px-4 sm:px-6 lg:px-8">
                <div className="md:absolute top-24  md:right-0 px-2 py-6 md:text-right text-xl leading-10">
                  <h1 className="font-semibold text-start text-4xl text-amber-300 ">Our <span className="text-fuchsia-900 text-4xl">Libraries</span></h1>
                  <p className=' text-start text-slate-400'>Lorem ipsum dolor sit amet consectetur<br /> adipisicing elit Id numquam minus rem<br /> nobis expedita exercitationem itaque accusamus,<br /> corrupti deleniti labore obcaecati deserunt eius<br /> recusandae ea ad, nulla consequuntur odio voluptas!</p>
                  <div className='text-start'>
                  <a
                    className="rounded-3xl bg-fuchsia-900 px-8 py-2 text-sm font-medium text-white shadow"
                    href="#"
                  >
                    Learn More
                  </a>
                  </div>
                </div>
             
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
