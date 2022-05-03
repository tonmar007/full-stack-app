import React, { useState } from 'react';
import AuthService from '../../services/authService';
import { useDispatch } from 'react-redux';
import { setUser } from '../../store/actions';
import { useNavigate } from 'react-router-dom';

function Login() {

    const [state, setState] = useState({ username: '', password: '' });
    const [err, setErr] = useState(undefined);
    const [isLoading, setIsLoading] = useState(false);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onLogin = () => {
        setIsLoading(true);
        AuthService.login(state)
            .then(res => {
                setIsLoading(false);
                AuthService.storeUserData(res.data);
                dispatch(setUser(res.data))
                navigate('/home');
            })
            .catch(err => {
                setErr("Incorect username or pass")
                setIsLoading(false);
            })
    }

    return (
        <div className="container">
            <h1>Login</h1>
            <div className="col-6 offset-3">
                <input type="text" placeholder='name' className='form-control'
                    onChange={event => setState({ ...state, username: event.target.value })} /><br />
                <input type="password" placeholder='password' className='form-control'
                    onChange={event => setState({ ...state, password: event.target.value })} /><br />
                {isLoading && <div className="spinner-border text-success" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>}
                <button onClick={onLogin} className='btn btn-info'>Login</button>
                {err && <div className="alert alert-warning d-flex align-items-center" role="alert">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-exclamation-triangle-fill flex-shrink-0 me-2" viewBox="0 0 16 16" role="img" aria-label="Warning:">
                        <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                    </svg>
                    <div>
                        {err}
                    </div>
                </div>}
            </div>
        </div>
    )
}

export default Login;