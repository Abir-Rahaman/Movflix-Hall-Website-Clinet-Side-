import React from 'react';
import { Outlet,Link } from 'react-router-dom';
import Banner from '../Banner/Banner';
import Service from '../Service/Service';
import Romantic from '../UpcomingCard/Romantic';

const Trending = () => {
    return (
       <>

        <div className="my-20 text-center"> 
            <p className="text-center font-bold text-green-400"><small>ONLINE STREAMING</small></p>
            <h1 className="text-center text-6xl font-bold"><small>Top Trending Movies</small></h1>
           <Link to='/telegu'> <button class="btn border-4 px-6 mt-6   bg-transparent text-black rounded-xl  font-bold hover:bg-gradient-to-r from-green-600 to-green-400 duration-700 "> <span className="text-2xl"></span> Hollywood</button></Link>
           <Link to='/bollywood'> <button class="btn border-4 px-6 mt-6   bg-transparent text-black rounded-xl  font-bold hover:bg-gradient-to-r from-green-600 to-green-400 duration-700 "> <span className="text-2xl"></span> Bollywood</button></Link>
           <Link to='/tamil'> <button class="btn border-4 px-6 mt-6   bg-transparent text-black rounded-xl  font-bold hover:bg-gradient-to-r from-green-600 to-green-400 duration-700 "> <span className="text-2xl"></span> Tamil</button></Link>
           <Link to='/telegu'> <button class="btn border-4 px-6 mt-6   bg-transparent text-black rounded-xl  font-bold hover:bg-gradient-to-r from-green-600 to-green-400 duration-700 "> <span className="text-2xl"></span> Telegu</button></Link>
           <Link to='/allItem'> <button class="btn border-4 px-6 mt-6   bg-transparent text-black rounded-xl  font-bold hover:bg-gradient-to-r from-red-600 to-red-400 duration-700 "> <span className="text-2xl"></span> ALL Movies</button></Link>
        </div>
         <div className="">
         <Outlet></Outlet>
       </div>
       </>
    );
};

export default Trending;