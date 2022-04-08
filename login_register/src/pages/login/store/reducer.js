import { STORE_USER, REMOVE_USER, HOME_PAGE } from './types';

export const userReducer = (state = {}, action) => {
    switch(action.type) {
        case STORE_USER:
            return { ...state, ...action.payload };
        case REMOVE_USER:
            return {}; 
        default: return state;
    }
}

export const homePageReducer = (state = {}, action) => {
    switch(action.type){
        case HOME_PAGE:
            return { ...state, ...action.payload };
        default: return state;
    }
}