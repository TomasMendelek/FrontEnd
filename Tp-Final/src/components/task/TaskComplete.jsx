import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography, List, ListItem, ListItemText } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function MyAccordion() {
  return (
    <Accordion sx={{ backgroundColor: '#f0f0f0', borderRadius: '8px', boxShadow: 'none', m:1 }}>
      <AccordionSummary
      sx={{border:"none"}}
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel-content"
        id="panel-header"
      >
        <Typography>Completadas</Typography>
      </AccordionSummary  >
      <AccordionDetails sx={{border:"none"}}>
        <List>
        </List>
      </AccordionDetails>
    </Accordion>
  );
}

export default MyAccordion;
