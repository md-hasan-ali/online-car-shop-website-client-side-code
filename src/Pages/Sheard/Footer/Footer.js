// add necessary file 
import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css'

// Footer component 
const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <h2>Address</h2>
                        <p>Phone: 621485215</p>
                        <p>email:admin@gmail.com</p>
                        <address>570/360 House,Uttra, Dhaka 1241</address>
                    </div>
                    <div className="col-md-4">
                        <div className="social-icon">
                            <h2>About Us</h2>
                            <p>definitions of cars say that they run primarily on roads, seat one-to-eight people, have four wheels and mainly transport people rather than goods</p>
                            <Link to='/about'>
                                <button className='btn btn-success'>About Us</button>
                            </Link>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className='footer-menu'>
                            <h2>Footer Menu</h2>
                            <Link to="/home">Home</Link>
                            <Link to="/explore">Explore</Link>
                            <Link to="/contact">Contact Us</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;