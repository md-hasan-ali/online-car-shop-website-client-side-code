// Import Necessary file 
import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router';
import Footer from '../../Sheard/Footer/Footer';
import Navigation from '../../Sheard/Navigation/Navigation';
import { useForm } from "react-hook-form";
import useAuth from '../../../hooks/useAuth';
import './placeOrder.css'

// PlaceOrder Componenet 
const PlaceOrder = () => {
    const { id } = useParams();
    const { user } = useAuth()
    const history = useHistory();
    const [placeOrder, setPlaceOrder] = useState({});
    const { img, desc, name, price } = placeOrder;

    const {
        register,
        handleSubmit,
    } = useForm({
        defaultValues: placeOrder,
    });

    useEffect(() => {
        fetch(`https://afternoon-oasis-56615.herokuapp.com/products/${id}`)
            .then(res => res.json())
            .then(data => {
                setPlaceOrder(data)
            })
    }, [])
    const onSubmit = (data) => {
        data.status = 'pending'
        fetch('https://afternoon-oasis-56615.herokuapp.com/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Order Successfully Completed')
                }
                history.push('/dashboard')
            })
    }

    return (
        <div>
            <Navigation></Navigation>
            <Container className='py-5'>
                <div className="section-title">
                    <h2 className='mb-5 text-center mt-5'>Place Order</h2>
                </div>
                <Row>
                    <Col xs={12} md={6}>
                        <Card>
                            <Card.Img style={{ height: '365px' }} variant="top" src={img} />
                            <Card.Body>
                                <Card.Title><strong>Name </strong>: {name}</Card.Title>
                                <Card.Text>
                                    <strong>Description </strong>: {desc}
                                </Card.Text>
                                <Card.Text>
                                    <strong>Price </strong>: {price}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} md={6}>
                        <div className="booking-form">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <input defaultValue={user.displayName} {...register("name")} required />
                                <input defaultValue={user.email} {...register("email")} required />
                                <input placeholder='Product Name' {...register("productName")} required />
                                <input placeholder='Phone Number' {...register("Phone")} required />
                                <textarea placeholder='Address' style={{ height: '120px' }} {...register("address")} required />

                                <button className='btn btn-success' type="submit"><i class="fas fa-shopping-cart"></i> Order Confirm</button>
                            </form>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default PlaceOrder;