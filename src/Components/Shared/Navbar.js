import React from "react";
import { Link,useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { useAuthState} from 'react-firebase-hooks/auth';
import auth from './../../firebase.init';



const Navbar = () => {
  const [user, loading, error] = useAuthState(auth);
  const logout = () => {
    signOut(auth);
    navigate('/')
    localStorage.removeItem('accessToken')
  };
  const navigate = useNavigate()
  
  const menuItems = (
    <>
      <li className="hover:text-green-400">
        <Link to="/">Home</Link>
      </li>
      <li  className="hover:text-green-400">
        <Link to="/booking"> Book Online  </Link>
      </li>
      {
        user && <li  className="hover:text-green-400">
        <Link to="/dashboard"> Dashboard </Link>
      </li>
      }
      <li  className="hover:text-green-400">
        <Link to="/show"> Blockbuster Show </Link>
      </li>
      <li  className="hover:text-green-400">
        <Link to="/pricing"> Pricing</Link>
      </li>
      <li  className="hover:text-green-400">
        <Link to="/blog"> Blog </Link>
      </li>
      <li  className="hover:text-green-400">
        <Link to="/contact"> Contact </Link>
      </li>
      
    </>
  );
  return (
    <div class="navbar bg-base-100 pt-6 lg:px-24 ">
      <div class="navbar-start">
        <div class="dropdown">
          <label tabIndex="0" class="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </label>
          <ul tabIndex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            {menuItems}
          </ul>
        </div>
        <Link to="/" class="btn btn-ghost normal-case text-3xl text-green-400 font-bold font-mono">MovFlix</Link>
      </div>
      <div class="navbar-center hidden lg:flex">
        <ul class="menu menu-horizontal p-0 font-bold ">{menuItems}</ul>
      </div>
      <div class="navbar-end lg:ml-0 ml-44 ">
        {user ?  <button onClick={logout} class="btn rounded-full px-12 bg-green-400 border-none "> Sing Out </button> :  <Link to="/login"> <button class="btn rounded-full px-12 bg-green-400 border-none "> Sing In </button></Link> }
        
      </div>
    </div>
  );
};

export default Navbar;
