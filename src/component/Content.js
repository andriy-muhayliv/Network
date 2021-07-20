import React from 'react';
import Post from './post/Post';
import { actionTypeAddPost,actionTypeUpdatePost } from '../Redux/newPost-reducer';
import storeContext from '../storeContext';
import ClearContent from './clearContent';

const Content = (props) => {


    return (
       <storeContext.Consumer>
           { (store) => {
               
            let addNewPost = () => {
                store.dispatch(actionTypeAddPost());
            }
        
            let posts = store.getState().posts.posts.map((el, item) => (<Post message={el.message} likes={el.likes} id={item} />))
        
            let onChangePost = (e) => {
                let text = e.target.value;
                store.dispatch(actionTypeUpdatePost(text))
            }
           return <ClearContent store={store} addNewPost={addNewPost} posts={posts} onChangePost={onChangePost}/>
           }
           }
       </storeContext.Consumer>
    )
}
export default Content;