import { Button, Container, Stack, TextField, TextFieldProps, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import dayjs, { Dayjs } from 'dayjs';
import { useNavigate, useParams } from 'react-router-dom';

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers';
import SendIcon from '@mui/icons-material/Send';
import { saveTripDetails } from '../../reducers/tripDetails';
import { useDispatch } from 'react-redux';

interface TripDetailProps {
  handleChange: (panel: string) => void;
}

export interface TripDetails {
  numberOfDays: number;
  startDate: Dayjs | null;
  endDate: Dayjs | null;
}

const initialTripDetails: TripDetails = {
  numberOfDays: 0,
  startDate: null,
  endDate: null
};

const TripDetail = ({ handleChange }: TripDetailProps) => {
  const { destination } = useParams();
  const dispatch = useDispatch();
  const [tripDetails, setTripDetails] = useState<TripDetails>(initialTripDetails);
  const [endDateError, setEndDateError] = useState<string | null>('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setTripDetails({ ...tripDetails, [name]: Number(value) });
  };

  const handleStartDateChange = (date: Dayjs | null) => {
    setTripDetails({ ...tripDetails, startDate: date });
  };

  const handleEndDateChange = (date: Dayjs | null) => {
    if (date && tripDetails.startDate) {
      const numDays = tripDetails.numberOfDays - 1;
      const maxEndDate = tripDetails.startDate.add(numDays, 'day');
      if (date.isBefore(tripDetails.startDate) || date.isAfter(maxEndDate)) {
        setEndDateError('Invalid date');
      } else {
        setEndDateError(null);
      }
    }
    setTripDetails({ ...tripDetails, endDate: date });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    dispatch(saveTripDetails(tripDetails));
    setTripDetails(initialTripDetails);
    handleChange('panel3');
  };

  useEffect(() => {
    if (tripDetails.numberOfDays && tripDetails.startDate) {
      const endDate = dayjs(tripDetails.startDate).add(tripDetails.numberOfDays - 1, 'day');
      setTripDetails({ ...tripDetails, endDate });
    }
  }, [tripDetails.numberOfDays, tripDetails.startDate]);

  return (
    <Container maxWidth="md">
      <Typography variant="h4" component="h1" align="center" gutterBottom>
        Travel dates to {destination}
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Number of days"
          name="numberOfDays"
          value={tripDetails.numberOfDays}
          onChange={handleInputChange}
          required
          fullWidth
          margin="normal"
          variant="outlined"
          type="number"
          autoFocus
        />
        <div style={{ marginTop: '5px', marginBottom: '5px' }}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Stack direction="row" spacing={2}>
              <DatePicker format="DD/MM/YYYY" label="Start Date" value={tripDetails.startDate} onChange={handleStartDateChange} />
              <DatePicker format="DD/MM/YYYY" label="End Date" value={tripDetails.endDate} onChange={handleEndDateChange} />
              {endDateError && (
                <Typography variant="caption" color="error">
                  {endDateError}
                </Typography>
              )}
            </Stack>
          </LocalizationProvider>
        </div>
        <Button type="submit" variant="contained" color="primary" endIcon={<SendIcon />}>
          Next
        </Button>
      </form>
    </Container>
  );
};

export default TripDetail;
