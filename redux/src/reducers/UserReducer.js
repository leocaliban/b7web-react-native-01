const initialState = {
    name: 'Jack Bauer',
    email: 'jbctu@gmail.com'
};

export default (state = initialState, action) => {

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
};