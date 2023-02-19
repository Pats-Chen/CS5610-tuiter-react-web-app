import NavigationSidebar from "../NavigationSidebar/index.js";
import WhoToFollowList from "../WhoToFollowList";
function exploreComponent() {
    $('#wd-explore').append(`
        <div class="row mt-2">
            ${NavigationSidebar()}
            
            <div class="col-10 col-lg-7 col-xl-6 bg-primary">
                <h3>ExploreComponent</h3>
            </div>
            
            ${WhoToFollowList()}
        </div>
    `);
}

$(exploreComponent);