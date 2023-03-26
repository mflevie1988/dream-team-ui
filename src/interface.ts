import { AnyAction } from '@reduxjs/toolkit';
import { CustomerDetails } from './reducers/customerDetails';
import { Reducer } from 'react';
import { RouterState } from 'connected-react-router';
import { TransportDetail } from './components/transportDetail/TransportDetail';
import { TripDetails } from './components/tripDetail/TripDetail';

export interface AppState {
  router: Reducer<RouterState<any>, AnyAction>;
  login: Login;
  customerDetails: CustomerDetails;
  tripDetails: TripDetails;
  transportDetails: TransportDetail[];
}

export interface Login {
  user: User | null;
  token: string;
  isError?: boolean;
  isLoading?: boolean;
}

export interface User {
  firstName: string;
  lastName: string;
  email: string;
}
