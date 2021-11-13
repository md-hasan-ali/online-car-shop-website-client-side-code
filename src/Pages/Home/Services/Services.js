// add necessary file
import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './services.css'

// Services component 
const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://afternoon-oasis-56615.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setServices(data.slice(0, 6)))
    }, [])

    return (
        <div className='services-area py-5'>
            <div className="container">
                <div className="section-title mb-5 text-center">
                    <h2 className='text-success'>Our Products</h2>
                </div>
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {
                        services.map(service => <Service
                            key={service._id}
                            service={service}
                        ></Service>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Services;