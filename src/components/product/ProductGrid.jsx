import React, { Component, useState } from 'react';
import mockData from '../../mock-data.json';
import Product from './Product';
import axios from 'axios';


export default class ProductGrid extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: []
    };
    this.getDataFromAPI = this.getDataFromAPI.bind(this);
  }
  getDataFromAPI() {
    axios
      .get('https://mapi.sendo.vn/mob/product/cat/usb/?p=1')
      .then((response) => {
        this.setState(state => {
          response.data.data.map(ele => state.list.push(ele))

        });
      })
      .then(console.log("data from API",this.state.data))
      .catch((error) => console.log('axios error', error));
  }

  render() {
    return (
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
              {mockData.data.map((ele) => (
                <Product key={ele.id} {...ele} />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
