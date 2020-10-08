import React, {useEffect} from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {useStateValue} from './StateProvider'
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import './App.css';
import { auth } from "./firebase";

function App() {
  const [{},dispatch] = useStateValue(); 
  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      if(authUser) {
        //User just logged in / was logged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        //The user is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  },[])
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Header />
            <Home />          
          </Route>
          <Route path="/login">
            <Login />     
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
        </Switch>

      </div>    
    </Router>

  );
}

export default App;
