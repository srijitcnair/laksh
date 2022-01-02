import React from 'react';
import { BrowserRouter as Router ,  Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './App.css';

import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SellPage from './pages/sell/sell.component'

class App extends React.Component {
  render() {
    return (
      <div >

        <Header />
        <Switch>
          <Route exact path='/' component={ShopPage} />
          <Route exact path='/shop' component={ShopPage} />
          <Route exact path='/sell' component={SellPage} />
        </Switch>

      </div>
    );
  }
}

export default connect()(App);
