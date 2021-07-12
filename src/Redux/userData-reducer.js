const UPDATE_MESSAGE = 'UPDATE-MESSAGE';

const ADD_NEW_MESSAGE = 'ADD-NEW-MESSAGE';

let initState = {
    usersData: [{ id: 1, name: 'Andriy', message: 'hi' }, { id: 2, name: 'Roma', message: 'Sho ti' },],
    changeMessage: '',
}


const userDataReducer = (state = initState, action) => {
    
    switch(action.type) {
        case UPDATE_MESSAGE :
            state.changeMessage = action.newMessage;
            return state;
        case ADD_NEW_MESSAGE : 
            let userId = state.usersData.length + 1;

            let newUserData = {
                id: userId,
                name: 'Anonim',
                message: action.newMessage
            }
            state.usersData.push(newUserData)
            console.log(newUserData)
            state.changeMessage = '';
            return state;
            default: 
                return state;
    }
    
}

export const actionTypeAddMessage = (text) => ({type : ADD_NEW_MESSAGE, newMessage : text});

export const actionTypeUpdateMessage = (text) => ({type : UPDATE_MESSAGE, newMessage : text});

export default userDataReducer;