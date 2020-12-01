import React, { Component } from 'react'
import productList from "../data/productList.json";
import Modal from './Modal';
import Product from './Product';

export class ProductList extends Component {
    state = {
      productDetail: productList[0],
      cart: [
        {"maSP": 1,
        "tenSP": "VinSmart Live",
        "donGia": 5700000,
        "hinhAnh": "./img/vsphone.jpg",
        "soLuong": 1},
      ]
    };
    renderProductListHandler = () => {
        return productList.map((product, index) => {
          return <Product onView={this.viewDetailHandler} onAddToCart={this.addToCart} prod={product} key={index} />
        });
      };
    viewDetailHandler = (product) => {
      this.setState({
        productDetail: product,
      });
    };
    addToCart = (product) => {
      const productUpdate = {...product, soLuong: 1};
      const index = this.state.cart.findIndex((prod) => prod.maSP === productUpdate.maSP);
      if (index !== -1) {
        const newCart = [...this.state.cart];
        newCart[index].soLuong +=1;
        this.setState({
          cart: newCart
        });
      }else {
        this.setState({
          cart: [...this.state.cart,productUpdate]
        });
      }
    }
    render() {
        const {productDetail, cart} = this.state;
        return (
          <>
          <Modal cart={cart}/>
            <div>
                <div className="row my-5">
                  {this.renderProductListHandler()}
                </div>
                <div className="row">
                  <div className="col-6 text-center">
                    <h5>{productDetail.tenSP}</h5>
                    <img src={productDetail.hinhAnh} width="300"></img>
                  </div>
                  <div className="col-6">
                    <h5>Thông số kỹ thuật</h5>
                    <table className="table">
                      <tr>
                        <th>Màn hình</th>
                        <td>{productDetail.manHinh}</td>
                      </tr>
                      <tr>
                        <th>Camera trước</th>
                        <td>{productDetail.cameraTruoc}</td>
                      </tr>
                      <tr>
                        <th>Camera sau</th>
                        <td>{productDetail.cameraSau}</td>
                      </tr>
                      <tr>
                        <th>RAM</th>
                        <td>{productDetail.ram}</td>
                      </tr>
                      <tr>
                        <th>ROM</th>
                        <td>{productDetail.rom}</td>
                      </tr>
                    </table>
                  </div>
                </div>
            </div>
          </>
        )
    }
}

export default ProductList
