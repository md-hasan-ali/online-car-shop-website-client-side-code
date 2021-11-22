// add necessary file
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './navigation.css'

// navigation component 
const Navigation = () => {
    const { user, logout, image } = useAuth();
    const history = useHistory();
    const handleLogout = () => {
        logout(history)
    }
    return (
        <>
            <Navbar collapseOnSelect expand="lg" fixed="top" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/home">OnLine Car ShoP</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav className="ms-auto">
                            <Nav.Link as={Link} to="/home">Home</Nav.Link>
                            <Nav.Link as={Link} to="/about">About Us</Nav.Link>
                            <Nav.Link as={Link} to="/explore">Explore</Nav.Link>
                            <Nav.Link as={Link} to="/contact">Contact Us</Nav.Link>

                            {user.displayName ?
                                <div>
                                    <Link to='/dashboard'>
                                        <button className='btn btn-success me-2'>Dashboard</button>
                                    </Link>
                                    <button onClick={handleLogout} className='btn btn-danger'> <i class="fas fa-sign-out-alt"></i> Logout</button>
                                    <img src={image} alt="" />
                                </div>


                                : <Nav.Link className='btn btn-danger' as={Link} to="/login"><i class="fas fa-sign-in-alt"></i> Login</Nav.Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Navigation;