import React, { Component } from 'react'
import {connect} from 'react-redux';

class SanPham extends Component {
    render() {
        console.log(this.props)
        let {sanPham} = this.props;
        return (
          <div className="card">
            <img height="350" className="card-img-top" src={sanPham.hinhAnh} alt="123.png" />
            <div className="card-body">
              <h4 className="card-title">{sanPham.tenSP}</h4>
              <p className="card-text">{sanPham.donGia.toLocaleString()}</p>
            </div>
            <div className="card-footer">
                <button className="btn btn-success" onClick={() => {this.props.themGioHang(sanPham)}}>Thêm giỏ hàng</button>
            </div>
          </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
  // dispatch là tham số từ redux trả ra (nó là 1 hàm dùng để gửi giá trị lên store)
  return {
    themGioHang : (spClick) => {
      // gửi dữ liệu lên redux
      // bước 1: tạo actions
      const action = {
        type : 'THEM_GIO_HANG', // type thuộc tính bắt buộc
        sanPhamClick :{...spClick,soLuong:1}
        // thuộc tính thứ 2 là giá trị gửi lên redux

      }
      // bước 2: sử dụng phương thức dispatch để đưa action lên redux (reducer)
      dispatch(action)
      console.log(spClick);
    }
  }
}

// kết nói component sản phẩm vs store
// tham số 1 của connect: là mapDispatchToProps ( nếu k lấy dữ liệu nào từ store về thì để null)
// tham số 2 của connect: là mapDispatchToProps hàm này sẽ tạo ra props là function đưa dữ liệu lên store
export default connect(null,mapDispatchToProps)(SanPham)
