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
              <button className="lmb hover:bg-white border-2 border-white w-[143px] h-[56px] rounded-full text-[16px]">
              <a href="/EnvironmentConservation">Learn More</a></button>
            </div>

            <div className="relative">
              <img src="img/h2.png" alt="" className="w-full lm hover:opacity-30"/>
              <button className="lmb hover:bg-white border-2 border-white w-[143px] h-[56px] rounded-full text-[16px]">
              <a href="/InnovationTechnology">Learn More</a></button>
            </div>

            <div className="relative">
              <img src="img/h3.png" alt="" className="w-full lm hover:opacity-30"/>
              <button className="lmb hover:bg-white border-2 border-white w-[143px] h-[56px] rounded-full text-[16px]">
              <a href="/QualityManagement">Learn More</a></button>
            </div>

          </div>
        </div>
        <a href="/ShopNow">
        <img src="img/iucn.png" alt="" className="w-full"/>
        </a>
      </section>
  );
};

export default Collectionsection;
