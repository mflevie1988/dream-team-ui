import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const initialState: DestinationState = {
  isLoaded: false,
  selectedDestination: undefined,
  isLoading: false
};

export interface City {
  id: string;
  name: string;
  hotels: Hotel[];
}

export interface Room {
  id: string;
  type: string;
  perNightCost?: number;
}

export interface Hotel {
  id: string;
  name: string;
  starRating: number;
  rooms: Room[];
}

export interface Destination {
  id: string;
  countryName: string;
  cities: City[];
}

export interface DestinationState {
  isLoaded?: boolean;
  selectedDestination?: Destination;
  isLoading: boolean;
}

export const destinationSlice = createSlice({
  name: 'destination',
  initialState,
  reducers: {
    fetchDestinationDetails: (state, action: PayloadAction<string>) => {
      state.isLoading = true;
      return state;
    },
    receivedDestinationDetails: (state, action: PayloadAction<Destination>) => {
      const payload: Destination = action.payload;
      state.isLoaded = true;
      state.isLoading = false;
      state.selectedDestination = payload;
    }
  }
});

export const { fetchDestinationDetails, receivedDestinationDetails } = destinationSlice.actions;
export default destinationSlice.reducer;
