import React, { useEffect, useState } from 'react';
import Movires from './Movires';

const BookingTicket = () => {
    const [movies,setMovies] = useState([])
    useEffect(()=>{
        fetch('movies.json')
        .then(res => res.json())
        .then(data => setMovies(data))
    },[])
    return (
        <div className="grid grid-cols-1 gap-20  px-56 my-20">
            {
                movies.map(movie =><Movires movie={movie}></Movires> )
            }
            
        </div>
    );
};

export default BookingTicket;