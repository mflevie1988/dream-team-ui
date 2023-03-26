import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import React, { useEffect } from 'react';

import CustomerDetail from '../customerDetail/CustomerDetail';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import TransportDetail from '../transportDetail/TransportDetail';
import TripDetail from '../tripDetail/TripDetail';

const GeneralInfo = () => {
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange = (panel: string) => {
    setExpanded(expanded !== panel ? panel : false);
  };

  useEffect(() => {
    setExpanded('panel1');
  }, []);

  return (
    <div>
      <Accordion expanded={expanded === 'panel1'} onChange={() => handleChange('panel1')}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1bh-content" id="panel1bh-header">
          <Typography sx={{ width: '33%', flexShrink: 0 }}>Customer Details</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <CustomerDetail handleChange={handleChange} />
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={() => handleChange('panel2')}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2bh-content" id="panel2bh-header">
          <Typography sx={{ width: '33%', flexShrink: 0 }}>Travel dates of the trip</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <TripDetail handleChange={handleChange} />
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={() => handleChange('panel3')}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel3bh-content" id="panel3bh-header">
          <Typography sx={{ width: '33%', flexShrink: 0 }}>Transport details</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <TransportDetail handleChange={handleChange} />
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel4'} onChange={() => handleChange('panel4')}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel4bh-content" id="panel4bh-header">
          <Typography sx={{ width: '33%', flexShrink: 0 }}>Accommodation</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <TransportDetail handleChange={handleChange} />
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default GeneralInfo;
