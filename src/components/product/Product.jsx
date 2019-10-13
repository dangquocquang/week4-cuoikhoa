import React, { Component } from 'react';

import store from '../../store';
import { addToCart } from '../../actions/cart-actions';

export default class Product extends Component {
  handleCartClick = () => {
    console.log('add to cart');
    store.dispatch(addToCart(this.props));
  };

  render() {
    const { name, image, image2, category, discountPrice, price } = this.props;

    return (
      <div className="col-xl-4 col-lg-6 col-md-6">
        <div className="product-wrapper mb-50">
          <div className="product-img mb-25">
            <a href="#">
              <img src={image} alt={name} />
              <img className="secondary-img" src={image2} alt={name} />
            </a>
            <div className="product-action text-center">
              <a title="Shoppingb Cart" onClick={this.handleCartClick}>
                <i className="fas fa-shopping-cart" />
              </a>
              <a href="#" title="Quick View">
                <i className="fas fa-search" />
              </a>
            </div>
          </div>
          <div className="product-content pr-0">
            <div className="pro-cat mb-10">
              <a href="#">{category}</a>
            </div>
            <h4>
              <a href="#">{name}</a>
            </h4>
            <div className="product-meta">
              <div className="pro-price">
                <span>${discountPrice} USD</span>
                <span className="old-price">${price} USD</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
