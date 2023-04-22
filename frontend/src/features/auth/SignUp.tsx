/* eslint-disable react-hooks/rules-of-hooks */
import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
//import styles from '../films/styles/films.module.scss';
// import stateContext from '../../context';
import './styles/auth.css';
import { useAppDispatch, RootState } from '../../store';
import { registrationUser } from './userSlice';
import { State, User } from './types/types';

function SignUp(): JSX.Element {
  const [userName, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  // const [id, setId] = useState(Number(''));
  // const [isAdmin, setisAdmin] = useSelector(true);

  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { user, error } = useSelector((store: RootState) => store.auth);
  const registr = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    dispatch(registrationUser({ userName, email, password, password2 }));
  };

  if ('id' in user) {
    navigate('/');
  }

  return (
    <div className="-mx-4 flex flex-wrap registr">
      <form onSubmit={registr} className="formreg">
        <div className="w-full px-4 md:w-1/2 lg:w-1/3">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-slate-700"
          >
            Name
          </label>
          <input
            type="text"
            className="form-control"
            aria-describedby="emailHelp"
            value={userName}
            onChange={(e) => setName(e.target.value)}
            id="title"
            placeholder="Name"
          />
        </div>
        <div className="w-full px-4 md:w-1/2 lg:w-1/3w-full px-4 md:w-1/2 lg:w-1/3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            aria-describedby="emailHelp"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id="email"
            placeholder="Email"
          />
        </div>
        <div className="w-full px-4 md:w-1/2 lg:w-1/3">
          <label htmlFor="password" className="form-label">
            Пароль
          </label>
          <input
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            id="password"
            type="password"
            placeholder="password"
          />
        </div>
        <div className="w-full px-4 md:w-1/2 lg:w-1/3">
          <label htmlFor="password" className="form-label">
            Повторить пароль
          </label>
          <input
            className="form-control"
            value={password2}
            onChange={(e) => setPassword2(e.target.value)}
            id="password2"
            type="password"
            placeholder="repeat password"
          />
        </div>
        <button
          type="submit"
          className="btnAutorization bg-secondary inline-flex items-center justify-center rounded-full py-4 px-10 text-center text-base font-normal text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
        >
          Авторизироваться
        </button>
        {error && <h1>{error}</h1>}
      </form>
    </div>
  );
}

export default SignUp;
