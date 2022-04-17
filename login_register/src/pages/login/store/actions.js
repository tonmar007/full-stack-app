import { STORE_USER, REMOVE_USER, HOME_PAGE, DELETE_USER } from './types';

export const setUser = (user) => {
    return {
        type: STORE_USER,
        payload: user
    }
}

export const removeUser = () => {
    return {
        type: REMOVE_USER
    }
}

export const allUsers = (users) => {
    return {
        type: HOME_PAGE,
        payload: {
            users: users
        }
    }
}

export const deleteUser = (id) => {
    return {
        type: DELETE_USER,
        payload: id
    }
}