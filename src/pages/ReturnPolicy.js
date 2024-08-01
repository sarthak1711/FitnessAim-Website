import React, { useState } from "react";
import Header from '../components/Header'
import Footer from '../components/Footer'
// import '../../../src/style.css';

  const ConsultationandCustomdesign = () => {
    
  return (
    
    <div className="">
        <Header/>
        <div className="bg-[#000000] h-[122px]"></div>
        <div className="bg-[#f8f8f8] py-10 lg:px-[20rem] sm:px-[2rem] text-[40px] font-bold">Cancellation and Refund</div>
        <div className="py-10 lg:px-[20rem] sm:px-[2rem]">
        <p className="text-[16px] text-[#333333] py-5">Last updated on <b>Jul 30, 2024</b>
        </p>
        <p className="text-[16px] text-[#333333] ">ARAWAT INTERNATIONAL believes in helping its customers as far as possible, and has therefore a liberal cancellation policy. Under this policy:</p>
            <ul className="text-[16px] text-[#333333] list-disc	ml-5">
                <li className="mt-2">Cancellations will be considered only if the request is made within same day of placing the order. However, the cancellation request may not be entertained if the orders have been communicated to the vendors/merchants and they have initiated the process of shipping them.</li>
                <li className="mt-5">ARAWAT INTERNATIONAL does not accept cancellation requests for customised items like Rigs, Cages, Rings etc. However, refund/replacement can be made if the customer establishes that the quality of product delivered is not good (In specific cases only)**.</li>
                <li className="mt-5">In case of receipt of damaged or defective items please report the same to our Customer Service team. The request will, however, be entertained once the merchant has checked and determined the same at his own end. This should be reported within same day of receipt of the products. </li>
                <li className="mt-5">In case you feel that the product received is not as shown on the site or as per your expectations, you must bring it to the notice of our customer service within same day of receiving the product. The Customer Service Team after looking into your complaint will take an appropriate decision.
                </li>
                <li className="mt-5">In case of complaints regarding products that come with a warranty from manufacturers, please refer the issue to them.
                </li>
                <li className="mt-5">In case of any Refunds approved by the ARAWAT INTERNATIONAL, it’ll take 6-8 days for the refund to be processed to the end customer.
                </li>
            </ul>

        </div>
        
        <Footer/>
        
    </div>
  );
};

export default ConsultationandCustomdesign;
