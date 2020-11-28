import React, { Component } from 'react'

export default class Body extends Component {
    state = {
        imgSrc: './img/imgGlasses/v1.png',
        name: 'GUCCI G8850U',
        desc: 'GUCCI square lenses define these sunglasses. '
    }

    changeGlasses = (srcGlasses,newName,newDesc) => {
        this.setState({imgSrc: srcGlasses, name:newName, desc:newDesc});
    }

    arrProduct = [

        { id: 1, price: 30, name: 'GUCCI G8850U', url: './img/imgGlasses/v1.png', desc: 'GUCCI square lenses define these sunglasses. ' },
    
        { id: 2, price: 50, name: 'GUCCI G8759H', url: './img/imgGlasses/v2.png', desc: 'GUCCI square lenses define these sunglasses. ' },
    
        { id: 3, price: 30, name: 'DIOR D6700HQ', url: './img/imgGlasses/v3.png', desc: 'DIOR square lenses define these sunglasses. ' },
    
        { id: 4, price: 30, name: 'DIOR D6005U', url:  './img/imgGlasses/v4.png', desc: 'DIOR square lenses define these sunglasses. ' },
    
        { id: 5, price: 30, name: 'PRADA P8750', url: './img/imgGlasses/v5.png', desc: 'PRADA square lenses define these sunglasses. ' },
    
        { id: 6, price: 30, name: 'PRADA P9700', url: './img/imgGlasses/v6.png', desc: 'PRADA square lenses define these sunglasses. ' },
    
        { id: 7, price: 30, name: 'FENDI F8750', url: './img/imgGlasses/v7.png', desc: 'FENDI square lenses define these sunglasses. ' },
    
        { id: 8, price: 30, name: 'FENDI F8500', url: './img/imgGlasses/v8.png', desc: 'FENDI square lenses define these sunglasses. ' },
    
        { id: 9, price: 30, name: 'FENDI F4300', url: './img/imgGlasses/v9.png', desc: 'FENDI square lenses define these sunglasses. ' },
    
    ];
    
    renderProduct = () => {
        const arrP = this.arrProduct.map((product,index) => {
            return <div key={index}>
                <img className="border rounded p-2 m-3" style={{cursor:'pointer'}} onClick={() => {this.changeGlasses(product.url, product.name, product.desc)}} src={product.url} width={100} height={50} />
            </div>
        });
        return arrP;
    }

    render() {
        return (
          <div className ="bgImg" style={{backgroundImage: 'url("./img/imgGlasses/background.jpg")', backgroundSize: 'cover', height:1100, position: 'relative', }}>
              <div style={{ backgroundColor: "rgba(0, 0, 0, 0.5)", position: 'absolute', width: '100%', height: '100%'}}> 
                <div className="" style={{position: 'absolute', top: '18%', left: '35%', transform: 'translate(-50%, -50%)'}}>
                    <div style={{backgroundImage: 'url("./img/imgGlasses/trang.jpg")', backgroundSize: 'cover', width:140, height:250, position: 'relative'}}>                    
                        <img className="" width={'56%'} style={{top: '38%', left: '21%', transform: 'translate(-50%, -50%)', position: 'absolute', transform: 'rotate(18deg)'}} src={this.state.imgSrc}></img>
                        {/* <div className=""style={{ backgroundColor: "rgba(255, 68, 0, 0.3)",height:75, bottom:0 , position: 'absolute' }}>
                            <h6 className="text-primary pl-1">{this.state.name}</h6>
                            <p className="text-white pl-1">{this.state.desc}</p>
                        </div> */}
                    </div>
                </div>
                <div className="" style={{position: 'absolute', top: '18%', left: '65%', transform: 'translate(-50%, -50%)'}}>
                    <img src="./img/imgGlasses/trang.jpg"  width={140} height={250} />
                </div>
                <div className="bg-white" style={{width:810, height: 200, position: 'absolute', top: '54%', left: '50%', transform: 'translate(-50%, -50%)'}}>
                    <div className="row mt-3" style={{width:'98%', margin:'auto'}}>
                        {this.renderProduct()}
                    </div>
                </div>
              </div>
          </div>
        );
    }
}
