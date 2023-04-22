/* eslint-disable import/no-extraneous-dependencies */
import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

// Слайсы - это отдельные модули нашего приложения. У каждого слайса - свой редьюсер.
import authSlice from './features/auth/userSlice';

const store = configureStore({
  // теперь функция combineReducers не нужна
  reducer: {
    auth: authSlice,
  },
});

// для правильной типизации будем использовать useAppDispatch вместо
// useDispatch;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export type RootState = ReturnType<typeof store.getState>;

export default store;
 