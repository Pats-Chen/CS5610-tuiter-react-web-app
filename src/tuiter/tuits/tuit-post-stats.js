import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {updateTuitPost} from "./tuit-posts-reducer";
const TuitPostStats = ({tuitPost}) => {
    const dispatch = useDispatch();
    const likeTuitPostClickHandler = (tuitPost) => {
        dispatch(updateTuitPost({
            ...tuitPost,
            likes: tuitPost.likes + 1,
            liked: true
        }));
    }
    const dislikeTuitPostClickHandler = (tuitPost) => {
        dispatch(updateTuitPost({
            ...tuitPost,
            likes: tuitPost.likes - 1,
            liked: false
        }));
    }
    return(
        <>
            <div className="list-group-item bg-transparent border-0">
                <div className="row">
                    <div className="col-3">
                        <i className="fa fa-comment fa-1x pe-1" style={{color: "dimgray"}}></i><span className="text-muted">{`${tuitPost.replies}`}</span>
                    </div>
                    <div className="col-3">
                        <i className="fa fa-retweet fa-1x pe-1" style={{color: "dimgray"}}></i><span className="text-muted">{`${tuitPost.retuits}`}</span>
                    </div>
                    <div className="col-3">
                        { tuitPost.liked && <i className="fa fa-heart fa-1x pe-1"
                                               style={{color: "red"}}
                                               role="button"
                                               onClick={() => dislikeTuitPostClickHandler(tuitPost)}></i>}
                        {!tuitPost.liked && <i className="fa fa-heart fa-1x pe-1"
                                               style={{color: "dimgray"}}
                                               role="button"
                                               onClick={() => likeTuitPostClickHandler(tuitPost)}></i>}
                        <span className="text-muted">{`${tuitPost.likes}`}</span>
                    </div>
                    <div className="col-3">
                        <i className="fa fa-share fa-1x pe-1" style={{color: "dimgray"}}></i><span className="text-muted"></span>
                    </div>
                </div>
            </div>
        </>
    );
};
export default TuitPostStats;