// стоврити об'єкт {a:0,b:0,c:0}
// Стоврити 6 кнопок.
//     по дві на кожен з параметрів об'єкту.
// одна кнопка збільшує значення , інша зменшує
// логіку реалізувати через reducer

import reducer from "./reducers/reducer";
import {useReducer} from "react";

export default function App() {
    const [{a, b, c}, dispatch] = useReducer(reducer, {a: 0, b: 0, c: 0})
    return (
        <div>
            <h2>Object 1 - {a}</h2>
           <button onClick={() => dispatch ({name: '1', object: 1, act: '+' }) }>Increase</button>
           <button onClick={() => dispatch ({name: '1', object: 1, act: '-' }) }>Decrease</button>
            <h2>Object 2 - {b}</h2>
           <button onClick={() => dispatch ({name: '2', object: 1, act: '+' }) }>Increase</button>
           <button onClick={() => dispatch ({name: '2', object: 1, act: '-' }) }>Decrease</button>
            <h2>Object 3 - {c}</h2>
           <button onClick={() => dispatch ({name: '3', object: 1, act: '+' }) }>Increase</button>
           <button onClick={() => dispatch ({name: '3', object: 1, act: '-' }) }>Decrease</button>
        </div>
    );
}