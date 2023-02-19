import posts from "./posts.js";
import PostSummaryItem from "./PostSummaryItem.js";
const PostSummaryList = () => {
    return(`
        <div class="col-xxl-6 col-xl-7 col-lg-8 col-md-10 col-sm-11 ps-2 pe-2">
            <div class="list-group">
                <div class="list-group-item border-0">
                    <div class="row">
                        <div class="col-11">
                            <div class="input-group has-feedback wd-search-bar">
                                <input type="text" class="form-control form-input rounded-pill wd-search-bar-input-background" placeholder="Search Tuiter">
                                <span><i class="fa fa-search form-control-feedback" style="color: lightslategrey"></i></span>
                            </div>
                        </div>
                        <div class="col-1">
                            <span class="wd-setting"><i class="fa fa-cog wd-hover-effect rounded-1" style="font-size: 1.5em; color: #0275d8"></i></span>
                        </div>
                    </div>
                </div>

                <div class="list-group-item border-0">
                    <ul class="nav nav-tabs">
                        <li class="nav-item wd-hover-effect-active">
                            <a class="nav-link active rounded" href="explore-foryou.html">For you</a>
                        </li>
                        <li class="nav-item wd-hover-effect">
                            <a class="nav-link rounded" href="explore-trending.html">Trending</a>
                        </li>
                        <li class="nav-item wd-hover-effect">
                            <a class="nav-link rounded" href="explore-news.html">News</a>
                        </li>
                        <li class="nav-item wd-hover-effect">
                            <a class="nav-link rounded" href="explore-sports.html">Sports</a>
                        </li>
                        <li class="nav-item wd-hover-effect d-sm-none d-md-block">
                            <a class="nav-link rounded" href="explore-entertainment.html">Entertainment</a>
                        </li>
                    </ul>
                </div>

                <div class="list-group-item border-0 rounded-bottom">
                    <div class="card">
                        <a href="https://www.spacex.com"><img src="spaceXstarship.webp" class="card-img-top img-fluid wd-card-image-text-anchor" alt="SpaceX's Starship"/></a>
                        <span class="text-white wd-card-image-text"><b>SpaceX's Starship</b></span>
                        <div class="card-body">
                            ${posts.map(post => {return(PostSummaryItem(post));}).join('')}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `);
}
export default PostSummaryList;