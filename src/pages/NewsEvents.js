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

          <div className="grid lg:grid-cols-2 max-sm:grid-cols-1 gap-6 mt-10">
          <a href="/Event">
            <div className="grid grid-cols-2 relative">
              <div className="lm contents ">
              <div className="bg-[#F7F7F7] lg:p-10 max-sm:p-2 h-[530px]">
                <p className="text-[13px] font-semibold">News</p>
                <p className="lg:text-[22px] max-sm:text-[18px] font-bold mt-3">Fitness Aim Shines at North India Powerlifting Championship 2024: A Triumph of Support and Excellence</p>
                <p className="lg:text-[14px] mt-5 max-sm:text-[10px]">At Fitness Aim, our commitment to promoting athletic excellence and empowering athletes through top-tier equipment was on full display at the North India Powerlifting Championship 2024. Hosted by PRO League International (Portugal) on July 13-14, 2024, at the...</p>
                <p className="text-[#666666] text-[13px] w-fit rounded-full bg-white px-4 py-1 absolute bottom-5">2 mins read</p>
              </div>
              <div><img src="img/ned.png" alt="" className="h-[530px] w-full"/></div>
              </div>
              {/* <div className="lmb2"> */}
              {/* <a href="" className="lmb w-full h-full"> */}
              <div className="w-full h-full lmb2 bg-black/30  group-hover:opacity-100">
              <a href="/Event" className="lmb3">
              <button className="border-2 bg-white border-white w-[143px] h-[56px] rounded-full text-[16px]">
              Learn More</button>
              </a>
              </div>
              {/* </a> */}
              {/* </div> */}
              
            </div>
            
            </a>
            
          </div>
        </div>
        
        <Footer/>
        
    </div>
  );
};

export default NewsEvents;







