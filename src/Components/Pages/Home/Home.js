import React from 'react';
import Banner from '../Banner/Banner';
import Service from '../Service/Service';
import Romantic from '../UpcomingCard/Romantic';
import UpcomingCard from '../UpcomingCard/UpcomingCard';

const Home = () => {
    return (
        <div>
            <UpcomingCard></UpcomingCard>
            <Romantic></Romantic>
            <Service></Service>
        </div>
    );
};

export default Home;