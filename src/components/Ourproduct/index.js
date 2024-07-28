import React from "react";
import '../../../src/style.css';

const Collectionsection = () => {
  return (
    <section className="pbg3 mt-[-5px]">
        {/* <img src="img/opb.png" alt="" className="pch1"/> */}
        <div className="w-full">
          <div className="grid grid-cols-1 gap-10 lg:py-20 max-sm:py-6 lg:px-[10rem] max-sm:px-6">
            <div className=""><img src="img/opm.png" alt="" /></div>
            
          </div>
          
          <div className="grid lg:grid-cols-2 max-sm:grid-cols-1 gap-10 pt-20 pb-[10rem] lg:px-[5rem] max-sm:px-6">
            <div className="px-10 max-sm:px-2">
              <img src="img/opimg.png" alt="" className="w-full"/>
            </div>

            <div className="px-2 flex items-center">
              <div className="max-sm:text-center">
            <div className="text-center lg:text-[48px] max-sm:text-[32px] flex justify-start max-sm:justify-center"><p className="text-white">Our</p><p className="text-[#FC0505]">&nbsp;Purpose</p></div>
            <p className="text-white text-[18px] mt-2">Empowering athletes to achieve their sporting dreams, from national competitions to the Olympic Games. We provide comprehensive support and world-class, Indian-made equipment to help you reach your full potential.</p>
            <button className="bg-[#FA0403] py-2 px-8 rounded-md text-white mt-5">Know More About Us</button>
            <img src="img/opl.png" alt="" className="mt-8"/>
            </div>
            </div>

          </div>
        </div>
      </section>
  );
};

export default Collectionsection;
