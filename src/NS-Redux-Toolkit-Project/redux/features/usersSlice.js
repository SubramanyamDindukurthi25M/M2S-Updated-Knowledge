import {
    createSlice,createAsyncThunk
} from "@reduxjs/toolkit";
import axios from "axios";

// Initial State
const initialStateValue = {
    usersData:[],
    isLoading:false,
    errorMessage:null 
}

// First, create the thunk
export const fetchUserByUrl = createAsyncThunk(
    'users/fetchByUrl',
    // API call
    async () => {
        const urlAddress = 'https://jsonplaceholder.typicode.com/users';
        const response = await axios.get(urlAddress);
        return response.data;
    }
)

const usersSlice = createSlice({
    name: 'usersList',
    initialState:initialStateValue,
    extraReducers: (builder) => {
        builder
        .addCase(fetchUserByUrl.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(fetchUserByUrl.fulfilled, (state,action) => {
            state.isLoading = false;
            state.usersData = action.payload;
        })
        .addCase(fetchUserByUrl.rejected, (state) => {
            state.isLoading = false;
            state.errorMessage = 'network-issue';
        })
    }
});

// exporting reducer
export default usersSlice.reducer;