import React from "react";
import family from '../../Assets/family.png'
import { IoIosVideocam } from 'react-icons/io';

const Family = () => {
  return (
    <div class="hero min-h-screen bg-base-200">
      <div class="hero-content flex-col lg:flex-row-reverse">
        <img src={family} class=""  alt=""/>
        <div>
         <p  className="text-green-400 font-bold "><small>ONLINE STREAMING</small></p>
          <h1 class="text-5xl font-bold">Live Movie & TV Shows For Friends & Family</h1>
          <p class="py-6 font-bold text-gray-500">
          The First Multiplex Cinema Theatre in Bangladesh STAR CINEPLEX : Show Motion Limited, incorporated in 19th December 2002, 
          </p>
            <div className="flex items-center gap-12">
            <div style={{WebkitTextFillColor:'transparent' , WebkitTextStrokeWidth:'2px' }} className="text-6xl font-bold stroke-2 text-green-400">HD 4K</div>
            <div className="text-3xl font-bold">20K+ <br /><span className="text-xl"> Active Customer</span></div>
            </div>
            <button class="btn border-4 px-8  mt-12 bg-transparent text-black rounded-full font-bold hover:bg-gradient-to-r from-green-600 to-green-400 duration-700 gap-4"> <span className="text-2xl">< IoIosVideocam/></span> Watch Now</button>
        </div>
      </div>
    </div>
  );
};

export default Family;
