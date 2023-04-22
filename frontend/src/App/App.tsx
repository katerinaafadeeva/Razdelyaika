import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import SignIn from '../features/auth/SignIn';
import SignUp from '../features/auth/SignUp';
import './App.css';
import Navbar from '../features/navbar/Navbar';
import MainPage from '../features/mainPage/MainPage';
import EcoTaxi from '../features/taxi/EcoTaxi';
import EventList from '../features/events/EventList';
import ContainersList from '../features/containers/ContainersList';
import { getProducts } from '../features/shop/productsSlice';
import * as api from './api';
import ProductsList from '../features/shop/ProductsList';
import { getEvent } from '../features/events/eventSlice';
import { useAppDispatch } from '../store';
import EventItemDiscription from '../features/events/EventItemDiscription';

function App(): JSX.Element {
  const dispatch = useAppDispatch();

  useEffect(() => {
    // api.getProducts().then((data) => console.log(data));
    dispatch(getEvent());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    // <Routes>
    <div className="App">
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<MainPage />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/shop" element={<ProductsList />} />
          <Route path="/taxi" element={<EcoTaxi />} />
          <Route path="/events" element={<EventList />} />
          <Route path={`/events/:eventId`} element={<EventItemDiscription />} />
          <Route path="/containers" element={<ContainersList />} />
        </Route>
      </Routes>
    </div>
    // </Routes>
  );
}

export default App;
