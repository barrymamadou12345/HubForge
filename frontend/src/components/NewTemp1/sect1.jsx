import React from 'react';
import BackgroundImage from '../../assets/images/vues.png';
import Authors from "../../assets/images/authors.png";
import Societies from "../../assets/images/societies.png";
import Librarian from "../../assets/images/librarian.png";
import Researchers from "../../assets/images/researchers.png";
import Search from "../../assets/images/search.png";


export default function Sect1() {
  return (
    <div className='w-full mx-auto'>
      <section className="py-0" id="home">
        <div className="bg-no-repeat bg-right-top bg-contain h-screen"style={{backgroundImage:`url(${BackgroundImage})`}}>
        <div className="container mx-auto">
          <div className="flex items-center max-sm:mt-12 h-screen md:min-h-0">
            <div className="md:w-7/12 lg:w-6/12 py-6 text-center md:text-left">
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
        </div>
      </section>
      <section>
      <div className=" mx-auto mt-10 max-sm:mt-2 ">
        <div className="text-center justify-center">
          <div className="col-auto  text-5xl">
            <h1 className="font-semibold text-amber-300">Our <span className="text-fuchsia-900">resources</span></h1>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:mt-24 max-sm:mt-5 ">
          <div className="col-sm-6 col-lg-3 mb-4 mb-lg-0 text-center">
            <div className="px-0 px-lg-3">
              <img className="object-cover object-center w-24 h-24 mx-auto mb-4" src={Researchers} alt="Researchers" />
              <h3 className="text-lg mb-4 font-semibold">Researchers</h3>
              <p className="leading-relaxed">Register online Discover tools and manage alerts Learn about how to access</p>
            </div>
          </div>
          <div className="col-sm-6 col-lg-3 mb-4 mb-lg-0 text-center">
            <div className="px-0 px-lg-3">
              <img className="object-cover object-center w-24 h-24 mx-auto mb-4" src={Librarian} alt="Librarian" />
              <h3 className="text-lg mb-4 font-semibold">Librarian</h3>
              <p className="leading-relaxed">Manage your account View products and solutions Find resources and support</p>
            </div>
          </div>
          <div className="col-sm-6 col-lg-3 mb-4 mb-lg-0 text-center">
            <div className="px-0 px-lg-3">
              <img className="object-cover object-center w-24 h-24 mx-auto mb-4" src={Societies} alt="Societies" />
              <h3 className="text-lg mb-4 font-semibold">Societies</h3>
              <p className="leading-relaxed">Publish with Wiley Explore our resource library Learn about topics and trends</p>
            </div>
          </div>
          <div className="col-sm-6 col-lg-3 mb-4 mb-lg-0 text-center">
            <div className="px-0 px-lg-3">
              <img className="object-cover object-center w-24 h-24 mx-auto mb-4" src={Authors} alt="Authors" />
              <h3 className="text-lg mb-4 font-semibold">Authors</h3>
              <p className="leading-relaxed">Submit a paper Track your article Learn about Open Access</p>
            </div>
          </div>
        </div>
      </div>
    </section>
      
    </div>
  )
}
