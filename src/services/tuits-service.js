import axios from 'axios';
const API_BASE = process.env.REACT_APP_API_BASE;
const TUITS_API = `${API_BASE}/tuits`;


export const createTuitPost = async (tuitPost) => {
    const response = await axios.post(TUITPOSTS_API, tuitPost)
    return response.data;
}

export const findTuitPosts = async () => {
    const response = await axios.get(TUITPOSTS_API);
    const tuitPosts = response.data;
    return tuitPosts;
}

export const deleteTuitPost = async (tpid) => {
    const response = await axios
        .delete(`${TUITPOSTS_API}/${tpid}`)
    return response.data
}

export const updateTuitPost = async (tuitPost) => {
    const response = await axios
        .put(`${TUITPOSTS_API}/${tuitPost._id}`, tuitPost);
    return tuitPost;
}
