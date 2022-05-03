import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import AuthService from "../../services/authService";
import { removeUser, setUser, deleteUserFromStore } from '../../store/actions';

function Home() {

    const userStore = useSelector(store => store.userStore);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (AuthService.getUserData() === null) {
            navigate('/');
        }
        if (userStore) {
            dispatch(setUser(AuthService.getUserData()))
        }
    }, [])

    const onLogout = () => {
        setIsLoading(true);
        AuthService.logout(navigate);
        dispatch(removeUser());
        setIsLoading(false);
    }

    const deleteUser = () => {
        setIsLoading(true);
        AuthService.delete(navigate, userStore.currentUser._id);
        dispatch(deleteUserFromStore(userStore.currentUser._id));
        setIsLoading(false);
    }

    return (
        <div className="container">
            <h1>Home Page</h1>
            <h2>Hello {userStore?.currentUser?.name}</h2>
            { isLoading && <div className="spinner-border text-danger float-end" role="status">
                <span className="visually-hidden">Loading...</span>
            </div> }
            <button className="btn btn-warning" onClick={onLogout} >Logout</button>
            { isLoading && <div className="spinner-border text-danger float-end" role="status">
                <span className="visually-hidden">Loading...</span>
            </div> }
            <button onClick={deleteUser} className="btn btn-danger float-md-end">Delete</button>
        </div>
    )
}

export default Home;