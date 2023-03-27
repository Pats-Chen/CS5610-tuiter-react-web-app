import React from "react";
import TuitPostStats from "./tuit-post-stats";
import {deleteTuitPost} from "./tuit-posts-reducer";
import {useDispatch} from "react-redux";
const TuitPostItem = (
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
    const dispatch = useDispatch();
    const deleteTuitPostHandler = (id) => {
        dispatch(deleteTuitPost(id));
    }

    return(
        <div className="container">
            <div className="row mt-2 rounded wd-hover-effect">
                <div className="col-1 ps-1 pe-0 pt-3">
                    <img src={`${process.env.PUBLIC_URL}/images/${tuitPost.userIcon}`}
                         className="img-fluid rounded-circle float-start" width="48" height="48"/>
                </div>

                <div className="col-11 p-2">
                    <div className="list-group">
                        <div className="list-group-item bg-transparent border-0 ps-0">
                            <i className="bi bi-x-lg float-end"
                               onClick={() => deleteTuitPostHandler(tuitPost._id)}></i>
                            <span><b>{`${tuitPost.userName}`}</b><i className="fa fa-check-circle ps-1"></i></span>
                            <span className="text-muted ps-1">{`${tuitPost.handle}`} - {`${tuitPost.time}`}</span>
                            <div className="text-wrap">{`${tuitPost.tuit}`}</div>
                        </div>
                        <div className="list-group-item rounded bg-transparent border-0 ps-0">
                            <div className="card">
                                <a href={`${tuitPost.href}`}><img src={`${process.env.PUBLIC_URL}/images/${tuitPost.image}`}
                                                              className="card-img-top img-fluid" alt={`${tuitPost.title}`}/></a>
                                <div className="card-body">
                                    <span className="card-text">
                                        {tuitPost.title && <div className="text-wrap wd-footnote-size">{`${tuitPost.title}`}</div>}
                                        {!tuitPost.title && ''}
                                        {tuitPost.content && <span className="text-wrap text-muted wd-footnote-size">{`${tuitPost.content}`}</span>}
                                        {!tuitPost.content && ''}
                                        <div><i className="fa fa-link fa-1x pe-1"></i>{`${tuitPost.href}`}</div>
                                    </span>
                                    <a href={`${tuitPost.href}`} className="stretched-link"></a>
                                </div>
                            </div>
                        </div>

                        <TuitPostStats key={tuitPost._id} tuitPost={tuitPost}/>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default TuitPostItem;

