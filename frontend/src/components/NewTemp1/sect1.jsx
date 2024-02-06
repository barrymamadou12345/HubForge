import React from 'react';
import BackgroundImage from '../../assets/images/vues.png';
import Authors from "../../assets/images/authors.png";
import Societies from "../../assets/images/societies.png";
import Librarian from "../../assets/images/librarian.png";
import Researchers from "../../assets/images/researchers.png";
import Search from "../../assets/images/search.png";


export default function Sect1() {
  return (
    <div className=''>
      <section className="py-0" id="home">
        <div className="bg-holder flex items-center bg-no-repeat d-none md:block bg-right-top bg-contain h-screen"style={{backgroundImage:`url(${BackgroundImage})`}}>
          <div className=" pt-28 px-8 max-sm:pt-64 max-md:pt-72 md:min-h-0">
            <div className="md:w-7/12 lg:w-6/12 px-2 py-6 text-center md:text-left">
              <h1 className="mt-6 mb-4 text-4xl md:text-6xl lg:text-7xl font-semibold leading-snug md:leading-normal">Today's research, <br className="block lg:hidden xl:block"/>tomorrow's innovation</h1>
              <p className="mb-4 text-xl">Accelerating research discovery to shape a better future </p>
              <div className="pt-3">
                <form>
                  <div className="flex items-center w-full md:w-2/4 lg:w-1/2"><input className="form-control p-2 text-center bg-violet-100 rounded-full  font-base w-full" id="formGroupExampleInput" type="text" placeholder="Search books, articles, keywords"/> 
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
      <div className="mx-auto  mt-10 max-sm:mt-2 ">
        <div className="text-center justify-center">
          <div className="col-auto text-5xl">
            <h1 className="font-semibold text-amber-300">Our <span className="text-fuchsia-900">Resources</span></h1>
          </div>
        </div>
        <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 md:mt-24 max-sm:mt-5 ">
          <div className=" mb-4 mb-lg-0 text-center">
            <div className="px-6 px-lg-3">
              <img className="object-cover object-center w-24 h-24 mx-auto mb-4" src={Researchers} alt="Researchers" />
              <h3 className="text-lg mb-4 font-semibold">Researchers</h3>
              <p className=" text-center  text-xl text-slate-400">Register online Discover tools <br /> and manage alerts Learn <br /> about how to access</p>
            </div>
          </div>
          <div className=" mb-4 mb-lg-0 text-center">
            <div className="px-6 px-lg-3">
              <img className="object-cover object-center w-24 h-24 mx-auto mb-4" src={Librarian} alt="Librarian" />
              <h3 className="text-lg mb-4 font-semibold">Librarian</h3>
              <p className="leading-relaxed text-xl text-slate-400">Manage your account View <br /> products and solutions Find <br /> resources and support</p>
            </div>
          </div>
          <div className=" mb-4 mb-lg-0 text-center">
            <div className="px-6 px-lg-3">
              <img className="object-cover object-center w-24 h-24 mx-auto mb-4" src={Societies} alt="Societies" />
              <h3 className="text-lg mb-4 font-semibold">Societies</h3>
              <p className="leading-relaxed text-xl text-slate-400">Publish with Wiley Explore <br /> our resource library Learn <br /> about topics and trends</p>
            </div>
          </div>
          <div className=" mb-4 mb-lg-0 text-center">
            <div className="px-6 px-lg-3">
              <img className="object-cover object-center w-24 h-24 mx-auto mb-4" src={Authors} alt="Authors" />
              <h3 className="text-xl mb-4 font-semibold">Authors</h3>
              <p className="leading-relaxed text-xl text-slate-400">Submit a paper Track <br /> your article Learn <br /> about Open Access</p>
            </div>
          </div>
        </div>
      </div>
    </section>
      
    </div>
  )
}
