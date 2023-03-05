import React from "react";

const NavigationSidebar = ({active = 'explore'}) => {
    return (
        <>
            <div className="d-none d-xl-block col-xxl-2 col-xl-2 pe-2">
                <div className="d-grid list-group">
                    <a href="../HomeScreen/index.html"
                       className="list-group-item list-group-item-action rounded-pill wd-hover-effect border-0 mb-3">
                        <i className="fab fa-tencent-weibo fa-2x" style={{fontSize: "1.3em", color: "#0275d8"}}></i></a>
                    <a href="../HomeScreen/index.html" className={`list-group-item list-group-item-action rounded-pill wd-hover-effect border-0 mb-3 ${active ===  'home' ? 'active wd-hover-effect-active' : ''}`}>
                        <i className="fa fa-home fa-1x pe-1"></i><span className="text-wrap">Home</span></a>
                    <a href="../ExploreScreen/index.html" className={`list-group-item list-group-item-action rounded-pill wd-hover-effect border-0 mb-3 ${active ===  'explore' ? 'active wd-hover-effect-active' : ''}`}>
                        <i className="fa fa-hashtag fa-1x pe-1"></i><span className="text-wrap">Explore</span></a>
                    <a href="../notifications.html" className={`list-group-item list-group-item-action rounded-pill wd-hover-effect border-0 mb-3 ${active ===  'notification' ? 'active wd-hover-effect-active' : ''}`}>
                        <i className="fa fa-bell fa-1x pe-1"></i><span className="text-wrap">Notifications</span></a>
                    <a href="../messages.html" className={`list-group-item list-group-item-action rounded-pill wd-hover-effect border-0 mb-3 ${active ===  'message' ? 'active wd-hover-effect-active' : ''}`}>
                        <i className="fa fa-envelope fa-1x pe-1"></i><span className="text-wrap">Messages</span></a>
                    <a href="../bookmarks/index.html" className={`list-group-item list-group-item-action rounded-pill wd-hover-effect border-0 mb-3 ${active ===  'bookmark' ? 'active wd-hover-effect-active' : ''}`}>
                        <i className="fa fa-bookmark fa-1x pe-1"></i><span className="text-wrap">Bookmarks</span></a>
                    <a href="../lists.html" className={`list-group-item list-group-item-action rounded-pill wd-hover-effect border-0 mb-3 ${active ===  'list' ? 'active wd-hover-effect-active' : ''}`}>
                        <i className="fa fa-list fa-1x pe-1"></i><span className="text-wrap">Lists</span></a>
                    <a href="../toparticles.html" className={`list-group-item list-group-item-action rounded-pill wd-hover-effect border-0 mb-3 ${active ===  'toparticle' ? 'active wd-hover-effect-active' : ''}`}>
                        <i className="fa fa-fire fa-1x pe-1"></i><span className="text-wrap">Top Articles</span></a>
                    <a href="../profile.html" className={`list-group-item list-group-item-action rounded-pill wd-hover-effect border-0 mb-3 ${active ===  'profile' ? 'active wd-hover-effect-active' : ''}`}>
                        <i className="fa fa-user fa-1x pe-1"></i><span className="text-wrap">Profile</span></a>
                    <a href="../more.html"
                       className="list-group-item list-group-item-action rounded-pill wd-hover-effect border-0 mb-3">
                        <i className="fas fa-ellipsis-h fa-1x pe-1"></i><span className="text-wrap">More</span></a>
                </div>
                <div className="d-grid mt-2">
                    <a href="../tuit.html" className="btn btn-primary btn-block rounded-pill" role="button">Tuit</a>
                </div>
            </div>

            <div className="d-xl-none d-sm-block col-lg-1 col-md-2 col-sm-1 pe-2">
                <div className="list-group">
                    <a href="../home.html" className="list-group-item list-group-item-action rounded-pill wd-hover-effect border-0 mb-3">
                        <i className="fab fa-tencent-weibo fa-2x" style={{fontSize: "1.3em", color: "#0275d8"}}></i></a>
                    <a href="../home.html" className={`list-group-item list-group-item-action rounded-pill wd-hover-effect border-0 mb-3 ${active ===  'home' ? 'active wd-hover-effect-active' : ''}`}>
                        <i className="fa fa-home fa-1x pe-1"></i></a>
                    <a href="#" className={`list-group-item list-group-item-action rounded-pill wd-hover-effect border-0 mb-3 ${active ===  'explore' ? 'active wd-hover-effect-active' : ''}`}>
                        <i className="fa fa-hashtag fa-1x pe-1"></i></a>
                    <a href="../notifications.html" className={`list-group-item list-group-item-action rounded-pill wd-hover-effect border-0 mb-3 ${active ===  'notification' ? 'active wd-hover-effect-active' : ''}`}>
                        <i className="fa fa-bell fa-1x pe-1"></i></a>
                    <a href="../messages.html" className={`list-group-item list-group-item-action rounded-pill wd-hover-effect border-0 mb-3 ${active ===  'message' ? 'active wd-hover-effect-active' : ''}`}>
                        <i className="fa fa-envelope fa-1x pe-1"></i></a>
                    <a href="../bookmarks/index.html" className={`list-group-item list-group-item-action rounded-pill wd-hover-effect border-0 mb-3 ${active ===  'bookmark' ? 'active wd-hover-effect-active' : ''}`}>
                        <i className="fa fa-bookmark fa-1x pe-1"></i></a>
                    <a href="../lists.html" className={`list-group-item list-group-item-action rounded-pill wd-hover-effect border-0 mb-3 ${active ===  'list' ? 'active wd-hover-effect-active' : ''}`}>
                        <i className="fa fa-list fa-1x pe-1"></i></a>
                    <a href="../toparticles.html" className={`list-group-item list-group-item-action rounded-pill wd-hover-effect border-0 mb-3 ${active ===  'toparticle' ? 'active wd-hover-effect-active' : ''}`}>
                        <i className="fa fa-fire fa-1x pe-1"></i></a>
                    <a href="../profile.html" className={`list-group-item list-group-item-action rounded-pill wd-hover-effect border-0 mb-3 ${active ===  'profile' ? 'active wd-hover-effect-active' : ''}`}>
                        <i className="fa fa-user fa-1x pe-1"></i></a>
                    <a href="../more.html" className="list-group-item list-group-item-action rounded-pill wd-hover-effect border-0 mb-3">
                        <i className="fas fa-ellipsis-h fa-1x pe-1"></i></a>
                </div>

                <div className="d-grid mt-2">
                    <a href="../tuit.html" className="btn btn-primary btn-block rounded-pill" role="button">
                        <i className="fa fa-feather"></i></a>
                </div>
            </div>
        </>
    );
}
export default NavigationSidebar;