import React from "react";
import { format } from "date-fns";

const BookingModal = ({ modalMovie,setModalMovie, selected, setSelected ,movies}) => {
  const {MovieName,slots} = modalMovie;

  const handleBooking = (e) =>{
    e.preventDefault();
    const email = e.target.email.value;
    console.log(email);
   

  }

  return (
    <div>
      <input type="checkbox" id="booking-modal" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
          <label for="booking-modal" class="btn btn-sm btn-circle absolute right-2 top-2">
            ✕
          </label>
          <h3 class="font-bold text-lg text-center my-4">You want to see {slots} Movie. </h3>
          <form onSubmit={handleBooking} className="grid grid-cols-1 gap-6 justify-items-center" action="">
            <input type="text" disabled value={format(selected, "PP")} class="input input-bordered input-primary w-full max-w-xs" />
            <select name="slot" class="select select-primary w-full max-w-xs">
                  {/* <option value={slots[0]}>{slots[0]}</option>
                  <option value={slots[1]}>{slots[1]}</option>
                  <option value={slots[2]}>{slots[2]}</option> */}
                  {/* {slots.map(slot => <option value={slot}>{slot}</option>)} */}
                  <option value="slots">{slots}</option>
            </select>
            <select name="seat" class="select select-primary w-full max-w-xs">
                  <option>Choose Your Seat</option>
                  <option>E-Front</option>
                  <option>E- Rare</option>
                  <option>Vip Massage Room</option>
              
            </select>
            <select name="ticket" class="select select-primary w-full max-w-xs">
                  <option>No. of Ticket you purchase</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6</option>
                  <option>7</option>
                  <option>8</option>
                  <option></option>
              
            </select>
            <input type="email" name='email' placeholder="Your Email" class="input input-bordered input-primary w-full max-w-xs" />
            <input type="submit" className="btn rounded-full px-12 bg-green-400 border-none w-80" value="Next" />
          </form>
          <div class="modal-action"></div>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
