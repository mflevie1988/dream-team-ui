import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface CustomerDetails {
  name: string;
  phone: string;
  email: string;
  address: string;
  numAdults: number;
  numKids: number;
}

const initialCustomerDetails: CustomerDetails = {
  name: '',
  phone: '',
  email: '',
  address: '',
  numAdults: 0,
  numKids: 0
};

export const customerDetailsSlice = createSlice({
  name: 'customerDetails',
  initialState: initialCustomerDetails,
  reducers: {
    saveCustomerDetails: (state, action: PayloadAction<CustomerDetails>) => {
      const newState: CustomerDetails = action.payload;
      state = newState;
      return state;
    },
    clearCustomerDetails: () => {
      return initialCustomerDetails;
    }
  }
});

export const { saveCustomerDetails, clearCustomerDetails } = customerDetailsSlice.actions;
export default customerDetailsSlice.reducer;
