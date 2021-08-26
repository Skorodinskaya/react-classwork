// стоврити об'єкт {a:0,b:0,c:0}
// Стоврити 6 кнопок.
//     по дві на кожен з параметрів об'єкту.
// одна кнопка збільшує значення , інша зменшує
// логіку реалізувати через reducer

import reducer from "./reducers/reducer";

export default function App() {
    const [{a, b, c, dispatch}] = useReducer(reducer, {a: 0, b: 0, c: 0})
    return (
        <div>
            <h2>Object 1 - {a}</h2>
           <button onClick={() => dispatch ({object: 1, act: '+' }) }>Increase</button>
           <button onClick={() => dispatch ({object: 1, act: '-' }) }>Increase</button>
            <h2>Object 1 - {b}</h2>
           <button onClick={() => dispatch ({object: 1, act: '+' }) }>Increase</button>
           <button onClick={() => dispatch ({object: 1, act: '-' }) }>Increase</button>
            <h2>Object 1 - {c}</h2>
           <button onClick={() => dispatch ({object: 1, act: '+' }) }>Increase</button>
           <button onClick={() => dispatch ({object: 1, act: '-' }) }>Increase</button>
        </div>
    );
}