import React from "react";
import {Link} from "react-router-dom";
import TuitPostList from "../tuits";
import WhatsHappening from "./whats-happening";
import "./index.css";
const HomeComponent = () => {
    return(
        <div className="list-group">
            <div className="list-group-item bg-transparent rounded border-0 pt-1">
                <h4>Home</h4>
                <div className="row">
                    <Link to="/" className="btn btn-primary btn-block rounded-pill"
                       role="button">Back</Link>
                </div>
                <div className="mt-2">
                    <WhatsHappening/>
                </div>
            </div>

            <TuitPostList/>
        </div>
    );
};
export default HomeComponent;