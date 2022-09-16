import React from "react";
import { toast } from 'react-hot-toast';

const UserDetails = ({ user , index }) => {
  const { email , role} = user;
  const makeAdmin = () => {
    fetch(`http://localhost:5000/user/admin/${email}`, {
      method: "PUT",
      headers: {
        'Accept': "application/json",
        "Content-Type": "application/json",
        'Authorization': `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
    .then(res => {

      if(res.status === 403) {
        toast.error('Invalid Action');
      }
     return res.json()
    
    })
    .then(data => {
      if(data.result.matchedCount > 0 ) {
        toast.success('Congratulation You are a Admin');
       
      }
      console.log(data)
      
    })
  
  }

  return (
    <>
      <tr>
        <th>{index + 1}</th>
        <td>{email}</td>
        <td>
         { role? <span className="font-bold text-green-400 ml-4">Admin</span> :   <button onClick={makeAdmin} class="btn btn-xs bg-green-400 border-none">Make Admin</button> }
        </td>
        <td>
          <button class="btn btn-xs bg-red-400 border-none">Delete Admin</button>
        </td>
      </tr>
    </>
  );
};

export default UserDetails;
