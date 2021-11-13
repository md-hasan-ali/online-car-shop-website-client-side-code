// Import Necessary file 
import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import Footer from '../../Sheard/Footer/Footer';
import Navigation from '../../Sheard/Navigation/Navigation';
import loginImg from '../../../images/lattest2.jpg'
import './registraiton.css'

// Registration Component 
const Login = () => {
    const [loginData, setLoginData] = useState({})
    const { registerUser } = useAuth()
    const history = useHistory();

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
        registerUser(loginData.email, loginData.password, loginData.name, history);

        e.preventDefault()
    }
    return (
        <>
            <Navigation></Navigation>
            <div className="ragistration-area">
                <Container className='py-5'>
                    <h2 className='text-center pb-5 text-white'>Please Register</h2>
                    <Row style={{ alignItems: 'center' }}>
                        <Col xs={12} md={5}>
                            <div className="login-form">
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
                                        <button className='border-0 text-danger mb-3'>Already Registerd ? Please Login</button>
                                    </Link>
                                </form>
                            </div>
                        </Col>
                        <Col xs={12} md={7}>
                            <div className="login-img">
                                <img style={{ width: '100%' }} src={loginImg} alt="" />
                            </div>
                        </Col>

                    </Row>
                </Container>
            </div>
            <Footer></Footer>
        </>
    );
};

export default Login;