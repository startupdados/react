import React from 'react';
import { Card, CardContent, CardHeader, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, useTheme } from '@mui/material';

// Dados fictícios para a tabela
const lockSessionData = [
  { tempo: '2024-09-01 13:06:27', lockSession: 'Session1', username: 'user1', osuser: 'osuser1', sid: 123, serial: 456, acao: 'SELECT', seconds: 12 },
  { tempo: '2024-09-02 14:12:27', lockSession: 'Session2', username: 'user2', osuser: 'osuser2', sid: 789, serial: 101, acao: 'INSERT', seconds: 34 },
  { tempo: '2024-09-03 15:15:27', lockSession: 'Session3', username: 'user3', osuser: 'osuser3', sid: 234, serial: 567, acao: 'UPDATE', seconds: 29 }
];

const ActiveSessionsInSeconds = () => {
  const theme = useTheme();

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
                <TableCell sx={{ width: '8em', bgcolor: theme.palette.grey[200], color: 'white', border: '1px solid rgba(224, 224, 224, 1)' }}>
                  <Typography variant="h6">TEMPO</Typography>
                </TableCell>
                <TableCell sx={{ width: '1em', bgcolor: theme.palette.grey[200], color: 'white', border: '1px solid rgba(224, 224, 224, 1)' }}>
                  <Typography variant="h6">LOCK_SESSION</Typography>
                </TableCell>
                <TableCell sx={{ width: '3em', bgcolor: theme.palette.grey[200], color: 'white', border: '1px solid rgba(224, 224, 224, 1)' }}>
                  <Typography variant="h6">USERNAME</Typography>
                </TableCell>
                <TableCell sx={{ width: '4em', bgcolor: theme.palette.grey[200], color: 'white', border: '1px solid rgba(224, 224, 224, 1)' }}>
                  <Typography variant="h6">OSUSER</Typography>
                </TableCell>
                <TableCell sx={{ width: '1em', bgcolor: theme.palette.grey[200], color: 'white', border: '1px solid rgba(224, 224, 224, 1)' }}>
                  <Typography variant="h6">SID</Typography>
                </TableCell>
                <TableCell sx={{ width: '1em', bgcolor: theme.palette.grey[200], color: 'white', border: '1px solid rgba(224, 224, 224, 1)' }}>
                  <Typography variant="h6">SERIAL</Typography>
                </TableCell>
                <TableCell sx={{ width: '40em', bgcolor: theme.palette.grey[200], color: 'white', border: '1px solid rgba(224, 224, 224, 1)' }}>
                  <Typography variant="h6">ACAO</Typography>
                </TableCell>
                <TableCell sx={{ width: '2em', bgcolor: theme.palette.grey[200], color: 'white', border: '1px solid rgba(224, 224, 224, 1)' }}>
                  <Typography variant="h6">SECONDS</Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {lockSessionData.map((session, index) => (
                <TableRow key={index}>
                  <TableCell sx={{ border: '1px solid rgba(224, 224, 224, 1)' }}>
                    <Typography>{session.tempo}</Typography>
                  </TableCell>
                  <TableCell sx={{ border: '1px solid rgba(224, 224, 224, 1)' }}>
                    <Typography>{session.lockSession}</Typography>
                  </TableCell>
                  <TableCell sx={{ border: '1px solid rgba(224, 224, 224, 1)' }}>
                    <Typography>{session.username}</Typography>
                  </TableCell>
                  <TableCell sx={{ border: '1px solid rgba(224, 224, 224, 1)' }}>
                    <Typography>{session.osuser}</Typography>
                  </TableCell>
                  <TableCell sx={{ border: '1px solid rgba(224, 224, 224, 1)' }}>
                    <Typography>{session.sid}</Typography>
                  </TableCell>
                  <TableCell sx={{ border: '1px solid rgba(224, 224, 224, 1)' }}>
                    <Typography>{session.serial}</Typography>
                  </TableCell>
                  <TableCell sx={{ border: '1px solid rgba(224, 224, 224, 1)' }}>
                    <Typography>{session.acao}</Typography>
                  </TableCell>
                  <TableCell sx={{ border: '1px solid rgba(224, 224, 224, 1)' }}>
                    <Typography>{session.seconds}</Typography>
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

export default ActiveSessionsInSeconds;
