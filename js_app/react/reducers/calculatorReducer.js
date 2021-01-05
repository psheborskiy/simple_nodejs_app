export function rootReducer(state = {}, action) {
    switch (action.type) {
        case 'ADD_LOG':
            return {...state, logs: state.logs.concat(action.text)}

        default:
            return state    
    }
    
}