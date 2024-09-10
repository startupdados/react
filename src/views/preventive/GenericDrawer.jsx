import React from 'react';
import { Drawer, Box, Typography, TextField, Button } from '@mui/material';

const GenericDrawer = ({ open, onClose, data }) => {
  return (
    <Drawer anchor="right" open={open} onClose={onClose}>
      <Box sx={{ width: 400, p: 2 }}>
        <Typography variant="h6">Details</Typography>
        {data && (
          <>
            <TextField
              fullWidth
              label="Date"
              value={data.date || ''}
              margin="normal"
              variant="outlined"
              disabled
            />
            <TextField
              fullWidth
              label="Sigla"
              value={data.sigla || ''}
              margin="normal"
              variant="outlined"
              disabled
            />
            <TextField
              fullWidth
              label="Name"
              value={data.name || ''}
              margin="normal"
              variant="outlined"
              disabled
            />
            <TextField
              fullWidth
              label="Bank"
              value={data.bank || ''}
              margin="normal"
              variant="outlined"
              disabled
            />
            <TextField
              fullWidth
              label="Host Name"
              value={data.hostName || ''}
              margin="normal"
              variant="outlined"
              disabled
            />
            <TextField
              fullWidth
              label="Instance Number"
              value={data.instanceNumber || ''}
              margin="normal"
              variant="outlined"
              disabled
            />
            <Button variant="contained" color="primary" sx={{ mt: 2 }} onClick={onClose}>
              Close
            </Button>
          </>
        )}
      </Box>
    </Drawer>
  );
};

export default GenericDrawer;
    