import React from 'react';
import { Button, Grid ,Typography} from '@mui/material';
import EmployeeTable from './EmployeeTable';

const TeamPage = () => {
  const isAdmin = true; // Verificação do status de admin
  const employees = [
    {
      id: 1,
      name: 'João da Silva',
      email: 'joao.silva@email.com',
      phone: '(11) 98765-4321',
      birthday: '15/05/1990',
      role: 'DBA',
      photo: 'https://randomuser.me/api/portraits/men/1.jpg',
    },
    {
      id: 2,
      name: 'Maria Oliveira',
      email: 'maria.oliveira@email.com',
      phone: '(21) 98765-4321',
      birthday: '22/09/1988',
      role: 'Developer',
      photo: 'https://randomuser.me/api/portraits/women/1.jpg',
    },
    {
      id: 3,
      name: 'Carlos Pereira',
      email: 'carlos.pereira@email.com',
      phone: '(31) 98765-4321',
      birthday: '01/01/1980',
      role: 'Manager',
      photo: 'https://randomuser.me/api/portraits/men/2.jpg',
    },
  ];

  return (
    <div>
              <Typography variant="h1" sx={{ fontSize: '32px', fontWeight: 'bold', marginBottom: '20px' }}>
        Equipe
      </Typography>

      <EmployeeTable employees={employees} isAdmin={isAdmin} />

    </div>
  );
};

export default TeamPage;
