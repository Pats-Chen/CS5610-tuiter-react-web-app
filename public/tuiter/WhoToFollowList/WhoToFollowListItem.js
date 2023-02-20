const WhoToFollowListItem = (who) => {
    return(`
        <div class="list-group-item wd-hover-effect">
            <div class="row justify-content-center align-items-center">
                <div class="col-xxl-2 col-xl-3 col-lg-4">
                    <img src=${who.avatarIcon} class="img-fluid rounded-circle float-start" width="50px" height="50px"/>
                </div>
                <div class="col-xxl-8 col-xl-6 col-lg-4">
                    <a href=${who.href}><b>${who.userName}</b></a><i class="fa fa-check-circle ps-1"></i></br><span class="wd-footnote-size">@${who.handler}</span>
                </div>
                <div class="col-xxl-2 col-xl-3 col-lg-4">
                    <a class="btn btn-primary rounded-pill float-end" href="#" role="button">Follow</a>
                </div>
            </div>
        </div>
   `);
}
export default WhoToFollowListItem;