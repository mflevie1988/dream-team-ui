import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { TransportDetail } from '../components/transportDetail/TransportDetail';

const initialTransportDetails: TransportDetail[] = [];

export const transportDetailsSlice = createSlice({
  name: 'transportDetails',
  initialState: initialTransportDetails,
  reducers: {
    saveTransportDetails: (state, action: PayloadAction<TransportDetail[]>) => {
      const newState: TransportDetail[] = action.payload;
      state = newState;
      return state;
    },
    clearTransportDetails: () => {
      return initialTransportDetails;
    }
  }
});

export const { saveTransportDetails, clearTransportDetails } = transportDetailsSlice.actions;
export default transportDetailsSlice.reducer;
