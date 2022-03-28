import {Link} from "react-router-dom";
import "./ItemNews.css";
const ItemNews = ({post, index}) => {
    return (
        <div className="item">
        <Link to={`/articles/${index}`} >

            <div className="item-cover"
                 style={{backgroundImage: `url(${post.imageUrl})`}}
            />

            <div className="item-text">
                <p>{post.title}</p>
                <div className="item-url">
                    {post.imageUrl}
                </div>
            </div>

        </Link>
        </div>
    );
};

export default ItemNews;