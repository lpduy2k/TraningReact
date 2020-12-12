import React, { Component } from 'react'
import {connect} from 'react-redux';
class XucXac extends Component {
    renderXucXac = () => {
        return this.props.mangXucXac.map((xucXac,index)=>{
            return <img key={index} src={xucXac.hinhAnh} width="50" height="50"alt=""/>
        })
    }

    hienThiTongDiem = () => {
        const tongDiem = this.props.mangXucXac.reduce((td,xucXac,index)=>{
            return td += xucXac.diem;
        },0);

        return tongDiem > 10 ? `${tongDiem} - TÀI`: `${tongDiem} - XỈU`;

    }

    render() {
        console.log(this.props)
        return (
            <div className="container-fluid">
                <div className="row text-center">
                    <div className="col-12">
                         <h1 className="display-4">{this.hienThiTongDiem()}</h1>
                    </div>
                    <div className="col-4">
                        <button className="btn btn-danger p-5" onClick={() =>{this.props.dispatch({type:'DAT_CUOC',datCuoc:true})}}><span className="display-4">Tài</span></button>
                    </div>
                    <div className="col-4">
                        {this.renderXucXac()}
                    </div>
                    <div className="col-4">
                        <button className="btn btn-danger p-5" onClick={() =>{this.props.dispatch({type:'DAT_CUOC',datCuoc:false})}}><span className="display-4">Xỉu</span></button>
                    </div>
                </div>
            </div>
        )
    }
}

//Tạo hàm mapStateToProps lấy giá trị từ store về
const mapStateToProps = (state) => {
    return {
        mangXucXac: state.stateGameXucXac.mangXucXac
    }
}

export default connect(mapStateToProps)(XucXac)
