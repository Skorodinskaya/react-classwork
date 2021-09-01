import {DELETE_TASK, EDIT_TASK, SET_TASK} from "../actions";

export const mainReducer = (state = {tasks: []}, action) => {
    switch (action.type) {
        case SET_TASK:
            const arr = state.tasks.sort((a, b) => a.id - b.id)
            console.log(arr)
            const id = arr['length']?.id || 1;
            return {...state, tasks: [...state.tasks, {...action.payload, id}]}

        case DELETE_TASK:
            const tasks = state.tasks.filter(value => value.id !== action.payload)
            return {...state, tasks}

        case EDIT_TASK:
            return {...state, tasks: [...state.tasks, {...action.payload}]}

        default:
            return state
    }
}