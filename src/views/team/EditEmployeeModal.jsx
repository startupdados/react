import React, { useState } from 'react';
import { Modal, Box, Typography, TextField, Button } from '@mui/material';

const EditEmployeeModal = ({ open, onClose, employee, onSave }) => {
  const [formData, setFormData] = useState(employee);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSave = () => {
    onSave(formData);
    onClose();
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 400,
          bgcolor: 'background.paper',
          boxShadow: 24,
          p: 4,
          borderRadius: '12px',
        }}
      >
        <Typography variant="h6" gutterBottom>
          Editar Funcionário
        </Typography>
        <TextField
          label="Nome"
          name="name"
          value={formData.name}
          onChange={handleChange}
          fullWidth
          sx={{ marginBottom: 2 }}
        />
        <TextField
          label="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          fullWidth
          sx={{ marginBottom: 2 }}
        />
        <TextField
          label="Telefone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          fullWidth
          sx={{ marginBottom: 2 }}
        />
        <Button variant="contained" color="primary" onClick={handleSave} fullWidth>
          Salvar
        </Button>
      </Box>
    </Modal>
  );
};

export default EditEmployeeModal;
