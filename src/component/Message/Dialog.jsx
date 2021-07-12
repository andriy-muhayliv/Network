import React from 'react';
import s from './Message.module.css'
import { NavLink } from 'react-router-dom';

const Dialog = (props) => {
    return(
        <div className={s.dialog}>
        <NavLink to={`/message/${props.id}`}>
        <div>{props.name}</div>
        <div>
            <div >{props.message}</div>
        </div>
    </NavLink>
    </div>
    )
} 
export default Dialog;