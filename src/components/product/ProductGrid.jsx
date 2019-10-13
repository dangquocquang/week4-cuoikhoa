import React, { Component } from 'react';
import mockData from '../../mock-data.json';
import Product from './Product';

export default class ProductGrid extends Component {
  render() {
    return (
      <div className="col-xl-9 col-lg-8">
        <div className="row mb-10">
          <div className="col-xl-5 col-lg-6 col-md-6">
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
              {mockData.data.map((product) => (
                <Product key={product.id} {...product} />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
