import React from 'react';
import s from './Home.module.css';
import store from '../../Redux/redux-store';
import { actionTypePlus } from '../../Redux/clickReducer';

const stars = (number = 1) => {
    for (let i=0; i <= number; i++) {
        let str = '';
        for (let k =0; k < i; k++) {
            str += '*';
        }
        console.log(str);
    }
}

stars(10)


const Home = () => {



    let plusOne =() => {
        store.dispatch(actionTypePlus())
    }

    return (
        <div>
            <p className={s.text}>{store.getState().home.plusOne}</p>
            <button onClick={plusOne}>plus</button>
            <p>Time is: {store.getState().date}</p>
        </div>
    )
}

export default Home;