import {
    createSlice
} from '@reduxjs/toolkit';

// Initial state
const initialState = {
    count: 0
}

// creating slice
const counterSlice = createSlice({
    name: 'COUNTER',
    initialState,
    reducers: {
        increment: (state) => {
            state.count += 1;
        },
        decrement: (state) => {
            state.count -= 1;
        },
        incrementBy: (state, action) => {
            state.count += action.payload;
        }
    }
});

export const {
    increment,
    decrement,
    incrementBy
} = counterSlice.actions;
export default counterSlice.reducer;