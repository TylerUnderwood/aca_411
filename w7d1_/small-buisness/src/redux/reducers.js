import { combineReducers } from 'redux'
import initialState from '../redux/state';

const user = ( state = null ) => state

const login = ( state = initialState, action ) => {
	console.log(state.user)
    switch(action.type) {
        case 'LOGIN':
			state.user.loggedIn = action.value
            return state
        case 'LOGOUT':
			state.user.loggedIn = action.value
            return state
        default:
            return state
    }
}

const business = ( state = [], action ) => {
    switch(action.type) {
        case 'ADD_BUSINESS':
            return [ ...state, action.value ]
        case 'REMOVE_BUSINESS':
            const business = [ ...state ]
            business.splice(action.value, 1)
            return business
        default:
            return state
    }
}

export default combineReducers({ user, login, business })