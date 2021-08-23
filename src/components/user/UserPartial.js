import {useParams} from "react-router";
import {useEffect, useState} from "react";
import {getUser} from "../../services/api.service";

export default function UserPartial() {
  const {id} = useParams('id')
  const [user, setUser] = useState({})
  useEffect(() => {
    getUser(id).then(value => setUser({...value}))
  }, [id])
  return (
    <div>
      {JSON.stringify(user)}

    </div>
  );
}