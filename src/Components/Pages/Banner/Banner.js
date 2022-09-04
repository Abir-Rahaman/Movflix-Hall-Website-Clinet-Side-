import React from "react";
import banner from "../../Assets/banner.png"
import { FaCalendarAlt } from 'react-icons/fa';
import { IoIosVideocam } from 'react-icons/io';

const Banner = () => {
  return (
    <div class="hero">
      <div class="hero-content flex-col lg:flex-row-reverse">
        <img src={banner} alt=""/>
        <div className="">
          <h1 class="text-5xl font-bold">Unlimited Movie, TVs Shows <br /> & More.</h1>
          <div className="flex my-8 gap-4">
          <p class="px-3 bg-black text-white font-bold pt-1">PG 18</p>
          <p class="border-4 border-black font-bold px-4">4K Ultra HD</p>
          <p class="font-bold pt-1">Action,Comedy</p>
          <p class="flex items-center gap-2 font-bold"> <FaCalendarAlt/> 2022</p>
          </div>
          <button class="btn border-4 px-8   bg-transparent text-black rounded-full font-bold hover:bg-gradient-to-r from-green-600 to-green-400 duration-700 gap-4"> <span className="text-2xl">< IoIosVideocam/></span> Watch Now</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
