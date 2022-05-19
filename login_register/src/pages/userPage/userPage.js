import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import AuthService from "../../services/authService";
import { removeUser, setUser, deleteUserFromStore } from '../../store/actions';

function UserPage() {

    const userStore = useSelector(store => store.userStore);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [err, setErr] = useState(undefined);

    useEffect(() => {
        if (AuthService.getUserData() === null) {
            setErr("We couldn't load user information, please try again.")
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
            { isLoading && <div className="spinner-border text-danger float-end" role="status"/>}
            <button className="btn btn-warning" onClick={onLogout} >Logout</button>
            { isLoading && <div className="spinner-border text-danger float-end" role="status" />}
            <button onClick={deleteUser} className="btn btn-danger float-md-end">Delete</button>
            {err && <div className="alert alert-warning d-flex align-items-center" role="alert">
                    <img src="warning.svg" alt="Warning" />
                    <div>
                        {err}
                    </div>
                </div>}
        </div>
    )
}

export default UserPage;