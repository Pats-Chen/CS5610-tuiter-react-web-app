import React from "react";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import WhoToFollowListItem from "./who-to-follow-list-item";

const WhoToFollowList = () => {
    const whoArray = useSelector((state) => state.who);

    return(
        <div className="list-group">
            <div className="list-group-item rounded-top">
                <div className="row">
                    <div className="col-xxl-12 pt-2 pb-2">
                        <span style={{fontSize: "18px"}}><b>Who to follow</b></span>
                    </div>
                </div>
            </div>

            {
                whoArray.map(who =>
                    <WhoToFollowListItem
                        key={who._id}
                        who={who}/>
                )
            }

            <div className="list-group-item wd-hover-effect rounded-bottom">
                <div className="row">
                    <div className="col-xxl-12">
                        <Link to="/tuiter/explore"><b>Show more</b></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhoToFollowList;