import React from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from '../features/navbar/Navbar';

function App(): JSX.Element {
  const dispatch = useDispatch();

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navbar />}></Route>
      </Routes>
    </div>
  );
}

export default App;
