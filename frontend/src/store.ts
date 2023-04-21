import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import eventsSlice from './features/events/eventSlice';

// Слайсы - это отдельные модули нашего приложения. У каждого слайса - свой редьюсер:

const store = configureStore({
  reducer: {
    eventState: eventsSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
