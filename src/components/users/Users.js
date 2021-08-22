import {useEffect, useState} from "react";
import {getUsers} from "../../services/api.service";
import User from "../user/User";
import {Route} from "react-router-dom";
import UserDetails from "../user/UserDetails";
import UserPartial from "../user/UserPartial";

export default function Users({match: {url}}) {
  const [users, setUsers] = useState ([]);
  useEffect(() => {
   getUsers().then(value => setUsers([...value]))
  }, [])
  return (
    <div>
      {users.map(value => <User item={value} key = {value.id}/>)}
      {/*<Route path={`${url}/:id`} render={(props) => {*/}
      {/*  return <UserDetails {...props}/>*/}
      {/*}}/>*/}

      <Route path={`${url}/:id`} render={(props) => {
        return <UserPartial {...props}/>
      }}/>

    </div>
  );
}