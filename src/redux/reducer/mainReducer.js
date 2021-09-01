import {DELETE_TASK, EDIT_TASK, SET_TASK} from "../actions";

const initialState = {tasks: []};

export const mainReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TASK:
            const arr = state.tasks.sort((a, b) => a.id - b.id)
            const id = arr[arr.length-1]?.id + 1 || 1;                             // цей код генерує нову id
            return {...state, tasks: [...state.tasks, {...action.payload, id}]}

        case DELETE_TASK:
            const tasks = state.tasks.filter(value => value.id !== action.payload)
            return {...state, tasks}

        case EDIT_TASK:
            const filter = state.tasks.filter(value => value.id !== action.payload.id)
            const newArr = [...filter, action.payload].sort((a, b) => a.id - b.id)
            return {...state, tasks: newArr}

        default:
            return state
    }
}
