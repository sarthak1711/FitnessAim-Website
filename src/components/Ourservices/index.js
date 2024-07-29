import React from "react";
import '../../../src/style.css';

const Collectionsection = () => {
  return (
    <section className="pbg mt-[-5px]">
        {/* <img src="img/pbg.png" alt=""/> */}
        <div className="w-full">
          <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-10 lg:py-20 max-sm:py-6 lg:px-[10rem] max-sm:px-6">
            <div className="px-10"><img src="img/Text.png" alt="" className="w-full pt-10"/></div>
            <div className="px-10"><img src="img/clients1.png" alt="" className="w-full"/></div>
          </div>
          <div className="text-center lg:text-[48px] max-sm:text-[32px] flex items-center  justify-center"><p className="text-white">Our</p><p className="text-[#FC0505]">&nbsp;Services</p></div>
          <div className="grid lg:grid-cols-4 sm:grid-cols-1 gap-4 lg:py-20 max-sm:py-6 lg:px-[5rem] max-sm:px-6">
            <div className="h-[400px] text-center relative px-7 py-5" style={{border: '1px solid #424242'}}>
              <p className="flex justify-center mt-3"><img src="img/os1.png" alt=""/></p>
              <p className="text-white text-[24px] mt-5">Premium <br/>
              Equipment Supply</p>
              <p className="text-[18px] text-[#ADADAD] mt-4 mb-10">Level up your fitness with our premium cardio and strength training equipment.</p>
              {/* <hr/> */}
              <p className="text-[14px] text-white mt-2 pt-2 hover:text-red-500 cursor-pointer absolute w-[85%] bottom-[30px]" style={{borderTop: '1px solid #424242'}}><a href="/PremiumEquipment">Know More</a></p>
            </div>

            <div className="h-[400px] text-center relative px-7 py-5" style={{border: '1px solid #424242'}}>
              <p className="flex justify-center mt-4"><img src="img/os2.png" alt=""/></p>
              <p className="text-white text-[24px] mt-5">On-site<br/>Installation & Setup</p>
              <p className="text-[18px] text-[#ADADAD] mt-4 mb-5">Our expert team handles everything from gym equipment delivery to setup and testing, for a stress-free business launch.</p>
              <p className="text-[14px] text-white mt-2 pt-2 hover:text-red-500 cursor-pointer absolute w-[85%] bottom-[30px]" style={{borderTop: '1px solid #424242'}}><a href="/Onsiteinstallation">Know More</a></p>
            </div>

            <div className="h-[400px] text-center relative px-7 py-5" style={{border: '1px solid #424242'}}>
              <p className="flex justify-center mt-3"><img src="img/os3.png" alt=""/></p>
              <p className="text-white text-[24px] mt-5">Consultation & <br/>
              Custom Design </p>
              <p className="text-[18px] text-[#ADADAD] mt-4 mb-10">Together, we'll explore your vision and develop a personalized plan to bring your dream gym 
              to life.</p>
              <p className="text-[14px] text-white mt-2 pt-2 hover:text-red-500 cursor-pointer absolute w-[85%] bottom-[30px]" style={{borderTop: '1px solid #424242'}}><a href="/ConsultationandCustomdesign">Know More</a></p>
            </div>

            <div className="h-[400px] relative text-center px-7 py-5" style={{border: '1px solid #424242'}}>
              <p className="flex justify-center mt-4"><img src="img/os4.png" alt=""/></p>
              <p className="text-white text-[24px] mt-5"> Continuous Support<br/>& Maintenance</p>
              <p className="text-[18px] text-[#ADADAD] mt-4 mb-5">Committed to your success, we provide continuous support to keep your gym operating at its best, 
              every day.</p>
              <p className="text-[14px] text-white mt-2 pt-2 hover:text-red-500 cursor-pointer absolute w-[85%] bottom-[30px]" style={{borderTop: '1px solid #424242'}}><a href="/Support">Know More</a></p>
            </div>
          </div>
        </div>
      </section>
  );
};

export default Collectionsection;
