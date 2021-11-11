// add necessary file 
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './contexts/AuthProvider';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import Explore from './Pages/Explore/Explore/Explore';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import Ragistration from './Pages/Login/Registration/Ragistration';
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder/PlaceOrder';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';



// app component 
function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Switch>

            <Route exact path='/'>
              <Home></Home>
            </Route>

            <Route path='/home'>
              <Home></Home>
            </Route>

            <Route path='/explore'>
              <Explore></Explore>
            </Route>

            <Route path='/dashboard'>
              <Dashboard></Dashboard>
            </Route>

            <Route path='/login'>
              <Login></Login>
            </Route>

            <Route path='/register'>
              <Ragistration></Ragistration>
            </Route>

            <PrivateRoute path='/placeOrder/:id'>
              <PlaceOrder></PlaceOrder>
            </PrivateRoute>

          </Switch>
        </Router>
      </AuthProvider>

    </div>
  );
}

export default App;
