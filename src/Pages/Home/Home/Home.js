// add necessary component 
import React from 'react';
import Navigation from '../../Sheard/Navigation/Navigation';
import Banner from '../Banner/Banner';

// Home component 
const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
        </div>
    );
};

export default Home;