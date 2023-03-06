import React from "react";
import {Link} from "react-router-dom";
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
                        <Link to="/tuiter/explore-foryou" className="nav-link active wd-active-nav-tab rounded">For you</Link>
                    </li>
                    <li className="nav-item wd-hover-effect">
                        <Link to="/tuiter/explore-trending" className="nav-link rounded">Trending</Link>
                    </li>
                    <li className="nav-item wd-hover-effect">
                        <Link to="/tuiter/explore-news" className="nav-link rounded">News</Link>
                    </li>
                    <li className="nav-item wd-hover-effect">
                        <Link to="/tuiter/explore-sports" className="nav-link rounded">Sports</Link>
                    </li>
                    <li className="nav-item wd-hover-effect d-sm-none d-md-block">
                        <Link to="/tuiter/explore-entertainment" className="nav-link rounded">Entertainment</Link>
                    </li>
                </ul>
            </div>

            <div className="list-group-item border-0 rounded-bottom">
                <div className="card">
                    <a href="https://www.spacex.com">
                        <img src={`${process.env.PUBLIC_URL}/images/spaceXstarship.webp`}
                             className="card-img-top img-fluid wd-card-image-text-anchor" alt="SpaceX's Starship"/>
                        <div className="card-img-overlay d-flex flex-column justify-content-center" style={{padding: "0px"}}>
                            <span className="text-white wd-card-image-text" style={{width: "50%"}}>SpaceX's Starship</span>
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