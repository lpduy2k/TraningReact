import React, { Component } from 'react'
import ProductRFC from './ProductRFC'

export default class DemoProps extends Component {
    render() {
        return (
            <div className="container">
                <h3 className="text-center">Danh Sach San Pham</h3>
                <div className="row">
                    <div className="col-3">
                        <ProductRFC name="ip" price="100$" />
                    </div>
                    <div className="col-3">
                        <ProductRFC name="ip2" price="120$"/>
                    </div>
                    <div className="col-3">
                        <ProductRFC name="ip3" price="140$"/>
                    </div>
                    <div className="col-3">
                        <ProductRFC name="ip4" price="160$"/>
                    </div>
                </div>
            </div>
        )
    }
}
