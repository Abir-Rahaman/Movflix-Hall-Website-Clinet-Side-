import React from "react";


const Movires = ({ movie,setModalMovie }) => {
    const {image,MovieName,DIRECTOR,RUNTIME,CAST,GENRE,Language,RELEASEDATE,details,slots,ticketPrice} =movie;
    

    

   
  return (
    <div class="card lg:card-side bg-base-200 shadow-xl  pl-44">
    <figure><img src={image} alt="Album"/></figure>
    <div class="card-body ml-6">
      <h2 class="card-title text-2xl font-bold text-green-400">Name: {MovieName}</h2>
      <h2 class="">Director: {DIRECTOR}</h2>
      <h2 class="">Ticket Price: {ticketPrice}</h2>
      <h2 class="">Run Time: {RUNTIME}</h2>
      <h2 class="">Cast: {CAST}</h2>
      <h2 class="">Genre: {GENRE}</h2>
      <h2 class="">Language: {Language}</h2>
      <h2 class="">RELEASEDATE: {RELEASEDATE}</h2>
      <h2 class="">Schedule: {slots}</h2>
      <h2 class="">Info: {details}</h2>
      <div class="card-actions justify-start">
        <label onClick={()=> setModalMovie(movie)} for="booking-modal" class="btn btn-primary">Book Ticket</label>
      </div>
    </div>
  </div>
  );
};

export default Movires;
