import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
} from "react-router-dom";

export default function User({item}) {
  return (
    <div>
      {item.id}. {item.name} - <Link to ={{pathname: '/users/' + item.id}}> Details </Link>

    </div>
  );
}