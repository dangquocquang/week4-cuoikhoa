import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import axios from 'axios';

import Header from './components/header/Header';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';

import './App.css';
import Footer from './components/Footer/Footer';
import Login from './components/Login/login';
import Register from './components/Register/register';
import ProductDetail from './components/product/productDetails';

class App extends Component {
  state = {
    ketqua: {},
  };

  render() {
    const findProduct = (idSanPham) => {
      axios
        .get('https://mapi.sendo.vn/mob/product/cat/usb/?p=1')
        .then((response) => {
          const ketquaTimKiem = response.data.data.find(
            (ele) => ele.id === parseInt(idSanPham, 10)
          );
          // console.log('ket qua sp tu productDetail', ketquaTimKiem);
          this.setState({ ketqua: ketquaTimKiem });
        })
        .catch((error) => console.log('axios error', error));
    };
    return (
      <>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/about" component={AboutPage} />
            <Route path="/products/:id" component={ProductsPage} />
            <Route
              path="/products"
              render={(propsOfRouter) => <ProductsPage {...propsOfRouter} />}
            />
            <Route path="/contact" component={ContactPage} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route
              path="/product-detail/:id"
              render={(propsOfRouter) => (
                <ProductDetail {...propsOfRouter} timsanpham={findProduct} {...this.state.ketqua} />
              )}
            />
          </Switch>
          <Footer />
        </Router>
      </>
    );
  }
}

export default App;
