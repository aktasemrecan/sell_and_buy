import {createStore, applyMiddleware } from "redux";
import combinedReducers from "./reducers/combined-reducers";
import thunk from "redux-thunk";

export default function configureStore(initialState?:any){
    return createStore(combinedReducers,initialState,applyMiddleware(thunk));
}