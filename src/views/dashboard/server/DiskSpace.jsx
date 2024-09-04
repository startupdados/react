import React from 'react';
import { Card, CardContent, CardHeader, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, Box, useTheme } from '@mui/material';

// Dados fictícios para a tabela
const diskData = [
    { filesystem: '/dev/mapper/VGExaDbVGExaVGExaDbVGExaDbVGExaDbVGExaDbDbVGExaDbVGExaDb-LVDbSys1', diskSize: '25 GB', diskSizeUsed: '17 GB', percentUsed: 75 },
    { filesystem: '/dev/xvdb', diskSize: '49 GB', diskSizeUsed: '33 GB', percentUsed: 72 },
    { filesystem: '//192.168.1.22/ArquivosBI', diskSize: '350 GB', diskSizeUsed: '238 GB', percentUsed: 69 },
    { filesystem: '/dev/mapper/VGExaDb-LVDbOra1', diskSize: '20 GB', diskSizeUsed: '12 GB', percentUsed: 67 },
    { filesystem: '/dev/xvdf', diskSize: '49 GB', diskSizeUsed: '19 GB', percentUsed: 41 },
];

const DiskSpace = ({ title }) => {
    const theme = useTheme();

    // Função para determinar a cor de fundo gradiente para a barra de uso do disco
    const getGradient = (percent) => {
        if (percent <= 30) {
            return `linear-gradient(90deg, ${theme.palette.success.main} 0%, ${theme.palette.success.light} 100%)`;
        } else if (percent <= 70) {
            return `linear-gradient(90deg, ${theme.palette.warning.main} 0%, ${theme.palette.warning.light} 100%)`;
        } else {
            return `linear-gradient(90deg, ${theme.palette.error.main} 0%, ${theme.palette.error.light} 100%)`;
        }
    };

    return (
        <Card>
            <CardHeader
                title={
                    <Typography variant="h4" component="div" align="center">
                        {title} Espaço em Disco
                    </Typography>
                }
            />
            <CardContent>
                <TableContainer sx={{ maxHeight: 400, overflowX: 'auto' }}>
                    <Table stickyHeader>
                        <TableHead>
                            <TableRow>
                                <TableCell sx={{ bgcolor: theme.palette.grey[200], color: 'white', borderTop: '1px solid rgba(224, 224, 224, 1)', borderRight: '1px solid rgba(224, 224, 224, 1)', borderLeft: '1px solid rgba(224, 224, 224, 1)', width: '25em' }}>
                                    <Typography variant="h6">FILESYSTEM</Typography>
                                </TableCell>
                                <TableCell sx={{ bgcolor: theme.palette.grey[200], color: 'white', borderTop: '1px solid rgba(224, 224, 224, 1)', borderRight: '1px solid rgba(224, 224, 224, 1)', borderLeft: '1px solid rgba(224, 224, 224, 1)', width: '8em' }}>
                                    <Typography variant="h6">DISK SIZE</Typography>
                                </TableCell>
                                <TableCell sx={{ bgcolor: theme.palette.grey[200], color: theme.palette.grey[600], borderTop: '1px solid rgba(224, 224, 224, 1)', borderRight: '1px solid rgba(224, 224, 224, 1)', borderLeft: '1px solid rgba(224, 224, 224, 1)', width: '8em' }}>
                                    <Typography variant="h6">DISK SIZE USED</Typography>
                                </TableCell>
                                <TableCell sx={{ bgcolor: theme.palette.grey[200], color: 'white', borderTop: '1px solid rgba(224, 224, 224, 1)', borderRight: '1px solid rgba(224, 224, 224, 1)', borderLeft: '1px solid rgba(224, 224, 224, 1)' }}>
                                    <Typography variant="h6">PERCENT USED</Typography>
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {diskData.map((disk, index) => (
                                <TableRow key={index}>
                                    <TableCell sx={{ width: '25em', whiteSpace: 'normal', wordBreak: 'break-all', borderTop: '1px solid rgba(224, 224, 224, 1)', borderRight: '1px solid rgba(224, 224, 224, 1)', borderLeft: '1px solid rgba(224, 224, 224, 1)' }}>
                                        <Typography>{disk.filesystem}</Typography>
                                    </TableCell>
                                    <TableCell sx={{ width: '8em', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', borderTop: '1px solid rgba(224, 224, 224, 1)', borderRight: '1px solid rgba(224, 224, 224, 1)', borderLeft: '1px solid rgba(224, 224, 224, 1)' }}>
                                        <Typography noWrap>{disk.diskSize}</Typography>
                                    </TableCell>
                                    <TableCell sx={{ width: '8em', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', borderTop: '1px solid rgba(224, 224, 224, 1)', borderRight: '1px solid rgba(224, 224, 224, 1)', borderLeft: '1px solid rgba(224, 224, 224, 1)' }}>
                                        <Typography noWrap>{disk.diskSizeUsed}</Typography>
                                    </TableCell>
                                    <TableCell sx={{ borderTop: '1px solid rgba(224, 224, 224, 1)', borderRight: '1px solid rgba(224, 224, 224, 1)', borderLeft: '1px solid rgba(224, 224, 224, 1)' }}>
                                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                            <Box
                                                sx={{
                                                    flexGrow: 1,
                                                    height: '20px',
                                                    backgroundColor: theme.palette.grey[200],
                                                    borderRadius: '5px',
                                                    overflow: 'hidden',
                                                    position: 'relative',
                                                    mr: 1,
                                                }}
                                            >
                                                <Box
                                                    sx={{
                                                        width: `${disk.percentUsed}%`,
                                                        height: '100%',
                                                        background: getGradient(disk.percentUsed),
                                                    }}
                                                />
                                            </Box>
                                            <Typography variant="body1" sx={{ fontWeight: 'bold' }}>{disk.percentUsed}%</Typography>
                                        </Box>
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

export default DiskSpace;
