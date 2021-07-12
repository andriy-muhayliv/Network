import React from 'react';
import style from './Header.module.css'
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className={style.header}>
            <NavLink to='/home'><img src='https://cdn.logo.com/hotlink-ok/logo-social.png' alt='pic' /></NavLink>
            <p>Network</p>
        </div>
    )
}

export default Header;