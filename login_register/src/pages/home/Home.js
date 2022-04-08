import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import AuthService from "../../services/authService";
import { removeUser, setUser } from '../login/store/actions';

function Home() {

    const userStore = useSelector(store => store.userStore);
    console.log("USER STORE FROM HOME ", userStore);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if(AuthService.getUserData() === null){
            navigate('/');
        }
        if(userStore){
           dispatch(setUser(AuthService.getUserData())) 
        }
    },[])

    const onLogout = () => {
        AuthService.logout(navigate);
        dispatch(removeUser());
    }

    return (
        <div className="container">
            <h1>Home Page</h1>
            <h2>Hello {userStore.name}</h2>
            <button className="btn btn-warning" onClick={onLogout} >Logout</button>
        </div>
    )
}

export default Home;