import React from 'react';
import ClientsList from './ClientsList';
import { Button, Grid ,Typography} from '@mui/material';
// Exemplo de dados dos clientes
const clients = [
  {
    initials: 'ABC',
    fullName: 'ABC Corp',
    qtdServidores: 15,
    dataRegistro: '01/01/2021',
    dataUltimaAtualizacao: '12/12/2023',
    status: 'ATIVADO',
  },
  {
    initials: 'XYZ',
    fullName: 'XYZ Industries',
    qtdServidores: 10,
    dataRegistro: '03/05/2020',
    dataUltimaAtualizacao: '01/09/2023',
    status: 'DESATIVADO',
  },{
    initials: 'ABC',
    fullName: 'ABC Corp',
    qtdServidores: 15,
    dataRegistro: '01/01/2021',
    dataUltimaAtualizacao: '12/12/2023',
    status: 'ATIVADO',
  },
  {
    initials: 'XYZ',
    fullName: 'XYZ Industries',
    qtdServidores: 10,
    dataRegistro: '03/05/2020',
    dataUltimaAtualizacao: '01/09/2023',
    status: 'DESATIVADO',
  },{
    initials: 'ABC',
    fullName: 'ABC Corp',
    qtdServidores: 15,
    dataRegistro: '01/01/2021',
    dataUltimaAtualizacao: '12/12/2023',
    status: 'ATIVADO',
  },
  {
    initials: 'XYZ',
    fullName: 'XYZ Industries',
    qtdServidores: 10,
    dataRegistro: '03/05/2020',
    dataUltimaAtualizacao: '01/09/2023',
    status: 'DESATIVADO',
  },{
    initials: 'ABC',
    fullName: 'ABC Corp',
    qtdServidores: 15,
    dataRegistro: '01/01/2021',
    dataUltimaAtualizacao: '12/12/2023',
    status: 'ATIVADO',
  },
  {
    initials: 'XYZ',
    fullName: 'XYZ Industries',
    qtdServidores: 10,
    dataRegistro: '03/05/2020',
    dataUltimaAtualizacao: '01/09/2023',
    status: 'DESATIVADO',
  },
];

const ClientsPage = () => {
  return (
    <div>
              <Typography variant="h1" sx={{ fontSize: '32px', fontWeight: 'bold', marginBottom: '20px' }}>
        Clientes
      </Typography>

      <ClientsList clients={clients} />
    </div>
  );
};

export default ClientsPage;
