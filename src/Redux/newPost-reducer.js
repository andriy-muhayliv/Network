const ADD_POST = 'ADD-POST';
const LIKE_COUNT = 'LIKE-COUNT';
const UPDATE_POST = 'UPDATE-POST';


let initState = { posts: [{ message: 'hello', likes: 54 }, { message: 'bye', likes: 15 }], newPostText: 'hello!', }

const newPostReducer = (state = initState, action) => {

    switch (action.type) {
        case ADD_POST:
            let newPost = {
                message: state.newPostText,
                likes: 0,
            }
            state.posts.push(newPost);
            state.newPostText = '';
            return state;
        case LIKE_COUNT:
            state.posts[action.id].likes++
            return state;
        case UPDATE_POST:
            state.newPostText = action.newText;
            return state;
        default: return state;
    }

}

export const actionTypeAddPost = () => ({ type: ADD_POST });
export const actionTypeLikes = (id) => ({ type: LIKE_COUNT, id: id, });
export const actionTypeUpdatePost = (text) => ({ type: UPDATE_POST, newText: text })


export default newPostReducer;