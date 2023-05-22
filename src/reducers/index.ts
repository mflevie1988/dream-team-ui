import { History } from 'history';
import { combineReducers } from '@reduxjs/toolkit';
import { connectRouter } from 'connected-react-router';
import { customerDetailsSlice } from './customerDetails';
import { destinationSlice } from './destinations';
import { loginSlice } from './login';
import { transportDetailsSlice } from './transportDetails';
import { tripDetailsSlice } from './tripDetails';

const createRootReducer = (history: History) =>
  combineReducers({
    router: connectRouter(history),
    login: loginSlice.reducer,
    destination: destinationSlice.reducer,
    customerDetails: customerDetailsSlice.reducer,
    tripDetails: tripDetailsSlice.reducer,
    transportDetails: transportDetailsSlice.reducer
  });

export default createRootReducer;
