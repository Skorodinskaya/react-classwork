import Comment from "../comment/Comment";
import { useEffect, useState } from "react";
import { getCommentsOfPost} from "../../services/user.service";

export default function Comments({ id }) {
    let [comments, setComments] = useState([]);

    useEffect(() => {
        getCommentsOfPost(id).then(value => setComments([...value]));
    }, [id]);
    return (
        <div>
            <h5>Post #{id} comments</h5>
            {
                comments.map(value => <Comment item={value} key={value.id}/>)
            }
        </div>
    );
}
