import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter, useHistory
} from "react-router-dom";

export default function User({item}) {
    const history = useHistory()
    const press = () => {
      history.push('/users/' + item.id, item)
    }
    return (
        <div>
            {/*{item.id}. {item.name} - <Link to = {{pathname: '/users/' + item, state: item}}>Details</Link>*/}
            {/*{item.id}. {item.name} - <Link to = {{pathname: '/users/' + item.id}}>Details</Link>*/}
            {item.id}. {item.name} - <button onClick={press}>Details</button>

        </div>
    );
}