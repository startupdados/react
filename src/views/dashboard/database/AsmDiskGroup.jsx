import React from 'react';
import { Card, CardContent, CardHeader, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, useTheme } from '@mui/material';

// Dados fictícios para a tabela
const asmDiskData = [
  { dataColeta: '2024-09-01 13:06:27', grupo: 'DATA', state: 'MOUNTED', type: 'EXTERNAL', espacoLivre: 100, offlineDisks: 0 },
  { dataColeta: '2024-09-02 13:06:27', grupo: 'FRA', state: 'DISMOUNTED', type: 'EXTERNAL', espacoLivre: 50, offlineDisks: 2 },
  { dataColeta: '2024-09-03 13:06:27', grupo: 'OCR', state: 'MOUNTED', type: 'NORMAL', espacoLivre: 80, offlineDisks: 1 }
];

const AsmDiskGroup = ({ title }) => {
  const theme = useTheme();

  return (
    <Card>
      <CardHeader
        title={
          <Typography variant="h4" component="div" align="center">
            {title} ASM DiskGroup
          </Typography>
        }
      />
      <CardContent>
        <TableContainer >
          <Table stickyHeader>
            <TableHead>
              <TableRow>
                <TableCell sx={{  width: '12em', bgcolor: theme.palette.grey[200], color: 'white', border: '1px solid rgba(224, 224, 224, 1)' }}>
                  <Typography variant="h6">DATA COLETA</Typography>
                </TableCell>
                <TableCell sx={{width: '1em', bgcolor: theme.palette.grey[200], color: 'white', border: '1px solid rgba(224, 224, 224, 1)' }}>
                  <Typography variant="h6">GRUPO</Typography>
                </TableCell>
                <TableCell sx={{width: '2em', bgcolor: theme.palette.grey[200], color: 'white', border: '1px solid rgba(224, 224, 224, 1)' }}>
                  <Typography variant="h6">STATE</Typography>
                </TableCell>
                <TableCell sx={{width: '1em', bgcolor: theme.palette.grey[200], color: 'white', border: '1px solid rgba(224, 224, 224, 1)' }}>
                  <Typography variant="h6">TYPE</Typography>
                </TableCell>
                <TableCell sx={{width: '7em', bgcolor: theme.palette.grey[200], color: 'white', border: '1px solid rgba(224, 224, 224, 1)' }}>
                  <Typography variant="h6">ESPAÇO LIVRE (GB)</Typography>
                </TableCell>
                <TableCell sx={{width: '5em', bgcolor: theme.palette.grey[200], color: 'white', border: '1px solid rgba(224, 224, 224, 1)' }}>
                  <Typography variant="h6">OFFLINE DISKS</Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {asmDiskData.map((disk, index) => (
                <TableRow key={index}>
                  <TableCell sx={{ border: '1px solid rgba(224, 224, 224, 1)' }}>
                    <Typography>{disk.dataColeta}</Typography>
                  </TableCell>
                  <TableCell sx={{ border: '1px solid rgba(224, 224, 224, 1)' }}>
                    <Typography>{disk.grupo}</Typography>
                  </TableCell>
                  <TableCell sx={{ border: '1px solid rgba(224, 224, 224, 1)' }}>
                    <Typography>{disk.state}</Typography>
                  </TableCell>
                  <TableCell sx={{ border: '1px solid rgba(224, 224, 224, 1)' }}>
                    <Typography>{disk.type}</Typography>
                  </TableCell>
                  <TableCell sx={{ border: '1px solid rgba(224, 224, 224, 1)' }}>
                    <Typography>{disk.espacoLivre} GB</Typography>
                  </TableCell>
                  <TableCell sx={{ border: '1px solid rgba(224, 224, 224, 1)' }}>
                    <Typography>{disk.offlineDisks}</Typography>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
    </Card>
  );
};

export default AsmDiskGroup;
