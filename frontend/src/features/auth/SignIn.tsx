/* eslint-disable react-hooks/rules-of-hooks */
import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
// import { RootState } from '../../redux/store';
import { State } from './types/State';
import { RootState, useAppDispatch } from '../../store';

function SignIn(): JSX.Element {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const { dispatch } = useContext(stateContext);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { message, auth } = useSelector((store: RootState) => store.auth);

  const onHandleSubmit = async (
    e: React.FormEvent<HTMLFormElement>,
  ): Promise<void> => {
    e.preventDefault();
    const res = await fetch('/auth/signin', {
      method: 'post',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });
    const data = await res.json();
    dispatch({ type: 'SIGN_IN', payload: data });
    // navigate('/');
  };
  useEffect(() => {
    if (auth) {
      navigate('/');
    }
  }, [auth]);

  return (
    <div className="d-flex justify-content-center mt-5">
      <form onSubmit={onHandleSubmit} style={{ width: '700px' }}>
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
      </form>
      <h1>{message}</h1>
    </div>
  );
}

export default SignIn;
