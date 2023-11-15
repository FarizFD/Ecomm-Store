import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './Reducer';
export const Store = (configureStore({
    reducer: {
        cart:cartSlice
    }
}))