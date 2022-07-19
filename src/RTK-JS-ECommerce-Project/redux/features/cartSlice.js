import {
    createSlice
} from "@reduxjs/toolkit";
import cartItems from "../../cartProducts";

// Initial State
const initialState = {
    cartItems,
    totalCartItems: 0,
    quantity: 0,
    isLoading: false,
    errorMessage: null
}

// creating slice
const cartSlice = createSlice({
    name: 'CARTPROJECT',
    initialState,
    // actions
    reducers: {
        clearCart: (state) => {
            state.cartItems = [];
        },
        removeItem: (state, action) => {

        }
    }
})

// exporting reducer
export default cartSlice.reducer;

// exporting actions
export const {
    clearCart
} = cartSlice.actions;