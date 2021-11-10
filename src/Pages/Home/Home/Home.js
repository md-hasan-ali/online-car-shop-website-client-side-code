// add necessary component 
import React from 'react';
import Navigation from '../../Sheard/Navigation/Navigation';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';

// Home component 
const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <Services></Services>
        </div>
    );
};

export default Home;