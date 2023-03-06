import React from "react";
import itemsArray from './items.json';
import PostItem from "./post-item";

const PostList = () => {
    return(
        <>
            {itemsArray.map(post => <PostItem key={post._id} post={post}/> )}
        </>
    );
};
export default PostList;