import React, { Component } from "react";

export default class DemoState extends Component {
  state = {
    isLogin: false,
  };
  // state là thuộc tính có sẵn của component => dùng để quản lí nguồn dữ liệu thay đổi
  // trên giao diện khi người dùng thao tác (click, change, blue,...)
  // isLogin = false;
  userName = "Duy";
  renderContent = () => {
    if (this.state.isLogin) {
      return <p>Hello {this.userName}</p>;
    }
    return (
      <button
        onClick={() => {
          this.handleLogin();
        }}
        className="btn btn-success"
      >
        Dang Nhap
      </button>
    );
  };

  handleLogin = () => {
    //không được thay đổi state trực tiếp mà phải thông qua phương thức this.setState
    // this.state.isLogin = true;
    // console.log(this.state.isLogin);
    // setState(): là phương thức có sẵn của lớp đối tượng component => dùng để thay đổi
    // đổi giá trị trong this.sate đồng thời gọi lại hàm render
    const newState = {
      isLogin: true,
    };
    this.setState(newState);
  };

  render() {
    return (
      <div className="container">
        <h3>If else react</h3>
        {/* {this.isLogin ? <p>Hello {this.userName}</p> : <button>Dang Nhap</button>} */}
        {this.renderContent()}
      </div>
    );
  }
}
