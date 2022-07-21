import {
    createSlice
} from "@reduxjs/toolkit";

// initial state
const initialState = {
    numbers: []
}

// creating slice
const numbersSlice = createSlice({
    name: 'NUMBERSSLICE',
    initialState,
    reducers: {
        generateNumbers: (state, {
            payload
        }) => {
            state.numbers.push(payload);
        },
        incrementByTwo: (state) => {
            state.numbers.map((ele) => {
                return ele.value += 2;
            })
        }
    }
})

export const {
    generateNumbers,
    incrementByTwo
} = numbersSlice.actions;
export default numbersSlice.reducer;