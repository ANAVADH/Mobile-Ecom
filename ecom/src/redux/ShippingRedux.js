import {createSlice} from '@reduxjs/toolkit'


const shippingSlice = createSlice({

    name:"shipping",
    initialState:{
        shippingAddress:null,
    },
    reducers:{

        addAddress:(state,action) =>{
            state.shippingAddress= action.payload;

        },
        clearAddress:(state) =>{

            state.shippingAddress = null;
        },

      
    
    },
})
export const {addAddress , clearAddress} = shippingSlice.actions;
export const selectShipping = (state) => state.shipping.shippingAddress;
export default shippingSlice.reducer;