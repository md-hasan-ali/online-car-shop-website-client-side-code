// Import Necessary file
import React from 'react';
import { Link } from 'react-router-dom';
import aboutImg from '../../../images/about.svg'

// About Content Component
const AboutContent = () => {
    return (
        <div className='about-area pb-5' style={{ backgroundColor: '#000000', opacity: '.7', color: '#fff' }}>
            <div className="container">
                <div className="section-title my-5 pt-5 text-center">
                    <h2>About us</h2>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="about-content">
                            <h3>About Me!!!</h3>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo optio veniam, explicabo labore suscipit animi inventore dolorum nesciunt? Voluptatum laudantium odio sed similique cupiditate iusto possimus nulla nam error itaque, consequuntur facilis odit eveniet voluptatem?</p>
                            <Link to='/contact'>
                                <button className='btn btn-success'>Contact Us</button>
                            </Link>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="about-img">
                            <img src={aboutImg} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutContent;