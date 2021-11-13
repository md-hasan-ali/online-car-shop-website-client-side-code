// Import Necessary file 
import React from 'react';
import img from '../../../images/banner.jpg'
import img2 from '../../../images/lattest2.jpg'
import img3 from '../../../images/lattest6.jpg'
import './comming-soon.css'

// Comming Soon Product Object 
const newProducts = [
    {
        img: 'https://i.ibb.co/mtBfPCv/l5.jpg',
        name: 'Toyota Prius',
        price: '$2000',
    },
    {
        img: 'https://i.ibb.co/NysMLry/l7.jpg',
        name: 'Toyota Prius specs',
        price: '$2500',
    },
    {
        img: 'https://i.ibb.co/XXsZ5kd/l8.jpg',
        name: '2020 Ford Mustang',
        price: '$2800',
    },
    {
        img: img,
        name: 'Audi Q7 2018',
        price: '$5000',
    },
    {
        img: img2,
        name: 'Audi 2021',
        price: '$2900',
    },
    {
        img: img3,
        name: 'BMW 35',
        price: '$22000',
    },
]

// Comming Soon Component 
const ComingSoon = () => {
    return (
        <div className='comming-soon-product py-5'>
            <div className="container">
                <div className="section-title pb-5 text-center">
                    <h2 className='text-success'>Our Comming Soon Products</h2>
                    <p>If You want to buy our lettest Model Car, Then Your are Welcome!!!</p>
                </div>
                <div className="row">
                    {
                        newProducts.map(product =>
                            <div key={product.name} className="col-md-4">
                                <div className="single-service1">
                                    <img width='100%' src={product?.img} alt="" />
                                    <p><strong>Name : </strong> {product?.name}</p>
                                    <p><strong>Price : </strong> {product?.price}</p>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default ComingSoon;