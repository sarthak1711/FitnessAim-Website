import React, { useState } from "react";
import Header from '../components/Header'
import Footer from '../components/Footer'
// import '../../../src/style.css';

  const NewsEvents = () => {
    
  return (
    
    <div className="">
        <Header/>
        <img src="img/nebanner.png" alt=""/>
        <div className="p-10">
          
          <div className="grid grid-cols-2">
            <div className="grid grid-cols-3 gap-5">
              <img src="img/net1.png" alt=""/>
              <img src="img/net2.png" alt=""/>
              <img src="img/net3.png" alt=""/>
            </div>
          </div>

          <p className="text-[48px] font-bold mt-5">Latest Updates</p>

          <div className="grid grid-cols-2 gap-6 mt-10">
          <a href="/Event">
            <div className="grid grid-cols-2 lm">
              <div className="bg-[#F7F7F7] p-10 relative h-[530px]">
                <p className="text-[13px] font-semibold">News</p>
                <p className="text-[22px] font-bold mt-3">Fitness Aim Shines at North India Powerlifting Championship 2024: A Triumph of Support and Excellence</p>
                <p className="text-[14px] mt-5">At Fitness Aim, our commitment to promoting athletic excellence and empowering athletes through top-tier equipment was on full display at the North India Powerlifting Championship 2024. Hosted by PRO League International (Portugal) on July 13-14, 2024, at the...</p>
                <p className="text-[#666666] text-[13px] w-fit rounded-full bg-white px-4 py-1 absolute bottom-5">2 mins read</p>
              </div>
              <div><img src="img/ned.png" alt="" className="h-[530px] w-full"/></div>
            </div>
            </a>
            
          </div>
        </div>
        
        <Footer/>
        
    </div>
  );
};

export default NewsEvents;







