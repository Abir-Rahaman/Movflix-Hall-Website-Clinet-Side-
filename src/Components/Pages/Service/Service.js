import React from "react";
import poster from "../../Assets/poster.jpg";
import { MdOutlineLiveTv,MdSell } from "react-icons/md";
import { BsCameraReels} from "react-icons/bs";


const Service = () => {
  return (
    <>
      <div class="hero min-h-screen bg-base-200 ">
        <div class="hero-content flex-col lg:flex-row justify-between gap-24">
          <div className="w-full lg:mt-20 content-center">
            <img src={poster} class=" rounded-lg shadow-2xl " alt="" />
            <button class="btn border-4 flex justify-center	 px-6 bg-transparent mx-auto text-black rounded-none my-4 font-bold hover:bg-gradient-to-r from-green-600 to-green-400 duration-700 hover:text-white hover:border-none"> <span className="text-xl mr-2 ">  <MdSell/> </span>Get Ticket</button>
          </div>
          <div>
            <h1 class=" font-bold text-green-400">Our Main Services</h1>
            <h1 class="text-2xl font-bold mb-5 ">Download our Shows & Watch Offline.And Get Movie Ticket of Various Sinema Hall Near By You. </h1>
            <div className="flex items-center gap-x-12">
              <div className="text-4xl border-dotted rounded-full border-4 border-green-400  hover:text-white  hover:border-green-400 hover:rounded-full hover:duration-700 hover:bg-green-400 p-6">
                <MdOutlineLiveTv />
              </div>
              <div className="font-bold text-gray-500">
                <h1 className="text-xl my-3">Enjoy on Your TV.</h1>
                <p><small>You can enjoy our premium show with no internet buffering and we provided very low cost for your comfortable subscription.</small> </p>
              </div>
            </div>
            <div className="flex items-center gap-x-12 mt-5">
              <div className="text-4xl border-dotted rounded-full border-4 border-green-400  hover:text-white  hover:border-green-400 hover:rounded-full hover:duration-700 hover:bg-green-400 p-6">
                <BsCameraReels />
              </div>
              <div className="font-bold text-gray-500">
                <h1 className="text-xl my-3">Watch Everywhere.</h1>
                <p><small>You can enjoy our premium show with no internet buffering and we provided very low cost for your comfortable subscription.</small> </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
