import React from "react";
import { useState, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";


const MyBooking = () => {
  const [user] = useAuthState(auth);
  const [bookings, setBookings] = useState([]);
  useEffect(() => {
    if (user) {
      fetch(`http://localhost:5000/bookings?email=${user?.email}`,{
        method: 'GET',
        headers:{
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`,
        }
    })
        .then((res) => res.json())
        .then((data) => {setBookings(data)});
    }
  }, [user]);
  return (
    <div>
      <h1 className="text-2xl font-bold text-slate-500 text-center"> Your Total Booking List - {bookings.length}</h1>
      <div class="overflow-x-auto">
        <table class="table table-zebra w-full ">
          <thead>
            <tr>
              <th></th>
              <th>Movie</th>
              <th>Booking Email</th>
              <th>Booking Date</th>
            </tr>
          </thead>
          <tbody>
            {
                bookings.map( (booking,index) => <tr>
                    <th>{index+1}</th>
                    <td>{booking.movieName}</td>
                    <td>{booking.email}</td>
                    <td>{booking.selectedDate}</td>
                  </tr> )
            }
           
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyBooking;
