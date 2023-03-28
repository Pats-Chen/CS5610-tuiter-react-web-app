import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {updateProfile} from "./profile-reducer";
import "./edit-profile.css";

const EditProfileComponent = () => {
    const dispatch = useDispatch();
    const profile = useSelector((state) => state.profile);
    let [profileInfo, setProfileInfo] = useState(profile);

    return(
        <div className="list-group">
            <div className="list-group-item bg-transparent rounded border-0 pt-1">
                <div className="row">
                    <div className="col-1">
                        <span className="wd-cross-mark">
                            <Link to="/tuiter/profile" role="button">
                                <i className="fa fa-arrow-left wd-hover-effect pe-1 float-start"
                                   style={{fontSize: "1.5em", color: "dimgray"}}/>
                            </Link>

                        </span>
                    </div>

                    <div className="col-11 pt-2">
                        <span><b>Edit Profile</b></span>
                        <Link to="/tuiter/profile" className="btn btn-primary btn-block rounded-pill float-end"
                              role="button"
                              onClick={() => dispatch(updateProfile(profileInfo))}>Save</Link>
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
                </div>

            </div>

            <div className="list-group-item bg-transparent border-0 pt-1">
                <div className="pt-1">
                    <label htmlFor="firstName">First Name</label>
                    <textarea id="firstName" value={profileInfo.firstName}
                              className="form-control border-0"
                              onChange={(event) => setProfileInfo({
                                  ...profileInfo,
                                  firstName: event.target.value
                              })}/>
                </div>
                <div className="pt-1">
                    <label htmlFor="lastName">Last Name</label>
                    <textarea id="lastName" value={profileInfo.lastName}
                              className="form-control border-0"
                              onChange={(event) => setProfileInfo({
                                  ...profileInfo,
                                  lastName: event.target.value
                              })}/>
                </div>
                <div className="pt-1">
                    <label htmlFor="bio">Bio</label>
                    <textarea id="bio" value={profileInfo.bio}
                              className="form-control border-0"
                              onChange={(event) => setProfileInfo({
                                  ...profileInfo,
                                  bio: event.target.value
                                  })}/>
                </div>
                <div className="pt-1">
                    <label htmlFor="location">Location</label>
                    <textarea id="location" value={profileInfo.location}
                              className="form-control border-0"
                              onChange={(event) => setProfileInfo({
                                  ...profileInfo,
                                  location: event.target.value
                              })}/>
                </div>
                <div className="pt-1">
                    <label htmlFor="website">Website</label>
                    <textarea id="website" value={profileInfo.website}
                              className="form-control border-0"
                              onChange={(event) => setProfileInfo({
                                  ...profileInfo,
                                  website: event.target.value
                              })}/>
                </div>
                <div className="pt-1 pb-3">
                    <label htmlFor="dateOfBirth">Birth Date</label>
                    <input id="dateOfBirth" type="date" value={profileInfo.dateOfBirth}
                           className="form-control border-0"
                           onChange={(event) => setProfileInfo({
                               ...profileInfo,
                               dateOfBirth: event.target.value
                           })}/>
                </div>

                <div>
                    <Link to="/tuiter/profile" className="btn btn-primary btn-block rounded-pill float-start"
                          role="button">Switch to Professional</Link>
                </div>
            </div>
        </div>
    );
};

export default EditProfileComponent;