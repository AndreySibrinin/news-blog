import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import "./DetailArticle.css"
import {db} from "../../firebase";
import {ref, onValue} from "firebase/database";
const DetailArticle = () => {
    const {id} = useParams();
    const [post, setPost] = useState(null);

    useEffect(() =>{
        const refDb = ref(db, 'news/' + id);
        onValue(refDb, (snapshot) => {
            const data = snapshot.val();
            setPost(data);
        });
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