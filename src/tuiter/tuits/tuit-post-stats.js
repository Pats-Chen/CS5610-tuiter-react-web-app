import React, {useState} from "react";
import {useDispatch} from "react-redux";
const TuitPostStats = (
    {
        tuitPost = {
            "_id": "1",
            "userIcon": "fox.png",
            "userName": "Alice",
            "handle": "@alice",
            "tuit": "Amazing film by Christopher Nolan!",
            "topic": "Movie",
            "time": "2h",
            "image": "inception.jpg",
            "title": "Inception | Movies - WarnerBros.com",
            "content": "Your mind is the scene of the crime. Box-office superstar Leonardo DiCaprio stars in this contemporary science fiction action film set \"within the architecture of the mind.\"",
            "href": "https://www.warnerbros.com/movies/inception",
            "replies": "4.2K",
            "retuits": "3.5K",
            "likes": "347",
            "liked": true
        }
    }
) => {
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
                        { tuitPost.liked && <i className="fa fa-heart fa-1x pe-1" style={{color: "red"}}></i>}
                        {!tuitPost.liked && <i className="fa fa-heart fa-1x pe-1" style={{color: "dimgray"}}></i>}
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