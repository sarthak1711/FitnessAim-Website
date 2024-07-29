import React from "react";
import '../../../src/style.css';

  const Header = () => {
    
  return (
    
    <section className="bg-[#252424] p-10">
        <div className="py-10 text-center">
            <h1 className="text-3xl text-white pb-2">Whant to know more?</h1>
            <p className="text-white pb-5">Ready to push your limits? Discover how we empower athletes like you.</p>
            <button className="rounded-lg bg-[#FC0505]  font-semibold text-white px-8 py-2">
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
              <img src="img/fb.png" alt="" className="h-5"/>
              <img src="img/twit.png" alt="" className="h-5 mx-3"/>
              <img src="img/insta.png" alt="" className="h-5"/>
              <img src="img/youtube.png" alt="" className="h-5 mx-3"/>
            </div>
          </div>

          <div className="grid lg:grid-cols-7 gap-5 py-10">
            <div>
              <ul className="">
                <li className="text-white text-lg"><b>Home</b></li>
                <li className="text-sm text-[#DDDDDD] cursor-pointer mt-2">Shop Now</li>
                <li className="text-sm text-[#DDDDDD] cursor-pointer mt-2">Services</li>
                <li className="text-sm text-[#DDDDDD] cursor-pointer mt-2">News & Events</li>
                <li className="text-sm text-[#DDDDDD] cursor-pointer mt-2">Blogs</li>
                <li className="text-sm text-[#DDDDDD] cursor-pointer mt-2">About Us</li>
                <li className="text-sm text-[#DDDDDD] cursor-pointer mt-2">Contact Us</li>
              </ul>
            </div>

            <div>
              <ul>
                <li className="text-white text-lg"><b>Services</b></li>
                <li className="text-sm text-[#DDDDDD] cursor-pointer mt-2">Our Services</li>
                <li className="text-sm text-[#DDDDDD] cursor-pointer mt-2">Highlights</li>
              </ul>
            </div>

            <div>
              <ul>
                <li className="text-white text-lg"><b>What we do</b></li>
                <li className="text-sm text-[#DDDDDD] cursor-pointer mt-2">Our Story</li>
                <li className="text-sm text-[#DDDDDD] cursor-pointer mt-2">Our Vision</li>
                <li className="text-sm text-[#DDDDDD] cursor-pointer mt-2">Our Mission</li>
              </ul>
            </div>

            <div >
              <ul>
                <li className="text-white text-lg"><b>Shop Now</b></li>
                <li className="text-sm text-[#DDDDDD] cursor-pointer mt-2">Barbells</li>
                <li className="text-sm text-[#DDDDDD] cursor-pointer mt-2">Plates</li>
                <li className="text-sm text-[#DDDDDD] cursor-pointer mt-2">Lifting sets</li>
              </ul>
            </div>

            <div >
              <ul>
                <li className="text-white text-lg"><b>Terms & Conditions</b></li>
                <li className="text-sm text-[#DDDDDD] cursor-pointer mt-2">Terms of service</li>
                <li className="text-sm text-[#DDDDDD] cursor-pointer mt-2">Privacy Policy</li>
                <li className="text-sm text-[#DDDDDD] cursor-pointer mt-2">Shipping Policy</li>
                <li className="text-sm text-[#DDDDDD] cursor-pointer mt-2">Return Policy</li>
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

          <p className="py-10 max-sm:py-0 text-white">© 2024. Made in India by Arawat Internationals.</p>
        </div>
        
    </section>
  );
};

export default Header;
