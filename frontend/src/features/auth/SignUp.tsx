/* eslint-disable react-hooks/rules-of-hooks */
import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
//import styles from '../films/styles/films.module.scss';
// import stateContext from '../../context';

function SignUp(): JSX.Element {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const { dispatch } = useContext(stateContext);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onHandleSubmit = async (
    e: React.FormEvent<HTMLFormElement>,
  ): Promise<void> => {
    e.preventDefault();
    const res = await fetch('/auth/signup', {
      method: 'post',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({ name, email, password }),
    });
    const data = await res.json();
    dispatch({ type: 'SIGN_UP', payload: data });
    navigate('/');
  };

  return (
    <div className="d-flex justify-content-center mt-5">
      <form onSubmit={onHandleSubmit} style={{ width: '700px' }}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Имя
          </label>
          <input
            type="text"
            className="form-control"
            aria-describedby="emailHelp"
            value={name}
            onChange={(e) => setName(e.target.value)}
            id="title"
          />
        </div>
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
    </div>
  );
}

export default SignUp;
