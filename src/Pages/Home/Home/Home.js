// add necessary component 
import React from 'react';
import Footer from '../../Sheard/Footer/Footer';
import Navigation from '../../Sheard/Navigation/Navigation';
import Banner from '../Banner/Banner';
import ComingSoon from '../ComingSoon/ComingSoon';
import Reviews from '../Reviews/Reviews';
import Services from '../Services/Services';

// Home component 
const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <Services></Services>
            <ComingSoon></ComingSoon>
            <Reviews></Reviews>
            <Footer></Footer>
        </div>
    );
};

export default Home;