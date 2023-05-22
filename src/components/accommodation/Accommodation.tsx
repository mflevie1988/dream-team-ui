import {
  Box,
  Button,
  FormControl,
  Grid,
  IconButton,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Paper,
  Select,
  SelectChangeEvent,
  TextField
} from '@mui/material';
import { City, Hotel, Room, fetchDestinationDetails } from '../../reducers/destinations';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { AppState } from '../../interface';
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';
import { useParams } from 'react-router-dom';
import { v4 as uuid4 } from 'uuid';

interface AccommodationProps {
  handleAccordionChange: (panel: string) => void;
}

export interface Accommodation {
  id: string;
  location: string;
  hotels: Hotel[];
  roomTypes: Room[];
  selectedHotelName: string;
  selectedRoomCategory: string;
  starRating: string;
  numberOfNights: number;
  extraBeds?: number;
  remarks?: string;
}

const initialAccommodation: Accommodation = {
  id: uuid4(),
  location: '',
  hotels: [],
  roomTypes: [],
  selectedHotelName: '',
  starRating: '',
  selectedRoomCategory: '',
  numberOfNights: 0,
  extraBeds: 0,
  remarks: ''
};

interface UpdateAccommodationItemParams {
  id: string;
  updates: Partial<Accommodation>;
}

export const Accommodation = ({ handleAccordionChange }: AccommodationProps) => {
  const dispatch = useDispatch();
  const { destination } = useParams();
  const [accommodationItems, setAccommodationItems] = useState<Accommodation[]>([initialAccommodation]);
  const [cities, setCities] = useState<City[]>([]);

  const selectedDestination = useSelector((state: AppState) => state.destination.selectedDestination);

  useEffect(() => {
    if (!selectedDestination && destination) {
      dispatch(fetchDestinationDetails(destination));
    }
  }, []);

  useEffect(() => {
    if (selectedDestination && selectedDestination.cities) {
      setCities(selectedDestination.cities);
    }
  }, [selectedDestination]);

  const updateAccommodationItem = ({ id, updates }: UpdateAccommodationItemParams) => {
    const index = accommodationItems.findIndex((item) => item.id === id);
    let tempItems = [...accommodationItems];
    tempItems[index] = {
      ...tempItems[index],
      ...updates
    };
    setAccommodationItems(tempItems);
  };

  const handleLocationChange = (id: string, event: SelectChangeEvent) => {
    const city = cities.find((city) => city.name === event.target.value);
    updateAccommodationItem({
      id,
      updates: {
        location: event.target.value,
        hotels: city?.hotels || [],
        selectedHotelName: '',
        selectedRoomCategory: '',
        starRating: '',
        roomTypes: []
      }
    });
  };

  const handleHotelChange = (id: string, event: SelectChangeEvent) => {
    const hotelName = event.target.value;
    const starrating = getStarRatingByHotel(hotelName, id);
    const roomTypes = getRoomTypesByHotel(event.target.value, id);
    updateAccommodationItem({
      id,
      updates: {
        selectedHotelName: hotelName,
        starRating: starrating ? starrating.toString() : '',
        roomTypes
      }
    });
  };

  const handleRoomCategoryChange = (id: string, event: SelectChangeEvent) => {
    updateAccommodationItem({
      id,
      updates: {
        selectedRoomCategory: event.target.value
      }
    });
  };

  function getRoomTypesByHotel(hotelName: string, id: string): Room[] | undefined {
    const index = accommodationItems.findIndex((item) => item.id === id);
    const hotel = accommodationItems[index].hotels?.find((hotel) => hotel.name === hotelName);
    return hotel?.rooms;
  }

  const getStarRatingByHotel = (hotelName: string, id: string) => {
    const index = accommodationItems.findIndex((item) => item.id === id);
    const hotel = accommodationItems[index].hotels?.find((hotel) => hotel.name === hotelName);
    return hotel?.starRating;
  };

  const handleInputChange = (id: string, event: React.ChangeEvent<HTMLInputElement>) => {
    const value =
      event.target.name.includes('numberOfNights') || event.target.name.includes('extraBeds')
        ? event.target.valueAsNumber
        : event.target.value;
    updateAccommodationItem({
      id,
      updates: {
        [event.target.name]: value
      }
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleAccordionChange('panel5');
  };

  const handleRemoveItem = (id: string) => {
    let tempItems = [...accommodationItems];
    tempItems = tempItems.filter((item) => item.id !== id);
    setAccommodationItems(tempItems);
  };

  const handleAddItem = () => {
    let tempItems = [...accommodationItems];
    tempItems.push({
      id: uuid4(),
      location: '',
      hotels: [],
      roomTypes: [],
      selectedHotelName: '',
      starRating: '',
      selectedRoomCategory: '',
      numberOfNights: 0,
      extraBeds: 0,
      remarks: ''
    });
    setAccommodationItems(tempItems);
  };

  return (
    <Box sx={{ flexGrow: 1 }} display="flex" flexDirection="column">
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2} direction="row">
          {accommodationItems.map((item, index) => (
            <React.Fragment key={item.id}>
              <Grid item key={item.id}>
                <Paper elevation={5} sx={{ padding: 5, margin: '20px auto', width: 300 }}>
                  <Grid container spacing={2} direction="column" justifyContent="center" alignItems="center">
                    <Grid container direction="row" justifyContent="flex-end" alignItems="flex-start">
                      <Grid item sx={{ marginTop: '-10px' }}>
                        <IconButton aria-label="delete" key={item.id} onClick={() => handleRemoveItem(item.id)}>
                          <DeleteForeverRoundedIcon />
                        </IconButton>
                      </Grid>
                    </Grid>
                    <Grid>
                      <FormControl sx={{ m: 1, width: '100%' }}>
                        <InputLabel>Location</InputLabel>
                        <Select
                          key={`location-${item.id}-${index}`}
                          name="location"
                          value={item.location}
                          input={<OutlinedInput label="Location" />}
                          onChange={(event: any) => handleLocationChange(item.id, event)}
                          fullWidth
                          required
                        >
                          <MenuItem key={`location-none-${item.id}`} value="">
                            <em>None</em>
                          </MenuItem>
                          {cities.map((city, index) => (
                            <MenuItem key={city.id} value={city.name}>
                              {city.name}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                      <FormControl sx={{ m: 1, width: '100%' }}>
                        <InputLabel>Name of the hotel</InputLabel>
                        <Select
                          key={`hotelName-${item.id}-${index}`}
                          name="hotelName"
                          value={item.selectedHotelName}
                          input={<OutlinedInput label="Name of the hotel" />}
                          onChange={(event: any) => handleHotelChange(item.id, event)}
                          fullWidth
                          required
                        >
                          <MenuItem key={`hotelName-none-${item.id}`} value="">
                            <em>None</em>
                          </MenuItem>
                          {item.hotels &&
                            item.hotels.map((hotel, index) => (
                              <MenuItem key={hotel.id} value={hotel.name}>
                                {hotel.name}
                              </MenuItem>
                            ))}
                        </Select>
                      </FormControl>
                      <FormControl sx={{ m: 1, width: '100%' }}>
                        <TextField
                          key={`starRating-${item.id}-${index}`}
                          label="Start Rating"
                          name="starRating"
                          value={item.starRating}
                          onChange={(event: any) => handleInputChange(item.id, event)}
                          required
                          fullWidth
                          margin="normal"
                          variant="outlined"
                          type="number"
                        />
                      </FormControl>
                      <FormControl sx={{ m: 1, width: '100%' }}>
                        <InputLabel>Room Category</InputLabel>
                        <Select
                          key={`roomCategory-${item.id}-${index}`}
                          name="roomCategory"
                          value={item.selectedRoomCategory}
                          input={<OutlinedInput label="Room Category" />}
                          onChange={(event: any) => handleRoomCategoryChange(item.id, event)}
                          fullWidth
                          required
                        >
                          <MenuItem key={`room-none-${item.id}`} value="">
                            <em>None</em>
                          </MenuItem>
                          {item.roomTypes &&
                            item.roomTypes.map((room, index) => (
                              <MenuItem key={room.id} value={room.type}>
                                {room.type}
                              </MenuItem>
                            ))}
                        </Select>
                      </FormControl>
                      <FormControl sx={{ m: 1, width: '100%' }}>
                        <TextField
                          key={`numberOfNights-${item.id}-${index}`}
                          label="Number of nights"
                          name="numberOfNights"
                          onChange={(event: any) => handleInputChange(item.id, event)}
                          required
                          fullWidth
                          margin="normal"
                          variant="outlined"
                          type="number"
                        />
                      </FormControl>
                      <FormControl sx={{ m: 1, width: '100%' }}>
                        <TextField
                          key={`extraBeds-${item.id}-${index}`}
                          label="Extra Beds"
                          name="extraBeds"
                          onChange={(event: any) => handleInputChange(item.id, event)}
                          fullWidth
                          margin="normal"
                          variant="outlined"
                          type="number"
                        />
                      </FormControl>
                      <FormControl sx={{ m: 1, width: '100%' }}>
                        <TextField
                          key={`remarks-${item.id}-${index}`}
                          label="Remarks"
                          name="remarks"
                          onChange={(event: any) => handleInputChange(item.id, event)}
                          fullWidth
                          margin="normal"
                          variant="outlined"
                          multiline
                          rows={3}
                        />
                      </FormControl>
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>
            </React.Fragment>
          ))}
        </Grid>
        <Grid container direction="row" justifyContent="left" style={{ marginTop: '10px' }}>
          <Grid item xs={1}>
            <Button variant="contained" color="primary" onClick={handleAddItem}>
              Add Item
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};
