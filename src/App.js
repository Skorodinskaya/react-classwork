import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
} from "react-router-dom";
import Users from "./components/users/Users";
import UserDetails from "./components/user/UserDetails";

export default function App() {
    return (
        <Router>
            <div>
                <Link to ={'/users'}>All users</Link>
            </div>

            <Route path={'/users'} component={Users}/>

        </Router>
    )
}