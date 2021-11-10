import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import Navigation from '../../Sheard/Navigation/Navigation';

const PlaceOrder = () => {
    const { id } = useParams();
    const [placeOrder, setPlaceOrder] = useState({});
    const { img, desc, name, price } = placeOrder;

    useEffect(() => {
        fetch(`http://localhost:5000/products/${id}`)
            .then(res => res.json())
            .then(data => setPlaceOrder(data))
    }, [])

    return (
        <div>
            <Navigation></Navigation>
            <Container className='py-5'>
                <div className="section-title">
                    <h2 className='mb-5'>Place Order</h2>
                </div>
                <Row>
                    <Col xs={12} md={6}>
                        <Card>
                            <Card.Img variant="top" src={img} />
                            <Card.Body>
                                <Card.Title>{name}</Card.Title>
                                <Card.Text>
                                    {desc}
                                </Card.Text>
                                <Card.Text>
                                    {price}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} md={6}>

                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default PlaceOrder;