import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
          <div
            className="fixed-top"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.5)",height:50 }}
          >
            <h3 className="text-center text-white mt-3">TRANG KHÙM</h3>
          </div>
        );
    }
}
