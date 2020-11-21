import React, { Component } from "react";

export default class DemoReactClassComponent extends Component {
  // Khai báo nhiều thuộc tính và phương thức khác
  // render là phương thức chứa nội dung giao diện của thẻ <DemoReactClassComponent></DemoReactClassComponent>
  render() {
    // Khai báo biến hàm ...
    return (
      <div>
        <nav className="nav justify-content-center">
          <a className="nav-link active" href="#">
            Active link
          </a>
          <a className="nav-link" href="#">
            Link
          </a>
          <a className="nav-link disabled" href="#">
            Disabled link
          </a>
        </nav>
      </div>
    );
  }
}
