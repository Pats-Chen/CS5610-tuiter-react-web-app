const PostSummaryItem = (post) => {
    return(`
        <div class="row g-0 position-relative wd-hover-effect rounded-1 p-1">
            <div class="col-10">
                <span class="card-text">
                    ${post.topic ? `<span class="text-muted wd-footnote-size">${post.topic} · Trending</span></br>` : ''}
                    <span><b>${post.userName}</b><i class="fa fa-check-circle ps-1"></i></span><span class="text-muted ps-1">- ${post.time}</span></br>
                    <span class="text-wrap">
                        <b>${post.title}</b>
                    </span></br>
                </span>
                <a href=${post.href} class="stretched-link"></a>
            </div>

            <div class="col-2 mt-1">
                <img src="${post.image}" class="img-fluid rounded float-end" width="100px" height="100px"/>
            </div>
        </div>
   `);
}
export default PostSummaryItem;