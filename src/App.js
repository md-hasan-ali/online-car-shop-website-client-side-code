// add necessary file 
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home/Home';
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder/PlaceOrder';



// app component 
function App() {
  return (
    <div>
      <Router>
        <Switch>

          <Route exact path='/'>
            <Home></Home>
          </Route>

          <Route path='/home'>
            <Home></Home>
          </Route>

          <Route path='/placeOrder/:id'>
            <PlaceOrder></PlaceOrder>
          </Route>

        </Switch>
      </Router>

    </div>
  );
}

export default App;
