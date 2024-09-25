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
    DISCO: theme.palette.error.main,
    STANDBY: theme.palette.warning.dark,
    DISCO_INODE: theme.palette.error.dark,
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
            {selectedClient ? selectedClient.NOME_CLIENTE : ''}
          </Typography>
          <IconButton onClick={onClose} sx={{ ml: 2 }}>
            <CloseIcon sx={{ color: 'primary.main', fontSize: 32 }} />
          </IconButton>
        </Box>

        {/* Lista de erros no modal */}
        <Box sx={{ mt: 2 }}>
          {selectedClient && Object.keys(selectedClient.TIPO_ALERTA_ERROS).length > 0 ? (
            <List>
              {Object.entries(selectedClient.TIPO_ALERTA_ERROS).map(([tipo, count], index) => (
                <ListItem key={index}>
                  <ListItemIcon>
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: 48,
                        height: 48,
                        borderRadius: '50%',
                        backgroundColor: errorColors[tipo] || theme.palette.grey[500],
                        color: 'white',
                        fontWeight: 'bold',
                        fontSize: 20,
                      }}
                    >
                      {count}
                    </Box>
                  </ListItemIcon>
                  <ListItemText
                    primary={tipo}
                    primaryTypographyProps={{
                      sx: { fontSize: "1.5em", paddingLeft: 2 },
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
