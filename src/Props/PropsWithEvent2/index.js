import React, { Component } from 'react'
import ProductList from './ProductList'

export class PropsWithEvent2 extends Component {
    render() {
        return (
            <div className="container">
                <div className="text-right">
                    <button data-toggle="modal" data-target="#modelId" >Giỏ hàng</button>
                </div>
                <h3 className="text-center">Danh Sách Sản Phẩm</h3>
                <ProductList />
            </div>
        )
    }
}

export default PropsWithEvent2
