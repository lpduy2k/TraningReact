import React, { Component } from 'react'

export default class RenderWithMap extends Component {
    products = [
        {id:1, name:'ip', price: 1000},
        {id:2, name:'ip2', price: 2000},
        {id:3, name:'ip3', price: 3000},
    ];
    // renderProduct = () => {
    //     let arrJSX = [];
    //     for(let index in this.products) {
    //         // Mỗi lần duyệt lấy ra 1 đối tượng sản phẩm
    //         let product = this.products[index];
    //         let jsxProduct = <div className="col-4">
    //             <div className="card">
    //               <img className="card-img-top" src="https://picsum.photos/200" alt="123" />
    //               <div className="card-body">
    //                 <h4 className="card-title">{product.name}</h4>
    //                 <p className="card-text">{product.price}</p>
    //               </div>
    //             </div>
    //           </div>;
            
    //         arrJSX.push(jsxProduct);
    //     }
    //     return arrJSX;
    // }

    renderProductWithMap = () => {
        const arrJSX = this.products.map((product,index) => {
            return <div className="col-4" key = {index}>
                <div className="card">
                  <img
                    className="card-img-top"
                    src="https://picsum.photos/200"
                    alt="123"
                  />
                  <div className="card-body">
                    <h4 className="card-title">{product.name}</h4>
                    <p className="card-text">{product.price}</p>
                  </div>
                </div>
              </div>;
        });
        return arrJSX;
    }

    renderTable = () => {
        return this.products.map((product,index)=> {
            return  <tr key={index}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
            </tr>
        })
    }

    render() {
        return (
            <div className="container mt-5">
                <div className="row">
                    {/* {this.renderProduct()} */}
                    {this.renderProductWithMap()}
                </div>
                {/* <table className="table">
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>name</th>
                            <th>price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderTable()}
                    </tbody>
                </table> */}
            </div>
        )
    }
}

