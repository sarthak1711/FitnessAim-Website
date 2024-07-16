import React, { useState } from "react";
import Header from '../components/Header'
import Footer from '../components/Footer'
// import '../../../src/style.css';

  const ConsultationandCustomdesign = () => {
    
  return (
    
    <div className="">
        <Header/>
        <div className="bg-[#000000] h-[122px]"></div>
        <img src="img/ccdb.png" alt="" className="w-full"/>
        <div className="py-10 lg:px-[25rem] px-[10rem]">
        <img src="img/ccd.png" alt="" className="w-full"/>
        <p className="text-[16px] text-[#666666]">Unleashing Your Gym's Potential with Tailored Solutions </p>
        <p className="text-[16px] text-[#333333] py-5">Creating the perfect gym is more than just assembling equipment; it's about understanding your unique vision and turning it into a reality that exceeds expectations. At Fitness Aim, we believe in the power of personalized design and consultation to create an exceptional fitness environment that reflects your goals and caters to your member’s needs. </p>
        <p className="text-[24px] font-semibold text-[#333333] py-2">Understanding Your Goals </p>
        <p className="text-[16px] text-[#333333] py-5">Every great gym starts with a great idea. Whether you envision a high-energy fitness hub, a serene wellness retreat, or a cutting-edge training facility, our journey begins by understanding your aspirations. We take the time to listen to your ideas, understand your objectives, and delve into the specifics of what you want to achieve. This collaborative approach ensures that the final design is a true representation of your vision.</p>

        <div className="grid grid-cols-2 gap-6 mt-3">
            <div>
            <p className="text-[24px] font-semibold text-[#333333] pb-2">Crafting a Customized Plan </p>
            <p className="text-[16px] text-[#333333] py-5">Once we have a clear understanding of your goals, our expert design team gets to work. We combine your vision with our extensive industry experience to create a comprehensive plan that addresses every aspect of your gym. From layout and flow to equipment selection and aesthetic details, every element is meticulously planned to ensure an optimal fitness experience for your members.</p>
            </div>
            <div><img src="img/ccd1.png" alt="" className="w-full"/></div>
        </div>

        <div className="grid grid-cols-2 gap-6 mt-3">
        <div><img src="img/ccd2.png" alt="" className="w-full"/></div>
            <div>
            <p className="text-[24px] font-semibold text-[#333333] pb-2">Innovative and Functional Design </p>
            <p className="text-[16px] text-[#333333] py-5">Our design philosophy revolves around innovation and functionality. We incorporate the latest trends and technologies in fitness design to create spaces that are not only visually appealing but also highly functional. Whether it's optimizing the use of space, ensuring smooth traffic flow, or creating designated areas for different types of workouts, we focus on every detail to enhance the user experience.</p>
            </div>
            
        </div>

            <p className="text-[24px] font-semibold text-[#333333] pt-5">Bringing Your Dream Gym to Life  </p>
            <p className="text-[16px] text-[#333333] py-5">With the plan in place, we move forward with precision and dedication. Our team of skilled professionals takes care of everything, from sourcing the best equipment to managing the installation and setup process. We ensure that every piece of equipment is strategically placed and thoroughly tested, so you can be confident in the quality and performance of your new gym.</p>

            <p className="text-[24px] font-semibold text-[#333333] pt-5">Ongoing Support for Sustained Success   </p>
            <p className="text-[16px] text-[#333333] py-5">Our commitment to your gym doesn't end once the installation is complete. We provide ongoing support to ensure that your facility continues to operate smoothly and efficiently. Whether you need maintenance services, equipment upgrades, or simply some advice on optimizing your gym's performance, our team is always here to help.</p>

            <p className="text-[24px] font-semibold text-[#333333] pt-5">Let’s Create Something Extraordinary </p>
            <p className="text-[16px] text-[#333333] py-5">At Fitness Aim, we're passionate about creating gyms that inspire and motivate. With our consultation and custom design services, you can turn your dream gym into a stunning reality that stands out in the fitness industry. Let’s work together to build a space where your members will love to train, and you will be proud to showcase.</p>

            <p className="text-[24px] font-semibold text-[#333333] pt-5">Ready to Get Started? </p>
            <p className="text-[16px] text-[#333333] py-5">Contact us today to schedule your consultation and take the first step towards creating your dream gym. Together, we can make your vision come to life.</p>



        </div>
        
        <Footer/>
        
    </div>
  );
};

export default ConsultationandCustomdesign;
