import React from "react";
import { format } from "date-fns";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "./../../../firebase.init";
import toast from "react-hot-toast";
import Spinner from "./../../Shared/Spinner";

const BookingModal = ({ modalMovie, setModalMovie, selected, setSelected, movies }) => {
  const { _id, MovieName, slots, RELEASEDATE, RUNTIME, CAST, ticketPrice, DIRECTOR, Language, details, picture } = modalMovie;
  console.log(modalMovie);

  const [user, loading] = useAuthState(auth);

  const handleBooking = (e) => {
    e.preventDefault();
    const formattedDate = format(selected, "PP");
    const slot = e.target.slot.value;
    const booking = {
      booking_Id: _id,
      Movie_Name: MovieName,
      Booking_Date: formattedDate,
      Booking_Time: slot,
      Booking_Seat: e.target.seatNo.value,
      Quantity_Of_Ticket: e.target.ticketNo.value,
      Ticket_Price: ticketPrice,
      email: user?.email,
      name: user?.displayName,
      phoneNumber: e.target.number.value,
    };
    if (loading) {
      return <Spinner></Spinner>;
    }

    fetch("https://movie-server-side.vercel.app/bookings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("Your Booking Successfully Done");
        setModalMovie(null);
        console.log(data);
      });
  };

  return (
    <div>
      <input type="checkbox" id="booking-modal" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
          <label for="booking-modal" class="btn btn-sm btn-circle absolute right-2 top-2">
            ✕
          </label>
          <h3 class="font-bold text-lg text-center my-4">
            Hi,{user.displayName} You want to see {modalMovie.MovieName} Movie.{" "}
          </h3>
          <form onSubmit={handleBooking} className="grid grid-cols-1 gap-6 justify-items-center" action="">
            <input type="text" disabled value={format(selected, "PP")} class="input input-bordered input-primary w-full max-w-xs" />
            <input type="text" disabled value={ticketPrice} class="input input-bordered input-primary w-full max-w-xs" />

            <select name="slot" required class="select select-primary w-full max-w-xs">
              <option>Pick Your Movie Time</option>
              {slots.map((slot) => (
                <option value={slot}>{slot}</option>
              ))}
            </select>
            <select name="seatNo" required class="select select-primary w-full max-w-xs">
              <option>Choose Your Seat</option>
              <option>E-Front</option>
              <option>E- Rare</option>
              <option>Vip Massage Room</option>
            </select>
            <select name="ticketNo" required class="select select-primary w-full max-w-xs">
              <option>No. of Ticket you purchase</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
              <option>7</option>
              <option>8</option>
            </select>

            <input type="text" required name="number" placeholder="Your Number" class="input input-bordered input-primary w-full max-w-xs" />
            <input type="submit" className="btn rounded-full px-12 bg-green-400 border-none w-80" value="Next" />
          </form>
          <div class="modal-action"></div>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
