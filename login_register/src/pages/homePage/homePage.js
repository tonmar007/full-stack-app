import React, { useEffect, useState } from 'react';
import AuthService from '../../services/authService';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import UsersList from './usersList';
import { allUsers } from '../../store/actions';

function HomePage() {

  const [state, setState] = useState({});
  const [err, setErr] = useState(undefined);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoading(true);
    AuthService.loadingUsers(state)
      .then(res => {
        setIsLoading(false);
        setState(res);
        dispatch(allUsers(res.data));
        navigate('/');
      })
      .catch(err => {
        setErr("Incorrect username or pass ");
      })
  }, [])

  return (
    <div className="container">
      {isLoading? <div className="spinner-border text-primary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div> : 
        <UsersList />
    }
    </div>
  )
}

export default HomePage;