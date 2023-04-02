import {createAsyncThunk} from "@reduxjs/toolkit"
import * as service from "./tuits-service"

export const findTuitPostsThunk = createAsyncThunk(
    'tuitPosts/findTuitPosts', async () =>
        await service.findTuitPosts()
)

export const deleteTuitPostThunk = createAsyncThunk(
    'tuitPosts/deleteTuitPost', async (tuitPostId) => {
        await service.deleteTuitPost(tuitPostId)
        return tuitPostId
    })

export const createTuitPostThunk = createAsyncThunk(
    'tuitPosts/createTuitPost', async (tuitPost) => {
    const newTuitPost = await service.createTuitPost(tuitPost)
    return newTuitPost
})

export const updateTuitPostThunk = createAsyncThunk(
    'tuitPosts/updateTuitPost', async (tuitPost) =>
            await service.updateTuitPost(tuitPost)
    )

