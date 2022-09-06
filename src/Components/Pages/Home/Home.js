import React from 'react';
import Banner from '../Banner/Banner';
import Family from '../Family/Family';
import FreeTrial from '../FreeTrial/FreeTrial';
import MovieCard from '../MovieCard/MovieCard';
import Service from '../Service/Service';
import Hollywood from '../Trending/Hollywood';
import Trending from '../Trending/Trending';
import Romantic from '../UpcomingCard/Romantic';
import UpcomingCard from '../UpcomingCard/UpcomingCard';

const Home = () => {
    return (
        <div>
            <UpcomingCard></UpcomingCard>
            <Romantic></Romantic>
            <Service></Service>
            <Trending></Trending>
            <Hollywood></Hollywood>
            <Family></Family>
            <MovieCard></MovieCard>
            <FreeTrial></FreeTrial>
        </div>
    );
};

export default Home;