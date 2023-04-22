import React from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import SignIn from '../features/auth/SignIn';
import SignUp from '../features/auth/SignUp';
import './App.css';
import Navbar from '../features/navbar/Navbar';

function App(): JSX.Element {
  const dispatch = useDispatch();

  return (
    // <Routes>
    <div className="App">
      {/* <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} /> */}
      <Navbar />
      <SignIn />
      {/* <SignUp /> */}
    </div>
    // </Routes>
  );
}

export default App;
