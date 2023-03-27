import {createSlice} from "@reduxjs/toolkit";
import tuitPosts from './tuit-posts.json';

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
    "replies": "0",
    "retuits": "0",
    "likes": "0",
    "liked": false
}

const tuitPostSlice = createSlice({
    name: 'tuitPosts',
    initialState: tuitPosts,
    reducers: {
        deleteTuitPost(state, action) {
            const index = state
                .findIndex(tuitPost =>
                    tuitPost._id === action.payload);
            state.splice(index, 1);
        },
        createTuitPost(state, action) {
            state.unshift({
                ...action.payload,
                ...templateTuitPost,
                _id: (new Date()).getTime()
            })
        },
        likeTuitPost(state, action) {
        }
    }
});
export const {createTuitPost, deleteTuitPost} = tuitPostSlice.actions;
export default tuitPostSlice.reducer;