import {useReducer} from "react";
import reducer from "./reducers/reducer";

export default function App() {
    const [{a}, dispatch] = useReducer(reducer, {a:0})
  return (
    <div>
        <h1>Object 1 = {a}</h1>
        <button onClick={() => dispatch({object: '1', act: '+'})}>Increase</button>
        <button onClick={() => dispatch({object: '1', act: '-'})}>Decrease</button>

    </div>
  );
}