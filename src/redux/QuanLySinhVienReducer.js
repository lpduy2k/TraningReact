const stateDefault = {
    mangSinhVien : [
        {maSinhVien: '1', tenSinhVien: 'Nguyễn Văn A', email: '123@gmail.com', soDienThoai: '01234'},
        {maSinhVien: '2', tenSinhVien: 'Nguyễn Văn B', email: '123@gmail.com', soDienThoai: '04567'}
    ],
    sinhVienSua: {
        maSinhVien: '',
        tenSinhVien: '',
        email: '',
        soDienThoai: ''
    },
    sinhVienRedux: {
        values: {
            maSinhVien: '',
            tenSinhVien: '',
            email: '',
            soDienThoai: ''
        },
        errors: {
            maSinhVien: '',
            tenSinhVien: '',
            email: '',
            soDienThoai: ''
        }
    }
}

export const QuanLySinhVienReducer = (state= stateDefault,action) => {
    switch (action.type){
        case 'THEM_SINH_VIEN': {
            // const mangSinhVienCapNhat = [...state.mangSinhVien, action.sinhVien];
            // return {...state, mangSinhVien: mangSinhVienCapNhat}
            const mangSinhVienUpdate = [...state.mangSinhVien, state.sinhVienRedux.values];
            return {...state, mangSinhVien: mangSinhVienUpdate}
        }
        case 'CAP_NHAT_SINH_VIEN':{
            const mangSinhVienCapNhat = [...state.mangSinhVien]
            let svUpdate = mangSinhVienCapNhat.find(sv => sv.maSinhVien === state.sinhVienRedux.values.maSinhVien);
            if(svUpdate){
                svUpdate.tenSinhVien = state.sinhVienRedux.values.tenSinhVien;
                svUpdate.email = state.sinhVienRedux.values.email;
                svUpdate.soDienThoai = state.sinhVienRedux.values.soDienThoai;
            }
            state.mangSinhVien = mangSinhVienCapNhat;
            return {...state}
        }
        case 'SINH_VIEN_SUA': {
            // cập nhật lại state
            // state.sinhVienSua = {...action.sinhVienSua};
            // return {...state}
            // cập nhật lại state của FormSinhVienRedux
            let newSinhVienRedux = {...state.sinhVienRedux};
            newSinhVienRedux.values = {...action.sinhVienSua};
            return {...state, sinhVienRedux:newSinhVienRedux}
        }
        case 'SET_SV_REDUX': {
            state.sinhVienRedux = action.sinhVienRedux;
            return {...state}
        }
    }
    return {...state}
}