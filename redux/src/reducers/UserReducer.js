const initialState = {
    name: '',
    email: ''
};

export default (action, state = initialState) => {

    switch (action.type) {
        case 'SET_NAME':
            return {
                ...state, name: action.payload.name
            };
        case 'SET_EMAIL':
            return {
                ...state, email: action.payload.email
            };
    }
    return state;
}