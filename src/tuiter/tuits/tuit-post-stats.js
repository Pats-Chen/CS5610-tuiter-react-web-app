import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {updateTuitPostThunk} from "../../services/tuits-thunks";

const TuitPostStats = ({tuitPost}) => {
    const dispatch = useDispatch();
    const likeTuitPostClickHandler = (tuitPost) => {
        dispatch(updateTuitPostThunk({
            ...tuitPost,
            likes: tuitPost.likes + 1,
            liked: true
        }));
    }
    const unlikeTuitPostClickHandler = (tuitPost) => {
        dispatch(updateTuitPostThunk({
            ...tuitPost,
            likes: tuitPost.likes - 1,
            liked: false
        }));
    }
    const dislikeTuitPostClickHandler = (tuitPost) => {
        dispatch(updateTuitPostThunk({
            ...tuitPost,
            dislikes: tuitPost.dislikes + 1,
            disliked: true
        }));
    }
    const undislikeTuitPostClickHandler = (tuitPost) => {
        dispatch(updateTuitPostThunk({
            ...tuitPost,
            dislikes: tuitPost.dislikes - 1,
            disliked: false
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
                                               onClick={() => unlikeTuitPostClickHandler(tuitPost)}></i>}
                        {!tuitPost.liked && <i className="fa fa-heart fa-1x pe-1"
                                               style={{color: "dimgray"}}
                                               role="button"
                                               onClick={() => likeTuitPostClickHandler(tuitPost)}></i>}
                        <span className="text-muted">{`${tuitPost.likes}`}</span>
                    </div>
                    <div className="col-3">
                        { tuitPost.disliked && <i className="fa fa-thumbs-down fa-1x pe-1"
                                               style={{color: "blue"}}
                                               role="button"
                                               onClick={() => undislikeTuitPostClickHandler(tuitPost)}></i>}
                        {!tuitPost.disliked && <i className="fa fa-thumbs-down fa-1x pe-1"
                                               style={{color: "dimgray"}}
                                               role="button"
                                               onClick={() => dislikeTuitPostClickHandler(tuitPost)}></i>}
                        <span className="text-muted">{`${tuitPost.dislikes}`}</span>
                    </div>
                </div>
            </div>
        </>
    );
};
export default TuitPostStats;