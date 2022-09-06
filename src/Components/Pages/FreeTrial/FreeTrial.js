import React from 'react';

const FreeTrial = () => {
    return (
        <div className="py-16 bg-green-400 my-20">
            <div className="flex justify-evenly items-center">
            <div className="text-white">
                <h1 className="text-4xl font-bold">TRIAL START FIRST 30 DAYS.</h1>
                <p className="font-bold mt-3">Enter your email to create or restart your membership.</p>
            </div>
            <div className="">
            <input type="text" placeholder="Enter your email" class="input input-bordered w-80 rounded-none"  />
            <button class="btn  rounded-none px-6 bg-black border-none "> Get Started </button>
            </div>
            </div>
        </div>
    );
};

export default FreeTrial;