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
                return (ele.value += 2);
            });
        },
        removeAll: (state) => {
            state.numbers = [];
        },
        increaseNum: (state, {
            payload
        }) => {
            const selectedNum = state.numbers.find((ele) => {
                return ele.id === payload.id;
            });
            selectedNum.value += 1;
        },
        decreaseNum: (state, {
            payload
        }) => {
            const selectedNum = state.numbers.find((ele) => {
                return ele.id === payload.id;
            });
            selectedNum.value -= 1;
        },
        removeNum: (state, {
            payload
        }) => {
            const NumberId = payload.id;
            state.numbers = state.numbers.filter((num) => {
                return num.id !== NumberId;
            });
        }
    },
});

export const {
    generateNumbers,
    incrementByTwo,
    removeAll,
    increaseNum,
    decreaseNum,
    removeNum
} =
numbersSlice.actions;
export default numbersSlice.reducer;