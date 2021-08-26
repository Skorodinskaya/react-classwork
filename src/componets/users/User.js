import {getPosts} from "../../services/api.service";


export default function ({value, dispatch}) {
    const getPostsFun = async () => {
        const posts = await getPosts(value.id);
        dispatch({type: 'GET_POSTS', payload: posts});
    }

        return (
            <div>
                {value.name}
                <button onClick={getPostsFun}>Posts</button>
            </div>
        );
    }