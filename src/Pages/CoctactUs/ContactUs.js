// Import necessary file
import React from 'react';
import Footer from '../Sheard/Footer/Footer';
import Navigation from '../Sheard/Navigation/Navigation';
import './contact.css'

// ContactUs Component 
const ContactUs = () => {
    return (
        <div>
            <Navigation></Navigation>
            <div className="contact-area">
                <div className="container">
                    <div className="section-title text-center my-5 pt-5">
                        <h2>Contact Us</h2>
                    </div>
                    <div className="row">
                        <div className="col-md-8 mx-auto">
                            <form>
                                <input type="text" placeholder='Your Name' name="" />
                                <input type="email" name="" placeholder='Your Email' />
                                <input type="password" placeholder='password' name="" />
                                <textarea placeholder='Message' name="" id="" cols="20" rows="5"></textarea>
                                <input className='btn btn-success' type="submit" value="Submit" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default ContactUs;