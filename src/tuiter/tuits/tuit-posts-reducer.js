import {createSlice} from "@reduxjs/toolkit";
import tuitPosts from './tuit-posts.json';
import {createTuitPostThunk, deleteTuitPostThunk, findTuitPostsThunk, updateTuitPostThunk}
    from "../../services/tuits-thunks";

const initialState = {
    tuitPosts: [],
    loading: false
}

const currentUser = {
    "userIcon": "cow.webp",
    "userName": "Jiazhe",
    "handle": "@jiazhe"
};

const templateTuitPost = {
    ...currentUser,
    "topic": "",
    "time": "1h",
    "image": "google.jpg",
    "title": "Google",
    "content": "Google it!",
    "href": "https://www.google.com/",
    "replies": 0,
    "retuits": 0,
    "likes": 0,
    "liked": false,
    "dislikes": 0,
    "disliked": false
}

const tuitPostSlice = createSlice({
    name: 'tuitPosts',
    initialState,
    extraReducers: {
        [findTuitPostsThunk.pending]:
            (state) => {
                state.loading = true
                state.tuitPosts = []
            },
        [findTuitPostsThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                state.tuitPosts = payload
            },
        [findTuitPostsThunk.rejected]:
            (state, action) => {
                state.loading = false
                state.error = action.error
            },
        [deleteTuitPostThunk.fulfilled] :
            (state, { payload }) => {
                state.loading = false
                state.tuitPosts = state.tuitPosts
                    .filter(t => t._id !== payload)
            },
        [createTuitPostThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                state.tuitPosts.push(payload)
            },
        [updateTuitPostThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                const tuitPostNdx = state.tuitPosts
                    .findIndex((t) => t._id === payload._id)
                state.tuitPosts[tuitPostNdx] = {
                    ...state.tuitPosts[tuitPostNdx],
                    ...payload
                }
            }

    },
    reducers: {
        // deleteTuitPost(state, action) {
        //     const index = state
        //         .findIndex(tuitPost =>
        //             tuitPost._id === action.payload);
        //     state.splice(index, 1);
        // },
        // createTuitPost(state, action) {
        //     state.unshift({
        //         ...action.payload,
        //         ...templateTuitPost,
        //         _id: (new Date()).getTime()
        //     })
        // },
        // updateTuitPost(state, action) {
        //     const index = state
        //         .findIndex(tuitPost =>
        //             tuitPost._id === action.payload._id);
        //     state.splice(index, 1, action.payload);
        // }
    }
});
export const {createTuitPost, deleteTuitPost, updateTuitPost} = tuitPostSlice.actions;
export default tuitPostSlice.reducer;