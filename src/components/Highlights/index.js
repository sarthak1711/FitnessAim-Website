import React from "react";
import '../../../src/style.css';

const Collectionsection = () => {
  return (
    <section className="pbg mt-[-41px]">
        {/* <img src="img/pbg.png" alt="" className="h-[613px] w-full"/> */}
        <div className="w-full">
          
          <div className="text-center text-[48px] flex items-center justify-center pt-20"><p className="text-white">High</p><p className="text-[#FC0505]">lights</p></div>
          <div className="grid lg:grid-cols-3 max-sm:grid-cols-1 gap-2 pt-20 max-sm:px-6">
            <div >
              <img src="img/h1.png" alt="" className="w-full"/>
            </div>

            <div >
              <img src="img/h2.png" alt="" className="w-full"/>
            </div>

            <div >
              <img src="img/h3.png" alt="" className="w-full"/>
            </div>

          </div>
        </div>
        <img src="img/iuc.png" alt="" className="w-full"/>
      </section>
  );
};

export default Collectionsection;
