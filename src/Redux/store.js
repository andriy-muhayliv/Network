import likeReducer from "./likeCount-reducer";
import newPostReducer from "./newPost-reducer";
import updateNewPostsReducer from "./post-reducer";
import userDataReducer from "./userData-reducer";


let store = {
    _state: {

        usersData: [{ id: 1, name: 'Andriy', message: 'hi' }, { id: 2, name: 'Roma', message: 'Sho ti' }],

        newPostText: 'hello!',

        posts: [{ message: 'hello', likes: 54 }, { message: 'bye', likes: 15 }],
        
        changeMessage: '',

    },

    getChangeMessage() {
        return this._state.changeMessage;
    },



    Rerender() {

    },



    getState() {
        return this._state;
    },



    getNewPostText() {
        return this._state.newPostText;
    },


    subscribe(observe) {
        this.Rerender = observe;
    },

    dispatch(action) {

        this._state.newPostText = updateNewPostsReducer(this._state.newPostText, action);
        this._state = newPostReducer(this._state, action);
        this._state = userDataReducer(this._state, action);
        this._state.posts = likeReducer(this._state.posts,action);
    this.Rerender();

    }

}

export default store;