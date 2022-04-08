import { createStore, combineReducers } from 'redux';
import { userReducer, homePageReducer } from "./pages/login/store/reducer";

const store = combineReducers({
    userStore: userReducer,
    homePageStore: homePageReducer
})

export default createStore(store,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());