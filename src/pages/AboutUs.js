import React, { useState } from "react";
import Header from '../components/Header'
import Footer from '../components/Footer'
// import '../../../src/style.css';

  const AboutUs = () => {
    
  return (
    
    <div className="bg-[#000000]">
        <Header/>
        <img src="img/ahbanner.png" alt=""/>
        <div className="lg:px-[10rem] max-sm:px-[2rem] text-center mt-10">
            <p className="text-white text-[48px] font-bold py-5">Our Story</p>
            <p className="text-[#E8E8E8] text-[18px] lg:px-20">Our journey is rooted in a love for powerlifting and a belief that high-quality equipment shouldn't be a barrier to achievement. We saw an opportunity to fill a void in the market, where dedicated athletes and trainers couldn't  find the equipment they needed at an accessible price point. So, we embarked on a mission to empower them  with the right equipment at the right price, ensuring affordability without sacrificing quality.</p>
            <div className="p-10">
            <img src="img/avimg.png" alt="" className="w-full"/>
            </div>
            <p className="lg:text-[52px] max-sm:text-[32px] font-normal text-white lg:px-10">“Empowering powerlifters with <br/> quality equipment, for relentless <br/> pursuit of goals.”</p>

            <section className="pbg mt-10">
        <div className="">
          
          <div className="grid lg:grid-cols-2 max-sm:grid-cols-1 gap-10 my-10">
            <div className="">
              <img src="img/op1a.png" alt=""/>
            </div>

            <div className=" flex items-center">
              <div>
            <div className="text-[48px] text-start w-full"><p className="text-white">Our Vision</p></div>
            <p className="text-[#ADADAD] text-start w-full text-[18px] mt-5">We envision a world where every powerlifter, regardless of background, has access to the high-quality equipment they need to push their limits and achieve their personal bests. We see a thriving community fuelled by passion, dedication, and the unwavering support of a brand committed to their success. Through innovation and affordability, we aim to be the cornerstone of every powerlifter's journey, from aspiring trainees to podium finishers.</p>
            </div>
            </div>

          </div>

          <div className="grid lg:grid-cols-2 max-sm:grid-cols-1 gap-10 py-10">
            
            <div className="flex items-center">
              <div>
            <div className="text-[48px] text-start w-full"><p className="text-white">Our Mission</p></div>
            <p className="text-[#ADADAD] text-start w-full text-[18px] mt-5">Our mission is to bridge the gap between dedication and achievement in powerlifting. We forge high-performance equipment at accessible prices, empowering athletes and trainers at every level.  We fuel their passion with quality, innovation, and affordability, so they can focus on what truly matters - relentless pursuit of their potential and shattering personal records.</p>
            </div>
            </div>

            <div className="">
              <img src="img/op1b.png" alt=""/>
            </div>

          </div>

        </div>
      </section>
      <p className="text-white text-center lg:text-[48px] max-sm:text-[28px] font-bold py-5">Who we Serve</p>
      <div className="grid lg:grid-cols-3 max-sm:grid-cols-1 gap-5 my-5">
        <img src="img/as1.png" alt="" className="pr-4 h-full"/>
        <img src="img/as2.png" alt="" />
        <img src="img/as3.png" alt=""/>
      </div>


        </div>
        <Footer/>
        
    </div>
  );
};

export default AboutUs;
