import reducer from "./reducers/reducer";
import {getPosts, getUsers} from "./services/api.service";
import Users from "./componets/users/Users";
import Posts from "./componets/posts/Posts";

export default function App() {
    const [{users, posts}, dispatch] = useReducer(reducer, {users: [], posts: []})
    useEffect(async () => {
        let users = await getUsers();
        dispatch({type: 'GET_USERS', payload: users});
    }, [])

    useEffect(async () => {
        let posts = await getPosts();
        dispatch({type: 'GET_POSTS', payload: posts});
    }, [])




    return (
        <div>
            <Users item={users}/>
            <Posts item={posts}/>
        </div>
    );
}