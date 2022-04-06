import { STORE_USER, REMOVE_USER } from './types';

export const userReducer = (state = {}, action) => {
    switch(action.type) {
        case STORE_USER:
            return { ...state, ...action.payload };
        case REMOVE_USER:
            return {}; 
        default: return state;
    }
}