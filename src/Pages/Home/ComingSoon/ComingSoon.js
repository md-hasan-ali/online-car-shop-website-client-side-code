import React from 'react';
import img from '../../../images/banner.jpg'

const newProducts = [
    {
        img: img,
        name: 'Toyota Prius',
        price: '$2000',
    },
    {
        img: img,
        name: 'Toyota Prius specs',
        price: '$2500',
    },
    {
        img: img,
        name: '2020 Ford Mustang',
        price: '$2800',
    },
    {
        img: img,
        name: 'Audi Q7 2018',
        price: '$5000',
    },
    {
        img: img,
        name: 'Audi 2021',
        price: '$2900',
    },
    {
        img: img,
        name: 'BMW 35',
        price: '$22000',
    },
]

const ComingSoon = () => {
    return (
        <div className='comming-soon-product py-5'>
            <div className="container">
                <div className="section-title pb-5 text-center">
                    <h2>Our Comming Soon Products</h2>
                    <p>If You want to buy our lettest Model Car, Then Your are Welcome!!!</p>
                </div>
                <div className="row">
                    {
                        newProducts.map(product =>
                            <div key={product.name} className="col-md-4">
                                <img width='100%' src={product?.img} alt="" />
                                <p><strong>Name : </strong> {product?.name}</p>
                                <p><strong>Price : </strong> {product?.price}</p>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default ComingSoon;