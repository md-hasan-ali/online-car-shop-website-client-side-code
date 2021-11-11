import React from 'react';
import Footer from '../../Sheard/Footer/Footer';
import Navigation from '../../Sheard/Navigation/Navigation';
import AllProducts from '../AllProducts/AllProducts';

const Explore = () => {
    return (
        <div>
            <Navigation></Navigation>
            <AllProducts></AllProducts>
            <Footer></Footer>
        </div>
    );
};

export default Explore;