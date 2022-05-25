import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';
import Home from './Home';
import Member from './Member';
import Product from './Product';
import { Routes } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
	  <Switch>
          <Route path="/" component={Home} exact={true}></Route>
          <Route path="/members" component={Member} exact={true}></Route>
          <Route path="/products" component={Product} exact={true}></Route>
		  </Switch>
      </BrowserRouter>
    );
  }

}

export default App;
