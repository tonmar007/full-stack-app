import React from 'react';
import { useState } from 'react';
import AuthService from '../../services/authService';
import { useNavigate } from 'react-router-dom';

function Register() {

    const [state, setState] = useState({name: '', pass: ''})

    const navigate = useNavigate();

    const onRegister = () => {
        AuthService.register(state)
        .then(res => {
            if(res.status === 200){
                navigate('/login');
            }
        })
    }
    
    return(
        <div className="container">
            <h1>Register</h1>
            <div className="col-6 offset-3">
                <input type="text" placeholder='name' className='form-control' 
                value={state.name} 
                onChange={event => setState({...state,name: event.target.value})}
                /><br />
                <input type="password" placeholder='password' className='form-control' 
                onChange={event => setState({...state,pass: event.target.value})}
                /><br />
                <button onClick={onRegister} className='btn btn-primary'>Register</button>
            </div>
        </div>
    )
}

export default Register;