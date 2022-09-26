
import React from "react";
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './../../../firebase.init';
import { toast } from 'react-hot-toast';

const DeleteMovie = ({deleteAdmin}) => {
    const {email} = deleteAdmin;
    const [user] = useAuthState(auth)

    const handleDelete = () =>{

        fetch(`http://localhost:5000/user/${email}`,{
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json",
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
              },
        })
        .then(res => res.json())
          .then(data => {
            if(data.deletedCount){
                toast.success("delete Successfully")
            }  
       
      })
    }


  return (
    <div>
      <input type="checkbox" id="delete-modal" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
        <label for="delete-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
          <h3 class="font-bold text-lg">Are You Sure {user.displayName} to Delete This <span className="text-red-400"> {email}</span> Admin </h3>
          <div class="modal-action">
            <label onClick={()=>handleDelete()} for="delete-modal" class="btn btn-sm">
              delete
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteMovie;
