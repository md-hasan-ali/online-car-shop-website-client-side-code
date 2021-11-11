// add necessary file 
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './contexts/AuthProvider';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import Ragistration from './Pages/Login/Registration/Ragistration';
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder/PlaceOrder';



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

            <Route path='/login'>
              <Login></Login>
            </Route>

            <Route path='/register'>
              <Ragistration></Ragistration>
            </Route>

            <Route path='/placeOrder/:id'>
              <PlaceOrder></PlaceOrder>
            </Route>

          </Switch>
        </Router>
      </AuthProvider>

    </div>
  );
}

export default App;
