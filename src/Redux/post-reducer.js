const UPDATE_POST = 'UPDATE-POST';

let initState = {newPostText: 'hello!',}

const updateNewPostsReducer = (state = initState, action) => {

    switch(action.type) {
        case UPDATE_POST : 
          state = action.newText;
          return state;
        default: 
            return state;
    }
}

export const actionTypeUpdatePost = (text) => ({ type: UPDATE_POST, newText: text })


export default updateNewPostsReducer;