import { AccommodationState } from '../reducers/accommodation';
import { Destination } from '../reducers/destinations';

export const mapToAccommodation = (destination: Destination): AccommodationState => {
    const hotels: Hotel[] = [];
    const roomTypes: Room[] = [];
    const locations = destination.cities.map(mapCity(hotels, roomTypes));
    return { locations, hotels, roomTypes };
};

const mapRoom = (roomTypes: Room[]) => (room: Room): Room => {
    const mappedRoom = { ...room };
    roomTypes.push(mappedRoom);
    return mappedRoom;
};

const mapHotel = (hotels: Hotel[], roomTypes: Room[]) => (hotel: Hotel): Hotel => {
    const hotelRooms = hotel.rooms.map(mapRoom(roomTypes));
    const mappedHotel = { ...hotel, rooms: hotelRooms };
    hotels.push(mappedHotel);
    return mappedHotel;
};

const mapCity = (hotels: Hotel[], roomTypes: Room[]) => (city: City): City => {
    const cityHotels = city.hotels.map(mapHotel(hotels, roomTypes));
    return { ...city, hotels: cityHotels };
};
