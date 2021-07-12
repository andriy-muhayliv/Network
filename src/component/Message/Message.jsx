import React from 'react';
import s from './Message.module.css'
import Dialog from './Dialog';
import store from '../../Redux/store'
import { actionTypeUpdateMessage, actionTypeAddMessage } from '../../Redux/userData-reducer';




const Message = () => {

  
    
    let changeMessage = (e) => {
        let text = e.target.value;
        store.dispatch(actionTypeUpdateMessage(text));
    }

let messages = store._state.usersData.map(el => (<Dialog message={el.message} id={el.id} name={el.name} />));

let addMessage = () => {
    let text = store.getChangeMessage();
    store.dispatch(actionTypeAddMessage(text));       
}

    return (
        <div className={s.content}>
            <div>Message</div>

            {messages}

            <textarea onChange={changeMessage} value={store.getChangeMessage()}></textarea>
            <button onClick={addMessage}>Send</button>

        </div>
    )
}

export default Message;