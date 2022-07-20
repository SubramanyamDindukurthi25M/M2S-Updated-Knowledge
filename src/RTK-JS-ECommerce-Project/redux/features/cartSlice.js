import {
    createSlice,
    createAsyncThunk
} from "@reduxjs/toolkit";
import axios from 'axios';

// Initial State
const initialState = {
    cartItems: [],
    totalCartItems: 0,
    totalAmount: 0,
    isLoading: false,
    errorMessage: null
}

// First create the thunk
export const fetchProductData = createAsyncThunk(
    'products/data',
    // API call
    async () => {
        const baseUrl = 'https://course-api.com/react-useReducer-cart-project';
        const response = await axios(baseUrl)
        return response.data;
    }
)

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
            const productId = action.payload;
            state.cartItems = state.cartItems.filter((item) => {
                return item.id !== productId;
            });
        },
        increaseItem: (state, {
            payload
        }) => {
            const selectedItem = state.cartItems.find(
                (item) => item.id === payload.id
            );
            selectedItem.amount += 1;
        },
        decreaseItem: (state, {
            payload
        }) => {
            const selecteddItem = state.cartItems.find(
                (item) => item.id === payload.id
            );
            selecteddItem.amount -= 1;
        },
        calculateTotal: (state) => {
            let totalCartItems = 0;
            let totalAmount = 0;
            state.cartItems.forEach((item) => {
                totalCartItems += item.amount;
                totalAmount += item.price * item.amount;
            });
            state.totalCartItems = totalCartItems;
            state.totalAmount = totalAmount;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProductData.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchProductData.fulfilled, (state, action) => {
                state.isLoading = false;
                state.cartItems = action.payload;
            })
            .addCase(fetchProductData.rejected, (state) => {
                state.isLoading = false;
                state.errorMessage = 'network-issue';
            });
    },
});

// exporting reducer
export default cartSlice.reducer;

// exporting actions
export const {
    clearCart,
    removeItem,
    increaseItem,
    decreaseItem,
    calculateTotal
} = cartSlice.actions;