import React from "react";
const PostItem = (
    {
        post = {
            "userIcon": "fox.png",
            "userName": "Alice",
            "handler": "alice",
            "tuit": "Amazing film by Christopher Nolan!",
            "time": "2h",
            "image": "inception.jpg",
            "title": "Inception | Movies - WarnerBros.com",
            "content": "Your mind is the scene of the crime. Box-office superstar Leonardo DiCaprio stars in this contemporary science fiction action film set \"within the architecture of the mind.\"",
            "href": "https://www.warnerbros.com/movies/inception",
            "replies": "4.2K",
            "retuits": "3.5K",
            "likes": "7.5K"
        }
    }
) => {
    return(
        <div className="container">
            <div className="row mt-2 rounded wd-hover-effect">
                <div className="col-1 ps-1 pe-0 pt-3">
                    <img src={`${process.env.PUBLIC_URL}/images/${post.userIcon}`}
                         className="img-fluid rounded-circle float-start" width="48" height="48"/>
                </div>

                <div className="col-11 p-2">
                    <div className="list-group">
                        <div className="list-group-item bg-transparent border-0 ps-0">
                            <span><b>{`${post.userName}`}</b><i className="fa fa-check-circle ps-1"></i></span>
                            <span className="text-muted ps-1">@{`${post.handler}`} - {`${post.time}`}</span>
                            <div className="text-wrap">{`${post.tuit}`}</div>
                        </div>
                        <div className="list-group-item rounded bg-transparent border-0 ps-0">
                            <div className="card">
                                <a href={`${post.href}`}><img src={`${process.env.PUBLIC_URL}/images/${post.image}`}
                                                              className="card-img-top img-fluid" alt={`${post.title}`}/></a>
                                <div className="card-body">
                                    <span className="card-text">
                                        {post.title && <div className="text-wrap wd-footnote-size">{`${post.title}`}</div>}
                                        {!post.title && ''}
                                        {post.content && <span className="text-wrap text-muted wd-footnote-size">{`${post.content}`}</span>}
                                        {!post.content && ''}
                                        <div><i className="fa fa-link fa-1x pe-1"></i>{`${post.href}`}</div>
                                    </span>
                                <a href={`${post.href}`} className="stretched-link"></a>
                                </div>
                            </div>
                        </div>

                        <div className="list-group-item bg-transparent border-0">
                            <div className="row">
                                <div className="col-3">
                                    <i className="fa fa-comment fa-1x pe-1" style={{color: "dimgray"}}></i><span className="text-muted">{`${post.replies}`}</span>
                                </div>
                                <div className="col-3">
                                    <i className="fa fa-retweet fa-1x pe-1" style={{color: "dimgray"}}></i><span className="text-muted">{`${post.retuits}`}</span>
                                </div>
                                <div className="col-3">
                                    <i className="fa fa-heart fa-1x pe-1" style={{color: "dimgray"}}></i><span className="text-muted">{`${post.likes}`}</span>
                                </div>
                                <div className="col-3">
                                    <i className="fa fa-share fa-1x pe-1" style={{color: "dimgray"}}></i><span className="text-muted">{`${post.likes}`}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default PostItem;

