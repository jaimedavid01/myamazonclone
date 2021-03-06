import './App.css';
import React, { useEffect } from "react";
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from './Checkout';
import Login from './Login';
import Payment from './Payment';
import Orders from './Orders';
import Footer from './Footer';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe('pk_test_51IeTRXFRyPSfQtPzdMzN2vAYLYKnn9tZsSxVKd9PbjRfhyACVNFDxNFHaDpmEp97dawGL8lcBqcKtNbBPMh7c95L0015o4s7XR');


function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
   auth.onAuthStateChanged(authUser => {
     console.log('THE USER IS >>> ', authUser);

     if (authUser) {
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
     } else {
        dispatch({
          type: 'SET_USER',
          user: null
        })
     }
   })
  }, [])

  return (
    <Router>
    <div className="app">
     
      <Switch>

      <Route path="/orders">
      <Header />
      <Orders />
      </Route>
    
      <Route path="/login">
      <Login />
      </Route>

      <Route path="/checkout">
      <Header />
      <Checkout />
      <Footer/>
      </Route>

      <Route path="/payment">
      <Header />
      <Elements stripe={promise}>
      <Payment />
      </Elements>
      <Footer/>
      </Route>
      

      <Route path="/">
      <Header />
      <Home />
      <Footer/>
      </Route>


      </Switch>
    </div>
    </Router>
  );
}

export default App;
