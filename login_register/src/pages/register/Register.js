import React from 'react';
import { useState } from 'react';
import AuthService from '../../services/authService';
import { useNavigate } from 'react-router-dom';

function Register() {

    const [state, setState] = useState({ name: '', pass: '' });
    const [isLoading, setIsLoading] = useState(false);
    const [err, setErr] = useState(undefined);

    const navigate = useNavigate();

    const onRegister = () => {
        setIsLoading(true);
        AuthService.register(state)
            .then(res => {
                setIsLoading(false);
                if (res.status === 200) {
                    navigate('/');
                }
            })
            .catch(err => {
                setErr("Failed registration. Name and pass are required!")
                setIsLoading(false);
            })
    }

    return (
        <div className="container">
            <h1>Register</h1>
            <div className="col-6 offset-3">
                <input type="text" placeholder='name' className='form-control'
                    value={state.name}
                    onChange={event => setState({ ...state, name: event.target.value })}
                /><br />
                <input type="password" placeholder='password' className='form-control'
                    onChange={event => setState({ ...state, pass: event.target.value })}
                /><br />
                {isLoading &&
                    <div className="spinner-border text-primary" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                }
                <button onClick={onRegister} className='btn btn-primary'>Register</button>
                {err && <div className="alert alert-warning d-flex align-items-center" role="alert">
                    <img src="warning.svg" alt="Warning" />
                    <div>
                        {err}
                    </div>
                </div>}
            </div>
        </div>
    )
}

export default Register;