import React, { useEffect } from "react";
import { useState } from "react";
import { useQuery } from "react-query";
import UserDetails from './UserDetails';


const AllUsers = () => {

  // const {data:users} = useQuery('user',()=> fetch("http://localhost:5000/user")
  //     .then((res) => res.json()))
  
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/user")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);


  return (
    <div>
      <h1 className="text-3xl text-green-600 text-center"> Total Visitor {users.length}</h1>
      <div class="overflow-x-auto">
        <table class="table table-zebra w-full">
          <thead>
            <tr>
              <th>Index</th>
              <th>Email</th>
              <th>Action</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <UserDetails user={user} index={index} ></UserDetails>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
