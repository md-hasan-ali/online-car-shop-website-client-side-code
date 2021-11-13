// Import Necessary file 
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

// All Product Componet to show explorer page
const AllProducts = () => {
    const [allProducts, setAllProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setAllProducts(data))
    }, [])
    console.log(allProducts)
    return (
        <div className='container py-5'>
            <h2 className='pb-5 text-center'>Our All Products</h2>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {
                    allProducts.map(product =>
                        <div key={product._id} className="col">
                            <div className="card h-100">
                                <img height='250px' src={product.img} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{product.name}</h5>
                                    <p className="card-text">{product.desc}</p>
                                    <p className="card-text">{product.price}</p>
                                </div>
                                <div>
                                    <Link to={`placeOrder/${product._id}`}>
                                        <button className='btn btn-success m-2'>Purchase Now <i className="fas fa-angle-double-right"></i></button>
                                    </Link>
                                </div>
                            </div>
                        </div>)
                }
            </div>
        </div>
    );
};

export default AllProducts;