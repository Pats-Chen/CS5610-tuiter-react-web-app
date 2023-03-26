import React from "react";
import {Link} from "react-router-dom";
import TuitPostList from "../tuits";
import "./index.css";
const HomeComponent = () => {
    return(
        <div className="list-group">
            <div className="list-group-item bg-transparent rounded border-0 pt-1">
                <div className="row">
                    <Link to="/" className="btn btn-primary btn-block rounded-pill"
                       role="button">Back</Link>
                    <form className="mb-2">
                        <div className="form-group">
                            <label className="mt-1 mb-1" htmlFor="textinput"><b>Tuiter</b></label>
                            <textarea className="form-control" id="textinput" rows="5"
                                      placeholder="What's happening?"/>
                        </div>

                        <div className="form-group">
                            <label className="mt-1 mb-1" htmlFor="exampleFormControlSelect1"><b>Select Visibility</b></label>
                            <select className="form-control" id="selectinput">
                                <option value="EVERYONE" selected>Everyone can reply</option>
                                <option value="FOLLOWING">People you follow</option>
                                <option value="MENTIONED">Only people you mention</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <div><label className="mt-1 mb-1" htmlFor="fileinput"><b>Choose Files to Upload</b></label></div>
                            <div><input type="file" className="form-control-file" id="fileinput"/></div>
                        </div>
                    </form>
                    <Link to="/tuiter/tuit" className="btn btn-primary btn-block rounded-pill" role="button">Tuit</Link>
                    <span> </span>
                </div>
            </div>

            <TuitPostList/>
        </div>
    );
};
export default HomeComponent;