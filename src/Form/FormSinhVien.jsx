import React, { Component } from 'react'

export default class FormSinhVien extends Component {

    state = {
        values: {
            maSinhVien: '',
            tenSinhVien: '',
            email: '',
            soDienThoai: ''
        },
        errors: {
            maSinhVien: '',
            tenSinhVien: '',
            email: '',
            soDienThoai: ''
        }
    }

    handleChangeInput = (event) =>{
        //event đại diện cho sự kiện xảy ra trên thẻ
        let {value,name} = event.target;
        let typeInput = event.target.getAttribute("typeInput") // attribute là thuộc tính người dùng tự thêm vào
        console.log(typeInput)
        // this.setState({[name]: value}, () => {console.log(this.state)})
        // xử lý cập nhật values
        const newValues = {...this.state.values}; // lưu giữ lại các giá trị trước đã nhập
        newValues[name] = value; // gán giá trị mới cho thuộc tính đang nhập

        // xử lý error
        const newError = {...this.state.errors}; // giữ lại các giá trị errors cũ
        // nếu value của trường đang nhập bị rỗng thì gán lỗi cho trường đó
        newError[name] = value.trim() === '' ? name + ' không được bỏ trống !' : '';
        if(typeInput === 'email'){
            const regexEmail = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
            if (!regexEmail.test(value)){
                newError[name] = name + ' không đúng định dạng !';
            }
        }

        if(typeInput === 'phone'){
            const regexNumber = /^[0-9]+$/;
            if (!regexNumber.test(value)){
                newError[name] = name + ' không đúng định dạng !';
            }
        }
        // setState lại
        this.setState({
            values: newValues,
            errors: newError
        }, () => {console.log(this.state)})
    }

    handleSubmit = (event) => {
        event.preventDefault();
    //    event.preventDefault(); // chặn sự kiện submit của browser khi người dùng submit = reactform
        // kiểm tra dữ liệu người dùng hợp lệ => submit
        let valid = true;
        for (let key in this.state.values){
            console.log(this.state.values);
            if (this.state.values[key].trim() === '') {
                valid = false;
            }
        }
        // kiểm tra tất cả các thuộc tính của this.state.errors
        for (let key in this.state.errors) {
            if (this.state.errors[key] !== '') {
                valid = false;
            }
        }

        if (!valid) {
            alert("Dữ liệu không hợp lệ !");
            return;
        }
        // xử lí submit => api or redux (dispatch)
    }

    render() {
        return (
          <form className="card text-left" onSubmit={this.handleSubmit}>
            <div className="card-header bg-dark text-white">Thông tin sinh viên</div>
            <div className="card-body">
              <div className="row">
                <div className="col-6">
                      <div className="form-group">
                        <h3>Mã sinh viên</h3>
                        <input className="form-control" name="maSinhVien" onChange={this.handleChangeInput}/>
                        <p className="text text-danger">{this.state.errors.maSinhVien}</p>
                      </div>
                      <div className="form-group">
                        <h3>Tên sinh viên</h3>
                        <input className="form-control" name="tenSinhVien" onChange={this.handleChangeInput}/>
                        <p className="text text-danger">{this.state.errors.tenSinhVien}</p>
                      </div>
                  </div>
                  <div className="col-6">
                      <div className="form-group">
                        <h3>Email</h3>
                        <input typeInput="email" className="form-control" name="email" onChange={this.handleChangeInput}/>
                        <p className="text text-danger">{this.state.errors.email}</p>
                      </div>
                      <div className="form-group">
                        <h3>Số điện thoại</h3>
                        <input typeInput="phone" className="form-control" name="soDienThoai" onChange={this.handleChangeInput}/>
                        <p className="text text-danger">{this.state.errors.soDienThoai}</p>
                      </div>
                  </div>
              </div>
              <div>
                  <button className="btn btn-success" type="submit">Thêm sinh viên</button>
              </div>
            </div>
          </form>
        );
    }
}
