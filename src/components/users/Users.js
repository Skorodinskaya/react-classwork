import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
} from "react-router-dom";

import {useEffect, useState} from "react";
import {getUsers} from "../../services/api.service";
import User from "../user/User";
import UserPartial from "../user/UserPartial";

export default function Users({match: {url}}) {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        getUsers().then(value => setUsers([...value]))
    }, [])
  return (
    <div>
        {users.map(value => <User item={value} key = {value.id}/>)}

{/*<Route path={'/users/:id'} render={(props) => {*/}
{/*    return <UserPartial {...props}/>*/}
{/*}}/>*/}

        <Route path={`${url}/:id`} render={(props) => {
            return <UserPartial {...props}/>
        }}/>


    </div>
  );
}