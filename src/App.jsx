import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './components/header/Header';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';

import './App.css';
import Footer from './components/Footer/Footer';
import Login from './components/Login/login';
import Register from './components/Register/register';

class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Header />
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route path="/about" component={AboutPage} />
              <Route path="/products/:id" component={ProductsPage} />
              <Route path="/products" component={ProductsPage} />
              <Route path="/contact" component={ContactPage} />
              <Route path="/login" component={Login} />
              <Route path="/register" component={Register} />
            </Switch>
        <Footer />
        </Router>
      </>
    );
  }
}

export default App;
