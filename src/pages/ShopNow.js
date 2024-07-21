import React, { useState } from "react";
import Header from '../components/Header'
import Footer from '../components/Footer'
import { FaPhoneAlt } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
// import '../../../src/style.css';

  const Contactus = () => {
    
  return (
    
    <div>
        <Header/>
        <img src="img/snbanner.png" alt=""/>
        <div className="px-20 py-10">
            <div className="mb-10">
            <p className="font-semibold text-[32px] mb-10">Popular Categories</p>
            <img src="img/ppc.png" alt=""/>
            </div>

            <div className="mb-10">
            <p className="font-semibold text-[32px] mb-10">Popular Products</p>
            <img src="img/ppp.png" alt=""/>
            </div>

            <div className="grid grid-cols-2 gap-5">
                <div><img src="img/psn1.png" alt=""/></div>
                <div><img src="img/psn2.png" alt=""/></div>
            </div>
            <div className="grid grid-cols-1 gap-5 mt-5">
                <div><img src="img/psn3.png" alt=""/></div>
            </div>
        </div>
        <Footer/>
        
    </div>
  );
};

export default Contactus;
