import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './Navbar.module.css';


const Navbar = () => {
    return(
  <div >
            <ul>
                <NavLink to='/home' activeClassName={s.active}>Home</NavLink>
                <NavLink to='/message' activeClassName={s.active}>Message</NavLink>
                <NavLink to='/content' activeClassName={s.active}>Content</NavLink>
                <NavLink to='/About' activeClassName={s.active} >About</NavLink>
            </ul>
        </div>
    )
}

export default Navbar;