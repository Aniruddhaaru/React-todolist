import { combineReducers } from "redux";
import { operationsReducer } from "./todoapp/reducers/operation";

export const rootReducer = combineReducers({
    operationsReducer,
    
})