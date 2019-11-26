import React, { Component } from 'react';
import {Link} from 'react-router-dom'

import store from '../../store';
import { addToCart } from '../../actions/cart-actions';

export default class Product extends Component {
  handleCartClick = (e) => {
    e.preventDefault();
    console.log('add to cart');
    store.dispatch(addToCart(this.props));
  };

  render() {
    const { id, name, img_url, img_url_mob, category, final_price, price, timsanpham } = this.props;

    return (
      <div className="col-xl-4 col-lg-6 col-md-6">
        <div className="product-wrapper mb-50">
          <div className="product-img mb-25">
            <a href="_blank">
              <img src={img_url} alt={name} />
              <img className="secondary-img" src={img_url_mob} alt={name} />
            </a>
            <div className="product-action text-center">
              <a href="_blank" title="Shoppingb Cart" onClick={(e)=>this.handleCartClick(e)}>

                <i className="fas fa-shopping-cart" />
              </a>
              <Link to={`/product-detail/${id}`} >
                <i className="fas fa-search" />
              </Link>
            </div>
          </div>
          <div className="product-content pr-0">
            <div className="pro-cat mb-10">
              <a href="_blank">{category}</a>
            </div>
            <h4>
              <a href="_blank">{name}</a>
            </h4>
            <div className="product-meta">
              <div className="pro-price">
                <span>{final_price.toLocaleString()} VND</span>
                <span className="old-price">{price.toLocaleString()} VND</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
