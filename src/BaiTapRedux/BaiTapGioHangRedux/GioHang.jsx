import React, { Component } from 'react'
// import thư viện kết nối redux và xóa export và export connect ở dưới
import {connect} from 'react-redux';
class GioHang extends Component {

    render() {
        return (
            <div className="container">
                <h1 className="text-center display-4">Giỏ hàng</h1>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Mã SP</th>
                            <th>Tên SP</th>
                            <th>Hình ảnh</th>
                            <th>Số lượng</th>
                            <th>Đơn giá</th>
                            <th>Thành tiền</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.gioHang.map((spGH, index) => {
                            return <tr key={index}>
                            <td>{spGH.maSP}</td>
                            <td>{spGH.tenSP}</td>
                            <td><img width="50" height="50" src={spGH.hinhAnh} alt=""/></td>
                            <td>{spGH.soLuong}</td>
                            <td>{spGH.donGia}</td>
                            <td>{spGH.soLuong * spGH.donGia}</td>
                            <td><button className="btn btn-danger">Xóa</button></td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}

// định nghĩa hàm lấy state từ redux về biến thành props của reactComponent
const mapStateToProps = (state) => {
    // state đại diện cho rootReducer
    return {
        gioHang: state.stateGioHang.gioHang
    }
}



// kết nối react component vs redux store tạo ra 1 component mới export ra ngoài
export default connect(mapStateToProps)(GioHang);
