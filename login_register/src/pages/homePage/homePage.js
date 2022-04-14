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
        dispatch(allUsers(res.data))
        navigate('/homepage');
      })
      .catch(err => {
        setErr("Incorect username or pass ");
        console.log(err);
      })
  }, [])

  return (
    <div className="container">
      <UsersList />
    </div>
  )
}

export default HomePage;