import React, { Component } from "react";

export default class Modal extends Component {
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
                                <td>{product.soLuong}</td>
                                <td>{product.donGia}</td>
                                <td>{product.soLuong*product.donGia}</td>
                            </tr>
                          );
                      })}
                  </table>
              </div>
            </div>
          </div>
        </div>
    );
  }
}
