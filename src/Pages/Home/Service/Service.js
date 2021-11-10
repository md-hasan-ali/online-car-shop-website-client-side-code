// add necessary file 
import React from 'react';

// Service componet 
const Service = (props) => {
    const { img, desc, price, name } = props.service;
    console.log(props.service)
    return (
        <div class="col">
            <div class="card h-100">
                <img height='250px' src={img} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">{name}</h5>
                    <p class="card-text">{desc}</p>
                    <p class="card-text">{price}</p>
                </div>
                <div>
                    <button className='btn btn-danger mb-2'>Purchase Now</button>
                </div>
            </div>
        </div>
    );
};

export default Service;