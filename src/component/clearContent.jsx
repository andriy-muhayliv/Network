import React from 'react';


const ClearContent = (props) => {
    return(
        <div>
        <h2>Input text</h2>

        <div>
            <textarea onChange={props.onChangePost} value={props.store.getState().posts.newPostText} />

            <div>
                <button onClick={props.addNewPost}>Add</button>
            </div>

        </div>

        {props.posts}


    </div>
    )
}

export default ClearContent;