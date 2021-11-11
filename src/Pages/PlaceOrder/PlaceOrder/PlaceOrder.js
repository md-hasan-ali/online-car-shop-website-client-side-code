import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import Footer from '../../Sheard/Footer/Footer';
import Navigation from '../../Sheard/Navigation/Navigation';
import { useForm } from "react-hook-form";
import useAuth from '../../../hooks/useAuth';

const PlaceOrder = () => {
    const { id } = useParams();
    const { user } = useAuth()
    // const [loginData, setLoginData] = useState({});
    const [placeOrder, setPlaceOrder] = useState({});
    const { img, desc, name, price } = placeOrder;

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        defaultValues: placeOrder,
    });


    useEffect(() => {
        fetch(`http://localhost:5000/products/${id}`)
            .then(res => res.json())
            .then(data => {
                setPlaceOrder(data)
                reset(data)
            })
    }, [])
    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <div>
            <Navigation></Navigation>
            <Container className='py-5'>
                <div className="section-title">
                    <h2 className='mb-5 text-center'>Place Order</h2>
                </div>
                <Row>
                    <Col xs={12} md={6}>
                        <Card>
                            <Card.Img variant="top" src={img} />
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
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input defaultValue={user?.displayName} {...register("name")} required />
                            <input defaultValue={user?.email} {...register("email")} required />
                            <input defaultValue={placeOrder?.name} {...register("productName")} required />
                            <input defaultValue="phone Number" {...register("Phone")} />
                            <textarea defaultValue="Description" {...register("description")} />

                            <input className='btn btn-danger' type="submit" value="Order Confirm" />
                        </form>

                    </Col>
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default PlaceOrder;