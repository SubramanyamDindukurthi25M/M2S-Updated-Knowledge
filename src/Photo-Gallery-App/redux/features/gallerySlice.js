import {
    createSlice,
    createAsyncThunk
} from "@reduxjs/toolkit";
import axios from "axios";

// Initial State
const initialState = {
    galleryData: [],
    isLoading: false,
    errorMessage: null
}

// First create the thunk
export const fetchGalleryData = createAsyncThunk(
    'gallery/picsum',
    // API Call
    async () => {
        const baseUrl = 'https://picsum.photos/v2/list?page=1&limit=8';
        const response = await axios.get(baseUrl);
        return response.data;
    }
)

const gallerySlice = createSlice({
    name: 'galleryList',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchGalleryData.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchGalleryData.fulfilled, (state, action) => {
                state.isLoading = false;
                state.galleryData = action.payload;
            })
            .addCase(fetchGalleryData.rejected, (state) => {
                state.isLoading = false;
                state.errorMessage = 'network-issue';
            })
    }
})

// exporting reducer
export default gallerySlice.reducer;