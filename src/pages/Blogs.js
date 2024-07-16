import React, { useState } from "react";
import Header from '../components/Header'
import Footer from '../components/Footer'
// import '../../../src/style.css';

  const Blogs = () => {
    
  return (
    
    <div className="">
        <Header/>
        <img src="img/bbanner.png" alt=""/>
        <div className="p-10">
          
          <div className="grid grid-cols-2">
            <div className="grid grid-cols-3 gap-5">
              <img src="img/bt1.png" alt=""/>
              <img src="img/bt2.png" alt=""/>
            </div>
          </div>

          <p className="text-[48px] font-bold mt-5">Articles</p>

          <div className="grid grid-cols-2 gap-6 mt-10">
            <div className="grid grid-cols-2">
              <div className="bg-[#F7F7F7] p-10 relative">
                <p className="text-[13px] font-semibold">News</p>
                <p className="text-[22px] font-bold mt-3">Fitness Aim Claims Prestigious SACC USA Business Awards 2024</p>
                <p className="text-[14px] mt-5">Lorem ipsum dolor sit amet consectetur. Sed suscipit vitae neque consectetur vitae massa blandit bibendum vulputate. Aliquam pharetra est leo tellus convallis. Auctor auctor feugiat nec aliquam nec. Pretium ac ipsum nunc odio laoreet at.</p>
                <p className="text-[#666666] text-[13px] w-fit rounded-full bg-white px-4 py-1 absolute bottom-5">2 mins read</p>
              </div>
              <div><img src="img/nedummy.png" alt="" className="w-full"/></div>
            </div>

            <div className="grid grid-cols-2">
              <div className="bg-[#F7F7F7] p-10 relative">
                <p className="text-[13px] font-semibold">News</p>
                <p className="text-[22px] font-bold mt-3">Fitness Aim Claims Prestigious SACC USA Business Awards 2024</p>
                <p className="text-[14px] mt-5">Lorem ipsum dolor sit amet consectetur. Sed suscipit vitae neque consectetur vitae massa blandit bibendum vulputate. Aliquam pharetra est leo tellus convallis. Auctor auctor feugiat nec aliquam nec. Pretium ac ipsum nunc odio laoreet at.</p>
                <p className="text-[#666666] text-[13px] w-fit rounded-full bg-white px-4 py-1 absolute bottom-5">2 mins read</p>
              </div>
              <div><img src="img/nedummy.png" alt="" className="w-full"/></div>
            </div>

            
          </div>

          <div className="grid grid-cols-2 gap-6 mt-10">
            <div className="grid grid-cols-2">
              <div className="bg-[#F7F7F7] p-10 relative">
                <p className="text-[13px] font-semibold">News</p>
                <p className="text-[22px] font-bold mt-3">Fitness Aim Claims Prestigious SACC USA Business Awards 2024</p>
                <p className="text-[14px] mt-5">Lorem ipsum dolor sit amet consectetur. Sed suscipit vitae neque consectetur vitae massa blandit bibendum vulputate. Aliquam pharetra est leo tellus convallis. Auctor auctor feugiat nec aliquam nec. Pretium ac ipsum nunc odio laoreet at.</p>
                <p className="text-[#666666] text-[13px] w-fit rounded-full bg-white px-4 py-1 absolute bottom-5">2 mins read</p>
              </div>
              <div><img src="img/nedummy.png" alt="" className="w-full"/></div>
            </div>

            <div className="grid grid-cols-2">
              <div className="bg-[#F7F7F7] p-10 relative">
                <p className="text-[13px] font-semibold">News</p>
                <p className="text-[22px] font-bold mt-3">Fitness Aim Claims Prestigious SACC USA Business Awards 2024</p>
                <p className="text-[14px] mt-5">Lorem ipsum dolor sit amet consectetur. Sed suscipit vitae neque consectetur vitae massa blandit bibendum vulputate. Aliquam pharetra est leo tellus convallis. Auctor auctor feugiat nec aliquam nec. Pretium ac ipsum nunc odio laoreet at.</p>
                <p className="text-[#666666] text-[13px] w-fit rounded-full bg-white px-4 py-1 absolute bottom-5">2 mins read</p>
              </div>
              <div><img src="img/nedummy.png" alt="" className="w-full"/></div>
            </div>

            
          </div>
        </div>
        
        <Footer/>
        
    </div>
  );
};

export default Blogs;







