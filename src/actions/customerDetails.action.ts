import { ADD_CUSTOMER_DETAILS } from './actionTypes';
import { CustomerDetails } from '../reducers/customerDetails';
import { createAction } from '@reduxjs/toolkit';

const saveCustomerDetails = createAction<CustomerDetails>(ADD_CUSTOMER_DETAILS);
