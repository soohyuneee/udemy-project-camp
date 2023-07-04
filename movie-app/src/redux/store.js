import { configureStore } from '@reduxjs/toolkit';
import movieReducer from './MovieSlice';
import loadingReducer from './LoadingSlice';

const store = configureStore({
  reducer: {
    movies: movieReducer,
    loading: loadingReducer,
  },
});

export default store;
