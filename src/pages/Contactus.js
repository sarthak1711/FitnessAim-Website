import React, { useState } from "react";
import Header from '../components/Header'
import Footer from '../components/Footer'
import { FaPhoneAlt } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
// import '../../../src/style.css';

  const Contactus = () => {
    
  return (
    
    <div className="bg-[#000000]">
        <Header/>
        <img src="img/contactusbanner.png" alt=""/>
        <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-4 lg:py-20 max-sm:py-6 lg:px-[10rem] max-sm:px-6 bg-black">
            <div>
                <p className="text-white text-[40px] font-semibold">Connect with Our Sales Team </p>
                  <p className="text-[24px] text-[#ADADAD] mt-4 mb-10">Providing contact details for sales <br/>
                      inquiries, product information,<br/>
                      and service requests. </p>
                  <p className="text-[28px] text-[#FC0505] mt-4 mb-10">+ 91-83848 39044</p>
                  <p className="text-white text-[40px] font-semibold">Customer Support and Assistance</p>
                  <p className="text-[24px] text-[#ADADAD] mt-4 mb-10">Offering direct contact details for <br/>
                  customer support, technical <br/>
                  assistance, and post-sales service.</p>
                  <button className="rounded-[4px] bg-[#FC0505] text-white px-7 py-2">
                    Contact Support
                  </button>
            </div>

            <div>
                <div className=" bg-[#333333] p-10">
                <p className="text-white text-[40px] font-semibold">Send a Message</p>
                <p className="text-[24px] text-[#ADADAD] mt-4 mb-10">Have a question or feedback for us? We'd love to hear from you!</p>

                <label className="text-white text-[16px]">Name*</label>
                <input className="w-full rounded-[4px] py-2 mb-5 px-4 mt-2" placeholder="Enter your name" />
                <label className="text-white text-[16px] ">Phone*</label>
                <input className="w-full rounded-[4px] py-2 mb-5 px-4 mt-2" placeholder="Enter your phone number" />
                <label className="text-white text-[16px] ">Email*</label>
                <input className="w-full rounded-[4px] py-2 mb-5 px-4 mt-2" placeholder="Enter your email" />
                <label className="text-white text-[16px] ">City*</label>
                <input className="w-full rounded-[4px] py-2 mb-5 px-4 mt-2" placeholder="Enter City" />
                <label className="text-white text-[16px] ">How can we help?</label>
                <textarea className="w-full rounded-[4px] py-2 mb-10 px-4 mt-2" placeholder="Type your message here.." />
                <button className="rounded-[4px] bg-[#FC0505] text-white px-7 py-2">
                Submit
                </button>
                </div>
            </div>
        </div>

        <div className="bg-[#808080] py-7">
        <p className="text-white text-[48px] text-center font-semibold">Our Headquarters</p>
        <p className="text-[24px] text-white font-light text-center mt-4">Explore and visit our workplace.</p>
        </div>
        <img src="img/mapd.png" alt="" className="w-full"/>

        <div className="bg-black h-[290px] px-[10rem] max-sm:px-[1rem] flex max-sm:block">

            <div className="bg-white p-[16px] w-[300px] h-[240px] hover:h-[350px] mt-[-125px] overflow-hidden hover:mt-[-200px] absolute">
            <img src="img/mapi1.png" alt="" className="w-full"/>
            <p className="text-[#666666] text-[16px] font-semibold mt-2">Main headquarters</p>
            <p className="text-[#3E506A] text-[20px] font-bold">Meerut, India</p>
            {/* <p className="text-[16px] flex items-center mt-5"><FaPhoneAlt className="mr-3 text-[#FC0505]"/>+91-83848 39044</p> */}
            <p className="text-[16px] flex mt-2"><FaMapMarkerAlt className="mr-3 w-[50px] mt-1 text-[#FC0505]"/>F-1/M-82, Sukhshant Complex, 
            Mangal Pandey Nagar, University Road, Meerut-250001, (U.P.) India.</p>
            </div>

            <div className="bg-white p-[16px] w-[300px] h-[240px] hover:h-[350px] max-sm:mt-[230px] mt-[-125px] overflow-hidden hover:mt-[-200px] absolute max-sm:left-[16px] left-[500px] max-sm:hidden">
            <img src="img/mapi2.png" alt="" className="w-full"/>
            <p className="text-[#666666] text-[16px] font-semibold mt-2">Export Hub</p>
            <p className="text-[#3E506A] text-[20px] font-bold">Meerut, India</p>
            {/* <p className="text-[16px] flex items-center mt-5"><FaPhoneAlt className="mr-3 text-[#FC0505]"/>+91-83848 39044</p> */}
            <p className="text-[16px] flex mt-2"><FaMapMarkerAlt className="mr-3 w-[50px] mt-1 text-[#FC0505]"/>C-53, Sec-1, Shatabdi Nagar Delhi Road, Meerut-250001, (U.P.) India.</p>
            </div>
            
        </div>
        <Footer/>
        
    </div>
  );
};

export default Contactus;
