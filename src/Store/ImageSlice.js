import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    images: [],
    index: 0
}
export const ImageSlice = createSlice({
    name: "images",
    initialState,
    reducers: {
        nextImage: (state) => {
            if (state.index < state.images.length - 1) {
                state.index += 1;
            }
            else {
                state.index = 0;
            }
        },
        previosImage: (state) => {
            if (state.index > 0) {
                state.index -= 1;
            }
            else {
                state.index = state.images.length - 1;
            }
        },
        spesificImage: (state, actions) => {
            state.index = actions.payload;
        },
        getImages: (state, actions) => {
            state.images = actions.payload;
        }
    }
})
export const { nextImage, previosImage, spesificImage,getImages } = ImageSlice.actions;
export default ImageSlice.reducer;