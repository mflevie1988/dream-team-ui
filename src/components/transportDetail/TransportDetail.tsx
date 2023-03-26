import { Button, CircularProgress, Grid, TextField } from '@mui/material';
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
}

const TransportDetail = ({ handleChange }: TransportDetailProps) => {
  const dispatch = useDispatch();
  const numDays = useSelector((state: AppState) => state.tripDetails.numberOfDays);
  const [transportDetailItems, setTransportDetailItems] = useState<TransportDetail[]>([]);

  useEffect(() => {
    if (numDays !== 0) {
      const newTransportDetailItems = Array.from({ length: numDays }, () => ({
        description: '',
        price: 0,
        id: uuid4()
      }));
      setTransportDetailItems(newTransportDetailItems);
    }
  }, [numDays]);

  const handleAddItem = () => {
    let tempItems = [...transportDetailItems];
    tempItems.push({
      description: '',
      price: 0,
      id: uuid4()
    });
    setTransportDetailItems(tempItems);
  };

  const handleRemoveItem = (id: string) => {
    let tempItems = [...transportDetailItems];
    tempItems = tempItems.filter((item) => item.id !== id);
    setTransportDetailItems(tempItems);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(saveTransportDetails(transportDetailItems));
    handleChange('panel4');
  };

  const handleInputChange = (id: string, event: React.ChangeEvent<HTMLInputElement>) => {
    const index = transportDetailItems.findIndex((item) => item.id === id);
    let tempItems = [...transportDetailItems] as any;
    tempItems[index][event.target.name] = event.target.name.includes('description') ? event.target.value : event.target.valueAsNumber;

    setTransportDetailItems(tempItems);
  };

  if (numDays == 0 && transportDetailItems.length == 0) {
    return <CircularProgress color="secondary" />;
  }

  return (
    <form onSubmit={handleSubmit}>
      <Grid container direction="row" spacing={2} justifyContent="center" alignItems="center">
        {transportDetailItems.map((item, index) => (
          <React.Fragment key={item.id}>
            <Grid item xs={6}>
              <TextField
                id={item.id}
                name="description"
                label={`Description ${index + 1}`}
                fullWidth
                onChange={(e: any) => handleInputChange(item.id, e)}
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                name="price"
                label={`Price ${index + 1}`}
                fullWidth
                type="number"
                onChange={(e: any) => handleInputChange(item.id, e)}
              />
            </Grid>
            <Grid item xs={2}>
              <IconButton aria-label="delete" onClick={() => handleRemoveItem(item.id)} disabled={transportDetailItems.length == 1}>
                <DeleteForeverRoundedIcon />
              </IconButton>
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
  );
};

export default TransportDetail;
