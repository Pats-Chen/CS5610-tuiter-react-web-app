import NavigationSidebar from "../NavigationSidebar/index.js";
import PostList from "../PostList/index.js";
import PostSummaryList from "../PostSummaryList/index.js";
function homeComponent() {
    $('#wd-home').append(`
        <div class="container rounded">
            <div class="row mt-2">
                ${NavigationSidebar()}
                
                <div class="col-xxl-6 col-xl-7 col-lg-8 col-md-10 col-sm-11 ps-2 pe-2">
                    <div class="list-group">
                        <div class="list-group-item bg-transparent rounded border-0">
                            <div class="row">
                                <a href="../navigation.html">Back</a>
                                <h3>Tuiter</h3>
                                <textarea cols="20" rows="5" placeholder="What's happening?"></textarea><br/>
                                <select>
                                    <option value="EVERYONE" selected>Everyone can reply</option>
                                    <option value="FOLLOWING">People you follow</option>
                                    <option value="MENTIONED">Only people you mention</option>
                                </select><br/>
                                <br/>
                                <input type="file"/>
                                <a href="../tuit.html" class="btn btn-primary btn-block rounded-pill" role="button">Tuit</a>
                                <br/>
                            </div>
                        </div>
        
                        ${PostList()}
                    </div>
                </div>
                
                <div class="d-none d-lg-block col-xxl-4 col-xl-3 col-lg-3 ps-2">
                    <div class="list-group">
                        <div class="list-group-item rounded-top">
                            <div class="row">
                                <div class="col-xxl-12 pt-3">
                                    <span><b>What’s happening</b></span>
                                </div>
                            </div>
                        </div>
                        
                        <div class="list-group-item border-0 rounded-bottom">
                            ${PostSummaryList()}
                        </div>
                        
                        <div class="list-group-item wd-hover-effect rounded-bottom">
                            <div class="row">
                                <div class="col-xxl-12">
                                    <a href="#"><b>Show more</b></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="mt-2 ms-3">
                        <a class="wd-footnote-size" href="#">Terms of Service</a>
                        <a class="wd-footnote-size" href="#">Privacy Policy</a>
                        <a class="wd-footnote-size" href="#">Cookie Policy</a></br>
                        <a class="wd-footnote-size" href="#">Accessibility</a>
                        <a class="wd-footnote-size" href="#">Ads info</a>
                        <a class="wd-footnote-size" href="#">More ···</a></br>
                        <span class="wd-footnote-size">Ⓒ 2023 Tuiter, Inc.</span>
                    </div>
                </div>
            </div>
        </div>
    `);
}

$(homeComponent);