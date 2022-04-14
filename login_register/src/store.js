import { createStore, combineReducers } from 'redux';
import { userReducer } from "./pages/login/store/reducer";

const store = combineReducers({
    userStore: userReducer
})

export default createStore(store,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());