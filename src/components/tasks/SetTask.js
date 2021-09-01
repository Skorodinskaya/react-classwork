import {useDispatch} from "react-redux";
import {deleteTask} from "../../redux";

export default function SetTask({value, setFormState}) {
    const dispatch = useDispatch()

    return (
        <div>
            {value.task} - {value.description}
            <button onClick={() => setFormState(value)}> Edit</button>
            <button onClick={() => dispatch(deleteTask(value.id))}>Delete</button>
        </div>
    );
}
