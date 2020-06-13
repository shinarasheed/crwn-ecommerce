import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.scss';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/signin-and-signup/signin-and-signup.component';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/shop' component={ShopPage} />
          <Route exact path='/signin' component={SignInAndSignUpPage} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
