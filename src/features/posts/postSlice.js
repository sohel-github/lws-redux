import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getPost } from "./fetchAPI"

const initialState = {
    posts: [],
    isLoading: false,
    isError: false,
    error: null,
}

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
    const posts = await getPost()

    return posts
})

const postSlice = createSlice({
    'name': 'posts',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchPosts.pending, (state) => {
            state.isError = false
            state.isLoading = true
        })
        .addCase(fetchPosts.fulfilled, (state, action) => {
            state.isLoading = false,
            state.posts = action.payload
        })
        .addCase(fetchPosts.rejected, (state, action) => {
            state.error = true
            state.isLoading = false
            state.error = action.error?.message
        })
    }
})

export default postSlice.reducer