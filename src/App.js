import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {addUser, getUsers} from "./services/api.service";
import {fetchUsers, newUser} from "./actions";
import {deleteUser} from "./actions/actions";

export default function App() {
    const state = useSelector(state => {
        const {firstReducer} = state;
        return firstReducer
    })

    const dispatch = useDispatch();
    const {users} = state
    useEffect(() => {
        getUsers().then(value => dispatch(fetchUsers(value)))
    }, [])


    let onSubmit = (e) => {
        e.preventDefault()
        let name = e.target.name.value
        let user = {name}
        addUser(user).then(value => dispatch(newUser(value)))
    };
    let onClickDeleteUsers = (value) => {
      return dispatch(deleteUser(value))
    };
    let onClickGetUsers = () =>{
        getUsers().then(value => dispatch(fetchUsers(value)))
    };
    return (
        <div>
            <form onSubmit={onSubmit}>
                <input type={'text'} name='name'/>
                <button>add user</button>
            </form>

            {users.map((value) => <div key={value.id}>{value.name}</div>)}

            <button onClick={onClickDeleteUsers}>Delete</button>
            <button onClick={onClickGetUsers}>Get Users</button>
        </div>
    );
}