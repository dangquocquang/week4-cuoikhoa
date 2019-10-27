import React, { Component, useState } from 'react';
import Product from './Product';
import axios from 'axios';

export default class ProductGrid extends Component {
  state = {
    list: [],
  };

  componentDidMount = () => {
    this.getDataFromAPI();
  };

  getDataFromAPI = () => {
    axios
      .get('https://mapi.sendo.vn/mob/product/cat/usb/?p=1')
      .then((response) => {
        this.setState({ list: response.data.data });
        console.log('respone from API', response.data.data);
      })
      // .then(console.log("data from API",this.state.list.data))
      .catch((error) => console.log('axios error', error));
  };

  render() {
    const sortProduct = (e, type) => {
      e.preventDefault();
      switch (type) {
        case 'aToz':
          // eslint-disable-next-line no-case-declarations
          const aTozList = this.state.list.sort((a, b) =>
            a['name'].localeCompare(b['name'], 'vi', { sensitivity: 'base' })
          );
          this.setState({ list: aTozList });
          break;
        case 'zToa':
          // eslint-disable-next-line no-case-declarations
          const zToaList = this.state.list.sort((a, b) =>
            b['name'].localeCompare(a['name'], 'vi', { sensitivity: 'base' })
          );
          this.setState({ list: zToaList });
          break;
        case 'highTolow':
          // eslint-disable-next-line no-case-declarations
          const highToLowList = this.state.list.sort((a, b) => b.final_price - a.final_price);
          this.setState({ list: highToLowList });
          break;
        case 'lowTohigh':
          // eslint-disable-next-line no-case-declarations
            const lowToHighList = this.state.list.sort((a, b) => a.final_price - b.final_price);
            this.setState({ list: lowToHighList });
          break;
        case 'topSales':
          // eslint-disable-next-line no-case-declarations
          const salesList = this.state.list.sort((a, b) => b.promotion_percent - a.promotion_percent);
          this.setState({ list: salesList });
          break;
        default:
          console.log('type bi sai');
      }
    };
    return (
      <>
        <div className="col-xl-9 col-lg-8">
          <div className="row mb-10">
            <div className="col-xl-5 col-lg-6 col-md-6">
              <p>{this.state.data}</p>
              <button onClick={this.getDataFromAPI}>get Data from API</button>

              <div className="product-showing mb-40">
                <p>Showing 1–22 of 32 results</p>
              </div>
            </div>
          </div>
          {/* tab content */}
          <div className="tab-content" id="myTabContent">
            <div
              className="tab-pane fade show active"
              id="home"
              role="tabpanel"
              aria-labelledby="home-tab"
            >
              <div className="row">
                {this.state.list.map((ele) => (
                  <Product key={ele.id} {...ele} />
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-lg-4">
          <div className="sidebar-shop">
            <div className="shop-widget">
              <h3 className="shop-title">Search by</h3>
              <form action="#" className="shop-search">
                <input type="text" placeholder="Your keyword...." />
                <button>
                  <i className="fa fa-search" />
                </button>
              </form>
            </div>
            {/*
  <div class="shop-widget">
<h3 class="shop-title">Filter selection</h3>
<div class="price-filter">
<div id="slider-range" class="ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content"><div class="ui-slider-range ui-corner-all ui-widget-header" style="left: 15%; width: 45%;"></div><span tabindex="0" class="ui-slider-handle ui-corner-all ui-state-default" style="left: 15%;"></span><span tabindex="0" class="ui-slider-handle ui-corner-all ui-state-default" style="left: 60%;"></span></div>
<input type="text" id="amount">
</div>
  </div> */}
            <div className="shop-widget">
              <h3 className="shop-title">SHOP BY</h3>
              <ul className="shop-link">
                <li>
                  <a
                    href="_blank"
                    onClick={(e) => {
                      sortProduct(e, 'aToz');
                    }}
                  >
                    Name: A-Z
                  </a>
                </li>
                <li>
                  <a
                    href="_blank"
                    onClick={(e) => {
                      sortProduct(e, 'zToa');
                    }}
                  >
                    Name: Z-A
                  </a>
                </li>
                <li>
                  <a
                    href="_blank"
                    onClick={(e) => {
                      sortProduct(e, 'highTolow');
                    }}
                  >
                    Price: High to Low
                  </a>
                </li>
                <li>
                  <a
                    href="_blank"
                    onClick={(e) => {
                      sortProduct(e, 'lowTohigh');
                    }}
                  >
                    Price: Low to High
                  </a>
                </li>
                <li>
                  <a
                    href="_blank"
                    onClick={(e) => {
                      sortProduct(e, 'topSales');
                    }}
                  >
                    Product: Top Sales
                  </a>
                </li>
              </ul>
            </div>
            <div className="shop-widget">
              <h3 className="shop-title">Recent Product</h3>
              <ul className="shop-sidebar-product">
                <li>
                  <div className="side-pro-img">
                    <a href="#">
                      <img src="./assets/shop-rsp3.jpg" alt="" />
                    </a>
                  </div>
                  <div className="side-pro-content">
                    <div className="side-pro-rating">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                    </div>
                    <h5>
                      <a href="#">Raglan Baseball-Style</a>
                    </h5>
                    <div className="side-pro-price">
                      <span>$119.00 USD</span>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="side-pro-img">
                    <a href="#">
                      <img src="./assets/shop-rsp2.jpg" alt="" />
                    </a>
                  </div>
                  <div className="side-pro-content">
                    <div className="side-pro-rating">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                    </div>
                    <h5>
                      <a href="#">Raglan Baseball-Style</a>
                    </h5>
                    <div className="side-pro-price">
                      <span>$119.00 USD</span>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="side-pro-img">
                    <a href="#">
                      <img src="./assets/shop-rsp4.jpg" alt="" />
                    </a>
                  </div>
                  <div className="side-pro-content">
                    <div className="side-pro-rating">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                    </div>
                    <h5>
                      <a href="#">Raglan Baseball-Style</a>
                    </h5>
                    <div className="side-pro-price">
                      <span>$119.00 USD</span>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="shop-widget">
              <div className="shop-sidebar-banner">
                <a href="#">
                  <img src="./assets/shop-banner.jpg" alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
