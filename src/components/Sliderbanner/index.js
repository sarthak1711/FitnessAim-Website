import React from "react";
import '../../../src/style.css';
// import sample from '../../';


const Header = () => {
  return (
    <section>
        <div className="grid grid-cols-1">
          <div className="">
            <div className="">
              <img src="img/Unleash (1).gif" alt="" className="w-full"/>
              {/* <video autoplay loop id="myVideo">
                   <source src="img/bgvid.mp4" type="video/mp4" className="w-full"/>
                   Your browser does not support HTML5 video.
              </video> */}
              {/* <video className='videoTag' autoPlay loop muted>
                  <source src={sample} type='video/mp4' />
              </video> */}

            </div>
          </div>
          
        </div>
      </section>
  );
};

export default Header;
