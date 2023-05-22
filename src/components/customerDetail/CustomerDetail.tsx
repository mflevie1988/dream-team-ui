import { Button, Container, TextField, Typography } from '@mui/material';

import SendIcon from '@mui/icons-material/Send';
import { saveCustomerDetails } from '../../reducers/customerDetails';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

interface CustomerDetailsProp {
  handleChange: (panel: string) => void;
}

interface CustomerDetails {
  name: string;
  phone: string;
  email: string;
  address: string;
  numAdults: number;
  numKids: number;
}

const initialCustomerDetails: CustomerDetails = {
  name: '',
  phone: '',
  email: '',
  address: '',
  numAdults: 0,
  numKids: 0
};

const CustomerDetail = ({ handleChange }: CustomerDetailsProp) => {
  const dispatch = useDispatch();
  const [customerDetails, setCustomerDetails] = useState<CustomerDetails>(initialCustomerDetails);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCustomerDetails({ ...customerDetails, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(saveCustomerDetails(customerDetails));
    handleChange('panel2');
  };

  return (
    <Container maxWidth="md">
      <form onSubmit={handleSubmit}>
        <TextField
          label="Name"
          name="name"
          value={customerDetails.name}
          onChange={handleInputChange}
          required
          fullWidth
          margin="normal"
          variant="outlined"
          autoFocus
        />
        <TextField
          error={false}
          label="Phone"
          name="phone"
          value={customerDetails.phone}
          onChange={handleInputChange}
          required
          fullWidth
          margin="normal"
          variant="outlined"
          type="tel"
        />
        <TextField
          label="Email"
          name="email"
          value={customerDetails.email}
          onChange={handleInputChange}
          required
          fullWidth
          margin="normal"
          variant="outlined"
          type="email"
        />
        <TextField
          label="Address"
          name="address"
          value={customerDetails.address}
          onChange={handleInputChange}
          required
          fullWidth
          margin="normal"
          variant="outlined"
          multiline
          rows={4}
        />
        <TextField
          label="Number of Adults"
          name="numAdults"
          value={customerDetails.numAdults}
          onChange={handleInputChange}
          required
          fullWidth
          margin="normal"
          variant="outlined"
          type="number"
        />
        <TextField
          label="Number of Kids"
          name="numKids"
          value={customerDetails.numKids}
          onChange={handleInputChange}
          required
          fullWidth
          margin="normal"
          variant="outlined"
          type="number"
        />
        <Button type="submit" variant="contained" color="primary" endIcon={<SendIcon />}>
          Next
        </Button>
      </form>
    </Container>
  );
};

export default CustomerDetail;
