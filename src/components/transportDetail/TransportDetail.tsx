import { Button, CircularProgress, Grid, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { AppState } from '../../interface';
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';
import IconButton from '@mui/material/IconButton';
import { saveTransportDetails } from '../../reducers/transportDetails';
import { v4 as uuid4 } from 'uuid';

interface TransportDetailProps {
  handleChange: (panel: string) => void;
}

export interface TransportDetail {
  id: string;
  description: string;
  price: number;
  defaultPricePerDay: number;
}
type TransportDetailKeys = keyof TransportDetail;

const TransportDetail = ({ handleChange }: TransportDetailProps) => {
  const dispatch = useDispatch();

  const { numberOfDays } = useSelector((state: AppState) => state.tripDetails);
  const [transportDetailItems, setTransportDetailItems] = useState<TransportDetail[]>([]);
  const [totalTransportAmount, setTotalTransportAmount] = useState<number>(0);

  const createNewTransportDetailItem = (): TransportDetail => ({
    description: '',
    price: 10,
    id: uuid4(),
    defaultPricePerDay: 10
  });

  useEffect(() => {
    if (numberOfDays !== 0) {
      const newTransportDetailItems: TransportDetail[] = Array.from({ length: numberOfDays }, () => createNewTransportDetailItem());
      setTransportDetailItems(newTransportDetailItems);
      const totalAmount = newTransportDetailItems.reduce(
        (sum, { defaultPricePerDay }: { defaultPricePerDay: number }) => sum + defaultPricePerDay,
        0
      );
      setTotalTransportAmount(totalAmount);
    }
  }, [numberOfDays]);

  useEffect(() => {
    const totalAmount = transportDetailItems.reduce((sum, { price }: { price?: number }) => {
      return typeof price === 'number' && !isNaN(price) ? sum + price : sum;
    }, 0);
    setTotalTransportAmount(totalAmount);
  }, [transportDetailItems]);

  const handleAddItem = () => {
    let tempItems = [...transportDetailItems];
    tempItems.push({
      description: '',
      price: 10,
      id: uuid4(),
      defaultPricePerDay: 10
    });
    setTransportDetailItems(tempItems);

    setTotalTransportAmount(totalTransportAmount + 10);
  };

  const handleRemoveItem = (id: string) => {
    let tempItems = [...transportDetailItems];
    const itemToRemove = tempItems.find((item) => item.id === id);
    tempItems = tempItems.filter((item) => item.id !== id);
    setTransportDetailItems(tempItems);
    if (itemToRemove) {
      setTotalTransportAmount(totalTransportAmount - itemToRemove.price);
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(saveTransportDetails(transportDetailItems));
    handleChange('panel4');
  };

  const calculateTotalTransportAmount = (transportDetailItems: TransportDetail[], index: number, value: number): number => {
    const prevTotalAmount = transportDetailItems.reduce((sum, { price }: { price?: number }) => {
      return typeof price === 'number' && !isNaN(price) ? sum + price : sum;
    }, 0);

    const currentPrice = !isNaN(transportDetailItems[index].price) ? transportDetailItems[index].price : 0;
    const newTotalAmount = prevTotalAmount - currentPrice + value;

    return newTotalAmount;
  };

  const handleInputChange = (id: string, event: React.ChangeEvent<HTMLInputElement>) => {
    const index = transportDetailItems.findIndex((item) => item.id === id);
    let key = event.target.name as TransportDetailKeys;
    let tempItems: TransportDetail[] = [...transportDetailItems];
    if (key === 'price' || key === 'defaultPricePerDay') {
      tempItems[index][key] = event.target.valueAsNumber as number;
    } else {
      tempItems[index][key] = event.target.value as string;
    }

    if (key === 'price') {
      const value = !isNaN(event.target.valueAsNumber) ? event.target.valueAsNumber : 0;
      const newTotalAmount = calculateTotalTransportAmount(tempItems, index, value);
      setTotalTransportAmount(newTotalAmount);
    }

    setTransportDetailItems(tempItems);
  };

  if (numberOfDays == 0 && transportDetailItems.length == 0) {
    return <CircularProgress color="secondary" />;
  }

  return (
    <form onSubmit={handleSubmit}>
      <Grid container direction="row" spacing={2} justifyContent="center" alignItems="center">
        {transportDetailItems.map((item, index) => (
          <React.Fragment key={item.id}>
            <Grid key={`grid-description-${item.id}`} item xs={6}>
              <TextField
                key={`description-${item.id}`}
                id={item.id}
                name="description"
                label={`Description ${index + 1}`}
                fullWidth
                onChange={(e: any) => handleInputChange(item.id, e)}
              />
            </Grid>
            <Grid key={`grid-price-${item.id}`} item xs={4}>
              <TextField
                key={`price-${item.id}`}
                name="price"
                label={`Price ${index + 1}`}
                defaultValue={item.defaultPricePerDay}
                fullWidth
                type="number"
                onChange={(e: any) => handleInputChange(item.id, e)}
              />
            </Grid>
            <Grid key={`grid-delete-button-${item.id}`} item xs={2}>
              <IconButton
                key={`delete-button-${item.id}`}
                aria-label="delete"
                onClick={() => handleRemoveItem(item.id)}
                disabled={transportDetailItems.length == 1}
              >
                <DeleteForeverRoundedIcon />
              </IconButton>
            </Grid>
          </React.Fragment>
        ))}
      </Grid>
      <Grid container spacing={2} direction="row" justifyContent="center" alignItems="center" marginY={5}>
        <Grid item>
          <Typography variant="h6">Total amount for transport:</Typography>
        </Grid>
        <Grid item>
          <Typography variant="h6">{totalTransportAmount}</Typography>
        </Grid>
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
  );
};

export default TransportDetail;
