import { Link } from "react-router-dom";

function PostCard ({post}) {
    return (
        <Link to={`/post/${post.id}`} class="news-card">
            <div class="container">
                <h3 class="news-card__title">{post.title}</h3>
                <span class="news-card__category">{post.category}</span>
                <span class="news-card__price">{post.price}</span>
            </div>
        </Link>
    );
}

export default PostCard;