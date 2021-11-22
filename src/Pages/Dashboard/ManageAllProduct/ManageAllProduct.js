import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';

const ManageAllProduct = () => {
    const [manageOrders, setManageOrders] = useState([]);
    const [deletedCount, setDeletedCount] = useState(null)

    useEffect(() => {
        fetch('https://afternoon-oasis-56615.herokuapp.com/manageOrders')
            .then(res => res.json())
            .then(data => setManageOrders(data))
    }, [deletedCount])

    // delete single order
    const handleDelete = (id) => {
        const proceed = window.confirm('Are You sure,You want to delete?');
        if (proceed) {
            fetch(`https://afternoon-oasis-56615.herokuapp.com/singleOrder/${id}`, {
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
    // update status 
    const handleUpdate = (id) => {
        console.log(id)
        fetch(`https://afternoon-oasis-56615.herokuapp.com/updateStatus/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    alert('Product is Approved')
                }
            })
    }

    return (
        <div>
            <h2 className='text-success py-3 text-center'>Manage All Orders</h2>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Products Name</th>
                        <th>Email</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                {
                    manageOrders.map((order, index) =>
                        <tbody key={order._id}>
                            <tr>
                                <td>{index}</td>
                                <td>{order.productName}</td>
                                <td>{order.email}</td>
                                <td>
                                    <button className='btn btn-success'>{order.status}</button>
                                </td>
                                <td>
                                    <button onClick={() => handleUpdate(order._id)} className='btn btn-info me-2'>Update <i className="fas fa-edit"></i></button>
                                    <button onClick={() => handleDelete(order._id)} className='btn btn-danger'> Delete <i className="fas fa-trash-alt"></i></button>
                                </td>

                            </tr>
                        </tbody>
                    )
                }
            </Table>
        </div>
    );
};

export default ManageAllProduct;