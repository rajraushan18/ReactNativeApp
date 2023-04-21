import { applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { configureStore } from '@reduxjs/toolkit';
import transactionReducer from './reducers/Transaction';

const rootReducer = combineReducers({
  transactions: transactionReducer,
});

const initialState = {};
const middlewares = [thunk];

const store = configureStore({
  reducer: rootReducer,
  initialState,
  middleware: middlewares,
});

export default store;
