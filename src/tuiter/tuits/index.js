import React from "react";
import {useSelector} from "react-redux";
import TuitPostItem from "./tuit-post-item";

const TuitPostList = () => {
    const tuitPostsArray = useSelector((state) => state.tuitPosts);
    return(
        <>
            {tuitPostsArray.map(tuitPost => <TuitPostItem key={tuitPost._id} tuitPost={tuitPost}/>)}
        </>
    );
};
export default TuitPostList;