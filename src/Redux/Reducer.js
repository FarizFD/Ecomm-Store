import { createSlice } from '@reduxjs/toolkit';
export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        list: []
    },
    reducers: {
        addItems: (state, action) => {
            state.list = [...state.list, { ...action.payload, count: 1 }]
        },
        removeItems: (state, action) => {
            const index = state.list.findIndex((element) => element.id === action.payload.id);
          state.list = [...state.list.slice(0,index),
        ...state.list.slice(index+1),];
        },
        modify: (state, action) => {
            const index = state.list.findIndex((element) => element.id === action.payload.id);
            state.list = [
                ...state.list.slice(0,index),
                {...state.list[index],count:action.payload.count},
          ...state.list.slice(index+1),];
        },
      

    }
})
export const { addItems, removeItems, modify } = cartSlice.actions;
export default cartSlice.reducer;