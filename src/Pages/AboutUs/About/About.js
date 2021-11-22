// Import Necessary file 
import React from 'react';
import Footer from '../../Sheard/Footer/Footer';
import Navigation from '../../Sheard/Navigation/Navigation';
import AboutContent from '../AboutContent/AboutContent';

// About component 
const About = () => {
    return (
        <div>
            <Navigation></Navigation>
            <AboutContent></AboutContent>
            <Footer></Footer>
        </div>
    );
};

export default About;