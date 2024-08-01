import React from "react";
import '../../../src/style.css';

const Collectionsection = () => {
  return (
    <section className="pbg mt-[-41px]">
        {/* <img src="img/pbg.png" alt="" className="h-[613px] w-full"/> */}
        <div className="w-full">
          
          <div className="text-center text-[48px] flex items-center justify-center pt-20"><p className="text-white">High</p><p className="text-[#FC0505]">lights</p></div>
          <div className="grid lg:grid-cols-3 max-sm:grid-cols-1 gap-2 pt-20 max-sm:px-6">
            <div className="relative">
              <img src="img/h1.png" alt="" className="w-full lm hover:opacity-30"/>
              <a href="/EnvironmentConservation" className="lmb">
              <button className=" hover:bg-white border-2 border-white w-[143px] h-[56px] rounded-full text-[16px]">
              Learn More</button>
              </a>
            </div>

            <div className="relative">
              <img src="img/h2.png" alt="" className="w-full lm hover:opacity-30"/>
              <a href="/InnovationTechnology" className="lmb">
              <button className=" hover:bg-white border-2 border-white w-[143px] h-[56px] rounded-full text-[16px]">
              Learn More</button>
              </a>
            </div>

            <div className="relative">
              <img src="img/h3.png" alt="" className="w-full lm hover:opacity-30"/>
              <a href="/QualityManagement" className="lmb">
              <button className=" hover:bg-white border-2 border-white w-[143px] h-[56px] rounded-full text-[16px]">
              Learn More</button>
              </a>
            </div>

          </div>
        </div>
        <div className="relative">
        <img src="img/iucn (2).png" alt="" className="w-full imain"/>
        <div className="icon w-full text-center">
        <h1 className="text-center text-white font-semibold lg:text-[54px] max-sm:text-[14px]">Unleash your Inner Beast with Fitness Aim</h1>
        <button className="rounded-lg mt-4 bg-[#FC0505]  font-semibold text-white h-[54px] text-[18px] px-8 py-2">
              <a href="/ShopNow">
              Shop Now
            </a>
            </button>
            </div>
            </div>
      </section>
  );
};

export default Collectionsection;
