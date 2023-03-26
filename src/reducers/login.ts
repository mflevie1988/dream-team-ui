import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { Credentials } from '../contracts/interface';
import { Login } from '../interface';

const initialState: Login = {
  user: {
    firstName: '',
    lastName: '',
    email: ''
  },
  token: '',
  isError: false,
  isLoading: false
};

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    FETCH_USER_AUTHENTICATION: (state, action: PayloadAction<{ email: string; password: string }>) => {
      state.isLoading = true;
    },
    SET_CREDENTIALS: (state, action: PayloadAction<Credentials>) => {
      const payload: Credentials = action.payload;
      state.user = payload.user;
      state.token = payload.accessToken;
    },
    LOGOUT: (state, action: PayloadAction<Credentials>) => {
      state.user = null;
      state.token = '';
      state.isError = false;
    }
  }
});

export const { FETCH_USER_AUTHENTICATION, SET_CREDENTIALS, LOGOUT } = loginSlice.actions;
export default loginSlice.reducer;
