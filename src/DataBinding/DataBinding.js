import React from 'react'

export default function DataBinding() {
    //Binding biến (đối tượng, các biến cơ bản)
    const title = 'CyberSoft';
    const imgSrc = 'https://picsum.photos/200/200';
    const sinhVien = {
        maSV: '001',
        tenSinhVien: 'Nguyen A',
        hinhAnh: 'https://picsum.photos/200'
    }

    //Binding hàm
    const renderImg = () => {
        //Giá trị phải trả về 1 chuỗi, số, jsx (1 đoạn code html được bao phủ bởi 1 thẻ)
        return <div>
            <h3>Hình ảnh</h3>
            <img src={sinhVien.hinhAnh} width="200" height="200" />
        </div>
    }
    return (
      <div>
        <h3>Databinding</h3>
        <p id="title" className="display-4">
          {title}
        </p>
        <img src={imgSrc} width="200" height="200" alt="123.jpg" />
        <input className="form-control w-25" value={title} />
        <div className="card" style={{width:200, height:200}}>
          <img className="card-img-top" src={sinhVien.hinhAnh} alt />
          <div className="card-body">
            <h4 className="card-title">{sinhVien.tenSinhVien}</h4>
            <p className="card-text">{sinhVien.maSV}</p>
          </div>
        </div>
        <hr/>
        <div className="mt-5">
        {renderImg()}
        </div>
      </div>
    );
}
