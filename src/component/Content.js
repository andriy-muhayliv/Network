import React from 'react';
import Post from './post/Post';
import store from '../Redux/store';
import { actionTypeAddPost } from '../Redux/newPost-reducer';
import { actionTypeUpdatePost } from '../Redux/post-reducer';


const Content = (props) => {

    let newPost = React.createRef();

    let addNewPost = () => {
        let text = store.getNewPostText();
        store.dispatch(actionTypeAddPost());
    }

    let posts = store.getState().posts.map((el, item) => (<Post message={el.message} likes={el.likes} id={item} />))

    let onChangePost = () => {
        let text = newPost.current.value;
        store.dispatch(actionTypeUpdatePost(text))
    }

    return (
        <div>
            <h2>Input text</h2>

            <div>
                <textarea onChange={onChangePost} ref={newPost} value={store.getNewPostText()} />

                <div>
                    <button onClick={addNewPost}>Add</button>
                </div>

            </div>

            {posts}


        </div>
    )
}
export default Content;