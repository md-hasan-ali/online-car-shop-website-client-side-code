// add necessary file 
import React from 'react';
import { Link } from 'react-router-dom';
import './service.css'

// Service componet 
const Service = (props) => {
    const { img, desc, price, name, _id } = props.service;
    return (
        <div className="col">
            <div className="card h-100 single-card">
                <img height='250px' src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title"><strong>Name : </strong>{name}</h5>
                    <p className="card-text"><strong>Description : </strong>{desc}</p>
                    <p className="card-text"><strong>Price : </strong>{price}</p>
                </div>
                <div>
                    <Link to={`placeOrder/${_id}`}>
                        <button className='btn btn-success m-2'>Purchase Now <i className="fas fa-angle-double-right"></i></button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Service;