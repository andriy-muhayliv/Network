const LIKE_COUNT = 'LIKE-COUNT';

let initState = {posts: [{ message: 'hello', likes: 54 }, { message: 'bye', likes: 15 }],}

const likeReducer = (state = initState, action) => {

    switch (action.type) {
    case LIKE_COUNT:
        state.posts[action.id].likes++
    return state;
       default: return state;
}

}

export default likeReducer;