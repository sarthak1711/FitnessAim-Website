import React from "react";
import '../../../src/style.css';
import { FaRegUser } from "react-icons/fa";
import { TbClipboardText } from "react-icons/tb";
import { IoCartOutline } from "react-icons/io5";
import { FaAngleDown } from "react-icons/fa";
import { IoSearchSharp } from "react-icons/io5";

  

function openNav() {
  document.getElementById("mySidepanel").style.width = "300px";
}

function closeNav() {
  document.getElementById("mySidepanel").style.width = "0";
}

// window.onscroll = () => {
//   const nav = document.querySelector('#navbar');
//   if(window.scrollY <= 10) {
//     nav.className = '';
//   } else {
//     nav.className = 'scroll';
//   }
// };
  const Header = () => {
    
  return (
    
    <section>
   <div>
        <nav id="navbar" className="lg:py-8 lg:px-20 max-sm:p-2 hover:bg-black">
          <div className="flex items-center justify-between">
            <div className="flex">
              {/* <button className="openbtn lg:px-5 max-sm:px-2" onClick={openNav}>☰</button> */}
              <a href="/"><img src="img/Logo.png" alt="" className="h-12 w-logo " /></a>
              <a href="/"><img src="img/Logo.png" alt="" className="h-12 b-logo " /></a>
            </div>
            <div className="flex text-white max-sm:hidden">
              <ul className="flex text-xl nav-link text-[18px] font-light">
                <li className="px-3 cursor-pointer py-[15px]"><a href="/" className="nb active">Home</a></li>
                <li className="px-3 cursor-pointer flex items-center snavp py-[15px]"><a className="nb active flex items-center" href="/ShopNow">Shop Now<FaAngleDown className="mt-1 ml-2"/></a>
                <br/>
                <div className="snav">
                  <div className="grid grid-cols-2">
                    <div className="py-10 px-20 grid grid-cols-2 gap-7 bg-[#333333]">
                      <div>
                        <ul>
                          <li className="text-[18px] text-[#ffffff] font-medium mt-3"><a href="/PremiumEquipment">Lifting Sets</a></li>
                          <li className="text-[18px] text-[#ffffff] font-medium mt-1"><a href="/Onsiteinstallation">Barbells</a></li>
                          <li className="text-[18px] text-[#ffffff] font-medium mt-1"><a href="/ConsultationandCustomdesign">Plates/Discs</a></li>
                          <li className="text-[18px] text-[#ffffff] font-medium mt-1"><a href="/Support">Platforms</a></li>
                          <li className="text-[18px] text-[#ffffff] font-medium mt-1"><a href="/Support">Dumbbells</a></li>
                          <li className="text-[18px] text-[#ffffff] font-medium mt-1"><a href="/Support">Racks & Rigs</a></li>
                          <li className="text-[18px] text-[#ffffff] font-medium mt-1"><a href="/Support">Benches</a></li>
                          <li className="text-[18px] text-[#ffffff] font-medium mt-1"><a href="/Support">Flooring</a></li>
                          <li className="text-[18px] text-[#ffffff] font-medium mt-1"><a href="/Support">Yoga and Accessories</a></li>
                          <li className="text-[18px] text-[#ffffff] font-medium mt-1"><a href="/Support">Sports & Agility</a></li>
                        </ul>
                      </div>

                      <div>
                        <ul>
                          <li className="text-[18px] text-[#ffffff] font-medium mt-3"><a>Barbell Collors</a></li>
                          <li className="text-[18px] text-[#ffffff] font-medium mt-1"><a>Kettlebells</a></li>
                          <li className="text-[18px] text-[#ffffff] font-medium mt-1"><a>Cardio</a></li>
                          <li className="text-[18px] text-[#ffffff] font-medium mt-1"><a>Rings and Cages</a></li>
                          <li className="text-[18px] text-[#ffffff] font-medium mt-1"><a>Home Gym Equipment</a></li>
                          <li className="text-[18px] text-[#ffffff] font-medium mt-1"><a>Gears and Apperals</a></li>
                          <li className="text-[18px] text-[#ffffff] font-medium mt-1"><a>Strength Equipments</a></li>
                          <li className="text-[18px] text-[#ffffff] font-medium mt-1"><a>Outdoor Gym</a></li>
                          <li className="text-[18px] text-[#ffffff] font-medium mt-1"><a>Miscellaneous</a></li>
                        </ul>
                      </div>
                    </div>
                    <div><img src="img/snav2.png" alt=""/></div>
                  </div>
                </div>
                </li>
                <li className="px-3 cursor-pointer flex items-center snavp py-[15px]"><a className="nb active flex items-center">Services<FaAngleDown className="mt-1 ml-2"/></a> <br/>
                <div className="snav">
                  <div className="grid grid-cols-2">
                    <div className="py-10 px-20 grid grid-cols-2 gap-7 bg-[#333333]">
                      <div>
                        <ul>
                          <li className="text-[18px] text-[#B6B6B6] font-semibold">SERVICE</li>
                          <li className="text-[18px] text-[#ffffff] font-medium mt-3"><a href="/PremiumEquipment">Premium Equipment Supply</a></li>
                          <li className="text-[18px] text-[#ffffff] font-medium mt-1"><a href="/Onsiteinstallation">On-site Installation & Setup</a></li>
                          <li className="text-[18px] text-[#ffffff] font-medium mt-1"><a href="/ConsultationandCustomdesign">Consultation & Custom Design </a></li>
                          <li className="text-[18px] text-[#ffffff] font-medium mt-1"><a href="/Support">Continuous Support & Maintenance</a></li>
                        </ul>
                      </div>

                      <div>
                        <ul>
                          <li className="text-[18px] text-[#B6B6B6] font-semibold">HIGHLIGHTS</li>
                          <li className="text-[18px] text-[#ffffff] font-medium mt-3"><a>Environment Conservation</a></li>
                          <li className="text-[18px] text-[#ffffff] font-medium mt-1"><a>Innovation & Technology</a></li>
                          <li className="text-[18px] text-[#ffffff] font-medium mt-1"><a>Quality Management  </a></li>
                        </ul>
                      </div>
                    </div>
                    <div><img src="img/snav.png" alt=""/></div>
                  </div>
                </div>
                </li>
                <li className="px-3 cursor-pointer py-[15px]"><a href="/NewsEvents" className="nb active">News & Events</a></li>
                <li className="px-3 cursor-pointer py-[15px]"><a href="/Blogs" className="nb active">Blogs</a></li>
                <li className="px-3 cursor-pointer py-[15px]"><a href="/AboutUs" className="nb active">About Us</a></li>
                <li className="px-3 cursor-pointer py-[15px]"><a href="/Contactus" className="nb active">Contact Us</a></li>
              </ul>
            </div>
            <div>
            <ul className="flex text-xl nav-link text-[18px] font-medium">
            <li className="px-3 cursor-pointer py-[15px]"><IoSearchSharp className="text-white"/></li>
              <li className="px-3 cursor-pointer py-[15px]"><FaRegUser className="text-white"/></li>
              <li className="px-3 cursor-pointer py-[15px]"><IoCartOutline className="text-white"/></li>
            </ul>
            </div>
          </div>
        </nav>



        <div id="mySidepanel2" className="sidepanel2">
          <div className="flex bg-white items-center">
            {/* <a href="javascript:void(0)" className="closebtn text-end text-3xl" onClick={closeNav2}>×</a> */}
            
            <h1 className="w-full text-center text-xl">SHOPPING BAG</h1>
          </div>
          <div className="text-center mt-32">
            <h1 className="text-2xl text-black">Your cart is empty</h1>
            <button className="bg-[#3b1443] text-white px-7 py-3 rounded-3xl my-4">Continue shopping</button>
          </div>
        </div>
        <div id="mySidepanel" className="sidepanel">
          <a href="javascript:void(0)" className="closebtn text-end text-3xl" onClick={closeNav}>×</a>
          {/* dropdown.... */}
          <a href="#">
          </a><div className="dropdown"><a href="#">
              <button className="dropbtn">Men's
                <i className="fa fa-caret-down" />
              </button>
            </a><div className="dropdown-content"><a href="#">
              </a><a href="#">Executive Bags</a>
              <a href="#">Bags</a>
              <a href="#">Laptop Bag</a>
            </div>
          </div>
          <a href="#">
          </a><div className="dropdown"><a href="#">
              <button className="dropbtn">Women's
                <i className="fa fa-caret-down" />
              </button>
            </a><div className="dropdown-content"><a href="#">
              </a><a href="#">Totes &amp; Satchels</a>
            </div>
          </div>
          {/* end dropdown.............. */}
          <a href="#" alt=''>Unisex</a>
          <a href="#">Accessories</a>
          <a href="#">Travel</a>
          <a href="#">Corporate and Business Gifts</a>
        </div>
      </div>
  </section>
  );
};

export default Header;
