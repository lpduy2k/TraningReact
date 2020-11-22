import React, { Component } from 'react'

export default class DataBindingClassComponents extends Component {
    sinhVien = {
        ma: '1',
        ten: 'Duy',
        hinhAnh: 'https://picsum.photos/200'
    }
    renderPicture = () => {
        return <img src ={this.sinhVien.hinhAnh} width="200" height="200" alt="123"></img>
    }
    render() {
        const title = 'fe54';
        const renderTitle = () => {
            return <p className="text-danger"> {title} </p>
        };
        return (
            <div className="container">
                <h3>Duy</h3>
                <p>tieu de : {title}</p>
                {renderTitle()}
                <h3>Thong tin sinh vien</h3>
                <ul>
                    <li>Ma sinh vien: {this.sinhVien.ma}</li>
                    <li>ten sinh vien: {this.sinhVien.ten}</li>
                    <li><img src={this.sinhVien.hinhAnh} width="200" height="200" alt="123"></img></li>
                    <li>{this.renderPicture()}</li>
                </ul>
            </div>
        )
    }
}
