//File quản lý tất cả state của ứng dụng (thay vì đặt tại component ta đặt state tại store)
import {combineReducers,createStore} from 'redux';
// import state giỏ hàng
import {GioHangReducer} from '../redux/GioHangReducer';
import {BaiTapGameXucXacReducer} from './BaiTapGameXucXacReducer';
import {QuanLySinhVienReducer} from './QuanLySinhVienReducer';

const rootReducer = combineReducers({
    // các state sau này khai báo tại đây
    stateGioHang: GioHangReducer,
    stateGameXucXac: BaiTapGameXucXacReducer,
    QuanLySinhVienReducer
})

// tạo ra store chứa rootReducer (xem như state tổng của ứng dụng)
export const store = createStore(rootReducer);