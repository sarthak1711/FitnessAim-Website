import React, { useState } from "react";
import Header from '../components/Header'
import Footer from '../components/Footer'
// import '../../../src/style.css';

  const ConsultationandCustomdesign = () => {
    
  return (
    
    <div className="">
        <Header/>
        <div className="bg-[#000000] h-[122px]"></div>
        <div className="bg-[#f8f8f8] py-10 lg:px-[20rem] sm:px-[2rem] text-[40px] font-bold">Shipping and Delivery</div>
        <div className="py-10 lg:px-[20rem] sm:px-[2rem]">
        <p className="text-[16px] text-[#333333] py-5">Last updated on <b>Jul 30, 2024</b>
        </p>
            <ul className="text-[16px] text-[#333333] list-disc	ml-5">
                <li className="mt-5">For International buyers, orders are shipped and delivered through registered international courier companies and/or International speed post only.</li>
                <li className="mt-5">For domestic buyers, orders are shipped through registered domestic courier companies and /or speed post only. </li>
                <li className="mt-5">Orders are shipped within 0-7 days or as per the delivery date agreed at the time of order confirmation and delivering of the shipment subject to Courier Company / post office norms. </li>
                <li className="mt-5">ARAWAT INTERNATIONAL is not liable for any delay in delivery by the courier company / postal authorities and only guarantees to hand over the consignment to the courier company or postal authorities within 0-7 days from the date of the order and payment or as per the delivery date agreed at the time of order confirmation. 
                </li>
                <li className="mt-5">Delivery of all orders will be to the address provided by the buyer. Delivery of our services will be confirmed on your mail ID as specified during registration. For any issues in utilizing our services you may contact our helpdesk on 8384839044 or arawat.international@gmail.com
                </li>
            </ul>

        </div>
        
        <Footer/>
        
    </div>
  );
};

export default ConsultationandCustomdesign;
