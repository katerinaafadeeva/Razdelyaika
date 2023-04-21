import React from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from '../features/navbar/Navbar';
import MainPage from '../features/mainPage/MainPage';
import SignIn from '../features/auth/SignIn';
import SignUp from '../features/auth/SignUp';

function App(): JSX.Element {
  const dispatch = useDispatch();

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<MainPage />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
