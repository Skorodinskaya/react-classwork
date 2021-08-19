import {BrowserRouter as Router, Link, Route} from "react-router-dom";
import Cars from "./components/cars/Cars";
import Form from "./components/forms/Form";

export default function App() {
  return (
      <Router>
        <div>
          <Link to ={'/home'}>Home</Link>
          <br/>
          <Link to ={'/cars'}>All cars</Link>
          <br/>
          <Link to = {'/create-car'}>Create car</Link>
          <br/>
          <Link to = {'/update-car'}> Update car </Link>

          <Route path={'/home'}/>
          <Route path={'/cars'} component={Cars}/>
          <Route path={'/create-car'} component={Form}/>
          {/*<Route path = {'/update-car'} component={}/>*/}
          <select>
            <option value="">1</option>
            <option value="">1</option>
            <option value="">1</option>
            <option value="">1</option>
          </select>
        </div>
      </Router>
  );
}