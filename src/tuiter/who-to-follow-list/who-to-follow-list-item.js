import React from "react";

const WhoToFollowListItem = (
    {who = { userName: 'Java', handler: 'Java', avatarIcon: 'java.png', href: 'https://www.java.com' } }
) => {
    return(
        <div className="list-group-item wd-hover-effect">
            <div className="row justify-content-center align-items-center">
                <div className="col-xxl-2 col-xl-3 col-lg-4">
                    <img src={`${process.env.PUBLIC_URL}/images/${who.avatarIcon}`} className="img-fluid rounded-circle float-start" width="48px" height="48px"/>
                </div>
                <div className="col-xxl-8 col-xl-6 col-lg-4">
                    <span className="fw-bold"><a href={`${who.href}`}>{who.userName}</a></span>
                    <i className="fa fa-check-circle ps-1"></i>
                    <div className="wd-footnote-size">@{who.handler}</div>
                </div>
                <div className="col-xxl-2 col-xl-3 col-lg-4">
                    <a className="btn btn-primary rounded-pill float-end" href={`${who.href}`} role="button">Follow</a>
                </div>
            </div>
        </div>
    );
};
export default WhoToFollowListItem;
