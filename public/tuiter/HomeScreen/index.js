import NavigationSidebar from "../NavigationSidebar/index.js";
import PostList from "../PostList/index.js";
import PostSummaryList from "../PostSummaryList/index.js";
function homeComponent() {
    $('#wd-home').append(`
        <div class="container rounded">
            <div class="row mt-2">
                ${NavigationSidebar("home")}
                
                <div class="col-xxl-6 col-xl-7 col-lg-8 col-md-10 col-sm-11 ps-2 pe-2">
                    <div class="list-group">
                        <div class="list-group-item bg-transparent rounded border-0 pt-1">
                            <div class="row">
                                <a href="../navigation.html" class="btn btn-primary btn-block rounded-pill" role="button">Back</a>
                                <form class="mb-2">
                                    <div class="form-group">
                                        <label for="textinput"><b>Tuiter</b></label>
                                        <textarea class="form-control" id="textinput" rows="5" placeholder="What's happening?"></textarea>
                                    </div>
                                    
                                    <div class="form-group">
                                        <label for="exampleFormControlSelect1"><b>Select Visibility</b></label>
                                        <select class="form-control" id="selectinput">
                                            <option value="EVERYONE" selected>Everyone can reply</option>
                                            <option value="FOLLOWING">People you follow</option>
                                            <option value="MENTIONED">Only people you mention</option>
                                        </select>
                                    </div>
                                    
                                    <div class="form-group">
                                        <label for="fileinput"><b>Choose Files to Upload</b></label><br/>
                                        <input type="file" class="form-control-file" id="fileinput"><br/>
                                    </div>
                                </form>
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