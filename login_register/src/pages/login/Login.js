import React, { useState } from 'react';
import AuthService from '../../services/authService';
import { useDispatch } from 'react-redux';
import { setUser } from './store/actions';
import { useNavigate } from 'react-router-dom';

function Login() {

    const [state, setState] = useState({username: '', password: ''});
    const [err, setErr] = useState(undefined);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onLogin = () => {
        AuthService.login(state)
        .then(res => {
            AuthService.storeUserData(res.data);
            dispatch(setUser(res.data))
            navigate('/home');
        })
        .catch(err => {
            setErr("Incorect username or pass")
        })
    }

    return(
        <div className="container">
            <h1>Login</h1>
            <div className="col-6 offset-3">
                <input type="text" placeholder='name' className='form-control' 
                onChange={event => setState({ ...state, username: event.target.value})}/><br />
                <input type="password" placeholder='password' className='form-control' 
                onChange={event => setState({ ...state, password: event.target.value})}/><br />
                <button onClick={onLogin} className='btn btn-info'>Login</button>
                {err ?? <div><h3>{err}</h3></div>}
            </div>
        </div>
    )
}

export default Login;