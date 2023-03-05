import {Link} from "react-router-dom";
import Nav from "../nav";
import React from "react";
import ExploreComponent from "./explore";
import NavigationSidebar from "./navigation-sidebar";
import WhoToFollowList from "./who-to-follow-list";

function Tuiter() {
    return (
        <div className="container rounded">
            <div className="row mt-2">
                <NavigationSidebar active="explore"/>

                <div className="col-xxl-6 col-xl-7 col-lg-8 col-md-10 col-sm-11 ps-2 pe-2">
                    <ExploreComponent/>
                </div>

                <div className="d-none d-lg-block col-xxl-4 col-xl-3 col-lg-3 ps-2">
                    <WhoToFollowList/>
                    <div className="mt-2 ms-3">
                        <div>
                            <a className="wd-footnote-size" href="#">Terms of Service</a><span> </span>
                            <a className="wd-footnote-size" href="#">Privacy Policy</a><span> </span>
                            <a className="wd-footnote-size" href="#">Cookie Policy</a>
                        </div>
                        <div>
                            <a className="wd-footnote-size" href="#">Accessibility</a><span> </span>
                            <a className="wd-footnote-size" href="#">Ads info</a><span> </span>
                            <a className="wd-footnote-size" href="#">More ···</a>
                        </div>
                        <div>
                            <span className="wd-footnote-size">Ⓒ 2023 Tuiter, Inc.</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Tuiter
