import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { TripDetails } from '../components/tripDetail/TripDetail';

const initialTripDetails: TripDetails = {
  numberOfDays: 0,
  startDate: null,
  endDate: null
};

export const tripDetailsSlice = createSlice({
  name: 'tripDetails',
  initialState: initialTripDetails,
  reducers: {
    saveTripDetails: (state, action: PayloadAction<TripDetails>) => {
      const newState: TripDetails = action.payload;
      state = newState;
      return state;
    },
    clearTripDetails: () => {
      return initialTripDetails;
    }
  }
});

export const { saveTripDetails, clearTripDetails } = tripDetailsSlice.actions;
export default tripDetailsSlice.reducer;
