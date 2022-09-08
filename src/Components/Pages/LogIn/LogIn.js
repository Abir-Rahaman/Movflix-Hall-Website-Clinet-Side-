import React from "react";
import { MdOutlineManageAccounts } from 'react-icons/md';
import { FcGoogle } from 'react-icons/fc';
import { ImGithub } from 'react-icons/im';
import { GrFacebook } from 'react-icons/gr';

import auth from "../../../firebase.init";
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';




const LogIn = () => {
    const [signInWithGoogle] = useSignInWithGoogle(auth);
  return (
    <div className="bg-base-200  flex-col"   >
      <div class="hero pt-24 pb-6">
        <div class="hero-content flex-col lg:flex-row-reverse">
        <span className="text-6xl text-slate-800 mx-auto hidden lg:block rounded-full bg-green-400 p-6 lg:relative lg:top-[-190px] lg:right-[260px] z-10"><MdOutlineManageAccounts/></span>
          <div class="card w-96  shadow-2xl bg-base-10">
          
            <div class="card-body pt-20">
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Email</span>
                </label>
                <input type="text" placeholder="email" class="input input-bordered" />
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Password</span>
                </label>
                <input type="text" placeholder="password" class="input input-bordered  py-0" />
                <label class="label">
                <p class="">  <input class="pt-1" type="checkbox" name="" id=""  /> <small> Remember Me </small> </p>
                  <a href="#" class="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div class="form-control mt-6">
              <button   class="btn border-4 px-6   bg-transparent text-black rounded-full font-bold hover:bg-gradient-to-r from-green-600 to-green-400 duration-700 "> <span className="text-2xl"></span> Log In</button>
              </div>
            </div>
           
          </div>
          
          
        </div>
        
      </div>
      <div className="flex justify-center text-4xl gap-8 lg:mr-28 pb-12 ">
          <span onClick={()=>signInWithGoogle()}><FcGoogle/></span>
          <ImGithub/>
          <GrFacebook/>
     </div>
      
    </div>
  );
};

export default LogIn;
