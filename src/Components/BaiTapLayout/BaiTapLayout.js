import React, { Component } from 'react'
import FooterComponent from './FooterComponent'
import Header from './Header'
import ProductComponent from './ProductComponent'
import ProductListComponent from './ProductListComponent'
import SliderCompoenent from './SliderCompoenent'

export default class BaiTapLayout extends Component {
    render() {
        return (
            <div>
                <Header />
                <SliderCompoenent />
                <ProductListComponent />
                <FooterComponent />
            </div>
        )
    }
}
