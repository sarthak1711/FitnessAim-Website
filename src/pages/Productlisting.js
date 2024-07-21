import React, { useState } from "react";
import Header from '../components/Header'
import Footer from '../components/Footer'
import { FaPhoneAlt } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
// import '../../../src/style.css';

  const Contactus = () => {
    
  return (
    
    <div>
        <div className="bg-black pt-[1px]">
        <Header/>
        <img src="img/plbanner.png" alt="" className="mt-[122px]"/>
        </div>
        <div className="px-20 py-10">
            <div className="grid grid-cols-5 gap-8">
                <div>
                    <p className="text-[24px] font-bold" style={{borderBottom: '1px solid #BEBEBE'}}>Filters</p>
                    <p className="text-[16px] font-bold mt-7">Sort By</p>
                    <div className="flex items-center mt-3">
                        <input type="checkbox"/>
                        <p className="text-[16px] font-normal ml-3">Popular</p>
                    </div>
                    <div className="flex items-center mt-3">
                        <input type="checkbox"/>
                        <p className="text-[16px] font-normal ml-3">Price: Low to High</p>
                    </div>
                    <div className="flex items-center mt-3">
                        <input type="checkbox"/>
                        <p className="text-[16px] font-normal ml-3">Price: High to Low</p>
                    </div>

                    <p className="text-[16px] font-bold mt-7">Category</p>
                    <div className="flex items-center mt-3">
                        <input type="radio"/>
                        <p className="text-[16px] font-normal ml-3">Women</p>
                    </div>
                    <div className="flex items-center mt-3">
                        <input type="radio"/>
                        <p className="text-[16px] font-normal ml-3">Men</p>
                    </div>

                    <p className="text-[16px] font-bold mt-7">Standard</p>
                    <div className="flex items-center mt-3">
                        <input type="checkbox"/>
                        <p className="text-[16px] font-normal ml-3">IWF Standard</p>
                    </div>
                    <div className="flex items-center mt-3">
                        <input type="checkbox"/>
                        <p className="text-[16px] font-normal ml-3">IPF Standard</p>
                    </div>

                    <p className="text-[16px] font-bold mt-7">Brands</p>
                    <div className="flex items-center mt-3">
                        <input type="checkbox"/>
                        <p className="text-[16px] font-normal ml-3">Fitness Aim</p>
                    </div>

                    <p className="text-[16px] font-bold mt-7">Type</p>
                    <div className="flex items-center mt-3">
                        <input type="checkbox"/>
                        <p className="text-[16px] font-normal ml-3">Weightlifting</p>
                    </div>
                    <div className="flex items-center mt-3">
                        <input type="checkbox"/>
                        <p className="text-[16px] font-normal ml-3">Powerlifting</p>
                    </div>
                    <div className="flex items-center mt-3">
                        <input type="checkbox"/>
                        <p className="text-[16px] font-normal ml-3">Hybrid</p>
                    </div>

                    <p className="text-[16px] font-bold mt-7">Purpose</p>
                    <div className="flex items-center mt-3">
                        <input type="checkbox"/>
                        <p className="text-[16px] font-normal ml-3">Competition</p>
                    </div>
                    <div className="flex items-center mt-3">
                        <input type="checkbox"/>
                        <p className="text-[16px] font-normal ml-3">Training</p>
                    </div>

                </div>

                  <div className="col-span-4 h-[817px] overflow-scroll">
                      <div className="mb-10">
                          <p className="font-semibold text-[32px] mb-10">Weightlifting Sets</p>
                          <div className="flex">
                          <img src="img/plws.png" alt="" />
                          <img src="img/plws1.png" alt="" className="ml-5"/>
                          </div>
                      </div>

                      <div className="mb-10">
                          <p className="font-semibold text-[32px] mb-10">Powerlifting Sets</p>
                          <div className="flex">
                          <img src="img/plps.png" alt="" />
                          <img src="img/plws1.png" alt="" className="ml-5"/>
                          </div>
                      </div>
                  </div>

            </div>
        </div>
        <Footer/>
        
    </div>
  );
};

export default Contactus;
