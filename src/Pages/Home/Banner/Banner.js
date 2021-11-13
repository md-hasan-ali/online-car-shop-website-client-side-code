// add necessary file 
import React from 'react';
import './Banner.css'

// Banner Component 
const Banner = () => {
    return (
        <div className="banner-area">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="banner-content">
                            <h4 style={{ fontStyle: 'italic' }}>Welcome To ,</h4>
                            <h2>Our OnLine Car ShoP</h2>
                            <p>definitions of cars say that they run primarily on roads, seat one-to-eight people, have four wheels and mainly transport people rather than goods</p>
                            <button className='btn btn-success me-2'>About Us</button>
                            <button className='btn btn-danger'>Contact Us</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;