import React, { Component } from 'react'

export default class HandleEvent extends Component {
    showMess = () => {
        alert('Duy dz');
    }
    showInfo = (info) => {
        alert(info);
    }
    render() {
        const title = 'duy dz';
        return (
            <div className="container">
                <h3>Handle Event</h3>
                <button onClick={this.showMess}>Click me</button>
                <button onClick={() => {alert(`Hello ${title}`);}}>Show Mess</button>
                <button onClick={() => {this.showInfo("hello duy");}}>Show Info</button>
                {/* cach nay it dung
                <button onClick={this.showInfo.bind(this,'hello duy2')}>Show Info2</button> */}
            </div>
        )
    }
}
