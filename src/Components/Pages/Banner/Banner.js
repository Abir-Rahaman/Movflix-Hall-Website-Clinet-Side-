import React from "react";
import banner from "../../Assets/banner.png"
import { FaCalendarAlt } from 'react-icons/fa';
import { IoIosVideocam } from 'react-icons/io';

const Banner = () => {
  return (
    <div class="hero my-24">
      <div class="hero-content flex-col lg:flex-row-reverse ">
        <img className="lg:ml-0 ml-36" src={banner} alt=""/>
        <div className="text-center lg:text-left lg:ml-0 ml-24">
          <h1 class="text-5xl font-bold  ">Unlimited Movie, TVs Shows <br /> & More.</h1>
          <div className="lg:flex my-8 gap-4 text-center">
          <p class="px-3 bg-black text-white font-bold pt-1">PG 18</p>
          <p class="border-4 border-black font-bold px-4">4K Ultra HD</p>
          <p class="font-bold pt-1">Action,Comedy</p>
          <p class="flex items-center gap-2 font-bold lg:ml-0 ml-24"> <FaCalendarAlt/> 2022</p>
          </div>
          <button class="btn border-4 px-8   bg-transparent text-black rounded-full font-bold hover:bg-gradient-to-r from-green-600 to-green-400 duration-700 gap-4"> <span className="text-2xl">< IoIosVideocam/></span> Watch Now</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
