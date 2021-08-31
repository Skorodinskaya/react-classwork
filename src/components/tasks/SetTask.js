import {useDispatch} from "react-redux";
import {deleteTask} from "../../redux";

export default function SetTask({value}) {
    const dispatch = useDispatch()
  const editButton = (value) => {
    // editBtn(e)
  }

  return (
    <div>
        {value.task} - {value.description}
      <button onClick={editButton}> Edit </button>
      <button onClick={() => dispatch(deleteTask(value.id))}>Delete</button>
    </div>
  );
}