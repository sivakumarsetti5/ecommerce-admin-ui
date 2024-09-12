export const reducer = (state, action) => {
    console.log("Prev Stage", state)
    console.log("action", action)
    switch (action.type) {
        case 'LOGIN':
            state = {
                ...state,
                isLoggedIn: action.payload
            }
        case 'LOADER':
            state = {
                ...state,
                isShowLoader: action.payload
            }    
    }
    console.log("new state", state)
    return state;
}