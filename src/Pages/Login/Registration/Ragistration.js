import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const [loginData, setLoginData] = useState({})
    const { registerUser } = useAuth()

    const handleOnBlur = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData }
        newLoginData[field] = value;
        setLoginData(newLoginData)
    }
    const handleSubmit = (e) => {
        if (loginData.password !== loginData.confirm_password) {
            alert('Your Password did not match');
            return;
        }
        registerUser(loginData.email, loginData.password, loginData.name);

        e.preventDefault()
    }
    return (
        <Container className='py-5'>
            <h2 className='text-center pb-5'>Please Register</h2>
            <Row>
                <Col xs={12} md={6}>
                    <form onSubmit={handleSubmit}>
                        <input
                            type='text'
                            required
                            name='name'
                            onBlur={handleOnBlur}
                            placeholder='Your Name'
                        />
                        <input
                            type='email'
                            name='email'
                            onBlur={handleOnBlur}
                            placeholder='Your Email'
                            required
                        />
                        <input
                            type='password'
                            name='password'
                            onBlur={handleOnBlur}
                            placeholder='Your Passowrd'
                            required
                        />
                        <input
                            type='password'
                            name='confirm_password'
                            onBlur={handleOnBlur}
                            placeholder='Confirm Password'
                            required
                        />
                        <input className='btn btn-success' type='submit' value='Register' />
                        <Link to='/login'>
                            <button className='border-0 text-danger'>Already Registerd ? Please Login</button>
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