import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {data} from "../../fake_data";
import "./DetailArticle.css"
const DetailArticle = () => {
    const {id} = useParams();
    const [post, setPost] = useState(null);

    useEffect(() =>{
        setPost(data[id]);
    }, [id]);

    return (
        <>
            {post && (
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h1 className="article-title">{post.title}</h1>
                            <div className="article-detail" style={{backgroundImage: `url(${post.imageUrl})`}}/>
                            <p className="article-description">{post.description}</p>
                            <div className="comment">
                                <h4 className="comment-title">Experts comment</h4>
                                <p className="comment-text">{post.expertComment}</p>
                            </div>
                        </div>
                    </div>

                </div>
            )}
        </>
    )
};

export default DetailArticle;