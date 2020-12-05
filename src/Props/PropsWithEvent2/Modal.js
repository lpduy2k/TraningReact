import React, { Component } from "react";

export default class Modal extends Component {

  tinhTongTien = () => {
    let tongTien = this.props.cart.reduce((tt,spGH,index) => {
      return tt += spGH.soLuong * spGH.donGia;
    },0)
    return tongTien.toLocaleString();
  }
  
  render() {
    return (
        <div
          className="modal fade"
          id="modelId"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="modelTitleId"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Giỏ hàng</h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                  <table className="table">
                      <tr>
                          <td>Mã SP</td>
                          <td>Hình ảnh</td>
                          <td>Tên SP</td>
                          <td>Số lượng</td>
                          <td>Đơn giá</td>
                          <td>Thành tiền</td>
                      </tr>
                      {this.props.cart.map((product, index) => {
                          return (
                            <tr key={index}>
                                <td>{product.maSP}</td>
                                <td>
                                    <img src={product.hinhAnh} width="50" height="50"></img>
                                </td>
                                <td>{product.tenSP}</td>
                                <td>
                                <button className="btn btn-primary" onClick={() =>{this.props.tangGiamSoLuong(product.maSP,1)}}>+</button>
                                  {product.soLuong}
                                <button className="btn btn-primary" onClick={() =>{this.props.tangGiamSoLuong(product.maSP,-1)}}>-</button>
                                </td>
                                <td>{product.donGia.toLocaleString()}</td>
                                <td>{product.soLuong*product.donGia}</td>
                                <td><button className="btn btn-danger" onClick={() =>{this.props.deleteItem(product.maSP)}}>Xoa</button></td>
                            </tr>
                          );
                      })}
                      <tr>
                        <td colSpan="5"></td>
                        <td>Tong tien</td>
                        <td>{this.tinhTongTien()}</td>
                      </tr>
                  </table>
              </div>
            </div>
          </div>
        </div>
    );
  }
}
