import React from "react";
import '../../../src/style.css';

const Collectionsection = () => {
  return (
    <section className="pbg2 mt-[-5px]">
        {/* <img src="img/pbg1.png" alt="" className="pch"/> */}
        <div className="w-full">
          <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-10 lg:py-20 max-sm:py-6 lg:px-[10rem] max-sm:px-6">
            <div className="px-5"><img src="img/pm.png" alt="" /></div>
            <div className="px-5 pt-5 flex items-center">
              <div>
              <p className="lg:text-[48px] max-sm:text-[32px] max-sm:pb-5 text-white font-bold max-sm:text-center">Transforming workouts in over 16 countries</p>
              <p className="text-[18px] text-white">At Fitness Aim, we take pride in exporting top-quality fitness equipment to over 16 countries worldwide. Our commitment to excellence and innovation ensures that athletes and fitness enthusiasts across the globe have access to the best tools for their fitness journeys. <br/> <br/>
              Whether you're a professional athlete or a fitness enthusiast, our equipment is designed to help you achieve your goals and exceed your limits.</p>
              </div>
            </div>
          </div>
          <div className="text-center text-[48px] flex items-center justify-center"><p className="text-white">Product</p><p className="text-[#FC0505]">&nbsp;Categories</p></div>
          <div className="grid lg:grid-cols-2 max-sm:grid-cols-1 gap-10 lg:py-20 max-sm:py-6 lg:px-[18rem] max-sm:px-6">
            <div >
              <img src="img/pc1n.png" alt="" className="w-full"/>
            </div>

            <div >
              <img src="img/pc2n.png" alt="" className="w-full"/>
            </div>

            <div >
              <img src="img/pc3n.png" alt="" className="w-full"/>
            </div>

            <div >
              <img src="img/pc4.png" alt="" className="w-full"/>
            </div>

          </div>
        </div>
      </section>
  );
};

export default Collectionsection;
