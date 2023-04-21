import React from 'react';
import { useDispatch } from 'react-redux';
import { Routes } from 'react-router-dom';
import './App.css';
import Navbar from '../features/navbar/Navbar';

function App(): JSX.Element {

  const dispatch = useDispatch();

  return (
    <Routes>
      
      <div className="App">
        <h1>Razgildyaika_project_presetns</h1>
             <Navbar />
      </div>
    </Routes>

  );
}

export default App;
