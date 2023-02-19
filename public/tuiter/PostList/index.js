import items from "./items.js";
import PostItem from "./PostItem.js";
const PostList = () => {
    return(`
        ${items.map(post => {return(PostItem(post));}).join('')}
    `);
}
export default PostList;