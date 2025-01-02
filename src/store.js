import {configureStore} from '@reduxjs/toolkit'
import { editProductReducer } from './page/shop/productManagement/editProduct/EditProductSlice';
import { ImageSlice } from './page/shop/productManagement/editProduct/priceItem/addItem_Phu/basic/ImageSliceReducer';
import { editSubItemReducer } from './page/shop/productManagement/editProduct/priceItem/addItem_Phu/inforProduct/varient/listVarient/subListVarient/library/SubitemSlice';
import { addItemReducerSlice } from './page/shop/productManagement/priceItem/AddItemReducerSlice';
import { userReducer } from './redux/userSlice'

const store = configureStore({
    reducer: {
        user: userReducer,
        eidtProduct: editProductReducer,
        subItemProduct:editSubItemReducer,
        addItemReducerSlice:addItemReducerSlice,
        imageUpdate:ImageSlice
    }
});

export default store