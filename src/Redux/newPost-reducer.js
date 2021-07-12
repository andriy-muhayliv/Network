const ADD_POST = 'ADD-POST';

let initState = {posts: [{ message: 'hello', likes: 54 }, { message: 'bye', likes: 15 }],}

const newPostReducer = (state = initState, action) => {

    switch(action.type) {
        case ADD_POST:
            let newPost = {
                message: state.newPostText,
                likes: 0,
            }
            state.posts.push(newPost);
            state.newPostText = '';
            return state;
            default: return state;
    }

}

export const actionTypeAddPost = () => ({ type: ADD_POST })


export default newPostReducer;