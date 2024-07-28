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
              <a href="/EnvironmentConservation" className="lmb border-2 border-white px-5 py-1 rounded-3xl">Learn More</a>
            </div>

            <div className="relative">
              <img src="img/h2.png" alt="" className="w-full lm hover:opacity-30"/>
              <a href="/InnovationTechnology" className="lmb border-2 border-white px-5 py-1 rounded-3xl">Learn More</a>
            </div>

            <div className="relative">
              <img src="img/h3.png" alt="" className="w-full lm hover:opacity-30"/>
              <a href="/QualityManagement" className="lmb border-2 border-white px-5 py-1 rounded-3xl">Learn More</a>
            </div>

          </div>
        </div>
        <img src="img/iucn.png" alt="" className="w-full"/>
      </section>
  );
};

export default Collectionsection;
