import React, { useEffect, useState } from "react";
import BookingModal from "./BookingModal";
import Movires from "./Movires";
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './../../../firebase.init';
import { info } from "daisyui/src/colors/colorNames";
import Spinner from "../../Shared/Spinner";

const BookingTicket = ({ selected, setSelected }) => {
  const [user, loading, error] = useAuthState(auth);
  


  const [movies, setMovies] = useState([]);

  const [modalMovie, setModalMovie] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/movie")
      .then(res => res.json())
      .then(data => setMovies(data));
  }, []);
  if(loading){
    return <Spinner></Spinner>
   }
  return (
    <>
      <div className="grid grid-cols-1 gap-20  px-56 my-20">
        {movies.map(movie => (<Movires movie={movie} setModalMovie={setModalMovie}></Movires>))}
      </div>
      {modalMovie && (
        <BookingModal
          modalMovie={modalMovie}
          setModalMovie={setModalMovie}
          movies={movies}
          selected={selected}
          setSelected={setSelected}
        ></BookingModal>
      )}
   
    </>
  );
};

export default BookingTicket;
