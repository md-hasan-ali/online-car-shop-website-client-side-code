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
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum vel eveniet amet, nostrum nihil ducimus.</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className='footer-menu'>
                            <h2>Footer Menu</h2>
                            <Link to="/home">Home</Link>
                            <Link to="/explorer">Features</Link>
                            <Link to="/pricing">Contact Us</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;