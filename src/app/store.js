import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../features/counters/counterSlice'
import postSlice from '../features/posts/postSlice'

const store = configureStore({
    reducer: {
        counters: counterReducer,
        posts: postSlice
    }
})

export default store