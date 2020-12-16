import React, { Component } from 'react'
import {connect} from 'react-redux'

class FormSinhVienRedux extends Component {

    handleChangeInput = (event) =>{
        //event đại diện cho sự kiện xảy ra trên thẻ
        let {value,name} = event.target;
        let typeInput = event.target.getAttribute("typeInput") // attribute là thuộc tính người dùng tự thêm vào
        console.log(typeInput)
        // this.setState({[name]: value}, () => {console.log(this.props.sinhVienRedux)})
        // xử lý cập nhật values
        const newValues = {...this.props.sinhVienRedux.values}; // lưu giữ lại các giá trị trước đã nhập
        newValues[name] = value; // gán giá trị mới cho thuộc tính đang nhập

        // xử lý error
        const newError = {...this.props.sinhVienRedux.errors}; // giữ lại các giá trị errors cũ
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

        this.props.dispatch({
            type: 'SET_SV_REDUX',
            sinhVienRedux: {
                values: newValues,
                errors: newError
            }
        })

        // setState lại
        // this.setState({
        //     values: newValues,
        //     errors: newError
        // }, () => {console.log(this.props.sinhVienRedux)})
    }

    handleSubmit = (event) => {
        event.preventDefault();
    //    event.preventDefault(); // chặn sự kiện submit của browser khi người dùng submit = reactform
        // kiểm tra dữ liệu người dùng hợp lệ => submit
        let valid = true;
        for (let key in this.props.sinhVienRedux.values){
            console.log(this.props.sinhVienRedux.values);
            if (this.props.sinhVienRedux.values[key].trim() === '') {
                valid = false;
            }
        }
        // kiểm tra tất cả các thuộc tính của this.props.sinhVienRedux.errors
        for (let key in this.props.sinhVienRedux.errors) {
            if (this.props.sinhVienRedux.errors[key] !== '') {
                valid = false;
            }
        }

        if (!valid) {
            alert("Dữ liệu không hợp lệ !");
            return;
        }
        // xử lí submit => api or redux (dispatch)...
        this.props.dispatch({
            type:'THEM_SINH_VIEN',
            sinhVien: this.props.sinhVienRedux.values
        })
    }

    componentWillReceiveProps = (newProps) => {
        // Lấy props từ redux gán vào state của component
        this.setState({
            values: newProps.sinhVienSua
        });
        // Sau đó binding giá trị này lên giao diện từ state
    }

    render() {
        let {maSinhVien, tenSinhVien, email, soDienThoai} = this.props.sinhVienRedux.values;
        return (
          <form className="card text-left" onSubmit={this.handleSubmit}>
            <div className="card-header bg-dark text-white">Thông tin sinh viên</div>
            <div className="card-body">
              <div className="row">
                <div className="col-6">
                      <div className="form-group">
                        <h3>Mã sinh viên</h3>
                        <input className="form-control" name="maSinhVien" value={maSinhVien} onChange={this.handleChangeInput}/>
                        <p className="text text-danger">{this.props.sinhVienRedux.errors.maSinhVien}</p>
                      </div>
                      <div className="form-group">
                        <h3>Tên sinh viên</h3>
                        <input className="form-control" name="tenSinhVien" value={tenSinhVien} onChange={this.handleChangeInput}/>
                        <p className="text text-danger">{this.props.sinhVienRedux.errors.tenSinhVien}</p>
                      </div>
                  </div>
                  <div className="col-6">
                      <div className="form-group">
                        <h3>Email</h3>
                        <input typeInput="email" className="form-control" name="email" value={email} onChange={this.handleChangeInput}/>
                        <p className="text text-danger">{this.props.sinhVienRedux.errors.email}</p>
                      </div>
                      <div className="form-group">
                        <h3>Số điện thoại</h3>
                        <input typeInput="phone" className="form-control" name="soDienThoai" value={soDienThoai} onChange={this.handleChangeInput}/>
                        <p className="text text-danger">{this.props.sinhVienRedux.errors.soDienThoai}</p>
                      </div>
                  </div>
              </div>
              <div>
                  <button className="btn btn-success" type="submit">Thêm sinh viên</button>
                  <button className="btn btn-primary ml-3" type="button" onClick={()=>{
                      this.props.dispatch({
                        type: "CAP_NHAT_SINH_VIEN"
                      })
                  }}>Cập nhật sinh viên</button>
              </div>
            </div>
          </form>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        sinhVienRedux: state.QuanLySinhVienReducer.sinhVienRedux
    }
}

export default connect(mapStateToProps)(FormSinhVienRedux)

