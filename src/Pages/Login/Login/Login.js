// Import Necessary file 
import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import Footer from '../../Sheard/Footer/Footer';
import Navigation from '../../Sheard/Navigation/Navigation';
import loginImg from '../../../images/lattest2.jpg'
import './login.css'

// Login Component 
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
        <>
            <Navigation></Navigation>
            <div className='login-area'>
                <Container className='py-5'>
                    <h2 className='text-center pb-5 text-white'>Please Login</h2>
                    <Row style={{ alignItems: 'center' }}>
                        <Col xs={12} md={5}>
                            <div className="login-form">
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
                                    <input className='btn btn-success' type='submit' value='Login' />
                                    <Link to='/register'>
                                        <button className='border-0 text-danger mb-3'>New User ? Please Register</button>
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