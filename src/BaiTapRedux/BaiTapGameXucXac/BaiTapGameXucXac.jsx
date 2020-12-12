import React, { Component } from 'react'
import KetQuaTroChoi from './KetQuaTroChoi'
import XucXac from './XucXac'
import styleGame from './BaiTapGameXucXac.module.css';
import {connect} from 'react-redux'
class BaiTapGameXucXac extends Component {
    render() {
        return (
            <div className={`${styleGame.bgGame} text-center`}>
                {/* <div className={`${styleGame['bg-game']}`}></div> */}
                <h1 className="display-4 text-center mt-5">BÀI TẬP GAME XÚC XẮC</h1>
                <XucXac />
                <button className="btn btn-success" onClick={()=>{this.props.dispatch({type:'RANDOM_XUC_XAC'})}}>Play game</button>
                <KetQuaTroChoi />
            </div>
        )
    }
}


export default connect()(BaiTapGameXucXac)
