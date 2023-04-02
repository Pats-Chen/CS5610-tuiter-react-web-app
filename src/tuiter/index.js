import React from "react";
import {Link} from "react-router-dom";
import {Routes, Route} from "react-router";
import ExploreComponent from "./explore";
import HomeComponent from "./home";
import ProfileComponent from "./profile";
import EditProfileComponent from "./profile/edit-profile";
import NavigationSidebar from "./navigation-sidebar";
import WhoToFollowList from "./who-to-follow-list";
import whoReducer from "./reducers/who-reducer";
import tuitsReducer from "./tuits/tuits-reducer";
import tuitPostsReducer from "./tuits/tuit-posts-reducer";
import {configureStore} from '@reduxjs/toolkit';
import {Provider} from "react-redux";
import profileReducer from "./profile/profile-reducer";

const store = configureStore(
    {reducer: {who: whoReducer, tuits: tuitsReducer, tuitPostsData: tuitPostsReducer, profile: profileReducer}});

function Tuiter() {
    return (
        <Provider store={store}>
        <div className="container rounded">
            <div className="row mt-2">
                <NavigationSidebar active="explore"/>

                <div className="col-xxl-6 col-xl-7 col-lg-8 col-md-10 col-sm-11 ps-2 pe-2">
                    <Routes>
                        <Route path="home"    element={<HomeComponent/>}/>
                        <Route path="explore" element={<ExploreComponent/>}/>
                        <Route path="profile" element={<ProfileComponent/>}/>
                        <Route path="edit-profile" element={<EditProfileComponent/>}/>
                    </Routes>
                </div>

                <div className="d-none d-lg-block col-xxl-4 col-xl-3 col-lg-3 ps-2">
                    <WhoToFollowList/>
                    <div className="mt-2 ms-3">
                        <div>
                            <Link to="/tuiter/home" className="wd-footnote-size">Terms of Service</Link><span> </span>
                            <Link to="/tuiter/home" className="wd-footnote-size">Privacy Policy</Link><span> </span>
                            <Link to="/tuiter/home" className="wd-footnote-size">Cookie Policy</Link>
                        </div>
                        <div>
                            <Link to="/tuiter/home" className="wd-footnote-size">Accessibility</Link><span> </span>
                            <Link to="/tuiter/home" className="wd-footnote-size">Ads info</Link><span> </span>
                            <Link to="/tuiter/home" className="wd-footnote-size">More ···</Link>
                        </div>
                        <div>
                            <span className="wd-footnote-size">Ⓒ 2023 Tuiter, Inc.</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </Provider>
    );
}

export default Tuiter
