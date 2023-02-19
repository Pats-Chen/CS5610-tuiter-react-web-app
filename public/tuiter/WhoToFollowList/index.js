import who from "./who.js";
import WhoToFollowListItem from "./WhoToFollowListItem.js";
const WhoToFollowList = () => {
    return(`
        <div class="d-none d-lg-block col-xxl-4 col-xl-3 col-lg-3 ps-2">
            <div class="list-group">
                <div class="list-group-item rounded-top">
                    <div class="row">
                        <div class="col-xxl-12 pt-3">
                            <span><b>Who to follow</b></span>
                        </div>
                    </div>
                </div>
                
                ${who.map(whoItem => {return(WhoToFollowListItem(whoItem));}).join('')}
                
                <div class="list-group-item wd-hover-effect rounded-bottom">
                    <div class="row">
                        <div class="col-xxl-12">
                            <a href="#"><b>Show more</b></a>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="mt-2">
                <a class="wd-footnote-size" href="#">Terms of Service</a>
                <a class="wd-footnote-size" href="#">Privacy Policy</a>
                <a class="wd-footnote-size" href="#">Cookie Policy</a></br>
                <a class="wd-footnote-size" href="#">Accessibility</a>
                <a class="wd-footnote-size" href="#">Ads info</a>
                <a class="wd-footnote-size" href="#">More ···</a></br>
                <span class="wd-footnote-size">Ⓒ 2023 Tuiter, Inc.</span>
            </div>
        </div>
    `);
}
export default WhoToFollowList;