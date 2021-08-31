import {createStore, applyMiddleware} from "redux";
import {reducer} from "./reducer";
import ReduxThunk from 'redux-thunk'

export const store = createStore(reducer, applyMiddleware(ReduxThunk));

export * from './actions';