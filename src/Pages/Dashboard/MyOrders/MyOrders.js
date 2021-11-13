import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';

const MyOrders = () => {
    const { user } = useAuth();
    const [orders, setOrders] = useState([]);
    const [deletedCount, setDeletedCount] = useState(null)
    useEffect(() => {
        fetch(`https://afternoon-oasis-56615.herokuapp.com/orders?email=${user.email}`)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [deletedCount, user.email])

    // Delete Single Orders
    const handleDelete = (id) => {
        console.log(id)
        fetch(`https://afternoon-oasis-56615.herokuapp.com/orders?email=${user.email}&id=${id}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/josn'
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
                        <tbody key={order?._id}>
                            <tr>
                                <td>{index}</td>
                                <td>{order?.productName}</td>
                                <td>{order?.email}</td>
                                <td>
                                    <button className='btn btn-success'>{order?.status}</button>
                                </td>
                                <td>
                                    <button onClick={() => handleDelete(order?._id)} className='btn btn-danger'>Delete</button>
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