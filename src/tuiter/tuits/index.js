import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import TuitPostItem from "./tuit-post-item";
import {findTuitPostsThunk} from "../../services/tuits-thunks";

const TuitPostList = () => {
    const {tuitPosts, loading} = useSelector((state) => state.tuitPostsData);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(findTuitPostsThunk())
    }, [])

    return(
        <>
            { loading && <span>Loading...</span>}
            {!loading && tuitPosts.map(tuitPost => <TuitPostItem key={tuitPost._id} tuitPost={tuitPost}/>)}
        </>
    );
};
export default TuitPostList;