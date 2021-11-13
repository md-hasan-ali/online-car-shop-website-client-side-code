// add necessary file 
import React from 'react';
import { useState, useEffect } from 'react';
import { Spinner } from 'react-bootstrap';

// Manage Product component 
const ManageProduct = () => {
    const [manageProducts, setManageProducts] = useState([]);
    const [deletedCount, setDeletedCount] = useState(null)

    useEffect(() => {
        fetch('https://afternoon-oasis-56615.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setManageProducts(data))
    }, [deletedCount])
    // delete a single product 
    const handleDelete = (id) => {
        const proceed = window.confirm('Are You sure,You want to delete?');
        if (proceed) {
            fetch(`https://afternoon-oasis-56615.herokuapp.com/manage/${id}`, {
                method: 'DELETE',
                headers: {
                    'content-type': 'application/json'
                }
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        setDeletedCount(true)
                    } else {
                        setDeletedCount(false)
                    }
                })
        }
    }

    return (
        <div>
            <h2 className='py-4 text-center text-success'>Manage Products</h2>
            <div className="manage-products mb-5">
                <div className="container">
                    {manageProducts.length === 0 ?
                        <div className='text-center mt-5'>
                            <Spinner animation="border" variant="danger" />
                        </div>
                        : <div className="row row row-cols-1 row-cols-md-3 g-4">
                            {
                                manageProducts.map(product =>
                                    <div key={product._id} className="col">
                                        <div className="card h-100 single-card">
                                            <img height='250px' src={product.img} className="card-img-top" alt="..." />
                                            <div className="card-body">
                                                <h5 className="card-title">{product.name}</h5>
                                                <p className="card-text">{product.price}</p>
                                            </div>
                                            <div>
                                                <button onClick={() => handleDelete(product._id)} className='btn btn-danger m-2'>Delete</button>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                        </div>}
                </div>
            </div>
        </div>
    );
};

export default ManageProduct;