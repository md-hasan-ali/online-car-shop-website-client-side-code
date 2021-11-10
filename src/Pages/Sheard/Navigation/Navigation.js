// add necessary file
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

// navigation component 
const Navigation = () => {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">OnLine Car Shop</Navbar.Brand>
                    <Nav className="ms-auto">
                        <Nav.Link href="#Myorders">My Orders</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
};

export default Navigation;