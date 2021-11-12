// add necessary file
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './navigation.css'

// navigation component 
const Navigation = () => {
    const { user, logout } = useAuth();
    const history = useHistory();
    const handleLogout = () => {
        logout(history)
    }
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">OnLine Car Shop</Navbar.Brand>
                    <Nav className="ms-auto">
                        <Nav.Link as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link as={Link} to="/explore">Explore</Nav.Link>

                        {user.displayName ?
                            <div>
                                <Link to='/dashboard'>
                                    <button className='btn btn-success me-2'>Dashboard</button>
                                </Link>
                                <button onClick={handleLogout} className='btn btn-danger'>Logout</button>

                            </div>


                            : <Nav.Link className='btn btn-danger' as={Link} to="/login">Login</Nav.Link>
                        }
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
};

export default Navigation;