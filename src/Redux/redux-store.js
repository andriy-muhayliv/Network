import { combineReducers, createStore } from "redux";
import newPostReducer from "./newPost-reducer";
import userDataReducer from "./userData-reducer";
import clickReducer from './clickReducer';

let reducers = combineReducers({
    posts : newPostReducer,
    usersData : userDataReducer,
    home : clickReducer,
});

let store = createStore(reducers);

export default store;