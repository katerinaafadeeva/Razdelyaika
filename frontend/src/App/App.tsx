import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from '../features/navbar/Navbar';
import MainPage from '../features/mainPage/MainPage';
import SignIn from '../features/auth/SignIn';
import SignUp from '../features/auth/SignUp';
import EcoTaxi from '../features/taxi/EcoTaxi';
import EventList from '../features/events/EventList';
import ContainersList from '../features/containers/ContainersList';
import { getProducts } from './api';
import * as api from './api';
import ProductsList from '../features/shop/ProductsList';

function App(): JSX.Element {
  const dispatch = useDispatch();

  useEffect(() => {
    api.getProducts().then((data) => console.log(data));
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<MainPage />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/shop" element={<ProductsList />} />
          <Route path="/taxi" element={<EcoTaxi />} />
          <Route path="/events" element={<EventList />} />
          <Route path="/containers" element={<ContainersList />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
