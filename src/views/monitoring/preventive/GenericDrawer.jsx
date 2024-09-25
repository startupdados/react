import React from 'react';
import { Drawer, Box, Typography, Button } from '@mui/material';

const GenericDrawer = ({ open, onClose, data }) => {
  return (
    <Drawer anchor="right" open={open} onClose={onClose}>
      <Box sx={{ width: 400, p: 2 }}>
        <Typography variant="h6">Details</Typography>
        {data && (
          <>
            <pre>{JSON.stringify(data, null, 2)}</pre> {/* Exibe os dados da linha no formato JSON */}
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
