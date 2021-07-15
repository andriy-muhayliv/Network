import React from 'react';
import Post from './post/Post';
import store from '../Redux/redux-store';
import { actionTypeAddPost,actionTypeUpdatePost } from '../Redux/newPost-reducer';


const Content = (props) => {


    let addNewPost = () => {
        store.dispatch(actionTypeAddPost());
    }

    let posts = store.getState().posts.posts.map((el, item) => (<Post message={el.message} likes={el.likes} id={item} />))

    let onChangePost = (e) => {
        let text = e.target.value;
        store.dispatch(actionTypeUpdatePost(text))
    }

    return (
        <div>
            <h2>Input text</h2>

            <div>
                <textarea onChange={onChangePost} value={store.getState().posts.newPostText} />

                <div>
                    <button onClick={addNewPost}>Add</button>
                </div>

            </div>

            {posts}


        </div>
    )
}
export default Content;