import { Destination } from '../../reducers/destinations';
import { mapToAccommodation } from '../mapToAccommodation';

describe('mapToAccommodation', () => {
    const destination: Destination = {
        id: '1',
        countryName: 'France',
        cities: [
            {
                id: '1',
                name: 'Paris',
                hotels: [
                    {
                        id: '1',
                        name: 'Hotel A',
                        starRating: 3,
                        rooms: [
                            {
                                id: '1',
                                type: 'Single',
                                perNightCost: 100,
                            },
                            {
                                id: '2',
                                type: 'Double',
                                perNightCost: 150,
                            },
                        ],
                    },
                    {
                        id: '2',
                        name: 'Hotel B',
                        starRating: 4,
                        rooms: [
                            {
                                id: '3',
                                type: 'Single',
                                perNightCost: 120,
                            },
                            {
                                id: '4',
                                type: 'Double',
                                perNightCost: 200,
                            },
                        ],
                    },
                ],
            },
            {
                id: '2',
                name: 'Nice',
                hotels: [
                    {
                        id: '3',
                        name: 'Hotel C',
                        starRating: 5,
                        rooms: [
                            {
                                id: '5',
                                type: 'Single',
                                perNightCost: 200,
                            },
                            {
                                id: '6',
                                type: 'Double',
                                perNightCost: 300,
                            },
                        ],
                    },
                ],
            },
        ],
    };

    it('maps destination to accommodation correctly', () => {
        const accommodation = mapToAccommodation(destination);

        expect(accommodation.id).toBe(destination.id);
        expect(accommodation.location).toBe(destination.countryName);
        expect(accommodation.hotels).toEqual(destination.cities[0].hotels);
        expect(accommodation.roomTypes).toEqual(destination.cities[0].hotels[0].rooms);
        expect(accommodation.selectedHotelName).toBe(destination.cities[0].hotels[0].name);
        expect(accommodation.selectedRoomCategory).toBe(destination.cities[0].hotels[0].rooms[0].type);
        expect(accommodation.starRating).toBe(String(destination.cities[0].hotels[0].starRating));
        expect(accommodation.numberOfNights).toBe(1);
    });
});
