import React from 'react';
import { IoTimer } from 'react-icons/io5';
import { AiFillLike } from 'react-icons/ai';
import img1 from '../../Assets/download1.jpg'
import img2 from '../../Assets/download2.jpg'
import img3 from '../../Assets/download3.jpg'
import img4 from '../../Assets/download4.jpg'

const MovieCard = () => {
    return (
        <div className="my-20">
            <div className="text-center">
            <p  className="text-green-400 font-bold "><small>BEST TV SERIES</small></p>
            <h1 className="text-5xl  font-bold ">World Best TV Series</h1>
            <div className="lg:flex lg:gap-12 my-20 lg:mx-20 mx-14">
      <div class="card card-compact w-96 bg-base-100 shadow-2xl border-2 border-green-400 pt-6 rounded-none	 lg:mb-0 mb-20">
        <figure>
          <img src={img1} alt="Shoes" />
        </figure>
        <div class="card-body">
           <div className="flex justify-between">
             <h2 className="font-bold">Action Movie</h2>
             <h2 className="text-green-400 font-bold " >2022</h2>
            
           </div>
           <div className="pt-4 flex justify-between">
           <div className="">
           <p class="px-3 border-4 border-green-400 text-green-400 font-bold pt-1  pb-1">HD</p>
           </div>
         <div className="flex gap-5">
         <p class="font-bold flex items-center"> <span className="text-xl text-green-400"><IoTimer/></span> 110 min</p>
           <p class="font-bold flex items-center"> <span className="text-xl text-green-400"><AiFillLike/></span> 4.5</p>
         </div>
           </div>
        </div>
      </div>
      <div class="card card-compact w-96 bg-base-100 shadow-2xl border-2 border-green-400 pt-6 rounded-none	lg:mb-0 mb-20">
        <figure>
          <img src={img4} alt="Shoes" />
        </figure>
        <div class="card-body">
           <div className="flex justify-between">
             <h2 className="font-bold">Action Movie</h2>
             <h2 className="text-green-400 font-bold " >2022</h2>
            
           </div>
           <div className="pt-4 flex justify-between">
           <div className="">
           <p class="px-3 border-4 border-green-400 text-green-400 font-bold pt-1  pb-1">HD</p>
           </div>
         <div className="flex gap-5">
         <p class="font-bold flex items-center"> <span className="text-xl text-green-400"><IoTimer/></span> 110 min</p>
           <p class="font-bold flex items-center"> <span className="text-xl text-green-400"><AiFillLike/></span> 4.5</p>
         </div>
           </div>
        </div>
      </div>
      <div class="card card-compact w-96 bg-base-100 shadow-2xl border-2 border-green-400 pt-6 rounded-none	lg:mb-0 mb-20">
        <figure>
          <img src={img2} alt="Shoes" />
        </figure>
        <div class="card-body">
           <div className="flex justify-between">
             <h2 className="font-bold">Action Movie</h2>
             <h2 className="text-green-400 font-bold " >2022</h2>
            
           </div>
           <div className="pt-4 flex justify-between">
           <div className="">
           <p class="px-3 border-4 border-green-400 text-green-400 font-bold pt-1  pb-1">HD</p>
           </div>
         <div className="flex gap-5">
         <p class="font-bold flex items-center"> <span className="text-xl text-green-400"><IoTimer/></span> 110 min</p>
           <p class="font-bold flex items-center"> <span className="text-xl text-green-400"><AiFillLike/></span> 4.5</p>
         </div>
           </div>
        </div>
      </div>
      <div class="card card-compact w-96 bg-base-100 shadow-2xl border-2 border-green-400 pt-6 rounded-none	lg:mb-0 mb-20">
        <figure>
          <img src={img3} alt="Shoes" />
        </figure>
        <div class="card-body">
           <div className="flex justify-between">
             <h2 className="font-bold">Action Movie</h2>
             <h2 className="text-green-400 font-bold " >2022</h2>
            
           </div>
           <div className="pt-4 flex justify-between">
           <div className="">
           <p class="px-3 border-4 border-green-400 text-green-400 font-bold pt-1  pb-1">HD</p>
           </div>
         <div className="flex gap-5">
         <p class="font-bold flex items-center"> <span className="text-xl text-green-400"><IoTimer/></span> 110 min</p>
           <p class="font-bold flex items-center"> <span className="text-xl text-green-400"><AiFillLike/></span> 4.5</p>
         </div>
           </div>
        </div>
      </div>
     
    </div>
              
            </div>
        </div>
    );
};

export default MovieCard;