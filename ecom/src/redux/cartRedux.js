import {createSlice} from '@reduxjs/toolkit'


const cartSlice = createSlice({

    name:"cart",
    initialState:{
        products:[],
        quantity:0,
        total:0,
      
    },
    reducers:{
        addProducts: (state,action) =>{

            state.quantity += 1;
            state.products.push(action.payload);
            state.total += action.payload.price * action.payload.quantity;

        },
        removeProducts:(state, action) =>{
            state.quantity -= 1;
            state.products = state.products.filter(item => item._id !== action.payload._id)
            state.total -=   action.payload.price * action.payload.quantity;

        },
        clearProducts:(state) =>{
            state.quantity = 0;
            state.products = [];
            state.total =   0

        },
      
      
    },



})

export const {addProducts , removeProducts , clearProducts} = cartSlice.actions;
export default cartSlice.reducer;