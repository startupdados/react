import React from 'react';
import { Box, Typography, Modal, IconButton, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useTheme } from '@mui/material/styles';

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: 'background.paper',
  borderRadius: 2,
  boxShadow: 4,
  p: 4,
};

const ErrorModal = ({ open, onClose, selectedClient }) => {
  const theme = useTheme();
  const errorColors = {
    lock: theme.palette.error.main,
    standby: theme.palette.warning.dark,
  };

  return (
    <Modal open={open} onClose={onClose} aria-labelledby="modal-title" aria-describedby="modal-description">
      <Box sx={modalStyle}>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography
            id="modal-title"
            variant="h1"
            component="h2"
            sx={{ flexGrow: 1, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}
          >
            {selectedClient ? selectedClient.clientName : ''}
          </Typography>
          <IconButton onClick={onClose} sx={{ ml: 2 }}>
            <CloseIcon sx={{ color: 'primary.main', fontSize: 32 }} />
          </IconButton>
        </Box>

        {/* Lista de erros no modal */}
        <Box sx={{ mt: 2 }}>
          {selectedClient && selectedClient.errors.length > 0 ? (
            <List>
              {selectedClient.errors.map((error, index) => (
                <ListItem key={index}>
                  <ListItemIcon>
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: 48, // Aumentando o tamanho do círculo
                        height: 48,
                        borderRadius: '50%',
                        backgroundColor: errorColors[error.type],
                        color: 'white',
                        fontWeight: 'bold',
                        fontSize: 20, // Aumentando o tamanho do texto dentro do círculo
                      }}
                    >
                      {error.count}
                    </Box>
                  </ListItemIcon>
                  <ListItemText
                    primary={error.description}
                    primaryTypographyProps={{
                      sx: { fontSize: "1.5em ", paddingLeft: 2 }, // Aumenta o tamanho do texto e adiciona padding
                    }}
                  />
                </ListItem>
              ))}
            </List>
          ) : (
            <Typography sx={{ fontSize: '1.5em' }}>Nenhum erro encontrado.</Typography>
          )}
        </Box>
      </Box>
    </Modal>
  );
};

export default ErrorModal;
