import { configureStore } from "@reduxjs/toolkit";
import ImageReducer from './ImageSlice'
export const store = configureStore({
    reducer: {
        images: ImageReducer
    }
})