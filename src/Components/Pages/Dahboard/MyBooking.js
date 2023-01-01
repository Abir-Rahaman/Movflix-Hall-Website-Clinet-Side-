import React from "react";
import { useState, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";

const MyBooking = () => {
  const [user] = useAuthState(auth);
  const [bookings, setBookings] = useState([]);
  console.log(bookings);
  useEffect(() => {
    if (user) {
      fetch(`https://movie-server-side.vercel.app/bookings?email=${user?.email}`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => setBookings(data));
    }
  }, [user]);

  return (
    <div>
      <h1 className="text-2xl font-bold text-slate-500 text-center"> Your Total Booking List - {bookings.length}</h1>
      <div class="overflow-x-auto mt-6">
        <table class="table table-zebra w-full ">
          <thead>
            <tr>
              <th>Movie</th>
              <th>Booking Seat</th>
              <th>Booking Time</th>
              <th>Booking Date</th>
              <th>Ticket</th>
              <th>Price</th>
              <th>Booking Payment</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking, index) => (
              <tr>
                <td>{booking.Movie_Name}</td>
                <td>{booking.Booking_Seat}</td>
                <td>{booking.Booking_Time}</td>
                <td>{booking.Booking_Date}</td>
                <td>{booking.Quantity_Of_Ticket}</td>
                <td>{booking.Ticket_Price}$</td>
                <td>
                  {(booking.ticketPrice || !booking.paid) && (
                    <Link to={`/dashboard/payment/${booking._id}`}>
                      <button class="btn btn-xs bg-green-400 border-none">Payment</button>
                    </Link>
                  )}
                  {(booking.ticketPrice || booking.paid) && <span class="btn btn-xs bg-green-400 border-none">Payment Done</span>}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyBooking;
