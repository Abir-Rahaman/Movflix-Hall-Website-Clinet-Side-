import React from "react";
import booking from "../../Assets/booking.jpg";
import { DayPicker } from "react-day-picker";
import { format } from 'date-fns';
import "react-day-picker/dist/style.css";

const BookingBnner = () => {
    const [selected, setSelected] = React.useState(new Date());
    let footer = <p>Please pick a day.</p>;
    if (selected) {
      footer = <p className="text-xl font-bold text-green-400 text-center my-20"> You Booked Your Ticket For{format(selected, 'PP')}.</p>;
    }
  return (
    <>
      <h1 className="text-3xl text-green-400 font-bold text-center my-20 ">Booking Your Online Ticket For Our Service </h1>
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
