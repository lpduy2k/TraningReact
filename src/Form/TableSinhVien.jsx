import React, { Component } from 'react'
import {connect} from 'react-redux'

class TableSinhVien extends Component {

    renderSinhVien = () => {
        return this.props.mangSinhVien.map((sv, index) => {
            return <tr key={index}>
                <td>{sv.maSinhVien}</td>
                <td>{sv.tenSinhVien}</td>
                <td>{sv.email}</td>
                <td>{sv.soDienThoai}</td>
                <td>
                    <button className="btn btn-danger mr-3">Xóa</button>
                    <button className="btn btn-primary" onClick={() =>{
                        this.props.dispatch({
                            type: 'SINH_VIEN_SUA',
                            sinhVienSua: sv
                        })
                    }}>Sửa</button>
                </td>
            </tr>
        })
    }

    render() {
        return (
            <div>
                <table className="table">
                    <thead>
                        <tr className="bg-dark text-white">
                            <td>Mã sinh viên</td>
                            <td>Tên sinh viên</td>
                            <td>Email</td>
                            <td>Số điện thoại</td>
                            <td></td>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderSinhVien()}
                    </tbody>
                </table>
            </div>
        )
    }
}

// () => {return {}} === () => ({}) 
const mapStateToProps = (state) => ({
        mangSinhVien: state.QuanLySinhVienReducer.mangSinhVien
})

export default connect(mapStateToProps)(TableSinhVien)
