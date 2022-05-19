import React from 'react';
import { useState } from 'react';
import AuthService from '../../services/authService';
import { useNavigate } from 'react-router-dom';

function Register() {

    const [name, setName] = useState("");
    const [pass, setPass] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [err, setErr] = useState(undefined);

    const navigate = useNavigate();

    const onRegister = () => {
        setIsLoading(true);
        AuthService.register({ name, pass })
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

    const onUsernameChanged = (event) => {
        setName( event.target.value );
    }

    const onPasswordChanged = (event) => {
        setPass( event.target.value );
    }

    return (
        <div className="container">
            <h1>Register</h1>
            <div className="col-6 offset-3">
                <input type="text" placeholder='name' className='form-control'
                    value={ name }
                    onChange={ onUsernameChanged }
                /><br />
                <input type="password" placeholder='password' className='form-control'
                    onChange={ onPasswordChanged }
                /><br />
                {isLoading && <div className="spinner-border text-primary" role="status" />}
                <button onClick={onRegister} className='btn btn-primary'>Register</button>
                {err && <div className="alert alert-warning d-flex align-items-center" role="alert">
                    <img src="warning.svg" alt="Warning" />
                    <div>
                        {err}
                    </div>
                </div>
                }
            </div>
        </div>
    )
}

export default Register;