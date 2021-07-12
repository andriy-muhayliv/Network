import { combineReducers, createStore } from "redux";
import likeReducer from "./likeCount-reducer";
import newPostReducer from "./newPost-reducer";
import updateNewPostsReducer from "./post-reducer";
import userDataReducer from "./userData-reducer";

let reducers = combineReducers({
    newPostText : updateNewPostsReducer,
    posts : newPostReducer,
    usersData : userDataReducer,
    likes : likeReducer,
});

let store = createStore(reducers);
console.log(store)

export default store;