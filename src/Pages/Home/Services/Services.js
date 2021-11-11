// add necessary file
import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

// Services component 
const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    console.log(services)

    return (
        <div className='services-area py-5'>
            <div className="container">
                <div className="section-title mb-5 text-center">
                    <h2>Our Products</h2>
                </div>
                <div class="row row-cols-1 row-cols-md-3 g-4">
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