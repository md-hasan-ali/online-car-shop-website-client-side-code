import React from 'react';
import Navigation from '../../Sheard/Navigation/Navigation';
import MyOrders from '../MyOrders/MyOrders';
import Review from '../Review/Review';
import './dashboard.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch
} from "react-router-dom";
import Pay from '../Payment/Pay';
import ManageAllProduct from '../ManageAllProduct/ManageAllProduct';
import AddNewProduct from '../AddNewProduct/AddNewProduct';
import MakeAdmin from '../MakeAdmin/MakeAdmin';

const Dashboard = () => {
    let { path, url } = useRouteMatch();
    return (
        <div>
            <Navigation></Navigation>
            {/* <MyOrders></MyOrders>
            <Review></Review> */}

            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-3 ms-0 ps-0">
                        <div className="dashboard">
                            <h2 className='text-center pt-3 text-info'>Dashboard</h2>
                            <ul>
                                <li>
                                    <Link to={`${url}/myOrders`}>My Orders</Link>
                                </li>
                                <li>
                                    <Link to={`${url}/review`}>Review</Link>
                                </li>
                                <li>
                                    <Link to={`${url}/pay`}>Pay</Link>
                                </li>
                                <li>
                                    <Link to={`${url}/manageAllProducts`}>Manage All Products</Link>
                                </li>
                                <li>
                                    <Link to={`${url}/addProduct`}>Add a Product</Link>
                                </li>
                                <li>
                                    <Link to={`${url}/makeAdmin`}>Make Admin</Link>
                                </li>

                            </ul>
                        </div>
                    </div>
                    <div className="col-md-9">
                        <div className="dashboard-content">
                            <Switch>
                                <Route exact path={path}>
                                    <MyOrders></MyOrders>
                                </Route>

                                <Route path={`${path}/myOrders`}>
                                    <MyOrders></MyOrders>
                                </Route>

                                <Route path={`${path}/review`}>
                                    <Review></Review>
                                </Route>

                                <Route path={`${path}/pay`}>
                                    <Pay></Pay>
                                </Route>

                                <Route path={`${path}/manageAllProducts`}>
                                    <ManageAllProduct></ManageAllProduct>
                                </Route>

                                <Route path={`${path}/addProduct`}>
                                    <AddNewProduct></AddNewProduct>
                                </Route>

                                <Route path={`${path}/makeAdmin`}>
                                    <MakeAdmin></MakeAdmin>
                                </Route>

                            </Switch>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Dashboard;