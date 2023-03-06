import React from "react";
import {Link} from "react-router-dom";
import {useLocation} from "react-router";

const NavigationSidebar = () => {
    const {pathname} = useLocation();
    const paths = pathname.split('/')
    const active = paths[2];
    return (
        <>
            <div className="d-none d-xl-block col-xxl-2 col-xl-2 pe-2">
                <div className="d-grid list-group">
                    <Link to="/tuiter/home" className="list-group-item list-group-item-action rounded-pill wd-hover-effect border-0 mb-3">
                        <i className="fab fa-tencent-weibo fa-2x" style={{fontSize: "1.3em", color: "#0275d8"}}></i></Link>
                    <Link to="/tuiter/home" className={`list-group-item list-group-item-action rounded-pill wd-hover-effect border-0 mb-3 ${active ===  'home' ? 'active wd-hover-effect-active' : ''}`}>
                        <i className="fa fa-home fa-1x pe-1"></i><span className="text-wrap">Home</span></Link>
                    <Link to="/tuiter/explore" className={`list-group-item list-group-item-action rounded-pill wd-hover-effect border-0 mb-3 ${active ===  'explore' ? 'active wd-hover-effect-active' : ''}`}>
                        <i className="fa fa-hashtag fa-1x pe-1"></i><span className="text-wrap">Explore</span></Link>
                    <Link to="/tuiter/notification" className={`list-group-item list-group-item-action rounded-pill wd-hover-effect border-0 mb-3 ${active ===  'notification' ? 'active wd-hover-effect-active' : ''}`}>
                        <i className="fa fa-bell fa-1x pe-1"></i><span className="text-wrap">Notifications</span></Link>
                    <Link to="/tuiter/message" className={`list-group-item list-group-item-action rounded-pill wd-hover-effect border-0 mb-3 ${active ===  'message' ? 'active wd-hover-effect-active' : ''}`}>
                        <i className="fa fa-envelope fa-1x pe-1"></i><span className="text-wrap">Messages</span></Link>
                    <Link to="/tuiter/bookmark" className={`list-group-item list-group-item-action rounded-pill wd-hover-effect border-0 mb-3 ${active ===  'bookmark' ? 'active wd-hover-effect-active' : ''}`}>
                        <i className="fa fa-bookmark fa-1x pe-1"></i><span className="text-wrap">Bookmarks</span></Link>
                    <Link to="/tuiter/list" className={`list-group-item list-group-item-action rounded-pill wd-hover-effect border-0 mb-3 ${active ===  'list' ? 'active wd-hover-effect-active' : ''}`}>
                        <i className="fa fa-list fa-1x pe-1"></i><span className="text-wrap">Lists</span></Link>
                    <Link to="/" className={`list-group-item list-group-item-action rounded-pill wd-hover-effect border-0 mb-3 ${active ===  'lab' ? 'active wd-hover-effect-active' : ''}`}>
                        <i className="fa fa-fire fa-1x pe-1"></i><span className="text-wrap">Labs</span></Link>
                    <Link to="/tuiter/profile" className={`list-group-item list-group-item-action rounded-pill wd-hover-effect border-0 mb-3 ${active ===  'profile' ? 'active wd-hover-effect-active' : ''}`}>
                        <i className="fa fa-user fa-1x pe-1"></i><span className="text-wrap">Profile</span></Link>
                    <Link to="/tuiter/more" className="list-group-item list-group-item-action rounded-pill wd-hover-effect border-0 mb-3">
                        <i className="fas fa-ellipsis-h fa-1x pe-1"></i><span className="text-wrap">More</span></Link>
                </div>
                <div className="d-grid mt-2">
                    <Link to="/tuiter/tuit" className="btn btn-primary btn-block rounded-pill" role="button">Tuit</Link>
                </div>
            </div>

            <div className="d-xl-none d-sm-block col-lg-1 col-md-2 col-sm-1 pe-2">
                <div className="list-group">
                    <Link to="/tuiter/home" className="list-group-item list-group-item-action rounded-pill wd-hover-effect border-0 mb-3">
                        <i className="fab fa-tencent-weibo fa-2x" style={{fontSize: "1.3em", color: "#0275d8"}}></i></Link>
                    <Link to="/tuiter/home" className={`list-group-item list-group-item-action rounded-pill wd-hover-effect border-0 mb-3 ${active ===  'home' ? 'active wd-hover-effect-active' : ''}`}>
                        <i className="fa fa-home fa-1x pe-1"></i></Link>
                    <Link to="/tuiter/explore" className={`list-group-item list-group-item-action rounded-pill wd-hover-effect border-0 mb-3 ${active ===  'explore' ? 'active wd-hover-effect-active' : ''}`}>
                        <i className="fa fa-hashtag fa-1x pe-1"></i></Link>
                    <Link to="/tuiter/notification" className={`list-group-item list-group-item-action rounded-pill wd-hover-effect border-0 mb-3 ${active ===  'notification' ? 'active wd-hover-effect-active' : ''}`}>
                        <i className="fa fa-bell fa-1x pe-1"></i></Link>
                    <Link to="/tuiter/message" className={`list-group-item list-group-item-action rounded-pill wd-hover-effect border-0 mb-3 ${active ===  'message' ? 'active wd-hover-effect-active' : ''}`}>
                        <i className="fa fa-envelope fa-1x pe-1"></i></Link>
                    <Link to="/tuiter/bookmark" className={`list-group-item list-group-item-action rounded-pill wd-hover-effect border-0 mb-3 ${active ===  'bookmark' ? 'active wd-hover-effect-active' : ''}`}>
                        <i className="fa fa-bookmark fa-1x pe-1"></i></Link>
                    <Link to="/tuiter/list" className={`list-group-item list-group-item-action rounded-pill wd-hover-effect border-0 mb-3 ${active ===  'list' ? 'active wd-hover-effect-active' : ''}`}>
                        <i className="fa fa-list fa-1x pe-1"></i></Link>
                    <Link to="/" className={`list-group-item list-group-item-action rounded-pill wd-hover-effect border-0 mb-3 ${active ===  'lab' ? 'active wd-hover-effect-active' : ''}`}>
                        <i className="fa fa-fire fa-1x pe-1"></i></Link>
                    <Link to="/tuiter/profile" className={`list-group-item list-group-item-action rounded-pill wd-hover-effect border-0 mb-3 ${active ===  'profile' ? 'active wd-hover-effect-active' : ''}`}>
                        <i className="fa fa-user fa-1x pe-1"></i></Link>
                    <Link to="/tuiter/more" className="list-group-item list-group-item-action rounded-pill wd-hover-effect border-0 mb-3">
                        <i className="fas fa-ellipsis-h fa-1x pe-1"></i></Link>
                </div>

                <div className="d-grid mt-2">
                    <Link to="/tuiter/tuit" className="btn btn-primary btn-block rounded-pill" role="button">
                        <i className="fa fa-feather"></i></Link>
                </div>
            </div>
        </>
    );
}
export default NavigationSidebar;