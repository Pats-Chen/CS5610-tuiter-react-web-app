const NavigationSidebar = (active) => {
    return(`
        <div class="d-none d-xl-block col-xxl-2 col-xl-2 pe-2">
            <div class="d-grid list-group">
                <a href="../HomeScreen/index.html" class="list-group-item list-group-item-action rounded-pill wd-hover-effect border-0 mb-3">
                    <i class="fab fa-tencent-weibo fa-2x style=" style="font-size: 1.3em; color: #0275d8"></i></a>
                <a href="../HomeScreen/index.html" class="list-group-item list-group-item-action rounded-pill wd-hover-effect border-0 mb-3
                                                         ${active === "home" ? "active wd-hover-effect-active" : ''}">
                    <i class="fa fa-home fa-1x pe-1"></i><span class="text-wrap">Home</span></a>
                <a href="../ExploreScreen/index.html" class="list-group-item list-group-item-action rounded-pill wd-hover-effect border-0 mb-3
                                                            ${active === "explore" ? "active wd-hover-effect-active" : ''}">
                    <i class="fa fa-hashtag fa-1x pe-1"></i><span class="text-wrap">Explore</span></a>
                <a href="../notifications.html" class="list-group-item list-group-item-action rounded-pill wd-hover-effect border-0 mb-3
                                                      ${active === "notification" ? "active wd-hover-effect-active" : ''}">
                    <i class="fa fa-bell fa-1x pe-1"></i><span class="text-wrap">Notifications</span></a>
                <a href="../messages.html" class="list-group-item list-group-item-action rounded-pill wd-hover-effect border-0 mb-3
                                                 ${active === "message" ? "active wd-hover-effect-active" : ''}">
                    <i class="fa fa-envelope fa-1x pe-1"></i><span class="text-wrap">Messages</span></a>
                <a href="../bookmarks/index.html" class="list-group-item list-group-item-action rounded-pill wd-hover-effect border-0 mb-3
                                                        ${active === "bookmark" ? "active wd-hover-effect-active" : ''}">
                    <i class="fa fa-bookmark fa-1x pe-1"></i><span class="text-wrap">Bookmarks</span></a>
                <a href="../lists.html" class="list-group-item list-group-item-action rounded-pill wd-hover-effect border-0 mb-3
                                              ${active === "list" ? "active wd-hover-effect-active" : ''}">
                    <i class="fa fa-list fa-1x pe-1"></i><span class="text-wrap">Lists</span></a>
                <a href="../toparticles.html" class="list-group-item list-group-item-action rounded-pill wd-hover-effect border-0 mb-3
                                                    ${active === "toparticle" ? "active wd-hover-effect-active" : ''}">
                    <i class="fa fa-fire fa-1x pe-1"></i><span class="text-wrap">Top Articles</span></a>
                <a href="../profile.html" class="list-group-item list-group-item-action rounded-pill wd-hover-effect border-0 mb-3
                                                ${active === "profile" ? "active wd-hover-effect-active" : ''}">
                    <i class="fa fa-user fa-1x pe-1"></i><span class="text-wrap">Profile</span></a>
                <a href="../more.html" class="list-group-item list-group-item-action rounded-pill wd-hover-effect border-0 mb-3">
                    <i class="fas fa-ellipsis-h fa-1x pe-1"></i><span class="text-wrap">More</span></a>
            </div>
            <div class="d-grid mt-2">
                <a href="../tuit.html" class="btn btn-primary btn-block rounded-pill" role="button">Tuit</a>
            </div>
        </div>
        
        <div class="d-xl-none d-sm-block col-lg-1 col-md-2  col-sm-1 pe-2">
            <div class="list-group">                    
                <a href="../home.html" class="list-group-item list-group-item-action rounded-pill wd-hover-effect border-0 mb-3">
                    <i class="fab fa-tencent-weibo fa-2x style=" style="font-size: 1.3em; color: #0275d8"></i></a>
                <a href="../home.html" class="list-group-item list-group-item-action rounded-pill wd-hover-effect border-0 mb-3">
                    <i class="fa fa-home fa-1x pe-1"></i></a>
                <a href="#" class="list-group-item list-group-item-action active rounded-pill wd-hover-effect-active border-0 mb-3">
                    <i class="fa fa-hashtag fa-1x pe-1"></i></a>
                <a href="../notifications.html" class="list-group-item list-group-item-action rounded-pill wd-hover-effect border-0 mb-3">
                    <i class="fa fa-bell fa-1x pe-1"></i></a>
                <a href="../messages.html" class="list-group-item list-group-item-action rounded-pill wd-hover-effect border-0 mb-3">
                    <i class="fa fa-envelope fa-1x pe-1"></i></a>
                <a href="../bookmarks/index.html" class="list-group-item list-group-item-action rounded-pill wd-hover-effect border-0 mb-3">
                    <i class="fa fa-bookmark fa-1x pe-1"></i></a>
                <a href="../lists.html" class="list-group-item list-group-item-action rounded-pill wd-hover-effect border-0 mb-3">
                    <i class="fa fa-list fa-1x pe-1"></i></a>
                <a href="../toparticles.html" class="list-group-item list-group-item-action rounded-pill wd-hover-effect border-0 mb-3">
                    <i class="fa fa-fire fa-1x pe-1"></i></a>
                <a href="../profile.html" class="list-group-item list-group-item-action rounded-pill wd-hover-effect border-0 mb-3">
                    <i class="fa fa-user fa-1x pe-1"></i></a>
                <a href="../more.html" class="list-group-item list-group-item-action rounded-pill wd-hover-effect border-0 mb-3">
                    <i class="fas fa-ellipsis-h fa-1x pe-1"></i></a>
            </div>
            <div class="d-grid mt-2">
                <a href="../tuit.html" class="btn btn-primary btn-block rounded-pill" role="button">
                    <i class="fa fa-feather"></i></a>
            </div>
        </div>
    `);
}
export default NavigationSidebar;