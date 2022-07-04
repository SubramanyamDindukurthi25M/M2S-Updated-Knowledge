import {
    createSlice
} from "@reduxjs/toolkit/";

const initialStateValue = {
    count: 0
}

const counterSlice = createSlice({
    name: 'counter',
    initialState: initialStateValue,
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
})

// export actions
export const {
    increment,
    decrement,
    incrementBy
} = counterSlice.actions;

// exporting reducers
export default counterSlice.reducer;