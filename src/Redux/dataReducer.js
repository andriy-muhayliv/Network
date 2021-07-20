import store from "./redux-store";

const NEW_DATE = 'NEW_DATE';

let initDate = new Date().toLocaleString();
setInterval(()=>{store.dispatch(actionTypeDate())},1000)


const dateReducer = (state=initDate, action) => {

    switch(action.type) {
        case NEW_DATE : 
        state = new Date().toLocaleString();
        return state;
        default:return state;
    }
}

export const actionTypeDate = () => ({type: NEW_DATE})

export default dateReducer;