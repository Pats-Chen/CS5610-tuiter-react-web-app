import React from "react";
import PostSummaryList from "../post-summary-list";
import "./index.css";
const ExploreComponent = () => {
    return(
        <div className="list-group p">
            <div className="list-group-item border-0">
                <div className="row">
                    <div className="col-11">
                        <div className="input-group has-feedback wd-search-bar">
                            <input type="text"
                                   className="form-control form-input rounded-pill wd-search-bar-input-background"
                                   placeholder="Search Tuiter"/>
                            <span><i className="fa fa-search form-control-feedback"
                                     style={{color: "lightslategrey"}}/>
                            </span>
                        </div>
                    </div>

                    <div className="col-1">
                        <span className="wd-setting">
                            <i className="fa fa-cog wd-hover-effect rounded-1"
                               style={{fontSize: "1.5em", color: "#0275d8"}}/>
                        </span>
                    </div>
                </div>
            </div>

            <div className="list-group-item border-0">
                <ul className="nav nav-pills">
                    <li className="nav-item wd-hover-effect-active">
                        <a className="nav-link active wd-active-nav-tab rounded" href="explore-foryou.html">For you</a>
                    </li>
                    <li className="nav-item wd-hover-effect">
                        <a className="nav-link rounded" href="explore-trending.html">Trending</a>
                    </li>
                    <li className="nav-item wd-hover-effect">
                        <a className="nav-link rounded" href="explore-news.html">News</a>
                    </li>
                    <li className="nav-item wd-hover-effect">
                        <a className="nav-link rounded" href="explore-sports.html">Sports</a>
                    </li>
                    <li className="nav-item wd-hover-effect d-sm-none d-md-block">
                        <a className="nav-link rounded" href="explore-entertainment.html">Entertainment</a>
                    </li>
                </ul>
            </div>

            <div className="list-group-item border-0 rounded-bottom">
                <div className="card">
                    <a href="https://www.spacex.com">
                        <img src={`${process.env.PUBLIC_URL}/images/spaceXstarship.webp`}
                             className="card-img-top img-fluid wd-card-image-text-anchor" alt="SpaceX's Starship"/>
                        <div className="carousel-caption d-none d-md-block">
                            <span className="text-white wd-card-image-text"><b>SpaceX's Starship</b></span>
                        </div>
                    </a>
                    <div className="card-body">
                        <PostSummaryList/>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default ExploreComponent;