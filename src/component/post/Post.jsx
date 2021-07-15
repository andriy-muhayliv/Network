import React from 'react';
import s from './Post.module.css'
import store  from '../../Redux/redux-store'
import { actionTypeLikes } from '../../Redux/newPost-reducer';




const Post = (props) => {

    return (
        <div>
            <div className={s.post}>
                <p>{props.message}</p>
            </div>

            <div className={s.likes} onClick={() => store.dispatch(actionTypeLikes(props.id))}>Likes <span>{props.likes}</span></div>
        </div>
    )

}


export default Post;