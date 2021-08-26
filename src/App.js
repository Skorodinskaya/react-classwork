import reducer from "./reducers/reducer";
import {getUsers} from "./services/api.service";
import Users from "./componets/users/Users";
import Posts from "./componets/posts/Posts";
import {useEffect, useReducer} from "react";

export default function App() {
    const [{users, posts}, dispatch] = useReducer(reducer, {users: [], posts: []})

    useEffect(async () => {
        let users = await getUsers();
        dispatch({type: 'GET_USERS', payload: users});
    }, [])

    return (
        <div>
            <Users item={users} dispatch={dispatch}/>
            <Posts item={posts}/>
        </div>
    );
}