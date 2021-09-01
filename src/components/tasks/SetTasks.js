import {useSelector} from "react-redux";
import SetTask from "./SetTask";

export default function SetTasks() {
    const {tasks} = useSelector(({mainReducer}) => mainReducer);

    return (
        <div>
            {
                tasks.map(value => <SetTask key={value.id} value={value}/>)
            }

        </div>
    );
}
