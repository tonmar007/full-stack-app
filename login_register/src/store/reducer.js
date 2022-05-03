import { STORE_USER, REMOVE_USER, HOME_PAGE, DELETE_USER } from './types';

export const userReducer = (state = {}, action) => {
    switch(action.type) {
        case HOME_PAGE:
            return { ...state, ...action.payload };
        case STORE_USER:
            return { ...state, ...action.payload };
        case REMOVE_USER:
            return {};
        case DELETE_USER:
            const filteredUsers = Object.values(state.users).filter(user => user._id !== action.payload.id)
            return {  ...state, users: filteredUsers };
        default: return state;
    }
}