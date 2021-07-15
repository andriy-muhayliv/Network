import { combineReducers, createStore } from "redux";
import newPostReducer from "./newPost-reducer";
import userDataReducer from "./userData-reducer";

let reducers = combineReducers({
    posts : newPostReducer,
    usersData : userDataReducer,
});

let store = createStore(reducers);
console.log(store)

export default store;