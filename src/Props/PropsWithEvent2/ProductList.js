import React, { Component } from 'react'
import productList from "../data/productList.json";
import Modal from './Modal';
import Product from './Product';

export class ProductList extends Component {
    state = {
      productDetail: productList[0],
      cart: []
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
    // dinh nghia su kien xoa gio hang tai noi chua state gio hang
    deleteItem = (maSPClick) => {
      // tạo ra 1 giỏ hàng mới giống giá trị giỏ hàng cũ
      let gioHangCapNhat = [...this.state.cart];
      // xử lí xóa trên giỏ hàng mới
      let index = gioHangCapNhat.findIndex(spGH => spGH.maSP === maSPClick);
      if(index !== -1){
        gioHangCapNhat.splice(index, 1);
      }
      // gán lại giỏ hàng cũ bằng giỏ hàng mới
      this.setState({
        cart:gioHangCapNhat
      });
    }
    // Định nghĩa hàm thay đổi số lượng tại nơi chứa state số lượng
    tangGiamSoLuong = (maSPClick, soLuong) => {
      let gioHangCapNhat = [...this.state.cart];
      // tìm trong giỏ hàng có sản phẩm mã == vs sản phẩm được click + or -
      let spGioHang = gioHangCapNhat.find(spGH => spGH.maSP === maSPClick);
      // TÌm thấy sp trong giỏ hàng
      if(spGioHang && spGioHang.soLuong > 1){
        spGioHang.soLuong += soLuong;
      }
      // cập nhật lại giỏ hàng
      this.setState({
        cart:gioHangCapNhat
      });

    }
    
    render() {
        const {productDetail, cart} = this.state;
        return (
          <>
          <Modal cart={cart} deleteItem={this.deleteItem} tangGiamSoLuong={this.tangGiamSoLuong}/>
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
