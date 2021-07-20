const STATE_PLUS_ONE = 'STATE_PLUS_ONE';

let initState = {plusOne : 0};

const clickReducer = (state=initState, action) => {

    switch(action.type) {
        case STATE_PLUS_ONE : 
        state.plusOne++
        return state;
        default: return state; 
    }

}

export const actionTypePlus = () => ({type : STATE_PLUS_ONE})

export default clickReducer;