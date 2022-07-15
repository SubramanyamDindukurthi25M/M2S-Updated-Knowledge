import {
    createSlice,
    createAsyncThunk
} from '@reduxjs/toolkit';
import axios from 'axios';

// Initial State
const initialStateValue = {
    catsData: [],
    isLoading: false,
    errorMessage: null,
};

// First, create the thunk
export const fetchCatsByUrl = createAsyncThunk(
    'cats/fetchByUrl',
    // API call
    async () => {
        const urlAddress = 'https://api.thecatapi.com/v1/breeds';
        const response = await axios.get(urlAddress);
        return response.data;
    }
);

const catsSlice = createSlice({
    name: 'catsList',
    initialState: initialStateValue,
    extraReducers: (builder) => {
        builder
            .addCase(fetchCatsByUrl.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchCatsByUrl.fulfilled, (state, action) => {
                state.isLoading = false;
                state.catsData = action.payload;
            })
            .addCase(fetchCatsByUrl.rejected, (state) => {
                state.isLoading = false;
                state.errorMessage = 'network-issue';
            });
    },
});

// exporting reducer
export default catsSlice.reducer;