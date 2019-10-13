import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from './components/header/Header';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';

import './App.css';

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <main>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/about" component={AboutPage} />
            <Route path="/products/:id" component={ProductsPage} />
            <Route path="/products" component={ProductsPage} />
            <Route path="/contact" component={ContactPage} />
          </Switch>
        </main>
      </>
    );
  }
}

export default App;
