import NavigationSidebar from "../NavigationSidebar/index.js";
import WhoToFollowList from "../WhoToFollowList/index.js";
import PostSummaryList from "../PostSummaryList/index.js";
function exploreComponent() {
    $('#wd-explore').append(`
        <div class="container rounded">
            <div class="row mt-2">
                ${NavigationSidebar()}
                ${PostSummaryList()}
                ${WhoToFollowList()}
            </div>
        </div>
    `);
}

$(exploreComponent);