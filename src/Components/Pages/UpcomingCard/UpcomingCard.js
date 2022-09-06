import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Banner from '../Banner/Banner';

const UpcomingCard = () => {
    return (
        <div>
              <Banner></Banner>
            <div className="lg:flex lg:justify-around">
              
               <div className="lg:text-left text-center">
               <p  className="text-green-400 font-bold "><small>ONLINE STREAMING</small></p>
                <h1 className="text-4xl font-bold">Upcoming Movies</h1>
               </div>
               <div className="mt-4 lg:flex gap-4 text-center lg:text-left">
               <Link to='/'>
               <button class="btn border-4 px-6   bg-transparent text-black rounded-full font-bold hover:bg-gradient-to-r from-green-600 to-green-400 duration-700 "> <span className="text-2xl"></span> Romantic</button>
               </Link>
               <Link to='/action'>
               <button class="btn border-4 px-6   bg-transparent text-black rounded-full font-bold hover:bg-gradient-to-r from-green-600 to-green-400 duration-700 "> <span className="text-2xl"></span> Actions</button>
               </Link>
                
               <Link to='/comedy'>
               <button class="btn border-4 px-6   bg-transparent text-black rounded-full font-bold hover:bg-gradient-to-r from-green-600 to-green-400 duration-700 "> <span className="text-2xl"></span> Comedy </button>
               </Link>
              <Link to='/horror'>
               <button class="btn border-4 px-6   bg-transparent text-black rounded-full font-bold hover:bg-gradient-to-r from-green-600 to-green-400 duration-700"> <span className="text-2xl"></span> Horror</button>
              </Link>
               </div>
            </div>
            <div className="">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default UpcomingCard;