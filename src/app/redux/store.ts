import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import homepageReducer from '../containers/HomePage/homepageSlice';
import logger from 'redux-logger';

export const store = configureStore({
  reducer: {
    homePage: homepageReducer
  },
  middleware: (getDefaultMiddleware : any) => getDefaultMiddleware().concat(logger),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
