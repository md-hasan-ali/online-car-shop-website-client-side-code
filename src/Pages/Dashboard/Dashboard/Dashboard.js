// import necessary file 
import React from 'react';
import MyOrders from '../MyOrders/MyOrders';
import Review from '../Review/Review';
import './dashboard.css'
import {
    Switch,
    Route,
    Link,
    useHistory,
    useRouteMatch
} from "react-router-dom";
import Pay from '../Payment/Pay';
import ManageAllProduct from '../ManageAllProduct/ManageAllProduct';
import AddNewProduct from '../AddNewProduct/AddNewProduct';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import useAuth from '../../../hooks/useAuth';
import ManageProduct from '../../ManageProduct/ManageProduct';

// Dashboard Component
const Dashboard = () => {
    let { path, url } = useRouteMatch();
    const history = useHistory()
    const { logout, admin } = useAuth()

    const handleLogout = () => {
        logout(history)
    }
    return (
        <React.Fragment>
            <div className='dashboard-header'>
                <h2>Dashboard</h2>
                <Link to='/home'>
                    <button className='btn btn-danger'>Back To Home</button>
                </Link>
            </div>

            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-3 m-0 p-0">
                        <div className="dashboard">
                            <h2 className='text-center pt-3 text-info'>Dashboard</h2>
                            <ul>
                                {!admin ?
                                    <div>
                                        <li>
                                            <Link to={`${url}/myOrders`}>My Orders</Link>
                                        </li>
                                        <li>
                                            <Link to={`${url}/reviews`}>Review</Link>
                                        </li>
                                        <li>
                                            <Link to={`${url}/pay`}>Pay</Link>
                                        </li>
                                    </div>
                                    :
                                    <div>
                                        <li>
                                            <Link to={`${url}/manageAllOrder`}>Manage All Orders</Link>
                                        </li>
                                        <li>
                                            <Link to={`${url}/manageProduct`}>Manage Products</Link>
                                        </li>
                                        <li>
                                            <Link to={`${url}/addProduct`}>Add a Product</Link>
                                        </li>
                                        <li>
                                            <Link to={`${url}/makeAdmin`}>Make Admin</Link>
                                        </li>
                                    </div>

                                }
                                <button onClick={handleLogout} className='btn btn-danger mt-4'>Logout</button>
                            </ul>

                        </div>
                    </div>
                    <div className="col-md-9">
                        <div className="dashboard-content">
                            <Switch>

                                {!admin ? <div>
                                    <Route exact path={path}>
                                        <MyOrders></MyOrders>
                                    </Route>

                                    <Route path={`${path}/myOrders`}>
                                        <MyOrders></MyOrders>
                                    </Route>

                                    <Route path={`${path}/reviews`}>
                                        <Review></Review>
                                    </Route>

                                    <Route path={`${path}/pay`}>
                                        <Pay></Pay>
                                    </Route>
                                </div>
                                    :
                                    <div>
                                        <Route exact path={path}>
                                            <ManageAllProduct></ManageAllProduct>
                                        </Route>

                                        <Route path={`${path}/manageAllOrder`}>
                                            <ManageAllProduct></ManageAllProduct>
                                        </Route>

                                        <Route path={`${path}/addProduct`}>
                                            <AddNewProduct></AddNewProduct>
                                        </Route>

                                        <Route path={`${path}/makeAdmin`}>
                                            <MakeAdmin></MakeAdmin>
                                        </Route>
                                        <Route path={`${path}/manageProduct`}>
                                            <ManageProduct></ManageProduct>
                                        </Route>
                                    </div>
                                }
                            </Switch>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Dashboard;