import { Accordion, AccordionDetails, AccordionSummary, Box, CircularProgress, Stack, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { Accommodation } from '../accommodation/Accommodation';
import { AppState } from '../../interface';
import CustomerDetail from '../customerDetail/CustomerDetail';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import TransportDetail from '../transportDetail/TransportDetail';
import TripDetail from '../tripDetail/TripDetail';
import { useSelector } from 'react-redux';

const GeneralInfo = () => {
  const { destination } = useParams();
  const [expanded, setExpanded] = React.useState<string | false>(false);
  const { isLoading, selectedDestination } = useSelector((state: AppState) => state.destination);

  const handleChange = (panel: string) => {
    setExpanded(expanded !== panel ? panel : false);
  };

  useEffect(() => {
    setExpanded('panel1');
  }, []);

  if (isLoading) {
    return (
      <Stack justifyContent="center" sx={{ color: 'grey.500', margin: 'auto' }} spacing={2} direction="row">
        <CircularProgress size={100} color="success" />
      </Stack>
    );
  }
  return (
    <div>
      <Accordion expanded={expanded === 'panel1'} onChange={() => handleChange('panel1')} style={{ background: '#f9f9f9' }}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1bh-content" id="panel1bh-header">
          <Typography variant="h5" sx={{ width: '33%', flexShrink: 0 }}>
            Customer Details
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <CustomerDetail handleChange={handleChange} />
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={() => handleChange('panel2')} style={{ background: '#f9f9f9' }}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2bh-content" id="panel2bh-header">
          <Typography variant="h5" sx={{ width: '33%', flexShrink: 0 }}>
            Travel dates of the trip to{' '}
            {selectedDestination?.countryName
              ? selectedDestination?.countryName
              : destination && destination?.charAt(0).toUpperCase() + destination?.slice(1)}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <TripDetail handleChange={handleChange} />
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={() => handleChange('panel3')} style={{ background: '#f9f9f9' }}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel3bh-content" id="panel3bh-header">
          <Typography variant="h5" sx={{ width: '33%', flexShrink: 0 }}>
            Transport details
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <TransportDetail handleChange={handleChange} />
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel4'} onChange={() => handleChange('panel4')} style={{ background: '#f9f9f9' }}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel4bh-content" id="panel4bh-header">
          <Typography variant="h5" sx={{ width: '33%', flexShrink: 0 }}>
            Accommodation
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Accommodation handleAccordionChange={handleChange} />
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default GeneralInfo;
