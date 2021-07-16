import React from 'react';

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

    

    return (
        <div>
            This is Home!
        </div>
    )
}

export default Home;