const stateDefault = {
    datCuoc: true,
    soBanThang: 0, 
    soBanChoi: 0, 
    mangXucXac: [
        {hinhAnh:'./img/imgGame/6.png',diem:6},
        {hinhAnh:'./img/imgGame/6.png',diem:6},
        {hinhAnh:'./img/imgGame/6.png',diem:6},
    ]
};

export const BaiTapGameXucXacReducer = (state = stateDefault, action)=>{
    switch(action.type){
        case 'DAT_CUOC': {
            state.datCuoc = action.datCuoc;
            return {...state}
        }
        case 'RANDOM_XUC_XAC':{
            console.log(action)
            //randoms
            // tạo 1 mảng xúc xác ngẫu nhiên
            const mangXXNN = [];
            // xử lí random 3 lần tạo ra 3 xúc xắc
            for(let i=0; i<3; i++){
                // tạp ra 1 số ngẫu nhiên từ 1 -> 6
                const soNN = Math.floor(Math.random()*6) + 1;
                // từ số ngẫu nhiên tạo ra object xúc xắc
                const xxNN = {hinhAnh: `./img/imgGame/${soNN}.png`, diem: soNN};
                // thêm xx ngẫu nhiên vào mảng xxNN
                mangXXNN.push(xxNN);
                // return {...state}
            }
            // cập nhật state.soBanThang
            const tongDiem = state.mangXucXac.reduce((td,xucXac,index)=>{
                return td += xucXac.diem
            },0)

            if (state.datCuoc && tongDiem > 10 || (!state.datCuoc && tongDiem <= 10)) {
                state.soBanThang += 1
            }
            // cập nhật state.soBanChoi
            state.soBanChoi += 1
            state.mangXucXac = mangXXNN;
            return {...state}
        }
    }
    return {...state}
}