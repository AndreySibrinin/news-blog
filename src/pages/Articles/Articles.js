import {useEffect, useState} from "react";
import {data} from "../../fake_data";
import ItemNews from "../../components/ItemNews/ItemNews";

const Articles = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
       setPosts(data);
    }, []);
    return (

        <div className="container">
            <div className="row  row-cols-lg-2 row-cols-sm-1 row-cols-xxl-3">
                {
                    posts.map((post, index) => (
                        <div key={index} className="col">
                            <ItemNews  post={post} index={index}/>
                        </div>
                    ))
                }
            </div>
        </div>


    );
};

export default Articles;