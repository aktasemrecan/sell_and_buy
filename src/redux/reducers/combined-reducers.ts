import {combineReducers} from "redux";
import { authReducer } from "./authReducer";

const combinedReducers = combineReducers({
    authReducer
});

export default combinedReducers;