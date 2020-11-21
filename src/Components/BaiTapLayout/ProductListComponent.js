import React, { Component } from "react";
import ProductComponent from "./ProductComponent";

export default class ProductListComponent extends Component {
  render() {
    return (
      <div className="container-fluid">
        <h3 className="text-center py-2">BEST SMART PHONE</h3>
        <div className="row">
          <div className="col-3">
            <ProductComponent />
          </div>
          <div className="col-3">
            <ProductComponent />
          </div>
          <div className="col-3">
            <ProductComponent />
          </div>
          <div className="col-3">
            <ProductComponent />
          </div>
        </div>
      </div>
    );
  }
}
