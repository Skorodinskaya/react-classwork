import {DELETE_TASK, EDIT_TASK, SET_TASK} from "./actionTypes";

const setTask = (value) => ({type: SET_TASK, payload: value});
const deleteTask = (id) => ({type: DELETE_TASK, payload: id})
const editTask = (value) => ({type: EDIT_TASK, payload: value})

export {setTask, deleteTask, editTask}

