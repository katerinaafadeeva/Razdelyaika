/* eslint-disable react-hooks/rules-of-hooks */
import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
// import { RootState } from '../../redux/store';
// import { State } from './types/State';
import { RootState, useAppDispatch } from '../../store';
import { loginUser } from './userSlice';

function SignIn(): JSX.Element {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const { dispatch } = useContext(stateContext);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { user, error } = useSelector((store: RootState) => store.auth);
  console.log(error);
  

  const autorization = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    dispatch(loginUser({ email, password }));
  };
  if ('id' in user) {
    navigate('/');
  }
  return (
    <div className="d-flex justify-content-center mt-5">
      <form onSubmit={autorization} className="formlog">
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Электронная почта
          </label>
          <input
            type="email"
            className="form-control"
            aria-describedby="emailHelp"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id="email"
          />
          <div id="emailHelp" className="form-text">
            Введите вашу почту
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Пароль
          </label>
          <input
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            id="password"
            type="password"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Авторизироваться
        </button>
        {error && <h1>{error}</h1>}
      </form>
    </div>
  );
}

export default SignIn;
