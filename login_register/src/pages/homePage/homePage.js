import React, { useEffect, useState } from 'react';
import AuthService from '../../services/authService';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import UsersList from './usersList';
import { allUsers } from '../login/store/actions';

function HomePage() {

  const [state, setState] = useState({});
  const [err, setErr] = useState(undefined);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    AuthService.loadingUsers(state)
      .then(res => {
        setState(res)
        // console.log("RESPONSE FROM HOME PAGE ", res);
        dispatch(allUsers(res.data))
        navigate('/');
      })
      .catch(err => {
        setErr("Incorect username or pass ")
      })
    console.log("Use Effect from HOME PAGE");
  }, [])

  return (
    <div className="container">
      <h1>Welcome to Home Page</h1>
      <UsersList />
    </div>
  )
}

export default HomePage;