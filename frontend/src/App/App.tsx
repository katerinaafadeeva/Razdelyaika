import React from 'react';
import { useDispatch } from 'react-redux';
import { Routes } from 'react-router-dom';
import './App.css';
import Navbar from '../features/navbar/Navbar';

function App(): JSX.Element {
  const dispatch = useDispatch();

  return (
    <div className="App">
      <Navbar />
    </div>
  );
}

export default App;
