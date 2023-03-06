import React from "react";
const PostSummaryItem = (
    {
        post = {
            "topic": "Web Development",
            "userName": "React JS",
            "time": "2h",
            "image": "reactjs.webp",
            "title": "React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs.",
            "href": "https://reactjs.org",
            "tweets": ""
        }
    }
) => {
    return(
        <div className="row g-0 position-relative wd-hover-effect rounded-1 p-1">
            <div className="col-10">
                <div>
                    <span><b>{`${post.userName}`}</b><i className="fa fa-check-circle ps-1"></i></span>
                    <span className="text-muted ps-1">- {`${post.time}`}</span>
                </div>
                <div className="fw-bolder">{post.topic}</div>
                <div className="text-wrap">{post.title}</div>
            </div>
            <div className="col-2 mt-1">
                <img src={`${process.env.PUBLIC_URL}/images/${post.image}`} className="img-fluid rounded float-end" width="100px" height="100px"/>
            </div>
            <a href={`${post.href}`} className="stretched-link"></a>
        </div>
    );
};
export default PostSummaryItem;

