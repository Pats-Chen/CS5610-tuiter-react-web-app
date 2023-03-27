import React from "react";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
import "./index.css";
const ProfileComponent = (
    {
        profile = {
            "firstName": "Jose",
            "lastName": "Annunziato",
            "handle": "@jannunzi",
            "profilePicture": "cow.webp",
            "bannerPicture": "polyglot.jpg",
            "bio": "Faculty, Software Engineer, AI, Space, and renewable enthusiast. Retuits and likes are not endorsements.",
            "website": "youtube.com/webdevtv",
            "location": "Boston, MA",
            "dateOfBirth": "1968-07-07",
            "dateJoined": "2009-04",
            "numberOfTuits": "6,114",
            "followingCount": "340",
            "followersCount": "223"
        }
    }
) => {
    const profileArray = useSelector((state) => state.profile);
    return(
        <div className="list-group">
            <div className="list-group-item bg-transparent rounded border-0 pt-1">
                <h4>Profile</h4>
            </div>

            <div className="list-group-item bg-transparent border-0 pt-1">
                <div className="row">
                    <div className="col-1">
                        <span className="wd-back-arrow">
                            <i className="fa fa-arrow-left wd-hover-effect pe-1 float-start"
                               style={{fontSize: "1.5em", color: "dimgray"}}/>
                        </span>
                    </div>

                    <div className="col-11">
                        <div>
                            <span className="pe-1"><b>{`${profile.firstName}`}</b></span>
                            <span><b>{`${profile.lastName}`}</b></span>
                        </div>
                        <div>
                            <span>{`${profile.numberOfTuits}`}</span>
                            <span> </span>
                            <span>Tuits</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="list-group-item bg-transparent border-0 pt-1">
                <div>
                    <img src={`${process.env.PUBLIC_URL}/images/${profile.bannerPicture}`}
                         className="img-fluid" width="1500" height="500"/>
                </div>

                <div className="mt-2 ms-2 me-2">
                    <img src={`${process.env.PUBLIC_URL}/images/${profile.profilePicture}`}
                         className="img-fluid rounded-circle float-start" width="72" height="72"/>

                    <Link to="/tuiter/edit-profile" className="btn btn-primary btn-block rounded-pill float-end"
                          role="button">Edit Profile</Link>
                </div>

            </div>

            <div className="list-group-item bg-transparent border-0 pt-1">
                <div>
                    <span className="pe-1"><b>{`${profile.firstName}`}</b></span>
                    <span><b>{`${profile.lastName}`}</b></span>
                </div>
                <div className="mb-2">
                    <span className="text-muted">{`${profile.handle}`}</span>
                </div>
                <div className="mt-2">
                    <span>{`${profile.bio}`}</span>
                </div>
            </div>

            <div className="list-group-item bg-transparent border-0 pt-1">
                <span className="me-4">
                    <i className="fa fa-compass fa-1x pe-1" style={{color: "dimgray"}}></i><span className="text-muted">{`${profile.location}`}</span>
                </span>
                <span className="me-4">
                    <i className="fa fa-birthday-cake fa-1x pe-1" style={{color: "dimgray"}}></i><span className="text-muted">{`${profile.dateOfBirth}`}</span>
                </span>
                <span className="me-4">
                    <i className="fa fa-calendar-week fa-1x pe-1" style={{color: "dimgray"}}></i><span className="text-muted">{`${profile.dateJoined}`}</span>
                </span>
            </div>

            <div className="list-group-item bg-transparent border-0 pt-1">
                <span className="pe-3">
                    <span className="pe-1"><b>{`${profile.followingCount}`}</b></span>
                    <span className="text-muted">Following</span>
                </span>
                <span className="pe-3">
                    <span className="pe-1"><b>{`${profile.followersCount}`}</b></span>
                    <span className="text-muted">Followers</span>
                </span>
            </div>
        </div>
    );
};
export default ProfileComponent;