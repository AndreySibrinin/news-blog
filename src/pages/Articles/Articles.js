import {useEffect, useState} from "react";
import ItemNews from "../../components/ItemNews/ItemNews";
import {db} from "../../firebase";
import { ref, onValue} from "firebase/database";


const Articles = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
            const refDb = ref(db, 'news');
            onValue(refDb, (snapshot) => {
                const data = snapshot.val();
                setPosts(data);
        });

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