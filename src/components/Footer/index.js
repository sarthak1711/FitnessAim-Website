import React from "react";
import '../../../src/style.css';

  const Header = () => {
    
  return (
    
    <section className="bg-[#252424] p-10">
        <div className="py-10 text-center">
            <h1 className="text-3xl text-white pb-2">Want to know more?</h1>
            <p className="text-white pb-5">Ready to push your limits? Discover how we empower athletes like you.</p>
            <button className="rounded-lg bg-[#FC0505]  font-semibold text-[18px] text-white h-[54px] px-8 py-2">
              <a href="/Contactus">
            Contact Us
            </a>
            </button>
        </div>
        <div>
          <div className="flex justify-between items-center">
            <div>
              <img src="img/Logo.png" alt="" className="h-8"/>
            </div>
            <div className="flex">
              <a href="https://www.facebook.com/100078560187277/" target="_blank"><img src="img/fb.png" alt="" className="h-5"/></a>
              <a href="https://www.linkedin.com/company/arawat-international/" target="_blank"><img src="img/lin.png" alt="" className="h-5 mx-3"/></a>
              <a href="https://www.instagram.com/fitness._aim" target="_blank"><img src="img/insta.png" alt="" className="h-5"/></a>
              <a href="https://youtube.com/@arawatinternationalfitness5340?si=gz0G676vAlhuVuw0" target="_blank"><img src="img/youtube.png" alt="" className="h-5 mx-3"/></a>
            </div>
          </div>

          <div className="grid lg:grid-cols-8 gap-5 py-10">
            <div>
              <ul className="">
                <li className="text-white text-lg"><b><a href="/">Home</a></b></li>
                <li className="text-sm text-[#DDDDDD] cursor-pointer mt-2"><a href="/ShopNow">Shop Now</a></li>
                <li className="text-sm text-[#DDDDDD] cursor-pointer mt-2"><a href="/NewsEvents">News & Events</a></li>
                <li className="text-sm text-[#DDDDDD] cursor-pointer mt-2"><a href="/Blogs">Blogs</a></li>
                <li className="text-sm text-[#DDDDDD] cursor-pointer mt-2"><a href="/AboutUs">About Us</a></li>
                <li className="text-sm text-[#DDDDDD] cursor-pointer mt-2"><a href="/Contactus">Contact Us</a></li>
              </ul>
            </div>

            <div className="col-span-2">
              <ul>
                <li className="text-white text-lg"><b>Services</b></li>
                <li className="text-sm text-[#DDDDDD] cursor-pointer mt-2"><a href="/PremiumEquipment">Premium Equipment Supplys</a></li>
                <li className="text-sm text-[#DDDDDD] cursor-pointer mt-2"><a href="/Onsiteinstallation">On-site Installation & Setup</a></li>
                <li className="text-sm text-[#DDDDDD] cursor-pointer mt-2"><a href="/ConsultationandCustomdesign">Consultation & Custom Design</a> </li>
                <li className="text-sm text-[#DDDDDD] cursor-pointer mt-2"><a href="/Support">Continuous Support & Maintenance</a></li>
              </ul>
            </div>

            <div>
              <ul>
                <li className="text-white text-lg"><b>What we do</b></li>
                <li className="text-sm text-[#DDDDDD] cursor-pointer mt-2"><a href=""></a>Our Story</li>
                <li className="text-sm text-[#DDDDDD] cursor-pointer mt-2"><a href=""></a>Our Vision</li>
                <li className="text-sm text-[#DDDDDD] cursor-pointer mt-2"><a href=""></a>Our Mission</li>
              </ul>
            </div>

            <div >
              <ul>
                <li className="text-white text-lg"><b>Shop Now</b></li>
                <li className="text-sm text-[#DDDDDD] cursor-pointer mt-2"><a href=""></a>Barbells</li>
                <li className="text-sm text-[#DDDDDD] cursor-pointer mt-2"><a href=""></a>Plates</li>
                <li className="text-sm text-[#DDDDDD] cursor-pointer mt-2"><a href=""></a>Lifting sets</li>
              </ul>
            </div>

            <div >
              <ul>
                <li className="text-white text-lg"><b>Terms & Conditions</b></li>
                <li className="text-sm text-[#DDDDDD] cursor-pointer mt-2"><a href="/TermsandConditions">Terms of service</a></li>
                <li className="text-sm text-[#DDDDDD] cursor-pointer mt-2"><a href="/PrivacyPolicy">Privacy Policy</a></li>
                <li className="text-sm text-[#DDDDDD] cursor-pointer mt-2"><a href="/ShippingPolicy">Shipping Policy</a></li>
                <li className="text-sm text-[#DDDDDD] cursor-pointer mt-2"><a href="/ReturnPolicy">Return Policy</a></li>
              </ul>
            </div>

            <div className="col-span-2">
              <ul>
                <li className="text-white text-lg"><b>Get in Touch</b></li>
                <li className="text-sm text-[#DDDDDD] cursor-pointer mt-2"><span className="text-white">Mail:</span>  arawat.international@gmail.com</li>
                <li className="text-sm text-[#DDDDDD] cursor-pointer mt-2"><span className="text-white">Call:</span> +91-83848 39044</li>
              </ul>
            </div>
          </div>

          <p className="py-10 max-sm:py-0 text-white">© 2024. Made in Bharat by Arawat Internationals.</p>
        </div>
        
    </section>
  );
};

export default Header;
