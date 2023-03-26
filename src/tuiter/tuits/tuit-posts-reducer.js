import {createSlice} from "@reduxjs/toolkit";
import tuitPosts from './tuit-posts.json';

const tuitPostSlice = createSlice({
    name: 'tuitPosts',
    initialState: tuitPosts,
});

export default tuitPostSlice.reducer;