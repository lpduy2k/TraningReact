const stateGioHang = {
    gioHang: [
        // {maSP:1,tenSP:'IphoneX',hinhAnh:'./img/sp_iphoneX.png',donGia:1000,soLuong:5}
    ]
}

export const GioHangReducer = (state= stateGioHang,action) =>{
    // console.log(action)
    switch(action.type){
        case 'THEM_GIO_HANG': {
            // xử lí cập nhật state.gioHang
            let gioHangCapNhat = [...state.gioHang];
            // tìm trong giỏ hàng có sản phẩm nào có mã == sp click hay không ?
            let spGioHang = gioHangCapNhat.find(sp => sp.maSP === action.sanPhamClick.maSP);
            if(spGioHang){
                // tìm thấy => tăng số lượng
                spGioHang.soLuong += 1;
            }else {
                gioHangCapNhat.push(action.sanPhamClick)
            }
            // cập nhật lại state
            state.gioHang = gioHangCapNhat;
            console.log(state)
            // immutable tính bất biến của redux: giá trị state mới trả về phải khác state cũ
            return {...state};
        }
        case 'XOA_GIO_HANG' : {
            let gioHangCapNhat = [...state.gioHang];
            // tìm trong giỏ hàng có sản phẩm đó không ?
            // let index = gioHangCapNhat.findIndex(sp => sp.maSP === action.maSPXoa);
            // if(index !== -1) {
            //     gioHangCapNhat.splice(index, 1);
            // }
            gioHangCapNhat = gioHangCapNhat.filter(sp => sp.maSP !== action.maSPXoa);
            //Cập nhật lại state giỏ hàng 
            state.gioHang = gioHangCapNhat;
            return {...state}
        }
        case 'TANG_GIAM_SO_LUONG' : {
            const gioHangCapNhat = [...state.gioHang];
            // tìm sp được click trong giỏ hàng 
            let spGH = gioHangCapNhat.find(sp => sp.maSP === action.maSPClick);
            if(spGH){
                if(action.soLuong === -1 && spGH.soLuong <= 1){
                    return {...state}
                }
                spGH.soLuong += action.soLuong;
            }
            state.gioHang = gioHangCapNhat;
            return {...state}
        }
    }
    return state;
}