import React from "react";
import booking from "../../Assets/booking.jpg";
import { DayPicker } from "react-day-picker";
import { format } from 'date-fns';
import "react-day-picker/dist/style.css";
import { Link } from 'react-router-dom';


const BookingBnner = ({setSelected,selected}) => {
   
    let footer = <p>Please pick a day.</p>;
    if (selected) {
      footer = <p className="text-xl font-bold text-green-400 text-center my-20"> You Booked Your Ticket For{format(selected, 'PP')}.</p>;
    }
  return (
    <>
      <h1 className="text-3xl text-green-400 font-bold text-center my-20 ">Booking Your Online Ticket For Our Service </h1> 
      <div className="flex justify-center">
        <Link to="/choose"><button class="btn border-4 px-8  bg-transparent text-black rounded-full font-bold hover:bg-gradient-to-r from-green-600 to-green-400 duration-700 gap-4"> <span className="text-2xl"></span> Choose Movie </button></Link>
      </div>
      <div class="hero  my-20 ">
        
        <div class="hero-content flex-col lg:flex-row-reverse gap-32">
          <img src={booking} class="max-w-sm rounded-lg shadow-2xl" alt="Shadow" />
          <div class=" ">
            <DayPicker
            mode="single"
            selected={selected}
            onSelect={setSelected}
            />
          </div>
        </div>
      </div>
      {footer} 
     
    </>
  );
};

export default BookingBnner;
