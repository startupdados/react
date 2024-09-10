import React, { useState } from 'react';
import { Card, CardContent, CardHeader, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, TableSortLabel, useTheme } from '@mui/material';

// Dados fictícios para a tabela
const lockSessionData = [
  { tempo: '2024-09-01 13:06:27', lockSession: 'Session1', username: 'user1', osuser: 'osuser1', sid: 123, serial: 456, acao: 'SELECT', seconds: 12 },
  { tempo: '2024-09-02 14:12:27', lockSession: 'Session2', username: 'user2', osuser: 'osuser2', sid: 789, serial: 101, acao: 'INSERT', seconds: 34 },
  { tempo: '2024-09-03 15:15:27', lockSession: 'Session3', username: 'user3', osuser: 'osuser3', sid: 234, serial: 567, acao: 'UPDATE', seconds: 29 }
];

const descendingComparator = (a, b, orderBy) => {
  if (orderBy === 'tempo') {
    return new Date(b[orderBy]) - new Date(a[orderBy]);
  }
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
};

const getComparator = (order, orderBy) => {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
};

const ActiveSessionsInSeconds = () => {
  const theme = useTheme();
  const [order, setOrder] = useState('asc');
  const [orderBy, setOrderBy] = useState('');

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
    const sortedData = lockSessionData.sort(getComparator(order, property));
    setOrder(isAsc ? 'desc' : 'asc');
  };

  const headCells = [
    { id: 'tempo', label: 'TEMPO', width: '12%' },
    { id: 'lockSession', label: 'LOCK_SESSION', width: '8%' },
    { id: 'username', label: 'USERNAME', width: '8%' },
    { id: 'osuser', label: 'OSUSER', width: '12%' },
    { id: 'sid', label: 'SID', width: '6%' },
    { id: 'serial', label: 'SERIAL', width: '6%' },
    { id: 'acao', label: 'AÇÃO', width: '40%' },
    { id: 'seconds', label: 'SECONDS', width: '12%' }
  ];

  return (
    <Card>
      <CardHeader
        title={
          <Typography variant="h4" component="div" align="center">
            Sessões Ativas em Segundos
          </Typography>
        }
      />
      <CardContent>
        <TableContainer>
          <Table stickyHeader>
            <TableHead>
              <TableRow>
                {headCells.map((headCell) => (
                  <TableCell
                    key={headCell.id}
                    align={headCell.id === 'acao' ? 'left' : 'center'}
                    sortDirection={orderBy === headCell.id ? order : false}
                    sx={{
                      backgroundColor: theme.palette.primary.main,
                      color: 'white',
                      width: headCell.width,
                      position: 'relative',
                    }}
                  >
                    <TableSortLabel
                      active={orderBy === headCell.id}
                      direction={orderBy === headCell.id ? order : 'asc'}
                      onClick={(e) => handleRequestSort(e, headCell.id)}
                      hideSortIcon={false}
                      sx={{
                        color: 'white',
                        position: 'relative',
                        zIndex: 1,
                        '&:hover': {
                          color: 'white',
                        },
                        '&.Mui-active': {
                          color: 'white',
                        },
                        '& .MuiTableSortLabel-icon': {
                          position: 'absolute',
                          right: '-25px',
                          zIndex: 2,
                          opacity: orderBy === headCell.id ? 1 : 0,
                          color: 'white !important',
                        },
                      }}
                    >
                      {headCell.label}
                    </TableSortLabel>
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {lockSessionData.map((session, index) => (
                <TableRow
                  key={index}
                  sx={{ backgroundColor: index % 2 === 0 ? 'white' : '#f5f5f5' }}
                >
                  <TableCell align="center">{session.tempo}</TableCell>
                  <TableCell align="center">{session.lockSession}</TableCell>
                  <TableCell align="center">{session.username}</TableCell>
                  <TableCell align="center">{session.osuser}</TableCell>
                  <TableCell align="center">{session.sid}</TableCell>
                  <TableCell align="center">{session.serial}</TableCell>
                  <TableCell align="left">{session.acao}</TableCell> {/* Alinhado à esquerda */}
                  <TableCell align="center">{session.seconds}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
    </Card>
  );
};

export default ActiveSessionsInSeconds;
