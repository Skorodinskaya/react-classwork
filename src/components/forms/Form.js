import {useState} from "react";
import {useDispatch} from "react-redux";
import {editTask, setTask} from "../../redux/actions";
import SetTasks from "../tasks/SetTasks";

export default function () {
    const dispatch = useDispatch();

    const [formState, setFormState] = useState({task: '', description: ''})

    const taskToAdd = (e) => setFormState({...formState, [e.target.name]: e.target.value})

    const onSubmit = (e) => {
        e.preventDefault();
        formState.id
            ? dispatch(editTask(formState))
            : dispatch(setTask(formState));

        setFormState({task: '', description: ''})
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input type={'text'} name={'task'} value={formState.task} onChange={taskToAdd}/>
                <input type={'text'} name={'description'} value={formState.description} onChange={taskToAdd}/>
                <button>Add task</button>
            </form>

            <SetTasks setFormState={setFormState}/>
        </div>
    );
}
