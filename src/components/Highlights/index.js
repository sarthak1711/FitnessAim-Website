import React from "react";
import '../../../src/style.css';

const Collectionsection = () => {
  return (
    <section className="pbg relative">
        <img src="img/pbg.png" alt="" className="h-[463px] w-full"/>
        <div className="w-full absolute top-0">
          
          <div className="text-center text-[48px] flex items-center justify-center mt-10"><p className="text-white">High</p><p className="text-[#FC0505]">lights</p></div>
          <div className="grid grid-cols-3 gap-2 py-10">
            <div >
              <img src="img/h1.png" alt=""/>
            </div>

            <div >
              <img src="img/h2.png" alt=""/>
            </div>

            <div >
              <img src="img/h2.png" alt=""/>
            </div>

          </div>
        </div>
        <img src="img/iuc.png" alt=""/>
      </section>
  );
};

export default Collectionsection;
