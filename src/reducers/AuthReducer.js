const initialState = {
    email: "",
    password: ""
};

const AuthReducer = (state = initialState, action) => {
    switch(action.type) {
        case "handlerText": {
            return { ...state, email: action.payload.email }
        }
    }

    return state;
}

export default AuthReducer;