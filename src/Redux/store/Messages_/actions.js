export const ADD_MESSAGE = 'ADD_MESSAGE';
export const DELETE_MESS_BYID = 'DELETE_MESS_BYID';


export const addMessage = (idchat, message) => ({
    type: ADD_MESSAGE,
    payload: { idchat, message }
});

export const deleteMessById = (idchat) => ({
    type: DELETE_MESS_BYID,
    payload: idchat
});

export const addMessWithThunk = (idchat, { messid, author, text }) => (dispatch) => {
    dispatch(addMessage(idchat, { messid: messid, author: author, text: text }))
    if (author !== 'Bot') {
        const timeout = setTimeout(() => {
            dispatch(addMessage(idchat, { messid: Date.now(), author: 'Bot', text: 'I am robot' }))
        }, 1000);

        return () => clearTimeout(timeout);
    }
};

