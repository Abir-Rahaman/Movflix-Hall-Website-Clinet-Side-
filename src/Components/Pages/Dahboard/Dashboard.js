import React from "react";
import { Link, Outlet } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "./../../../firebase.init";

const Dashboard = () => {
  const [user, loading, error] = useAuthState(auth);

  return (
    <div class="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content bg-green-200 m-20">
        {/* <!-- Page content here --> */}
        <h1 className="text-2xl text-green-400 text-center py-6 font-bold">{user.email} Dashboard</h1>
        <Outlet className="bg-green-200"></Outlet>
        <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">
          Open drawer
        </label>
      </div>
      <div class="drawer-side">
        <label for="my-drawer-2" class="drawer-overlay"></label>
        <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
          {/* <!-- Sidebar content here --> */}
          <li>
            <Link to="/dashboard">My Appointment </Link>
          </li>
          <li>
               <Link to="/dashboard/review">My Review </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
