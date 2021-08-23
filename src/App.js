import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
} from "react-router-dom";
import Users from "./components/users/Users";
import UserPartial from "./components/user/UserPartial";

export default function App() {
    return (
        <Router>
            <div>
                <Link to={'/home'}>Home</Link>
                <br/>
                <Link to={'/users'}>Users</Link>
            </div>

            <Route path={'/users'} component={Users}/>

        </Router>
    );
}