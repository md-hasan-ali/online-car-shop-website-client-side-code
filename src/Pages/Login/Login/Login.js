import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const [loginData, setLoginData] = useState({})
    const { loginUser } = useAuth();

    const location = useLocation()
    const history = useHistory();

    const handleOnchange = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData }
        newLoginData[field] = value;
        setLoginData(newLoginData)
    }
    const handleSubmit = (e) => {
        loginUser(loginData.email, loginData.password, location, history)
        e.preventDefault()
    }
    return (
        <Container className='py-5'>
            <h2 className='text-center pb-5'>Please Login</h2>
            <Row>
                <Col xs={12} md={6}>
                    <form onSubmit={handleSubmit}>
                        <input
                            type='email'
                            name='email'
                            onChange={handleOnchange}
                            placeholder='Your Email'
                        />
                        <input
                            type='password'
                            name='password'
                            onChange={handleOnchange}
                            placeholder='Your Passowrd'
                        />
                        <input className='btn btn-danger' type='submit' value='Login' />
                        <Link to='/register'>
                            <button className='border-0 text-danger'>New User ? Please Register</button>
                        </Link>
                    </form>
                </Col>
                <Col xs={12} md={6}>

                </Col>

            </Row>
        </Container>
    );
};

export default Login;