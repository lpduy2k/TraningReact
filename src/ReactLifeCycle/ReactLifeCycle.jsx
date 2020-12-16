import React, { Component } from 'react'
import ChildComponentLifeCycle from './ChildComponentLifeCycle';

export default class ReactLifeCycle extends Component {
    //lifecycle là các hàm có sẵn của react

    constructor(props) {
        super(props);
        this.state = {
            number: 1
        }
        console.log('constructor')
    }

    static getDerivedStateFromProps() {
        console.log('getDerivedStateFromProps')
        return null
    }

    shouldComponentUpdate() {
        console.log('shouldComponentUpdate')
        return true;
    }

    render() {
        console.log('render')
        return (
            <div className="mt-5 container d-flex">
                <h1>{this.state.number}</h1>
                <button className="btn btn-success" onClick={()=>{
                    this.setState({number: this.state.number + 1})
                }}>+</button>
                {this.state.number < 2 ? <ChildComponentLifeCycle /> : ""}
            </div>
        )
    }

    componentDidUpdate(){
        console.log('componentDidUpdate')
    }

    componentDidMount() {
        console.log('componentDidMount')
    }
}
