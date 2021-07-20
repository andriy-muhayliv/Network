import { combineReducers, createStore } from "redux";
import newPostReducer from "./newPost-reducer";
import userDataReducer from "./userData-reducer";
import clickReducer from './clickReducer';
import dateReducer from "./dataReducer";

let reducers = combineReducers({
    posts : newPostReducer,
    usersData : userDataReducer,
    home : clickReducer,
    date : dateReducer,
});

let store = createStore(reducers);

export default store;