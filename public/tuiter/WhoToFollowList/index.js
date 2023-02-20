import who from "./who.js";
import WhoToFollowListItem from "./WhoToFollowListItem.js";
const WhoToFollowList = () => {
    return(`
        ${who.map(whoItem => {return(WhoToFollowListItem(whoItem));}).join('')}
    `);
}
export default WhoToFollowList;