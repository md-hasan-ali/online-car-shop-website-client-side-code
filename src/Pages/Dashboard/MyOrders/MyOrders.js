import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';

const MyOrders = () => {
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/orders')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])
    console.log(orders)
    return (
        <div>
            <h2 className='text-center py-4 text-danger'>My Orders</h2>
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
                    orders.map((order, index) =>
                        <tbody key={order._id}>
                            <tr>
                                <td>{index}</td>
                                <td>{order.productName}</td>
                                <td>{order.email}</td>
                                <td>{order.status}</td>
                                <td>
                                    <button className='btn btn-success me-2'>Update</button>
                                    <button className='btn btn-danger'>Delete</button>
                                </td>

                            </tr>
                        </tbody>
                    )
                }
            </Table>
        </div>
    );
};

export default MyOrders;