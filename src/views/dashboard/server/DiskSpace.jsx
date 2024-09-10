import React, { useState } from 'react';
import { Card, CardContent, CardHeader, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, TableSortLabel, useTheme, Box } from '@mui/material';

// Dados fictícios para a tabela
const initialDiskData = [
    { filesystem: '/dev/mapper/VGExaDbVGExaVGExaDbVGExaDbVGExaDbVGExaDbDbVGExaDbVGExaDb-LVDbSys1', diskSize: '25 GB', diskSizeUsed: '17 GB', percentUsed: 75 },
    { filesystem: '/dev/xvdb', diskSize: '49 GB', diskSizeUsed: '33 GB', percentUsed: 72 },
    { filesystem: '//192.168.1.22/ArquivosBI', diskSize: '350 GB', diskSizeUsed: '238 GB', percentUsed: 69 },
    { filesystem: '/dev/mapper/VGExaDb-LVDbOra1', diskSize: '20 GB', diskSizeUsed: '12 GB', percentUsed: 67 },
    { filesystem: '/dev/xvdf', diskSize: '49 GB', diskSizeUsed: '19 GB', percentUsed: 41 },
];

// Função para comparar valores
const descendingComparator = (a, b, orderBy) => {
    if (orderBy === 'percentUsed') {
        return b[orderBy] - a[orderBy];
    }
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
};

// Função para definir o comparador com base na ordem
const getComparator = (order, orderBy) => {
    return order === 'desc'
        ? (a, b) => descendingComparator(a, b, orderBy)
        : (a, b) => -descendingComparator(a, b, orderBy);
};

const DiskSpaceGroup = ({ title }) => {
    const theme = useTheme();
    const [diskData, setDiskData] = useState(initialDiskData);
    const [order, setOrder] = useState('asc');
    const [orderBy, setOrderBy] = useState('');

    // Função para manipular a ordenação
    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
        const sortedData = diskData.sort(getComparator(order, property));
        setDiskData([...sortedData]);
    };

    const headCells = [
        { id: 'filesystem', label: 'FILESYSTEM' },
        { id: 'diskSize', label: 'DISK SIZE' },
        { id: 'diskSizeUsed', label: 'DISK SIZE USED' },
        { id: 'percentUsed', label: 'PERCENT USED' }
    ];

    // Função para determinar a cor da barra com base na porcentagem de uso
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
                title={<Typography variant="h4" component="div" align="center">{title} Disk Space</Typography>}
            />
            <CardContent>
                <TableContainer>
                    <Table stickyHeader>
                        <TableHead>
                            <TableRow>
                                {headCells.map((headCell) => (
                                    <TableCell
                                        key={headCell.id}
                                        align="center"
                                        sortDirection={orderBy === headCell.id ? order : false}
                                        sx={{ backgroundColor: theme.palette.primary.main, color: 'white', maxWidth: '1px', whiteSpace: 'nowrap' }} // Cabeçalho com primary.main e texto branco, maxWidth para forçar o limite de largura
                                    >
                                        <TableSortLabel
                                            active={orderBy === headCell.id}
                                            direction={orderBy === headCell.id ? order : 'asc'}
                                            onClick={(e) => handleRequestSort(e, headCell.id)}
                                            hideSortIcon={!orderBy} // Esconde o ícone quando não está ativo
                                            sx={{
                                                color: 'white',
                                                '&:hover': {
                                                    color: 'white', // Mantém o texto branco no hover
                                                },
                                                '&.Mui-active': {
                                                    color: 'white', // Mantém o texto branco ao ser selecionado
                                                },
                                                '& .MuiTableSortLabel-icon': {
                                                    position: 'absolute',
                                                    right: '-25px', // Ajusta a posição para ficar ao lado do texto
                                                    zIndex: 2,
                                                    opacity: orderBy === headCell.id ? 1 : 0,
                                                    color: 'white !important' // Mantém o ícone de ordenação branco
                                                }
                                            }}
                                        >
                                            {headCell.label}
                                        </TableSortLabel>
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {diskData.map((disk, index) => (
                                <TableRow
                                    key={index}
                                    sx={{ backgroundColor: index % 2 === 0 ? 'white' : '#f5f5f5' }} // Linhas alternadas (par: branco, ímpar: cinza claro)
                                >
                                    <TableCell align="center" sx={{ 
                                        maxWidth: '200px', 
                                        whiteSpace: 'nowrap', 
                                        overflow: 'hidden', 
                                        textOverflow: 'ellipsis', // Trunca o texto e adiciona "..."
                                        wordWrap: 'break-word',
                                    }}>
                                        {disk.filesystem}
                                    </TableCell>
                                    <TableCell align="center">
                                        {disk.diskSize}
                                    </TableCell>
                                    <TableCell align="center">
                                        {disk.diskSizeUsed}
                                    </TableCell>
                                    <TableCell align="center">
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

export default DiskSpaceGroup;
