import {useEffect, useState} from "react";
import {getPosts, getUsers} from "../services/api.service";
import User from "./User";

export default function Users() {
    const [users, setUsers] = useState([]);
    const [user, setUser] = useState(null);
    const [post, setPost] = useState(null)
    useEffect(() => {
        getUsers().then(value => setUsers([...value]))
    }, [])

    const chooseUser = (e) => {
        setUser({...e})
        getPosts(e.id).then(value => setPost({...value}))
    }
    return (
        <div>
            <div>{users.map(value => <User item={value} key={value.id} chooseUser={chooseUser}/>)}</div>

            {user && <div>{JSON.stringify(user)}</div>}
            {post && <div>{JSON.stringify(post)}</div>}
        </div>
    );
}