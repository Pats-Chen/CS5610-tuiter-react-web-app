const PostItem = (post) => {
    return(`
        <div class="container">
            <div class="row mt-2 rounded wd-hover-effect">
                <div class="col-1 ps-1 pe-0 pt-3">
                    <img src=${post.userIcon} class="img-fluid rounded-circle float-start" width="48" height="48"/>
                </div>
                
                <div class="col-11 p-2">
                    <div class="list-group">
                        <div class="list-group-item bg-transparent border-0 ps-0">
                            <span><b>${post.userName}</b><i class="fa fa-check-circle ps-1"></i></span><span class="text-muted ps-1">@${post.handler} - ${post.time}</span></br>
                            <span class="text-wrap">${post.tuit}</span></br>
                        </div>
                        <div class="list-group-item rounded bg-transparent border-0 ps-0">
                            <div class="card">
                                <a href=${post.href}><img src=${post.image} class="card-img-top img-fluid" alt=${post.title}/></a>
                                <div class="card-body">
                                    <span class="card-text">
                                        ${post.title ? `<span class="text-wrap wd-footnote-size">${post.title}</span></br>` : ''}
                                        ${post.content ? `<span class="text-wrap text-muted wd-footnote-size">${post.content}</span></br>` : ''}
                                        <i class="fa fa-link fa-1x pe-1"></i>${post.href}</br>
                                    </span>
                                    <a href=${post.href} class="stretched-link"></a>
                                </div>
                            </div>
                        </div>
                        <div class="list-group-item bg-transparent border-0">
                            <div class="row">
                                <div class="col-3">
                                    <i class="fa fa-comment fa-1x pe-1" style="color: dimgray"></i><span class="text-muted">${post.replies}</span>
                                </div>
                                <div class="col-3">
                                    <i class="fa fa-retweet fa-1x pe-1" style="color: dimgray"></i><span class="text-muted">${post.retuits}</span>
                                </div>
                                <div class="col-3">
                                    <i class="fa fa-heart fa-1x pe-1" style="color: dimgray"></i><span class="text-muted">${post.likes}</span>
                                </div>
                                <div class="col-3">
                                    <i class="fa fa-share fa-1x pe-1" style="color: dimgray"></i><span class="text-muted">${post.likes}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
   `);
}
export default PostItem;