import { City, Destination, Hotel, Room } from './destinations';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { Accommodation } from '../components/accommodation/Accommodation';
import { mapToAccommodation } from '../mappers/mapToAccommodation';
import { v4 as uuid4 } from 'uuid';

export interface AccommodationState {
    locations: City[];
    hotels: Hotel[];
    roomTypes: Room[];
}

const initialState: AccommodationState = {
    locations: [],
    hotels: [],
    roomTypes: []
};

export const accommodationSlice = createSlice({
    name: 'accommodation',
    initialState,
    reducers: {
        receivedDestinationDetails: (state, action: PayloadAction<Destination>) => {
            const destination: Destination = action.payload;
            const newState: AccommodationState = mapToAccommodation(destination);
            return newState;
        }
    }
});

export const { receivedDestinationDetails } = accommodationSlice.actions;
export default accommodationSlice.reducer;
