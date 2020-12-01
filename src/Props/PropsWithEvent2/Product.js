import React, { Component } from 'react'

export default class Product extends Component {
    render() {
        const {prod, onView, onAddToCart} = this.props;
        return (
          <div className="col-4">
            <div className="card">
              <img className="card-img-top" style={{height:350}} src={prod.hinhAnh} alt />
              <div className="card-body">
                <h4 className="card-title">{prod.tenSP}</h4>
                <p className="card-text">Text</p>
                <button className="btn btn-success" onClick={() => onView(prod)}>Xem chi tiet</button>
                <button className="btn btn-danger ml-2" onClick={() => onAddToCart(prod)}>Them gio hang</button>
              </div>
            </div>
          </div>
        )
    }
}
