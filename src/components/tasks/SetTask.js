import {useDispatch} from "react-redux";
import {deleteTask, editTask} from "../../redux";

export default function SetTask({value}) {
    const dispatch1 = useDispatch()
    const dispatch = useDispatch()

    return (
        <div>
            {value.task} - {value.description}
            <button onClick={() => dispatch1(editTask(value))}> Edit</button>
            <button onClick={() => dispatch(deleteTask(value.id))}>Delete</button>
        </div>
    );
}