import User from "./User";

export default function Users({item, dispatch}) {
    return (
        <div>
            {item.map(value => <User key={value.id} value={value} dispatch={dispatch}/>)}

        </div>
    );
}